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
	// UI.BlockViewModel
	var $UI_BlockViewModel = function() {
		this.name = null;
		this.points = null;
		this.checkedItem = false;
	};
	$UI_BlockViewModel.__typeName = 'UI.BlockViewModel';
	global.UI.BlockViewModel = $UI_BlockViewModel;
	////////////////////////////////////////////////////////////////////////////////
	// UI.ColumnModel
	var $UI_ColumnModel = function() {
		this.name = null;
		this.$1$typeField = null;
	};
	$UI_ColumnModel.__typeName = 'UI.ColumnModel';
	global.UI.ColumnModel = $UI_ColumnModel;
	////////////////////////////////////////////////////////////////////////////////
	// UI.DashboardViewModel
	var $UI_DashboardViewModel = function() {
		this.modules = null;
		this.modules = [];
		var $t12 = this.modules;
		var $t1 = new $UI_ModuleViewModel();
		$t1.name = 'Module1';
		$t1.color = 'red';
		var $t2 = [];
		var $t3 = new $UI_BlockViewModel();
		$t3.name = '1Line1';
		$t3.checkedItem = false;
		var $t4 = [];
		var $t5 = new $UI_PointViewModel();
		$t5.chart1X = 5;
		$t5.chart1Y = 52;
		$t5.chart2X = 37;
		$t5.chart2Y = 19;
		$t4.push($t5);
		$t3.points = $t4;
		$t2.push($t3);
		var $t6 = new $UI_BlockViewModel();
		$t6.name = '1Line2';
		$t6.checkedItem = false;
		var $t7 = [];
		var $t8 = new $UI_PointViewModel();
		$t8.chart1X = 34;
		$t8.chart1Y = 22;
		$t8.chart2X = 97;
		$t8.chart2Y = 39;
		$t7.push($t8);
		$t6.points = $t7;
		$t2.push($t6);
		var $t9 = new $UI_BlockViewModel();
		$t9.name = '1Line3';
		$t9.checkedItem = false;
		var $t10 = [];
		var $t11 = new $UI_PointViewModel();
		$t11.chart1X = 34;
		$t11.chart1Y = 22;
		$t11.chart2X = 97;
		$t11.chart2Y = 39;
		$t10.push($t11);
		$t9.points = $t10;
		$t2.push($t9);
		$t1.blockData = $t2;
		$t12.push($t1);
		var $t27 = this.modules;
		var $t13 = new $UI_ModuleViewModel();
		$t13.name = 'Module2';
		$t13.color = 'green';
		var $t14 = [];
		var $t15 = new $UI_BlockViewModel();
		$t15.name = '2Line1';
		$t15.checkedItem = false;
		var $t16 = [];
		var $t17 = new $UI_PointViewModel();
		$t17.chart1X = 25;
		$t17.chart1Y = 52;
		$t17.chart2X = 37;
		$t17.chart2Y = 29;
		$t16.push($t17);
		$t15.points = $t16;
		$t14.push($t15);
		var $t18 = new $UI_BlockViewModel();
		$t18.name = '2Line2';
		$t18.checkedItem = false;
		var $t19 = [];
		var $t20 = new $UI_PointViewModel();
		$t20.chart1X = 53;
		$t20.chart1Y = 28;
		$t20.chart2X = 83;
		$t20.chart2Y = 45;
		$t19.push($t20);
		$t18.points = $t19;
		$t14.push($t18);
		var $t21 = new $UI_BlockViewModel();
		$t21.name = '2Line3';
		$t21.checkedItem = false;
		var $t22 = [];
		var $t23 = new $UI_PointViewModel();
		$t23.chart1X = 31;
		$t23.chart1Y = 23;
		$t23.chart2X = 97;
		$t23.chart2Y = 79;
		$t22.push($t23);
		$t21.points = $t22;
		$t14.push($t21);
		var $t24 = new $UI_BlockViewModel();
		$t24.name = '2Line4';
		$t24.checkedItem = false;
		var $t25 = [];
		var $t26 = new $UI_PointViewModel();
		$t26.chart1X = 41;
		$t26.chart1Y = 63;
		$t26.chart2X = 37;
		$t26.chart2Y = 69;
		$t25.push($t26);
		$t24.points = $t25;
		$t14.push($t24);
		$t13.blockData = $t14;
		$t27.push($t13);
		var $t33 = this.modules;
		var $t28 = new $UI_ModuleViewModel();
		$t28.name = 'Module3';
		$t28.color = 'yellow';
		var $t29 = [];
		var $t30 = new $UI_BlockViewModel();
		$t30.name = '3Line1';
		$t30.checkedItem = false;
		var $t31 = [];
		var $t32 = new $UI_PointViewModel();
		$t32.chart1X = 22;
		$t32.chart1Y = 54;
		$t32.chart2X = 17;
		$t32.chart2Y = 29;
		$t31.push($t32);
		$t30.points = $t31;
		$t29.push($t30);
		$t28.blockData = $t29;
		$t33.push($t28);
		var $t66 = this.modules;
		var $t34 = new $UI_ModuleViewModel();
		$t34.name = 'Module4';
		$t34.color = 'blue';
		var $t35 = [];
		var $t36 = new $UI_BlockViewModel();
		$t36.name = '4Line1';
		$t36.checkedItem = false;
		var $t37 = [];
		var $t38 = new $UI_PointViewModel();
		$t38.chart1X = 23;
		$t38.chart1Y = 42;
		$t38.chart2X = 27;
		$t38.chart2Y = 59;
		$t37.push($t38);
		$t36.points = $t37;
		$t35.push($t36);
		var $t39 = new $UI_BlockViewModel();
		$t39.name = '4Line2';
		$t39.checkedItem = false;
		var $t40 = [];
		var $t41 = new $UI_PointViewModel();
		$t41.chart1X = 23;
		$t41.chart1Y = 42;
		$t41.chart2X = 77;
		$t41.chart2Y = 89;
		$t40.push($t41);
		$t39.points = $t40;
		$t35.push($t39);
		var $t42 = new $UI_BlockViewModel();
		$t42.name = '4Line3';
		$t42.checkedItem = false;
		var $t43 = [];
		var $t44 = new $UI_PointViewModel();
		$t44.chart1X = 25;
		$t44.chart1Y = 32;
		$t44.chart2X = 57;
		$t44.chart2Y = 19;
		$t43.push($t44);
		$t42.points = $t43;
		$t35.push($t42);
		var $t45 = new $UI_BlockViewModel();
		$t45.name = '4Line4';
		$t45.checkedItem = false;
		var $t46 = [];
		var $t47 = new $UI_PointViewModel();
		$t47.chart1X = 45;
		$t47.chart1Y = 62;
		$t47.chart2X = 27;
		$t47.chart2Y = 79;
		$t46.push($t47);
		$t45.points = $t46;
		$t35.push($t45);
		var $t48 = new $UI_BlockViewModel();
		$t48.name = '4Line5';
		$t48.checkedItem = false;
		var $t49 = [];
		var $t50 = new $UI_PointViewModel();
		$t50.chart1X = 65;
		$t50.chart1Y = 82;
		$t50.chart2X = 37;
		$t50.chart2Y = 9;
		$t49.push($t50);
		$t48.points = $t49;
		$t35.push($t48);
		var $t51 = new $UI_BlockViewModel();
		$t51.name = '4Line6';
		$t51.checkedItem = false;
		var $t52 = [];
		var $t53 = new $UI_PointViewModel();
		$t53.chart1X = 35;
		$t53.chart1Y = 92;
		$t53.chart2X = 77;
		$t53.chart2Y = 99;
		$t52.push($t53);
		$t51.points = $t52;
		$t35.push($t51);
		var $t54 = new $UI_BlockViewModel();
		$t54.name = '4Line7';
		$t54.checkedItem = false;
		var $t55 = [];
		var $t56 = new $UI_PointViewModel();
		$t56.chart1X = 20;
		$t56.chart1Y = 82;
		$t56.chart2X = 37;
		$t56.chart2Y = 44;
		$t55.push($t56);
		$t54.points = $t55;
		$t35.push($t54);
		var $t57 = new $UI_BlockViewModel();
		$t57.name = '4Line8';
		$t57.checkedItem = false;
		var $t58 = [];
		var $t59 = new $UI_PointViewModel();
		$t59.chart1X = 65;
		$t59.chart1Y = 12;
		$t59.chart2X = 97;
		$t59.chart2Y = 9;
		$t58.push($t59);
		$t57.points = $t58;
		$t35.push($t57);
		var $t60 = new $UI_BlockViewModel();
		$t60.name = '4Line9';
		$t60.checkedItem = false;
		var $t61 = [];
		var $t62 = new $UI_PointViewModel();
		$t62.chart1X = 65;
		$t62.chart1Y = 82;
		$t62.chart2X = 7;
		$t62.chart2Y = 9;
		$t61.push($t62);
		$t60.points = $t61;
		$t35.push($t60);
		var $t63 = new $UI_BlockViewModel();
		$t63.name = '4Line10';
		$t63.checkedItem = false;
		var $t64 = [];
		var $t65 = new $UI_PointViewModel();
		$t65.chart1X = 65;
		$t65.chart1Y = 32;
		$t65.chart2X = 37;
		$t65.chart2Y = 9;
		$t64.push($t65);
		$t63.points = $t64;
		$t35.push($t63);
		$t34.blockData = $t35;
		$t66.push($t34);
		var $t75 = this.modules;
		var $t67 = new $UI_ModuleViewModel();
		$t67.name = 'Module5';
		$t67.color = 'blue';
		var $t68 = [];
		var $t69 = new $UI_BlockViewModel();
		$t69.name = '5Line1';
		$t69.checkedItem = false;
		var $t70 = [];
		var $t71 = new $UI_PointViewModel();
		$t71.chart1X = 95;
		$t71.chart1Y = 62;
		$t71.chart2X = 47;
		$t71.chart2Y = 29;
		$t70.push($t71);
		$t69.points = $t70;
		$t68.push($t69);
		var $t72 = new $UI_BlockViewModel();
		$t72.name = '5Line2';
		$t72.checkedItem = false;
		var $t73 = [];
		var $t74 = new $UI_PointViewModel();
		$t74.chart1X = 34;
		$t74.chart1Y = 22;
		$t74.chart2X = 57;
		$t74.chart2Y = 69;
		$t73.push($t74);
		$t72.points = $t73;
		$t68.push($t72);
		$t67.blockData = $t68;
		$t75.push($t67);
	};
	$UI_DashboardViewModel.__typeName = 'UI.DashboardViewModel';
	global.UI.DashboardViewModel = $UI_DashboardViewModel;
	////////////////////////////////////////////////////////////////////////////////
	// UI.DoubleColumn
	var $UI_DoubleColumn = function() {
		$UI_ColumnModel.call(this);
	};
	$UI_DoubleColumn.__typeName = 'UI.DoubleColumn';
	global.UI.DoubleColumn = $UI_DoubleColumn;
	////////////////////////////////////////////////////////////////////////////////
	// UI.ModuleViewModel
	var $UI_ModuleViewModel = function() {
		this.name = null;
		this.color = null;
		this.blockData = null;
	};
	$UI_ModuleViewModel.__typeName = 'UI.ModuleViewModel';
	global.UI.ModuleViewModel = $UI_ModuleViewModel;
	////////////////////////////////////////////////////////////////////////////////
	// UI.PointViewModel
	var $UI_PointViewModel = function() {
		this.chart1X = 33;
		this.chart1Y = 99;
		this.chart2X = 33;
		this.chart2Y = 99;
		this.chart3X = 33;
		this.chart3Y = 99;
		this.chart4X = 33;
		this.chart4Y = 99;
		this.chart5X = 33;
		this.chart5Y = 99;
		this.chart6X = 33;
		this.chart6Y = 99;
	};
	$UI_PointViewModel.__typeName = 'UI.PointViewModel';
	global.UI.PointViewModel = $UI_PointViewModel;
	////////////////////////////////////////////////////////////////////////////////
	// UI.StringColumn
	var $UI_StringColumn = function() {
		$UI_ColumnModel.call(this);
	};
	$UI_StringColumn.__typeName = 'UI.StringColumn';
	global.UI.StringColumn = $UI_StringColumn;
	////////////////////////////////////////////////////////////////////////////////
	// UI.TableViewModel
	var $UI_TableViewModel = function() {
		this.columns = null;
		this.data = null;
		this.data2 = null;
		this.columns = [];
		var $t2 = this.columns;
		var $t1 = new $UI_ColumnModel();
		$t1.name = 'z';
		$t1.set_type('number');
		$t2.push($t1);
		var $t4 = this.columns;
		var $t3 = new $UI_ColumnModel();
		$t3.name = 'a';
		$t3.set_type('number');
		$t4.push($t3);
		var $t6 = this.columns;
		var $t5 = new $UI_ColumnModel();
		$t5.name = 'MD';
		$t5.set_type('number');
		$t6.push($t5);
		this.data = ko.observableArray();
		var $t8 = this.data;
		var $t7 = new $UI_WellSurveyItemViewModel();
		$t7.z = 0;
		$t7.a = 0;
		$t7.MD = 0;
		$t8.push($t7);
		var $t10 = this.data;
		var $t9 = new $UI_WellSurveyItemViewModel();
		$t9.z = 10;
		$t9.a = 10;
		$t9.MD = 10;
		$t10.push($t9);
		var $t12 = this.data;
		var $t11 = new $UI_WellSurveyItemViewModel();
		$t11.z = 20;
		$t11.a = 15;
		$t11.MD = 30;
		$t12.push($t11);
		var $t14 = this.data;
		var $t13 = new $UI_WellSurveyItemViewModel();
		$t13.z = 10;
		$t13.a = 30;
		$t13.MD = 60;
		$t14.push($t13);
		var $t16 = this.data;
		var $t15 = new $UI_WellSurveyItemViewModel();
		$t15.z = 10;
		$t15.a = 60;
		$t15.MD = 70;
		$t16.push($t15);
	};
	$UI_TableViewModel.__typeName = 'UI.TableViewModel';
	global.UI.TableViewModel = $UI_TableViewModel;
	////////////////////////////////////////////////////////////////////////////////
	// UI.WellSurveyItemViewModel
	var $UI_WellSurveyItemViewModel = function() {
		this.z = 35;
		this.a = 7;
		this.MD = 47;
	};
	$UI_WellSurveyItemViewModel.__typeName = 'UI.WellSurveyItemViewModel';
	global.UI.WellSurveyItemViewModel = $UI_WellSurveyItemViewModel;
	ss.initClass($UI_$Program, $asm, {});
	ss.initClass($UI_BlockViewModel, $asm, {});
	ss.initClass($UI_ColumnModel, $asm, {
		get_type: function() {
			return this.$1$typeField;
		},
		set_type: function(value) {
			this.$1$typeField = value;
		}
	});
	ss.initClass($UI_DashboardViewModel, $asm, {
		getModules: function() {
			return this.modules;
		},
		getCountOfButtons: function() {
			return this.modules.length;
		}
	});
	ss.initClass($UI_DoubleColumn, $asm, {
		get_type2: function() {
			return this.get_type();
		},
		set_type2: function(value) {
			this.set_type('number');
		}
	}, $UI_ColumnModel);
	ss.initClass($UI_ModuleViewModel, $asm, {});
	ss.initClass($UI_PointViewModel, $asm, {});
	ss.initClass($UI_StringColumn, $asm, {
		get_type1: function() {
			return this.get_type();
		},
		set_type1: function(value) {
			this.set_type('string');
		}
	}, $UI_ColumnModel);
	ss.initClass($UI_TableViewModel, $asm, {
		getTableData: function() {
			return this.data;
		}
	});
	ss.initClass($UI_WellSurveyItemViewModel, $asm, {});
	$UI_$Program.$main();
})();
