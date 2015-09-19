(function() {
	'use strict';
	var $asm = {};
	global.salt = global.salt || {};
	ss.initAssembly($asm, 'app');
	////////////////////////////////////////////////////////////////////////////////
	// salt.Program
	var $salt_Program = function() {
	};
	$salt_Program.__typeName = 'salt.Program';
	$salt_Program.$main = function() {
		window.alert('Done');
		//int a = 5;
	};
	global.salt.Program = $salt_Program;
	ss.initClass($salt_Program, $asm, {});
	$salt_Program.$main();
})();

ko.applyBindings(new Program());