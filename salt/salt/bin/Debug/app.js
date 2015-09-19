(function() {
	'use strict';
	var $asm = {};
	global.salt = global.salt || {};
	ss.initAssembly($asm, 'app');
	////////////////////////////////////////////////////////////////////////////////
	// salt.Program
	var $salt_Program = function() {
		this.$1$CField = null;
		this.set_c('qqqqqqqq');
	};
	$salt_Program.__typeName = 'salt.Program';
	$salt_Program.$main = function() {
		var ob = new $salt_Program();
		ob.set_c('qwe');
		window.alert('Done');
		var A = ko.observable('asd');
		var B = 333;
		ko.applyBindings(new $salt_Program());
	};
	global.salt.Program = $salt_Program;
	ss.initClass($salt_Program, $asm, {
		get_c: function() {
			return this.$1$CField;
		},
		set_c: function(value) {
			this.$1$CField = value;
		}
	});
	$salt_Program.$main();
})();
