import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "vluopemg",
    dataset: "production",
  },
  studioHost: "primehomes",
});
