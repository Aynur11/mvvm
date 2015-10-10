(function() {
	'use strict';
	var $asm = {};
	global.UI = global.UI || {};
	ss.initAssembly($asm, 'app');
	////////////////////////////////////////////////////////////////////////////////
	// UI.Program
	var $UI_$Program = function() {
	};
	$UI_$Program.__typeName = 'UI.$Program';
	$UI_$Program.$main = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// UI.ViewModel
	var $UI_ViewModel = function() {
		this.a = ko.observable(0);
		this.b = ko.observable(0);
		this.result = ko.observable(0);
		this.str = ko.observable('66 /n 4');
	};
	$UI_ViewModel.__typeName = 'UI.ViewModel';
	global.UI.ViewModel = $UI_ViewModel;
	ss.initClass($UI_$Program, $asm, {});
	ss.initClass($UI_ViewModel, $asm, {
		compute: function() {
			this.result(this.a() + this.b());
			return this.result;
		}
	});
	$UI_$Program.$main();
})();
