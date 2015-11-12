/*
jQWidgets v3.9.0 (2015-Oct)
Copyright (c) 2011-2015 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxLayout","",{});a.extend(a.jqx._jqxLayout.prototype,{defineInstance:function(){var b={width:null,height:null,minGroupWidth:100,minGroupHeight:100,layout:[],resizable:true,contextMenu:false,rtl:false,events:["create","resize","pin","unpin"]};a.extend(true,this,b)},createInstance:function(){var b=this;b._originalElement=b.host.clone();b._coordinates=[];b._ie7=a.jqx.browser.msie&&a.jqx.browser.version<8;b._touchDevice=a.jqx.mobile.isTouchDevice();b.render()},render:function(){var e=this,g,b,h;e._tabbedGroupsList=[];if(e.dockingLayout){e._overlayGroups=[];if(e._isInitialized===true){g=e.dockingLayout._overlay.detach();b=e.dockingLayout._dropOverlay.detach();h=e.dockingLayout._edgeOverlays.detach()}}if(e._isInitialized===true){e._detachContent(e.layout[0].items)}e.host.empty();if(!e.host.jqxRibbon){throw new Error("jqxLayout: Missing reference to jqxribbon.js.")}e._setSize();e._addClasses();e._removeHandlers();if(!e._isInitialized){if(e.layout[0].type!=="layoutGroup"){throw new Error('jqxLayout: Invalid layout structure. The first member of the layout array has to be with type: "layoutGroup".')}var f=e.layout[0].items[0].width,d=e.layout[0].items[0].height;if(!(f&&typeof f==="string"&&f.charAt(f.length-1)==="%"||d&&typeof d==="string"&&d.charAt(d.length-1)==="%")){e.layout[0].initialPxWidth=e.host.width();e.layout[0].initialPxHeight=e.host.height();e._pxToPercent(e.layout[0],true)}}e._createLayout(e.layout,e.host,{type:"host"},0);if(e.resizable===true){e._addResizeFeedbacks();e._getGroupCoordinates();e._addHandlers()}if(e.contextMenu===true){e._initMenu()}if(!e._isInitialized){e._isInitialized=true;e._raiseEvent("0");if(e._ie7){a.jqx.utilities.resize(e.host,function(){e.render()})}}else{if(e.dockingLayout){if(!e._ie7){e.host.append(g,b,h)}else{a("body").append(g,b,h)}e.dockingLayout._trackFloatGroups()}}for(var c=0;c<e._tabbedGroupsList.length;c++){e._validateTabbedGroup(e._tabbedGroupsList[c])}},refresh:function(b){if(b!==true){this.render()}},destroy:function(){var b=this;b._mouseupHandler=null;b._docUP=null;b._removeHandlers();if(b.contextMenu===true){b._menu.jqxMenu("destroy")}b.host.remove()},saveLayout:function(){var d=this,b=[];for(var c=0;c<d.layout.length;c++){d._copyItem(d.layout[c],b)}return b},loadLayout:function(c){if(c!==undefined&&a.isEmptyObject(c)===false){var b=this;b.layout=c;b._isInitialized=false;b.render()}},propertyChangedHandler:function(b,d,g,f){if(d!=="layout"){if(f!==g){switch(d){case"width":case"height":b.host.css(d,f);break;case"theme":a.jqx.utilities.setTheme(g,f,b.host);if(b._menuInitialized){a.jqx.utilities.setTheme(g,f,b._menu)}if(b.dockingLayout){if(a("."+b.element.id+"FloatGroup").length>0){a("."+b.element.id+"FloatGroup").jqxWindow({theme:f})}}break;case"layout":case"resizable":b.render();break;case"contextMenu":if(f===true&&!b._menuInitialized){b.render()}break;case"rtl":var c=a("."+b.element.id+"FloatGroup");if(c.length>0){c.jqxWindow({rtl:f})}var e=b.host.add(c);if(f===true){e.find(".jqx-layout-pseudo-window-title-ltr").removeClass(b.toThemeProperty("jqx-layout-pseudo-window-title-ltr")).addClass(b.toThemeProperty("jqx-layout-pseudo-window-title-rtl"));e.find(".jqx-layout-pseudo-window-pin-background-ltr").removeClass(b.toThemeProperty("jqx-layout-pseudo-window-pin-background-ltr")).addClass(b.toThemeProperty("jqx-layout-pseudo-window-pin-background-rtl"));e.find(".jqx-layout-pseudo-window-close-background-ltr").removeClass(b.toThemeProperty("jqx-layout-pseudo-window-close-background-ltr")).addClass(b.toThemeProperty("jqx-layout-pseudo-window-close-background-rtl"));e.find(".jqx-layout-ribbon-header").removeClass(b.toThemeProperty("jqx-layout-ribbon-header-ltr")).addClass(b.toThemeProperty("jqx-layout-ribbon-header-rtl"))}else{e.find(".jqx-layout-pseudo-window-title-rtl").removeClass(b.toThemeProperty("jqx-layout-pseudo-window-title-rtl")).addClass(b.toThemeProperty("jqx-layout-pseudo-window-title-ltr"));e.find(".jqx-layout-pseudo-window-pin-background-rtl").removeClass(b.toThemeProperty("jqx-layout-pseudo-window-pin-background-rtl")).addClass(b.toThemeProperty("jqx-layout-pseudo-window-pin-background-ltr"));e.find(".jqx-layout-pseudo-window-close-background-rtl").removeClass(b.toThemeProperty("jqx-layout-pseudo-window-close-background-rtl")).addClass(b.toThemeProperty("jqx-layout-pseudo-window-close-background-ltr"));e.find(".jqx-layout-ribbon-header").removeClass(b.toThemeProperty("jqx-layout-ribbon-header-rtl")).addClass(b.toThemeProperty("jqx-layout-ribbon-header-ltr"))}e.find(".jqx-ribbon").jqxRibbon({rtl:f});break}}}else{b.render()}},_raiseEvent:function(f,c){if(c===undefined){c={owner:null}}var d=this.events[f];c.owner=this;var e=new a.Event(d);e.owner=this;e.args=c;if(e.preventDefault){e.preventDefault()}var b=this.host.trigger(e);return b},_setSize:function(){var b=this;b.host.css({width:b.width,height:b.height})},_addClasses:function(){var b=this;b.host.addClass(b.toThemeProperty("jqx-layout jqx-widget jqx-widget-content jqx-rc-all"))},_getPercentage:function(c,b,d){return(c/b.widget[d]())*100},_addHandlers:function(){var g=this,b=g.element.id,d,j;g._resize={allowed:false};g._clickedToResize=false;function i(l,o){for(var m=0;m<g._coordinates.length;m++){var n=g._coordinates[m];if(l>=n.x.from&&l<=n.x.to&&o>=n.y.from&&o<=n.y.to){if(n.orientation==="horizontal"){g.element.style.cursor="col-resize"}else{g.element.style.cursor="row-resize"}g._resize={allowed:true,widget:n.widget,side:n.side};break}else{g.element.style.cursor="default";g._resize.allowed=false}}}function k(l){if(g._resize.allowed===true){var r=g._resize.widget,w=r.current.parent,x=g._percentToPx("width",r.current.minWidth,w),t=g._percentToPx("height",r.current.minHeight,w),n=w.items[r.current.index-1],q=w.items[r.current.index+1];g._resizeStartPosition={x:l.pageX,y:l.pageY};if(!x){x=g._percentToPx("width",g.minGroupWidth,w)}if(!t){t=g._percentToPx("height",g.minGroupHeight,w)}switch(g._resize.side){case"left":var u=g._percentToPx("width",n.minWidth,w);if(!u){u=g._percentToPx("width",g.minGroupWidth,w)}d=n.widget.offset().left+u;j=r.offset().left+r.width()-x;break;case"right":var m=g._percentToPx("width",q.minWidth,w);if(!m){m=g._percentToPx("width",g.minGroupWidth,w)}d=r.offset().left+x;j=q.widget.offset().left+q.widget.width()-m;break;case"top":var v=g._percentToPx("height",n.minHeight,w);if(!v){v=g._percentToPx("height",g.minGroupHeight,w)}d=n.widget.offset().top+v;j=r.offset().top+r.height()-t;break;case"bottom":var o=g._percentToPx("height",q.minHeight,w);if(!o){o=g._percentToPx("height",g.minGroupHeight,w)}d=r.offset().top+t;j=q.widget.offset().top+q.widget.height()-o;break}var p=function(z,A){A=(typeof A==="undefined")?{top:0,left:0}:A;if(z!==top){var y=z.frameElement.getBoundingClientRect();A.left+=y.left;A.top+=y.top;A=p(z.parent,A)}return A},s;g._clickedToResize=true;g._overlay[0].style.display="block";if(g._resize.side==="left"||g._resize.side==="right"){g._verticalFeedback[0].style.height=g._resize.widget.height()+"px";s=g._ie7?p(window).top:0;g._verticalFeedback.offset({top:g._resize.widget.offset().top-g.host.offset().top+a(window).scrollTop()-s})}else{g._horizontalFeedback[0].style.width=g._resize.widget.width()+"px";s=g._ie7?p(window).left:0;g._horizontalFeedback.offset({left:g._resize.widget.offset().left-g.host.offset().left+a(window).scrollLeft()+1-s})}}}function c(n,o,t,r,m){var p=m.charAt(0).toUpperCase()+m.slice(1),s=o.parent,l,q;if(n){l=g._percentToPx(m,t["min"+p],s);q=parseFloat(t[m])/100*o.parent.widget[m]()-r}else{l=g._percentToPx(m,o["min"+p],s);q=parseFloat(o[m])/100*o.parent.widget[m]()-r}if(!l){l=g._percentToPx(m,g["minGroup"+p],s)}if(q<l){return l}else{return q}}function e(l){if(g._clickedToResize===true){var r=function(){g._clickedToResize=false;g._overlay[0].style.display="none";g._verticalFeedback[0].style.display="none";g._horizontalFeedback[0].style.display="none"},p=l.pageX,o=l.pageY,u=g._resize.widget.current,x=g._resize.widget.offset(),t=x.left,m=x.top,y,v,q,w,s,n;if(l.pageX===g._resizeStartPosition.x&&l.pageY===g._resizeStartPosition.y){r();return}if(g._resize.side==="left"||g._resize.side==="right"){n=u.width;if(g._resize.side==="left"){y=u.parent.items[u.index-1];v=t;q=p<v}else{y=u.parent.items[u.index+1];v=t+u.widget.width();q=p>=v}w=Math.abs(p-v);if(w===0){r();return}if(q){s=g._getPercentage(c(true,u,y,w,"width"),u.parent,"width");w=Math.abs(s-parseFloat(y.width));y.width=s+"%";u.width=parseFloat(u.width)+w+"%"}else{s=g._getPercentage(c(false,u,y,w,"width"),u.parent,"width");w=Math.abs(s-parseFloat(u.width));u.width=s+"%";y.width=parseFloat(y.width)+w+"%"}if(u.width===n){r();return}}else{n=u.height;if(g._resize.side==="top"){y=u.parent.items[u.index-1];v=m;q=o<v}else{y=u.parent.items[u.index+1];v=m+u.widget.height();q=o>=v}w=Math.abs(o-v);if(w===0){r();return}if(q){s=g._getPercentage(c(true,u,y,w,"height"),u.parent,"height");w=Math.abs(s-parseFloat(y.height));y.height=s+"%";u.height=parseFloat(u.height)+w+"%"}else{s=g._getPercentage(c(false,u,y,w,"height"),u.parent,"height");w=Math.abs(s-parseFloat(u.height));u.height=s+"%";y.height=parseFloat(y.height)+w+"%"}if(u.height===n){r();return}}r();g.render();g._raiseEvent("1",{item:u})}}function f(m){if(g._clickedToResize===true){var l=m.pageX,n=m.pageY;if(g._resize.side==="left"||g._resize.side==="right"){g._verticalFeedback[0].style.display="block";if(l<d){l=d;g._verticalFeedback.addClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}else{if(l>j){l=j;g._verticalFeedback.addClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}else{g._verticalFeedback.removeClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}}g._verticalFeedback.offset({left:l-2})}else{g._horizontalFeedback[0].style.display="block";if(n<d){n=d;g._horizontalFeedback.addClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}else{if(n>j){n=j;g._horizontalFeedback.addClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}else{g._horizontalFeedback.removeClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}}g._horizontalFeedback.offset({top:n-2});g._horizontalFeedback.offset({left:g._resize.widget.offset().left+a(window).scrollLeft()+1})}}}g._docUP=e;if(!g._touchDevice){g.addHandler(g.host,"mousemove.jqxLayout"+b,function(m){if(g._clickedToResize===false&&(!g.dockingLayout||g.dockingLayout&&g.dockingLayout._windowDragged!==true)){var l=m.pageX,n=m.pageY;i(l,n)}});g.addHandler(a(document),"mousemove.jqxLayout"+b,function(l){f(l)});g.addHandler(g.host,"mousedown.jqxLayout"+b,function(l){k(l)});g.addHandler(a(document),"mouseup.jqxLayout"+b,function(l){e(l)})}else{g.addHandler(a(document),"touchstart.jqxDockingLayout"+b,function(m){var l=m.originalEvent.touches[0];i(l.pageX,l.pageY);k(l)});g.addHandler(a(document),"touchmove.jqxDockingLayout"+b,function(m){var l=m.originalEvent.touches[0];f(l)});g.addHandler(a(document),"touchend.jqxDockingLayout"+b,function(m){var l=m.originalEvent.changedTouches[0];e(l)})}g.addHandler(a(document),"selectstart.jqxLayout"+b,function(){if(g._clickedToResize===true){return false}});if(g.dockingLayout){try{if(document.referrer!=""||window.frameElement){if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",g._mouseupHandler,false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",g._mouseupHandler)}}}}catch(h){}}},_removeHandlers:function(){var c=this,d=c.element.id;if(!c._touchDevice){c.removeHandler(c.host,"mousemove.jqxLayout"+d);c.removeHandler(a(document),"mousemove.jqxLayout"+d);c.removeHandler(c.host,"mousedown.jqxLayout"+d);c.removeHandler(a(document),"mouseup.jqxLayout"+d)}else{c.removeHandler(a(document),"touchstart.jqxLayout"+d);c.removeHandler(a(document),"touchmove.jqxLayout"+d);c.removeHandler(a(document),"touchend.jqxLayout"+d)}c.removeHandler(a(document),"selectstart.jqxLayout"+d);if(c.dockingLayout){try{if(document.referrer!=""||window.frameElement){if(window.top.document.removeEventListener){window.top.document.removeEventListener("mouseup",c._mouseupHandler,false)}else{if(window.top.document.detachEvent){window.top.document.detachEvent("onmouseup",c._mouseupHandler)}}}}catch(b){}}a("."+d+"FloatGroup").off("close")},_createLayout:function(o,e,k){function m(w){var v=e.children(),x=v.eq(0),i=v.eq(1);x.text(w.title);c=f._originalElement.find('[data-container="'+w.contentContainer+'"]').html();if(c===undefined){c=""}i.html(c)}var f=this,d=k.type;for(var s=0;s<o.length;s++){var p=o[s],b,c,q,l;switch(p.type){case"layoutGroup":b=a("<div></div>");b.addClass(f.toThemeProperty("jqx-layout-group-default"));if(p.orientation==="horizontal"){b.addClass(f.toThemeProperty("jqx-layout-group-default-horizontal"))}e.append(b);if(d==="host"){b.addClass(f.toThemeProperty("jqx-layout-group-root"))}else{var r=k.orientation==="horizontal"?p.width:"100%";var n=k.orientation==="horizontal"?"100%":p.height;b.css({width:r,height:n})}break;case"tabbedGroup":if(d!=="floatGroup"){b=a('<div class="'+f.toThemeProperty("jqx-layout-group-tabbed")+'"><div class="jqx-layout-window-header"><div></div></div><div><div class="jqx-layout-ribbon"><ul class="jqx-layout-ribbon-header jqx-layout-ribbon-header-'+(f.rtl?"rtl":"ltr")+'"></ul><div class="jqx-layout-ribbon-content"></div></div></div></div>');e.append(b);f._addRightClickHandler(b.find(".jqx-layout-window-header"),b)}else{b=a('<div class="jqx-layout-ribbon"><ul class="jqx-layout-ribbon-header jqx-layout-ribbon-header-'+(f.rtl?"rtl":"ltr")+'"></ul><div class="jqx-layout-ribbon-content"></div></div>');e.children().eq(1).append(b)}break;case"documentGroup":case"autoHideGroup":b=a("<div><ul></ul><div></div></div>");e.append(b);if(p.type==="documentGroup"){b.find("ul").addClass("jqx-layout-ribbon-header jqx-layout-ribbon-header-"+(f.rtl?"rtl":"ltr"))}if(f._ie7&&p.type==="autoHideGroup"){b.css("z-index",9999-500*s)}break;case"floatGroup":if(!f._isInitialized){if(!f.dockingLayout){throw new Error("Float groups are only available in the jqxDockingLayout widget. Initialize a jqxDockingLayout (requires jqxdockinglayout.js) instead of a jqxLayout.")}b=a('<div class="'+f.toThemeProperty("jqx-docking-layout-group-floating")+'"><div></div><div></div></div>');e.append(b)}else{return}break;case"layoutPanel":b={};if(d==="tabbedGroup"){var t=e.find(".jqx-layout-window-header").text();if(t===""){e.find(".jqx-layout-window-header div:eq(0)").text(p.title)}l=a("<li>"+p.title+"</li>");e.find(".jqx-layout-ribbon-header").append(l);if(!f._isInitialized){c=f._originalElement.find('[data-container="'+p.contentContainer+'"]').html();if(c===undefined){c=""}}else{c=p.detachedContent}q=a("<div></div>");q.append(c);e.find(".jqx-layout-ribbon-content").append(q);f._addRightClickHandler(l,b)}else{if(d==="autoHideGroup"){a(e.children()[0]).append("<li>"+p.title+"</li>");if(!f._isInitialized){c=f._originalElement.find('[data-container="'+p.contentContainer+'"]').html();if(c===undefined){c=""}}else{c=p.detachedContent}q=a("<div></div>");q.append(c);var h;if(k.alignment==="left"||k.alignment==="right"){h="jqx-layout-group-auto-hide-content-vertical"}else{h="jqx-layout-group-auto-hide-content-horizontal"}q.addClass(f.toThemeProperty(h));var g=a('<div><div class="jqx-layout-window"><div><div>'+p.title+"</div></div></div></div>");g.children().append(q);a(e.children()[1]).append(g);f._addRightClickHandler(g.find(".jqx-layout-window"),b)}else{if(d==="floatGroup"){m(p)}}}break;case"documentPanel":b={};if(d==="floatGroup"){m(p)}else{l=a("<li>"+p.title+"</li>");a(e.children()[0]).append(l);if(!f._isInitialized){c=f._originalElement.find('[data-container="'+p.contentContainer+'"]').html();if(c===undefined){c=""}}else{c=p.detachedContent}q=a("<div></div>");q.append(c);a(e.children()[1]).append(q);f._addRightClickHandler(l,b)}break}if(p.items&&p.items.length>0){var j=b;f._createLayout(p.items,j,p)}f._createWidget(k,e,p,b,s);if(f.dockingLayout&&(p.type==="documentGroup"||p.type==="tabbedGroup"||(p.type==="layoutGroup"&&p.items.length===0))){var u={element:b,width:b.width(),height:b.height(),offset:b.offset(),settings:p};f._overlayGroups.push(u);if(p.parent.type==="floatGroup"){p.parent._overlayGroup=u}}}},_createWidget:function(m,k,i,e,g){var f=this,b=m.orientation==="horizontal"?i.width:"100%",l=m.orientation==="horizontal"?"100%":i.height,d=false;i.parent=m;i.widget=e;i.index=g;if(i.widget){i.widget.current=i}function h(){var o=0;for(var n=0;n<i.items.length;n++){if(i.items[n].selected===true){o=n;break}}i.items[o].selected=true;return o}switch(i.type){case"tabbedGroup":var j,c;if(m.type!=="floatGroup"){j=f._initWindowPanel(e,b,l,i.type);c=e.find(".jqx-layout-ribbon");f._tabbedGroupsList.push(i)}else{c=e}if(f.dockingLayout&&(i.allowDrag!==false)){d=true}c.jqxRibbon({theme:f.theme,width:"100%",height:"100%",position:"bottom",selectionMode:"click",animationType:"none",rtl:f.rtl,_roundedCorners:false,initContent:function(n){var o=i.items[n];if(!o.initialized&&o.initContent){o.initContent(c.find(".jqx-ribbon-content-section").eq(n));o.initialized=true}},_removeByDrag:d,reorder:true});c.on("select",function(p){p.stopPropagation();if(p.target.id===c[0].id){p.stopPropagation();var n=p.args.selectedIndex;i.items[n].selected=true;var o=a(a(c.children()[1]).children()[n]).text();if(m.type!=="floatGroup"){j.html(o)}else{m.widget.find(".jqx-window-header").children().eq(0).html(o)}}});c.on("unselect",function(n){n.stopPropagation();if(n.target.id===c[0].id){i.items[n.args.unselectedIndex].selected=false}});c.on("reorder",function(o){f._swapPanelsInLayout(i.items,o.args.newIndex,o.args.oldIndex);var n=o.args.newIndex;setTimeout(function(){if(i.items[n]){f._addRightClickHandler(a(c.find(".jqx-ribbon-item")[n]),i.items[n].widget)}},200)});if(d){c.on("_removeByDrag",function(n){f.dockingLayout._removeByDragHandler(n,i,c);if(i.parent.type==="floatGroup"&&i.items.length===1){c.jqxRibbon({_removeByDrag:false})}});f.dockingLayout._addTabbedGroupHandlers(i,e)}c.jqxRibbon("selectAt",h());break;case"documentGroup":if(f.dockingLayout&&(i.allowDrag!==false)){d=true}e.jqxRibbon({theme:f.theme,width:b,height:l,_roundedCorners:false,position:"top",selectedIndex:h(),selectionMode:"click",animationType:"none",rtl:f.rtl,initContent:function(n){var o=i.items[n];if(!o.initialized&&o.initContent){o.initContent(e.find(".jqx-ribbon-content-section").eq(n));o.initialized=true}},_removeByDrag:d,reorder:true});e.on("select",function(n){n.stopPropagation();if(n.target.id===e[0].id){i.items[n.args.selectedIndex].selected=true}});e.on("unselect",function(n){n.stopPropagation();if(n.target.id===e[0].id){i.items[n.args.unselectedIndex].selected=false}});e.on("reorder",function(o){f._swapPanelsInLayout(i.items,o.args.newIndex,o.args.oldIndex);var n=o.args.newIndex;setTimeout(function(){f._addRightClickHandler(a(e.find(".jqx-ribbon-item")[n]),i.items[n].widget)},200)});if(d){e.on("_removeByDrag",function(n){f.dockingLayout._removeByDragHandler(n,i,e)})}e.addClass(f.toThemeProperty("jqx-layout-group-document"));break;case"autoHideGroup":e.jqxRibbon({theme:f.theme,width:b,height:l,mode:"popup",popupCloseMode:"click",position:i.alignment,selectionMode:"click",animationType:"none",_roundedCorners:false,rtl:f.rtl,initContent:function(o){var q=i.alignment==="top"||i.alignment==="left"?1:0,p=a(a(e.children()[q]).children()[o]),n=p.find(".jqx-layout-window");n.current=e.current.items[o];n.css("border","none");f._initWindowPanel(n,"100%","100%",i.type);if(!i.items[o].initialized&&i.items[o].initContent){i.items[o].initContent(e.find(".jqx-ribbon-content-section").eq(o).children().children().eq(1));i.items[o].initialized=true}}});e.addClass(f.toThemeProperty("jqx-layout-group-auto-hide"));break;case"floatGroup":e.addClass(f.element.id+"FloatGroup");e.jqxWindow({theme:f.theme,width:i.width,maxWidth:null,height:i.height,maxHeight:null,position:{x:i.position.x,y:i.position.y},showCloseButton:i.allowClose!==false,closeButtonAction:"close",rtl:f.rtl,initContent:function(){var o=e.find(".jqx-window-header");o.on("mousedown",function(){f.dockingLayout._windowDragged=true;if(i._overlayGroup){i._overlayGroup.self=true}f.dockingLayout._interval();if(f.resizable){f._overlay[0].style.display="block"}var r,p,q;if(i.items[0].type==="documentPanel"){r={type:"documentGroup"};p=i.items[0];q=p.title}else{if(i.items[0].type==="layoutPanel"){r={type:"tabbedGroup"};p=i.items[0];q=p.title}else{if(i.items[0].type==="tabbedGroup"){r=i.items[0]}}}f.dockingLayout._draggedWindow={fromGroup:r,fromPanel:p,title:q,element:e};f.dockingLayout._showEdgeOverlays()});o.on("mouseup",function(){f.dockingLayout._hideOverlays()});if(i.items[0].type==="tabbedGroup"){var n=i.items[0].items[e.find(".jqx-ribbon").jqxRibbon("selectedIndex")].title;e.jqxWindow("setTitle",n)}}});e.on("moved",function(n){i.position.x=n.args.x;i.position.y=n.args.y;if(i._overlayGroup){f.dockingLayout._updateOverlayGroup(i._overlayGroup)}f.dockingLayout._windowCreate=false;f.dockingLayout._hideOverlays();f.dockingLayout._clearTextSelection()});e.on("resized",function(n){i.width=n.args.width;i.height=n.args.height;var o=a(this).offset();i.position.x=o.left;i.position.y=o.top;if(i._overlayGroup){f.dockingLayout._updateOverlayGroup(i._overlayGroup)}});e.on("close",function(n){n.stopPropagation();if(n.target.id===e[0].id){if(e.current._overlayGroup){e.current._overlayGroup.removed=true;f.dockingLayout._updateOverlayGroups()}f.dockingLayout._removeFloatGroupObject(e.current)}});break}},_initWindowPanel:function(d,n,m,e){var i=this;d.addClass(i.toThemeProperty("jqx-widget jqx-widget-content jqx-window jqx-layout-pseudo-window jqx-rc-all"));if(!i._ie7){d.css({width:n,height:m})}else{var k=d.parent();if(e==="tabbedGroup"){var b=parseInt(d.css("border-left-width"),10),t=parseInt(d.css("border-right-width"),10),r=parseInt(d.css("border-top-width"),10),g=parseInt(d.css("border-bottom-width"),10),q,s;if(n==="100%"){q=k.width()}else{q=parseFloat(n)/100*k.width()}q-=b+t;if(m==="100%"){s=k.height()}else{s=parseFloat(m)/100*k.height()}s-=r+g;d.css({width:q,height:s})}else{if(e==="autoHideGroup"){d.css({width:n,height:m})}}}var f=i.rtl?"rtl":"ltr";var p=a(d.children()[0]);var u=p.children();u.addClass(i.toThemeProperty("jqx-layout-pseudo-window-title jqx-layout-pseudo-window-title-"+f));p.addClass(i.toThemeProperty("jqx-widget-header jqx-window-header jqx-disableselect jqx-layout-pseudo-window-header"));if(i._ie7){p.css("width",p.width()-parseInt(p.css("padding-left"),10)-parseInt(p.css("padding-right"),10));p.css("height",p.height()-parseInt(p.css("padding-top"),10)-parseInt(p.css("padding-bottom"),10))}var j=0,c,h;if((i.dockingLayout&&d.current.allowClose!==false)||(!i.dockingLayout&&d.current.allowClose===true)){c=a('<div class="'+i.toThemeProperty("jqx-window-close-button-background jqx-layout-pseudo-window-close-background jqx-layout-pseudo-window-close-background-"+f)+'" title="Close"><div class="'+i.toThemeProperty("jqx-window-close-button jqx-icon-close jqx-layout-pseudo-window-close-icon")+'"></div></div>');p.append(c);j+=16}if((e==="tabbedGroup"&&d.current.allowPin!==false)||(e==="autoHideGroup"&&d.current.parent.allowUnpin!==false)){var l;switch(e){case"tabbedGroup":l="jqx-layout-pseudo-window-pin-icon";d.pinned=false;break;case"autoHideGroup":l="jqx-layout-pseudo-window-pinned-icon";d.pinned=true;break}h=a('<div class="'+i.toThemeProperty("jqx-window-close-button-background jqx-layout-pseudo-window-pin-background")+'" title="Auto Hide"><div class="'+i.toThemeProperty(l)+'"></div></div>');if(c){h.addClass(i.toThemeProperty("jqx-layout-pseudo-window-pin-background-"+f))}else{if(i.rtl===false){h.css("right",0)}}p.append(h);j+=16;if(i.dockingLayout&&e==="autoHideGroup"){i.dockingLayout._addAutoHideGroupHandlers(d.current,p,d.current.title,a(d.children()[1]).contents())}}u.css("max-width",p.width()-j);var o=a(d.children()[1]);o.css("height",1+d.height()-p.outerHeight());o.css("margin-left","-1px");o.css("margin-right","-1px");i._addWindowPanelHandlers(c,h,d);return u},_addWindowPanelHandlers:function(g,c,b){var f=this,h=f.element.id,e=b.current,d=e.type;if(g){f.addHandler(g,"click.jqxLayout"+h,function(){if(d==="tabbedGroup"&&e.items.length>1){var i=b.find(".jqx-ribbon-item-selected")[0]._index;f._close(e.items[i])}else{b.fadeOut(function(){f._close(e);b.remove()})}})}if(c){f.addHandler(c,"click.jqxLayout"+h,function(){if(d==="tabbedGroup"&&e.pinValid===true){f._pin(e)}else{if(d==="layoutPanel"){f._unPin(e.parent)}}})}},_getGroupCoordinates:function(){var d=this;d._coordinates=[];function b(e){return e==="layoutGroup"||e==="tabbedGroup"||e==="documentGroup"}function c(n){for(var j=0;j<n.length;j++){var p=n[j];if(b(p.type)){var g=n[j-1],k=n[j+1],h=p.widget.offset(),o,e,m,f,l;if(g&&b(g.type)){if(p.parent.orientation==="horizontal"){o=h.left-5;e=o+10;m=h.top-5;f=m+p.widget.height()+10;l="left"}else{o=h.left-5;e=o+p.widget.width()+10;m=h.top-5;f=m+10;l="top"}d._coordinates.push({x:{from:o,to:e},y:{from:m,to:f},widget:p.widget,side:l,orientation:p.parent.orientation})}if(k&&b(k.type)){if(p.parent.orientation==="horizontal"){o=h.left+p.widget.width()-5;e=o+10;m=h.top-5;f=m+p.widget.height()+10;l="right"}else{o=h.left-5;e=o+p.widget.width()+10;m=h.top+p.widget.height()-5;f=m+10;l="bottom"}d._coordinates.push({x:{from:o,to:e},y:{from:m,to:f},widget:p.widget,side:l,orientation:p.parent.orientation})}if(p.items){c(p.items)}}}}c(d.layout[0].items)},_close:function(e){var g=this,i;e.removed=true;if(e.type==="tabbedGroup"||e.type==="autoHideGroup"||e.type==="documentGroup"){i=e.type==="tabbedGroup"?e.widget.find(".jqx-ribbon"):e.widget;i.jqxRibbon("destroy");if(e.parent.items){var f=e.parent.items[e.index-1],d=e.parent.items[e.index+1],h=e.parent.orientation==="vertical"?"height":"width";var c=function(k){var j=(parseFloat(k[h])+parseFloat(e[h]))+"%";if(k.type==="documentGroup"){if(h==="height"){k.widget.jqxRibbon({height:j})}else{k.widget.jqxRibbon({width:j})}}else{if(k.type==="layoutGroup"||k.type==="tabbedGroup"){k.widget.css(h,j)}}k[h]=j;g._raiseEvent("1",{item:k})};if(f&&f.type!=="autoHideGroup"&&f.type!=="floatGroup"){c(f)}else{if(d&&d.type!=="autoHideGroup"&&d.type!=="floatGroup"){c(d)}}}}else{if(e.type==="layoutPanel"){if(e.parent.type==="tabbedGroup"){i=e.parent.widget.find(".jqx-ribbon");i.jqxRibbon("removeAt",e.index);g._updateLayout(g.layout);if(e.index===0){i.jqxRibbon("selectAt",0)}else{i.jqxRibbon("selectAt",e.index-1)}return}else{if(e.parent.type==="autoHideGroup"){i=e.parent.widget;i.jqxRibbon("removeAt",e.index);var b=i.children("ul").children();if(b.length===0){g._close(i.current)}}}}}g._updateLayout(g.layout);g.render()},_updateLayout:function(b){for(var d=0;d<b.length;d++){if(b[d].removed===true){b.splice(d,1);for(var c=0;c<b.length;c++){b[c].index=c}}else{if(b[d].items){this._updateLayout(b[d].items)}}}},_pin:function(d){var h=this,l=d.parent,k,g,i;if(d.alignment){k=d.alignment}else{var f=Math.abs(d.parent.items.length-1-d.index),c=Math.abs(0-d.index);if(c<f){k=d.parent.orientation==="horizontal"?"left":"top"}else{k=d.parent.orientation==="horizontal"?"right":"bottom"}}var b=k==="top"||k==="left"?d.index+1:d.index-1;if(k==="left"||k==="right"){g="width";i=d.pinnedWidth}else{g="height";i=d.pinnedHeight}if(!i){if(g==="width"){i=(8000/d.parent.widget.width())+"%"}else{if(g==="height"){i=(3000/d.parent.widget.height())+"%"}}}h._detachContent(d.items,true);var j={type:"autoHideGroup",alignment:k,items:d.items};j[g]=i;j["min"+g.charAt(0).toUpperCase()+g.slice(1)]=d["min"+g.charAt(0).toUpperCase()+g.slice(1)];j["unpinned"+g.charAt(0).toUpperCase()+g.slice(1)]=d[g];j.allowDrag=d.allowDrag;j.allowDrop=d.allowDrop;var e=l.items[b];e[g]=parseFloat(e[g])+parseFloat(d[g])-parseFloat(i)+"%";l.items.splice(d.index,0,j);d.removed=true;d.widget.find(".jqx-ribbon").jqxRibbon("destroy");d.widget.remove();h._updateLayout(h.layout);h.render();h._raiseEvent("1",{item:e});h._raiseEvent("2",{item:j})},_unPin:function(f){var h=this,k=f.parent,j=f.alignment,b=j==="top"||j==="left"?f.index+1:f.index-1,m=k.items[b],g,c,e;if(j==="left"||j==="right"){g="width";c=f.unpinnedWidth}else{g="height";c=f.unpinnedHeight}if(!c){c="10%"}h._detachContent(f.items,true);var i={type:"tabbedGroup",alignment:j,items:f.items};i["pinned"+g.charAt(0).toUpperCase()+g.slice(1)]=f[g];i.allowDrag=f.allowDrag;i.allowDrop=f.allowDrop;if(m){var d=parseFloat(m[g])+parseFloat(f[g])-parseFloat(c)+"%",l=m["min"+g.charAt(0).toUpperCase()+g.slice(1)];if(!l){l=h["minGroup"+g.charAt(0).toUpperCase()+g.slice(1)]}if(parseFloat(d)<h._getPercentage(l,k,g)){c=f[g];d=h._getPercentage(l,k,g)+"%";i["min"+g.charAt(0).toUpperCase()+g.slice(1)]=f.widget.width()}else{i["min"+g.charAt(0).toUpperCase()+g.slice(1)]=f["min"+g.charAt(0).toUpperCase()+g.slice(1)]}i[g]=c;m[g]=d;e=m}else{i["min"+g.charAt(0).toUpperCase()+g.slice(1)]=f["min"+g.charAt(0).toUpperCase()+g.slice(1)];i[g]="100%";e=i}k.items.splice(f.index,0,i);f.removed=true;f.widget.jqxRibbon("destroy");h._updateLayout(h.layout);h.render();h._raiseEvent("1",{item:e});h._raiseEvent("3",{item:i})},_copyItem:function(c,g){var f={};for(var e in c){if(c.hasOwnProperty(e)&&e!=="parent"&&e!=="widget"&&e!=="initialized"){if(e==="position"){f.position={x:c.position.x,y:c.position.y}}else{if(e==="items"){var b=[];for(var d=0;d<c.items.length;d++){this._copyItem(c.items[d],b)}f.items=b}else{f[e]=c[e]}}}}g.push(f)},_addResizeFeedbacks:function(){var b=this;b._horizontalFeedback=a('<div class="'+b.toThemeProperty("jqx-fill-state-normal jqx-layout-resize-feedback jqx-layout-resize-feedback-horizontal")+'"></div>');b._verticalFeedback=a('<div class="'+b.toThemeProperty("jqx-fill-state-normal jqx-layout-resize-feedback jqx-layout-resize-feedback-vertical")+'"></div>');b._overlay=a('<div class="'+b.toThemeProperty("jqx-layout-overlay")+'"></div>');if(b.dockingLayout&&b.dockingLayout._windowDragged){b._overlay[0].style.display="block"}b.host.append(b._horizontalFeedback,b._verticalFeedback,b._overlay)},_detachContent:function(h,d){function c(l){if(l.prevent===true){l.prevent=false}else{var i=l.parent.widget.find(".jqx-ribbon-content-section").eq(l.index);f=i.contents().detach();i.remove();l.detachedContent=f;if(d===true){l.prevent=true}}}for(var e=h.length-1;e>=0;e--){var k=h[e],j=k.type,f;if(j==="layoutGroup"||j==="tabbedGroup"||j==="documentGroup"||j==="autoHideGroup"||j==="floatGroup"){if(k.items&&k.items.length>0){this._detachContent(k.items)}}else{if(j==="layoutPanel"){if(k.parent.type==="tabbedGroup"){c(k)}else{if(k.parent.type==="autoHideGroup"){if(k.prevent===true){k.prevent=false}else{if(k.parent.alignment==="left"||k.parent.alignment==="right"){var b=k.parent.widget.find(".jqx-layout-group-auto-hide-content-vertical").eq(e);f=b.contents().detach();b.remove()}else{var g=k.parent.widget.find(".jqx-layout-group-auto-hide-content-horizontal").eq(e);f=g.contents().detach();g.remove()}k.detachedContent=f;if(d===true){k.prevent=true}}}}}else{if(j==="documentPanel"){c(k)}}}}},_pxToPercent:function(f,b){function g(k,j){var h,i;k=parseInt(k,10);if(b){i=e.host[j]()}else{i=f["initialPx"+j.charAt(0).toUpperCase()+j.slice(1)]}h=(100*k/i).toString()+"%";return h}var e=this;for(var d=0;d<f.items.length;d++){var c=f.items[d];if(c.width!==undefined){c.initialPxWidth=c.width;c.width=g(c.width,"width")}else{c.initialPxWidth=f.initialPxWidth}if(c.height!==undefined){c.initialPxHeight=c.height;c.height=g(c.height,"height")}else{c.initialPxHeight=f.initialPxHeight}if(c.unpinnedWidth!==undefined){c.unpinnedWidth=g(c.unpinnedWidth,"width")}if(c.pinnedWidth!==undefined){c.pinnedWidth=g(c.pinnedWidth,"width")}if(c.unpinnedHeight!==undefined){c.unpinnedHeight=g(c.unpinnedHeight,"height")}if(c.pinnedHeight!==undefined){c.pinnedHeight=g(c.pinnedHeight,"height")}if(c.type==="layoutGroup"&&c.items&&c.items.length>0){e._pxToPercent(c,false)}}},_percentToPx:function(d,c,b){if(c===undefined){return undefined}else{if(typeof c!=="string"||(typeof c==="string"&&c.charAt(c.length-1)!=="%")){return parseFloat(c)}else{return parseFloat(c.slice(0,c.length-1))/100*b.widget[d]()}}},_swapPanelsInLayout:function(f,d,c){var e=f[d];f[d]=f[c];f[d].index=d;f[c]=e;f[c].index=c},_initMenu:function(){var c=this;if(!c._menuInitialized){var f=c.element.id,e="",d=function(h,g,i){c._menu.jqxMenu("disable","dockOption"+f,h);c._menu.jqxMenu("disable","autoHideOption"+f,g);c._menu.jqxMenu("disable","closeOption"+f,i)};if(!c.host.jqxMenu){throw new Error("jqxLayout: Missing reference to jqxmenu.js.")}if(c.dockingLayout){e='<li id="floatOption'+f+'">Float</li>'}c._menu=a('<div class="'+c.toThemeProperty("jqx-layout-context-menu jqx-layout-context-menu-"+f)+'"><ul>'+e+'<li id="dockOption'+f+'">Dock</li><li id="autoHideOption'+f+'" style="white-space: nowrap;">Auto Hide</li><li id="closeOption'+f+'">Close</li></ul></div>');a("body").append(c._menu);c._menu.jqxMenu({theme:c.theme,width:100,height:"auto",autoOpenPopup:false,mode:"popup",popupZIndex:99999,rtl:c.rtl});c._menuInitialized=true;c._menu.on("itemclick",function(g){c._handleMenuItemClick(a(g.target).text())});function b(g){if(c.dockingLayout){return g.allowClose===false}else{return g.allowClose!==true}}c._menu.on("shown",function(){switch(c._contextMenuTarget.type){case"tabbedGroup":d(true,c._contextMenuTarget.allowPin===false||c._contextMenuTarget.pinValid===false,b(c._contextMenuTarget));break;case"layoutPanel":var g=c._contextMenuTarget.parent;if(g.type==="tabbedGroup"){d(true,g.allowPin===false||c._isMiddleTabbedGroup(g),b(g))}else{if(g.type==="autoHideGroup"){d(g.allowUnpin===false,true,b(c._contextMenuTarget))}}break;case"documentPanel":d(true,true,b(c._contextMenuTarget));break}})}},_addRightClickHandler:function(d,b){var c=this;if(c.contextMenu===true){c.addHandler(d,"mousedown.jqxLayout"+c.element.id,function(e){if(c.contextMenu===true&&((e.which&&e.which===3)||(e.button&&e.button===2))){var f=a(window).scrollTop(),g=a(window).scrollLeft();c._contextMenuTarget=b.current;c._menu.jqxMenu("open",parseInt(e.clientX,10)+5+g,parseInt(e.clientY,10)+5+f)}});c.addHandler(d,"contextmenu.jqxLayout"+c.element.id,function(){if(c.contextMenu===true){return false}})}},_handleMenuItemClick:function(f){var e=this,c=e._contextMenuTarget.type,b=e._contextMenuTarget.parent;switch(f){case"Float":switch(c){case"tabbedGroup":e.dockingLayout._floatTabbedGroup(e._contextMenuTarget,e._contextMenuTarget.widget);break;case"layoutPanel":if(b.type==="tabbedGroup"){e.dockingLayout._removeByDragHandler(undefined,b,b.widget,e._contextMenuTarget.index,false)}else{if(b.type==="autoHideGroup"){var d=e._contextMenuTarget.parent.widget.find(".jqx-ribbon-content").children().eq(e._contextMenuTarget.index).find(".jqx-layout-window").children().eq(1).contents();e.dockingLayout._floatAutoHideGroup(e._contextMenuTarget,e._contextMenuTarget.title,d)}}break;case"documentPanel":e.dockingLayout._removeByDragHandler(undefined,b,b.widget,e._contextMenuTarget.index,false);break}break;case"Dock":e._unPin(e._contextMenuTarget.parent);break;case"Auto Hide":switch(c){case"tabbedGroup":e._pin(e._contextMenuTarget);break;case"layoutPanel":e._pin(e._contextMenuTarget.parent);break}break;case"Close":switch(c){case"tabbedGroup":e._close(e._contextMenuTarget);break;case"layoutPanel":if(e._contextMenuTarget.parent.items.length>1){e._close(e._contextMenuTarget)}else{e._close(e._contextMenuTarget.parent)}break;case"documentPanel":e._closeDocumentPanel(e._contextMenuTarget.index,e._contextMenuTarget.parent.items,e._contextMenuTarget.parent,e._contextMenuTarget.parent.widget,false);break}}},_closeDocumentPanel:function(c,f,b,j,e){var g=this;if(e===false){j.jqxRibbon("removeAt",c)}if(f.length>1){var h=false;f[c].removed=true;g._updateLayout(f);for(var d=0;d<f.length;d++){if(f[d].selected===true){h=true;break}}setTimeout(function(){if(h===false){if(f[c]){j.jqxRibbon("selectAt",c)}else{j.jqxRibbon("selectAt",c-1)}}else{j.jqxRibbon("render")}},0)}else{g._close(b)}},_isMiddleTabbedGroup:function(b){return !(b.index===0||b.index===b.parent.items.length-1)},_validateTabbedGroup:function(c){var e=this,d=true;d=d&&c.parent.items.length>1;if(d){if(c.parent.items.length===2){var b=c.index===0?1:0;if(c.parent.items[b].type==="autoHideGroup"){d=false}}}if(d){d=d&&!e._isMiddleTabbedGroup(c)}c.pinValid=d;if(d===false){c.widget.find(".jqx-layout-pseudo-window-pin-background").addClass("jqx-fill-state-disabled")}},_mouseupHandler:function(d){var c=this;try{if(c.dockingLayout){c._docUP(d);c.dockingLayout._windowCreate=false;c.dockingLayout._hideOverlays()}}catch(b){}}})})(jqxBaseFramework);