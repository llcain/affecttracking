/// <reference path="./.sst/platform/config.d.ts" />



import * as sst from "sst";

export default $config({
  app(input) {
    return {
      name: "affect-tracker",
      home: "aws",
      version: ">=3.0.0",
    };
  },

  async run() {
    const site = new sst.aws.StaticSite("site", {
      path: ".",
      buildCommand: "npm run build",
      buildOutput: "dist",
    });

    return {
      SiteUrl: site.url,
    };
  },
});
