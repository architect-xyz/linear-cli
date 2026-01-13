import { snapshotTest } from "@cliffy/testing"
import { issuesCommand } from "../../../src/commands/project/project-issues.ts"
import { commonDenoArgs } from "../../utils/test-helpers.ts"

// Test help output
await snapshotTest({
  name: "Project Issues Command - Help Text",
  meta: import.meta,
  colors: false,
  args: ["--help"],
  denoArgs: commonDenoArgs,
  async fn() {
    await issuesCommand.parse()
  },
})
