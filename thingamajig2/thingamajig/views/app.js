(function() {
	'use strict';
	var $asm = {};
	global.SharpCode = global.SharpCode || {};
	ss.initAssembly($asm, 'app');
	////////////////////////////////////////////////////////////////////////////////
	// SharpCode.Computing
	var $SharpCode_Computing = function() {
		this.result = ko.observable();
	};
	$SharpCode_Computing.__typeName = 'SharpCode.Computing';
	global.SharpCode.Computing = $SharpCode_Computing;
	////////////////////////////////////////////////////////////////////////////////
	// SharpCode.Program
	var $SharpCode_Program = function() {
	};
	$SharpCode_Program.__typeName = 'SharpCode.Program';
	$SharpCode_Program.$main = function() {
		//
		//           ViewModel vm = new ViewModel();
		//
		//           vm.computeHandler();
		//
		//           Computing calc = new Computing();
		//
		//           calc.computeHandler2(vm.a, vm.b);
		//
		//           vm.computeHandler3();
		//
		//vm.computeHandler(vm.a, vm.b);
		//vm.result.Value = vm.a.Value + vm.b.Value;
		//Knockout.ApplyBindings(vm);
	};
	global.SharpCode.Program = $SharpCode_Program;
	////////////////////////////////////////////////////////////////////////////////
	// SharpCode.ViewModel
	var $SharpCode_ViewModel = function() {
		this.firstName = ko.observable('qwerty');
		this.a = ko.observable(7);
		this.b = ko.observable(2);
		this.r = ko.observable();
		this.firstName = ko.observable('123');
	};
	$SharpCode_ViewModel.__typeName = 'SharpCode.ViewModel';
	global.SharpCode.ViewModel = $SharpCode_ViewModel;
	ss.initClass($SharpCode_Computing, $asm, {
		computeHandler1: function(aa, bb) {
			this.result(aa() + bb());
			return this.result();
		},
		computeHandler2: function(aa, bb) {
			this.result(aa() + bb());
			return this.result;
		}
	});
	ss.initClass($SharpCode_Program, $asm, {});
	ss.initClass($SharpCode_ViewModel, $asm, {
		computeHandler: function() {
			this.r(this.a() + this.b());
			return this.r();
		},
		computeHandler3: function() {
			this.r(this.a() + this.b());
			return this.r;
		}
	});
	$SharpCode_Program.$main();
})();
