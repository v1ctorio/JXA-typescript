// Fails to compile if the global Application or Automation become `any` again
export {};

const app = Application.currentApplication();
app.includeStandardAdditions = true;

// @ts-expect-error listFolder returns string[]
const folderEntries: number = app.listFolder("/tmp");

// @ts-expect-error doShellScript expects a string
app.doShellScript(42);

// @ts-expect-error Automation.log returns void
const logResult: number = Automation.log("message");
