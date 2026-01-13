import { Command } from "@cliffy/command"
import { issuesCommand } from "./project-issues.ts"
import { listCommand } from "./project-list.ts"
import { viewCommand } from "./project-view.ts"

export const projectCommand = new Command()
  .description("Manage Linear projects")
  .action(function () {
    this.showHelp()
  })
  .command("issues", issuesCommand)
  .command("list", listCommand)
  .command("view", viewCommand)
