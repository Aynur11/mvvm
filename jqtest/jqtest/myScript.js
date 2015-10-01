$(document).ready(function () {
    // Here's my data model
    var ViewModel = function (first) {
        this.firstName = ko.observable(first);
        //this.lastName = ko.observable(last);
        //this.fullName = ko.computed(function () {
            // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
           // return this.firstName();
        //}, this);
    };
    ko.applyBindings(new ViewModel("Planet")); // This makes Knockout get to work
    
});