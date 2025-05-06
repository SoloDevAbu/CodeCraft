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
        const latestActionEnd = this.currentArtifact.split("\n").findIndex((line) => line.includes("</boltAction>")) ?? (this.currentArtifact.split("\n").length - 1);

        if(latestActionStart === -1) {
            return;
        }

        const actionLine = this.currentArtifact.split("\n")[latestActionStart];
        if (!actionLine || !actionLine.includes("type=")) {
            return;
        }
        const typePart = actionLine.split("type=")[1]?.split(" ")[0]?.split(">")[0];
        if (!typePart) {
            return;
        }
        const latestActionType = typePart;
        const latestActionContent = this.currentArtifact.split("\n").slice(latestActionStart, latestActionEnd + 1).join("\n");

        try {
            if(latestActionType === "\"shell\"") {
                let shellCommand = latestActionContent.split("\n").slice(1).join('\n');

                if(shellCommand.includes("</boltAction>")) {
                    shellCommand = shellCommand.split("</boltAction>")[0] ?? "";
                    this.currentArtifact = this.currentArtifact.split(latestActionContent)[1] ?? "";
                    this.onShellCommand(shellCommand);
                }
            } else if (latestActionType === "\"file\"") {
                const filePathPart = this.currentArtifact.split("\n")[latestActionStart]?.split("filePath=")[1];
                const filePath = filePathPart?.split(">")[0];
                if (!filePath) {
                    throw new Error("Invalid filePath format in the artifact.");
                }
                let fileContent = latestActionContent.split("\n").slice(1).join("\n");
                if (fileContent.includes("</boltAction>")) {
                    fileContent = fileContent.split("</boltAction>")[0] ?? "";
                    this.currentArtifact = this.currentArtifact.split(latestActionContent)[1] ?? "";
                    const resolvedFilePath = filePath.split("\"")[1] ?? (() => { throw new Error("Invalid filePath format in the artifact."); })();
                    this.onFileContent(resolvedFilePath, fileContent);
                }
               }
            } catch(e) {

            }
    }
}