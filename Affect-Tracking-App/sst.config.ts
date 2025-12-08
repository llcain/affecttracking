/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    // app's config
    app(input) {
        return {
            name:"Affect-Tracking-App",
            home: "aws"
        };
    },

    // app's resources

    async run() {
        new aws.Function("GetMood", {
            handler: "functions/getMood.handler"
        });
    }
});