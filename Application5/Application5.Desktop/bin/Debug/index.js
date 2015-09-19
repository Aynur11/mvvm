$(function() {
    var startupView = "About";
    DevExpress.devices.current("desktop");

    Application5.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application5,
        layoutSet: DevExpress.framework.html.layoutSets[Application5.config.layoutSet],
        animationSet: DevExpress.framework.html.animationSets[Application5.config.animationSet],
        mode: "webSite",
        navigation: Application5.config.navigation,
        commandMapping: Application5.config.commandMapping,
        navigateToRootViewMode: "keepHistory",
        useViewTitleAsBackText: true
    });

    $(window).unload(function() {
        Application5.app.saveState();
    });

    Application5.app.router.register(":view/:id", { view: startupView, id: undefined });
    Application5.app.navigate();
});