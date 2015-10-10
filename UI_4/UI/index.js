$(document).ready(function () {












    // prepare the data
    var source =
    {
        datatype: "csv",
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        url: 'chartdata.txt'
            //'../sampledata/nasdaq_vs_sp500.txt'
    };
    var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) {  } });
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // prepare jqxChart settings
    var settings = {
        title: "U.S. Stock Market Index Performance",
        description: "NASDAQ Composite compared to S&P 500",
        enableAnimations: true,
        showLegend: true,
        padding: { left: 10, top: 5, right: 10, bottom: 5 },
        titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
        source: dataAdapter,
        xAxis:
        {
            dataField: 'Date',
            formatFunction: function (value) {
                return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
            },
            type: 'date',
            baseUnit: 'month',
            valuesOnTicks: true,
            minValue: '01-01-2014',
            maxValue: '01-01-2015',
            tickMarks: {
                visible: true,
                interval: 1,
                color: '#BCBCBC'
            },
            unitInterval: 1,
            gridLines: {
                visible: true,
                interval: 3,
                color: '#BCBCBC'
            },
            labels: {
                angle: -45,
                rotationPoint: 'topright',
                offset: { x: 0, y: -25 }
            }
        },
        valueAxis:
        {
            visible: true,
            title: { text: 'Daily Closing Price<br>' },
            tickMarks: { color: '#BCBCBC' }
        },
        colorScheme: 'scheme04',
        seriesGroups:
            [
                {
                    type: 'line',
                    series: [
                            { dataField: 'S&P 500', displayText: 'S&P 500' },
                            { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                    ]
                }
            ]
    };
    // setup the chart
    $('#chartContainer1').jqxChart(settings);
    $('#chartContainer2').jqxChart(settings);
    $('#chartContainer3').jqxChart(settings);
    $('#chartContainer4').jqxChart(settings);
    $('#chartContainer5').jqxChart(settings);
    $('#chartContainer6').jqxChart(settings);


    $("#button1").on('click', function () {
        $("#listbox2").hide();
        $("#listbox").show();
        $("#chartContainer1").show();
        $("#chartContainer2").show();
        $("#chartContainer3").show();
        $("#chartContainer4").show();
        $('#chartContainer5').show();
        $('#chartContainer6').show();

        $("#chartContainer1").hide();
        $("#chartContainer2").hide();
        $("#chartContainer3").hide();
        $("#chartContainer4").hide();
        $('#chartContainer5').hide();
        $('#chartContainer6').hide();
    });
    $("#button2").on('click', function () {
        $("#chartContainer1").hide();
        $("#chartContainer2").hide();
        $("#chartContainer3").hide();
        $("#chartContainer4").hide();
        $('#chartContainer5').hide();
        $('#chartContainer6').hide()
        $("#listbox2").show();
    });


    var source = [
                   "Well Survey 1",
                   "Well Survey 2",
                   "Well Survey 3",
                   "Well Survey 4",
                   "Well Survey 5",
                   "Well Survey 6"
    ];
    var source2 = [
       "PVT 1",
       "PVT 2",
       "PVT 3",
       "PVT 4",
       "PVT 5",
       "PVT 6"
    ];
    // Create a jqxListBox
    $("#listbox").jqxListBox({ width: 200, source: source, checkboxes: true, height: 250 });
    $("#listbox2").jqxListBox({ width: 200, source: source2, checkboxes: true, height: 250 });
    $("#listbox2").hide();
    // Check several items.
    /*
    $("#listbox").jqxListBox('checkIndex', 0);
    $("#listbox").jqxListBox('checkIndex', 3);
    */
    $("#chartContainer1").hide();
    $("#chartContainer2").hide();
    $("#chartContainer3").hide();
    $("#chartContainer4").hide();
    $('#chartContainer5').hide();
    $('#chartContainer6').hide()

    $("#listbox").on('checkChange', function (event) {
        var args = event.args;
        if (args.checked) {
            //alert(args.checked);
            var items = $("#listbox").jqxListBox('getCheckedItems');
            //alert(items.length);
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                //alert(item.index);
                if (item.index == 0) { $("#chartContainer1").show(); }
                if (item.index == 1) { $("#chartContainer2").show(); }
                if (item.index == 2) { $("#chartContainer3").show(); }
                if (item.index == 3) { $("#chartContainer4").show(); }
                if (item.index == 4) { $("#chartContainer5").show(); }
                if (item.index == 5) { $("#chartContainer6").show(); }

                //alert(item.index + 1);
            }

            //$("#chartContainer1").show();

            // $("#Events").text("Checked: " + args.label);
        }
        else {
            // $("#Events").text("Unchecked: " + args.label);
            //var items = $("#listbox").jqxListBox('getCheckedItems');

            // alert(args.item.index); //works
            // for (var i = 0; i < items.length; i++) {
            //     var item = items[i];
            //   alert(args.item.index);
            if (args.item.index == 0) { $("#chartContainer1").hide(); }
            if (args.item.index == 1) { $("#chartContainer2").hide(); }
            if (args.item.index == 2) { $("#chartContainer3").hide(); }
            if (args.item.index == 3) { $("#chartContainer4").hide(); }
            if (args.item.index == 4) { $("#chartContainer5").hide(); }
            if (args.item.index == 5) { $("#chartContainer6").hide(); }
            //alert(item.index + 1);
            //  }

        }

        var checkedItems = "";
        $.each(items, function (index) {
            if (index < items.length - 1) {
                checkedItems += this.label + ", ";
            }
            else checkedItems += this.label;
        });
        $("#CheckedItems").text(checkedItems);
    });
    /////here is the toolbar
    $("#jqxToolBar").jqxToolBar({
        width: 212, height: 35, tools: 'button button button | toggleButton | dropdownlist combobox | input',
        initTools: function (type, index, tool, menuToolIninitialization) {
            if (type == "button") {
                var icon = $("<div class='jqx-editor-toolbar-icon jqx-editor-toolbar-icon-" + theme + " buttonIcon'></div>");
            }
            switch (index) {
                case 0:
                    icon.addClass("jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-" + theme);
                    icon.attr("title", "Bold");
                    tool.append(icon);
                    break;
                case 1:
                    icon.addClass("jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-" + theme);
                    icon.attr("title", "Italic");
                    tool.append(icon);
                    break;
                case 2:
                    icon.addClass("jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-" + theme);
                    icon.attr("title", "Underline");
                    tool.append(icon);
                    break;
                case 3:
                    tool.jqxToggleButton({ width: 80, toggled: true });
                    tool.text("Enabled");
                    tool.on("click", function () {
                        var toggled = tool.jqxToggleButton("toggled");
                        if (toggled) {
                            tool.text("Enabled");
                        } else {
                            tool.text("Disabled");
                        }
                    });
                    break;
                case 4:
                    tool.jqxDropDownList({ width: 130, source: ["<span style='font-family: Courier New;'>Courier New</span>", "<span style='font-family: Times New Roman;'>Times New Roman</span>", "<span style='font-family: Verdana;'>Verdana</span>"], selectedIndex: 1 });
                    break;
                case 5:
                    tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                    break;
                case 6:
                    tool.jqxInput({ width: 200, placeHolder: "Type here to search..." });
                    break;
            }
        }
    });


    $("#jqxButton").jqxToggleButton({ width: '210', toggled: true });
    //$("#jqxDisabledButton").jqxToggleButton({ width: '200', disabled: true });
    $("#jqxButton").on('click', function () {
        //var toggled = $("#jqxButton").jqxToggleButton('toggled');
        var toggled = $("#jqxButton").jqxToggleButton('toggled');
        if (toggled) {
            $("#jqxButton")[0].value = 'The toolbar\'s been turned on';
            $("#jqxToolBar").show();
        }
        else {
            $("#jqxButton")[0].value = 'The toolbar\'s been turned off';
            $("#jqxToolBar").hide();
        }
    });
});
$(document).ready(function () {
    var sampleData = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];
    var ChartModel = function (items) {
        this.items = ko.observableArray(items);
        this.updateItem = function () {
            var newItems = new Array();
            for (var i = 0; i < 7; i++) {
                var item = $.extend({}, sampleData[i]);
                item.Keith = Math.floor(Math.random() * 50);
                item.Erica = Math.floor(Math.random() * 30);
                item.George = Math.floor(Math.random() * 90);
                newItems[i] = item;
            }
            this.items(newItems);
        };
    };
    ko.applyBindings(new ChartModel(sampleData));
});
