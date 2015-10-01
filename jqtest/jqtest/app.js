(function() {
	'use strict';
	var $asm = {};
	global.SharpCode = global.SharpCode || {};
	ss.initAssembly($asm, 'app');
	////////////////////////////////////////////////////////////////////////////////
	// SharpCode.Calculations
	var $SharpCode_Calculations = function() {
		this.a = 7;
		this.b = 3;
		this.c = 0;
	};
	$SharpCode_Calculations.__typeName = 'SharpCode.Calculations';
	global.SharpCode.Calculations = $SharpCode_Calculations;
	////////////////////////////////////////////////////////////////////////////////
	// SharpCode.Program
	var $SharpCode_Program = function() {
	};
	$SharpCode_Program.__typeName = 'SharpCode.Program';
	$SharpCode_Program.$main = function() {
	};
	global.SharpCode.Program = $SharpCode_Program;
	////////////////////////////////////////////////////////////////////////////////
	// SharpCode.ViewModel
	var $SharpCode_ViewModel = function() {
		this.a = ko.observable(7);
		this.b = ko.observable(3);
		this.result = ko.observable(0);
		this.$calc = new $SharpCode_Calculations();
	};
	$SharpCode_ViewModel.__typeName = 'SharpCode.ViewModel';
	global.SharpCode.ViewModel = $SharpCode_ViewModel;
	ss.initClass($SharpCode_Calculations, $asm, {
		multipl: function() {
			this.c = this.a * this.b;
			return this.c;
		}
	});
	ss.initClass($SharpCode_Program, $asm, {});
	ss.initClass($SharpCode_ViewModel, $asm, {
		multiplicate: function() {
			this.result(this.$calc.multipl());
			return this.result;
		},
		compute: function() {
			this.result(this.a() + this.b());
			return this.result;
		}
	});
	$SharpCode_Program.$main();
})();
