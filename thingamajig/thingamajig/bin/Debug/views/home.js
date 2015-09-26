thingamajig.home = function (params) {
    var viewModel = {  
        a: ko.observable(4)
    };
    return viewModel;
};
window.onload = function () {
    ko.applyBindings(viewModel);
}
