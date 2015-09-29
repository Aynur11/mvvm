window.thingamajig = window.thingamajig || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Guide/#themes article

    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if(window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !thingamajig.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win8":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }


    thingamajig.app = new DevExpress.framework.html.HtmlApplication({
        namespace: thingamajig,
        layoutSet: DevExpress.framework.html.layoutSets[thingamajig.config.layoutSet],
        navigation: thingamajig.config.navigation,
        commandMapping: thingamajig.config.commandMapping
    });
    thingamajig.app.router.register(":view/:id", { view: "home", id: undefined });
    thingamajig.app.on("navigatingBack", onNavigatingBack);
    thingamajig.app.navigate();
});