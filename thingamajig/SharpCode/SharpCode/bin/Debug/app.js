(function() {
	'use strict';
	var $asm = {};
	global.SharpCode = global.SharpCode || {};
	ss.initAssembly($asm, 'app');
	////////////////////////////////////////////////////////////////////////////////
	// SharpCode.Program
	var $SharpCode_Program = function() {
	};
	$SharpCode_Program.__typeName = 'SharpCode.Program';
	$SharpCode_Program.$main = function() {
		var vm = new $SharpCode_ViewModel();
		ko.applyBindings(vm);
	};
	global.SharpCode.Program = $SharpCode_Program;
	////////////////////////////////////////////////////////////////////////////////
	// SharpCode.ViewModel
	var $SharpCode_ViewModel = function() {
		this.firstName = ko.observable('qwerty');
		this.firstName = ko.observable('123');
	};
	$SharpCode_ViewModel.__typeName = 'SharpCode.ViewModel';
	global.SharpCode.ViewModel = $SharpCode_ViewModel;
	ss.initClass($SharpCode_Program, $asm, {});
	ss.initClass($SharpCode_ViewModel, $asm, {});
	$SharpCode_Program.$main();
})();
