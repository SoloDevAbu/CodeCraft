import { ArtifactProcessor } from "../parser";
import { onFileUpdate, onShellCommand } from "../os";
import * as fs from "fs/promises";
import { execSync } from "child_process";

// Mock fs and child_process
jest.mock("fs/promises");
jest.mock("child_process");

describe("ArtifactProcessor", () => {
  let mockOnFileContent: jest.Mock;
  let mockOnShellCommand: jest.Mock;
  let processor: ArtifactProcessor;

  beforeEach(() => {
    mockOnFileContent = jest.fn();
    mockOnShellCommand = jest.fn();
    processor = new ArtifactProcessor(
      "",
      mockOnFileContent,
      mockOnShellCommand
    );
  });

  it("should process file action correctly", () => {
    const artifact = `<boltAction type="file" filePath="jest.config.js">
        module.exports = {
          preset: 'ts-jest',
          testEnvironment: 'node',
          modulePathIgnorePatterns: ["<rootDir>/dist/"]
        };
      </boltAction>`;

    processor.append(artifact);
    processor.parse();

    expect(mockOnFileContent).toHaveBeenCalledWith(
      "jest.config.js",
      "module.exports = {\n  preset: 'ts-jest',\n  testEnvironment: 'node',\n  modulePathIgnorePatterns: [\"<rootDir>/dist/\"]\n};"
    );
  });

  it("should process shell action correctly", () => {
    const artifact = `<boltAction type="shell">
npm run dev
</boltAction>`;

    processor.append(artifact);
    processor.parse();

    expect(mockOnShellCommand).toHaveBeenCalledWith("npm run dev");
  });

  it("should handle multiple actions sequentially", () => {
    const artifact1 = `<boltAction type="file" filePath="/test/first.js">
first content
</boltAction>`;
    const artifact2 = `<boltAction type="shell">
echo "test"
</boltAction>`;

    processor.append(artifact1);
    processor.parse();
    processor.append(artifact2);
    processor.parse();

    expect(mockOnFileContent).toHaveBeenCalledWith(
      "/test/first.js",
      "first content"
    );
    expect(mockOnShellCommand).toHaveBeenCalledWith('echo "test"');
  });

  it("should ignore invalid actions", () => {
    const invalidArtifact = `<boltAction type="invalid">
some content
</boltAction>`;

    processor.append(invalidArtifact);
    processor.parse();

    expect(mockOnFileContent).not.toHaveBeenCalled();
    expect(mockOnShellCommand).not.toHaveBeenCalled();
  });
});

describe("OS Operations", () => {
  beforeEach(() => {
    // Clear all mocks
    jest.clearAllMocks();
  });

  describe("onFileUpdate", () => {
    it("should create directory and write file", async () => {
      const mockMkdir = fs.mkdir as jest.Mock;
      const mockWriteFile = fs.writeFile as jest.Mock;

      await onFileUpdate("/test/file.js", "content");

      expect(mockMkdir).toHaveBeenCalled();
      expect(mockWriteFile).toHaveBeenCalled();
    });

    it("should handle file write errors", async () => {
      const mockError = new Error("Write failed");
      (fs.writeFile as jest.Mock).mockRejectedValue(mockError);

      const consoleSpy = jest.spyOn(console, "error");
      await onFileUpdate("/test/file.js", "content");

      expect(consoleSpy).toHaveBeenCalled();
    });
  });

  describe("onShellCommand", () => {
    it("should execute shell commands", async () => {
      const mockExecSync = execSync as jest.Mock;
      mockExecSync.mockReturnValue(Buffer.from("success"));

      await onShellCommand("npm install");

      expect(mockExecSync).toHaveBeenCalledWith(
        "npm install",
        expect.any(Object)
      );
    });

    it("should handle multiple commands with &&", async () => {
      const mockExecSync = execSync as jest.Mock;
      mockExecSync.mockReturnValue(Buffer.from("success"));

      await onShellCommand("npm install && npm run build");

      expect(mockExecSync).toHaveBeenCalledTimes(2);
    });

    it("should handle command execution errors", async () => {
      const mockError = new Error("Command failed");
      (mockError as any).stderr = Buffer.from("error message");
      (execSync as jest.Mock).mockImplementation(() => {
        throw mockError;
      });

      const consoleSpy = jest.spyOn(console, "error");
      await onShellCommand("invalid-command");

      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
