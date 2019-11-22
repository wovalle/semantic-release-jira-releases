import { verifyConditions } from "../lib/verifyConditions";
import { pluginConfig, context } from "./fakedata";
import { PluginConfig } from "../lib/types";

jest.mock("../lib/jira", () => ({
  makeClient: () => ({
    project: {
      getProject: () => ({ id: 'test' })
    }
  })
}));

describe("VerifyConditions", () => {
  it("🙂: should not throw if all conditions are met", async () => {
    const config = {
      ...pluginConfig,
      ticketPrefixes: ["UH"]
    } as PluginConfig;

    context.env = {
      JIRA_AUTH: "test"
    };

    expect(await verifyConditions(config, context)).toBe(undefined);
  });
});
