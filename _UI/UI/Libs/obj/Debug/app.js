(function() {
	'use strict';
	var $asm = {};
	ss.initAssembly($asm, 'app');
	////////////////////////////////////////////////////////////////////////////////
	// UI.Program
	var $UI_$Program = function() {
	};
	$UI_$Program.__typeName = 'UI.$Program';
	$UI_$Program.$main = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// UI.Program.ViewModel
	var $UI_$Program$ViewModel = function() {
		this.$a = ko.observable(0);
		this.$b = ko.observable(0);
		this.$result = ko.observable(0);
	};
	$UI_$Program$ViewModel.__typeName = 'UI.$Program$ViewModel';
	ss.initClass($UI_$Program, $asm, {});
	ss.initClass($UI_$Program$ViewModel, $asm, {
		$compute: function() {
			this.$result(this.$a() + this.$b());
			return this.$result;
		}
	});
	$UI_$Program.$main();
})();
