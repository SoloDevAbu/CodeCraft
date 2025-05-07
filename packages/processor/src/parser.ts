export class ArtifactProcessor {
    public currentArtifact: string;
    private onFileContent: (filePath: string, fileContent: string) => void;
    private onShellCommand: (shellCommand: string) => void;

    constructor(currentArtifact: string, onFileContent: (filePath: string, fileContent: string) => void, onShellCommand: (shellCommand: string) => void) {
        this.currentArtifact = currentArtifact;
        this.onFileContent = onFileContent;
        this.onShellCommand = onShellCommand;
    }

    append(artifact: string) {
        this.currentArtifact += artifact;
    }
    parse() {
        const latestActionStart = this.currentArtifact.split("\n").findIndex((line) => line.includes("<boltAction type="));
        const latestActionEnd = this.currentArtifact.split("\n").findIndex((line) => line.includes("</boltAction>"));

        if (latestActionStart === -1 || latestActionEnd === -1) {
            return;
        }

        const actionLines = this.currentArtifact.split("\n");
        const actionLine = actionLines[latestActionStart];
        
        if (!actionLine?.includes("type=")) {
            return;
        }

        const typePart = actionLine.split("type=")[1]?.split(" ")[0]?.split(">")[0]?.replace(/"/g, '');
        if (!typePart) {
            return;
        }
        try {
            if (typePart === "shell") {
                const contentLines = actionLines
                    .slice(latestActionStart + 1, latestActionEnd)
                    .filter(line => line.trim());
                
                const shellCommand = contentLines.join(' ').trim();
                this.onShellCommand(shellCommand);
                
            } else if (typePart === "file") {
                const filePathMatch = actionLine.match(/filePath="([^"]+)"/);
                if (!filePathMatch) {
                    throw new Error("Invalid filePath format");
                }
                
                const filePath = filePathMatch[1];
                let contentLines = actionLines
                    .slice(latestActionStart + 1, latestActionEnd)
                    .map(line => line.replace(/\r/g, ''));

                const minIndent = contentLines
                .filter(line => line.trim().length > 0)
                .reduce((min, line) => {
                    const match = line.match(/^\s*/);
                    const indent = match ? match[0].length : 0;
                    return Math.min(min, indent);
                }, Infinity);
                
                contentLines = contentLines
                    .map(line => line.slice(minIndent).trimRight())
                    .filter(line => line.length > 0);

                const fileContent = contentLines.join('\n');
                if (filePath) {
                    this.onFileContent(filePath, fileContent);
                } else {
                    throw new Error("filePath is undefined.");
                }
            }
            this.currentArtifact = actionLines
                .slice(latestActionEnd + 1)
                .join('\n');

        } catch (e) {
            console.error('Error parsing artifact:', e);
        }
    }
}