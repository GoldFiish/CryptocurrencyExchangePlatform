(window.webpackJsonp=window.webpackJsonp||[]).push([["symbolsearch"],{HBUj:function(t,e,i){},m5UM:function(t,e,i){"use strict";(function(e){function n(){if("undefined"==typeof tradingService)return null;var t=tradingService();return t&&t.connectStatus()===CONNECTSTATUSES.CONNECTED?t.activeBroker():null}function s(){var t=n();if(t&&t.metainfo().configFlags.supportSymbolSearch)return t.metainfo().symbolSearchId||t.metainfo().id.toLowerCase()}function o(t){return k[{"EURONEXT AMSTERDAM":"EURONEXTAMS","EURONEXT BRUSSELS":"EURONEXTBRU","EURONEXT LISBON":"EURONEXTLIS","EURONEXT PARIS":"EURONEXTPAR"}[t.exchange]||t.prefix||t.exchange]||t.exchange||""}function r(t,e){return e in t||(t[e]="bitcoin"===e||"crypto"===e?window.t("crypto"):window.t(e)),t[e]}var a,l,c,p,u,h,d,g,f,_,m,y,v,b,S,E,I,x,T,w,C,k,R,L;i("jgM0"),i("HBUj"),a=i("PT1i").linking,l=i("qdOW"),c=i("6et/"),p=i("c2JX").Spinner,u=i("glKZ"),h=i("dTSQ").regExpEscape,d=i("ePL1"),g=i("wmOI"),f=i("+GxX").isFeatureEnabled,_=i("GAqT").TVOldDialogs,m=i("jAh7").getRootOverlapManager,y=i("0waE").guid,v=i("h24c"),b=v.sanitizeIntervalValue,S=v.canShowSpreadActions,E=v.skipAccept,I=v.syncSymbolSearch,x=v.setLinkingResolution,T=v.globalKeypressMatches,w=f("futures-descriptions"),C='<div class="symbol-block"><div class="spread-actions"></div><div class="symbol-block-inputspacer"><input maxlength="'+1e3+'" /><div class="search-icon"></div></div></div><div class="filter"></div><div class="results"></div>',k={},R=/^(\w{3,4}) (\d{4})$/,L=function(){function t(i){var n,s,o;if(!(this instanceof t))throw new TypeError("SymbolSearch is a constructor");if(!(i=i||{}).dontUseInputParser&&e.enabled("symbol_search_parser_mixin"),this._inputElement=$(i.input).get(0),!this._inputElement)throw new TypeError("options.input must be a DOM element, jQuery object or selector");if(this.$list=$(i.list).eq(0),0===this.$list.size()&&delete this.$list,void 0!==i.callback){if("function"!=typeof i.callback)throw new TypeError("options.callback must be function");this._callback=i.callback}if(void 0!==i.onValueChanged){if("function"!=typeof i.onValueChanged)throw new TypeError("options.onValueChanged must be function");this._onValueChanged=i.onValueChanged}if(void 0!==i.onEmptyApply){if("function"!=typeof i.onEmptyApply)throw new TypeError("options.onEmptyApply must be function");this._onEmptyApply=i.onEmptyApply}if(i.ignoreInterval&&(this._ignoreInterval=!0),t.resetStoredInterval(),i.hidePro&&(this._hidePro=!0),i.allowMultipleSymbols&&(this._allowMultipleSymbols=!0),void 0!==i.onParse){if("function"!=typeof i.onParse)throw new TypeError("options.onParse must be function");this._onParse=i.onParse}for(this._state={},this._resolveViaSymbolSearchId=null,this.acceptEmpty=!!i.acceptEmpty,$(this._inputElement).data("symbol-search-instance",this),n=this._boundListener=this._eventListener.bind(this),s=this.boundTimeoutListener=function(t){setTimeout(function(){n(t)},0)},o=0;o<M.length;o++)M[o].immediate?$(this._inputElement).on(M[o].name,n):$(this._inputElement).on(M[o].name,s)
;this._boundOnKeyDown=this._onKeyDown.bind(this),this._boundOnKeyPress=this._onKeyPress.bind(this),$(this._inputElement).on("keydown",this._boundOnKeyDown).on("keypress",this._boundOnKeyPress),this._eventListener(),i.autoFocus&&t.registerAutoFocus(this)}function i(t,e){var i,n=ChartApiInstance.supportedSymbolsTypes();return s()&&(n=n.filter(function(t){return"quandl"!==t.value&&"economic"!==t.value})),i=TVSettings.getValue("symboledit.filter"),!n.some(function(t){return t.value===i})&&n.length>0&&(i=n[0].value),0!==n.length&&(n.forEach(function(n){var s=n.value,o=$('<a class="type-filter">').attr("href","#"+s).text($.t(n.name));s===i&&o.addClass("active"),o.on("click",function(i){i.preventDefault(),e.find(".type-filter").removeClass("active"),$(this).addClass("active"),t.typeFilter(s),TVSettings.setValue("symboledit.filter",s)}),o.appendTo(e)}),t.typeFilter(i),!0)}function v(t,e){var i,n,s,o=ChartApiInstance.supportedExchangesList();if(o.reduce(function(t,e){return t[e.value]=e.name,t},k),s=TVSettings.getValue("symboledit.exchangefilter"),i=/_MINI$/.test(s)?"":s,"bovespa"!==TradingView.widgetCustomer)return 0!==o.length&&(n=$('<div id="exchange-filter" class="exchange-filter">').appendTo(e),V(t,o,i,n),t.setExchangeFilter(i),!0)}function L(t){var e=v(t,t.$filterContainer);return t.selectExchangeFilter(),e}function A(t,e,i){this._container=t,this._tickerRegExp=e,this._translationCache=i,this._exchangeNameCache=this._roots={},this._itemsByTicker={}}var F,O,V,D,P,M=[{name:"input",immediate:!0},{name:"sync",immediate:!0},{name:"keypress"},{name:"keydown"},{name:"keyup"},{name:"mousedown"},{name:"mouseup"},{name:"cut"},{name:"paste"}],N=!0;return N=!1,F=[/^e\-m/i],O=/<\/?[^>]+(>|$)/g,t.registerAutoFocus=function(e){if(e instanceof jQuery&&(e=e.data("symbol-search-instance")),!(e instanceof t))throw new TypeError("arg must be an SymbolSearch instance of jQuery input with bound SymbolSearch object");c.registerListener("symbolEdit",function(t){if(T(t)){t.preventDefault(),this.resetState(),this._skipAutoFocus=!0,this._inputElement.focus();var e=String.fromCharCode(t.charCode);"function"==typeof this._setInputValue?this._setInputValue(e):this._inputElement.value=e,this._eventListener()}}.bind(e))},t.prototype.searchRequestDelay=0,t.setSearchRequestDelay=function(e){t.prototype.searchRequestDelay=e},t.prototype.resetState=function(){this._state={}},t.prototype.typeFilter=function(t){if(!(arguments.length>0))return this._state.typeFilter;t!==this._state.typeFilter&&(null==t?delete this._state.typeFilter:this._state.typeFilter=t+"",delete this._state.keepListFor,this._onSelectionChanged(),this.selectExchangeFilter())},t.prototype.setExchangeFilter=function(t){t!==this._state.exchangeFilter&&(null==t?delete this._state.exchangeFilter:this._state.exchangeFilter=t+"",delete this._state.keepListFor,this._onSelectionChanged())},t.prototype.setTradableFilter=function(t){t!==this._state.tradableFilter&&(this._state.tradableFilter=t,this._onSelectionChanged())},t.prototype.getExchangeFilter=function(){return this._state.exchangeFilter},
t.prototype.destroy=function(){$(this._inputElement).off(),$(this._inputElement).removeData("symbol-search-instance")},t.prototype._moveSelection=function(t,e){var i,n,s,o,r,a,l,c;this.$list&&(n=(i=this.$list.find("table.symbol-edit-popup")).find("tr:not(.hidden)"),(o=0!==(s=i.find("tr.symbol-edit-popup-active").removeClass("symbol-edit-popup-active")).length?n.index(s):-1)!==(r=1===t?s.get(0)===n.get(-1)?0:o+t:Math.max(-1,o+t))&&(a=n.get(r))&&(l=this._getItemByElement(a),A.isRoot(l)?(c=a.getAttribute("data-root"),a.classList.add("symbol-edit-popup-active"),this._scrollHighlightIntoView(),c?(this._state.highlightedItem=null,this._selectedGroupRoot=c):(this._state.highlightedItem=l,this._replaceCurrentSymbol(e))):(delete this._selectedGroupRoot,this._highlightItem(l,!0,e))))},t.prototype._groupToggleCollapsed=function(t,e){this._groupListHandler&&this._groupListHandler.toggleCollapsed(t,e)},t.prototype._onKeyDown=function(t){t.keyCode!==g.DOWN_ARROW&&t.keyCode!==g.UP_ARROW||(this._moveSelection(t.keyCode===g.DOWN_ARROW?1:-1,!0),t.preventDefault(),t.stopPropagation()),t.keyCode===g.ENTER&&t.stopPropagation(),!this._selectedGroupRoot||t.keyCode!==g.LEFT_ARROW&&t.keyCode!==g.RIGHT_ARROW||(this._groupToggleCollapsed(this._selectedGroupRoot,t.keyCode===g.LEFT_ARROW),t.preventDefault())},t.prototype._onKeyPress=function(t){if(t.keyCode===g.DOWN_ARROW||t.keyCode===g.UP_ARROW){if(t.charCode)return;if(this._boundOnKeyDown)return $(this._inputElement).off("keydown",this._boundOnKeyDown),delete this._boundOnKeyDown,void t.preventDefault();this._moveSelection(t.keyCode===g.DOWN_ARROW?1:-1),t.preventDefault()}t.keyCode===g.ENTER&&(this._selectedGroupRoot?(this._groupToggleCollapsed(this._selectedGroupRoot,!1),t.preventDefault()):this.acceptTypeIn())},t.prototype._eventListener=function(t,i){var n,s,o,r,a,l=this._inputElement,c=this._getInputValue();e.enabled("uppercase_instrument_names")&&(c=c.toUpperCase()),n=!1,s=!1,this._state.value!==c&&(this._state.hasOwnProperty("value")&&this._onValueChanged&&this._onValueChanged(c),this._state.value=c,n=!0,this._inputParserMixin&&this._inputParserMixin.parse()),this._fixIntervalCase(),o=this._limitInputSelectionValue("selectionStart"),this._state.selectionStart!==o&&(this._state.selectionStart=o,s=!0),r=this._limitInputSelectionValue("selectionEnd"),this._state.selectionEnd!==r&&(this._state.selectionEnd=r,s=!0),this._state.selectionDirection!==l.selectionDirection&&(this._state.selectionDirection=l.selectionDirection,s=!0),(n||s&&this._inputParserMixin)&&(this._onSelectionChanged(void 0,i),a=!1,this._getInputValue()!==this._state.value&&(this._setInputValue(this._state.value),a=!0),(a||this._state.selectionStart!==this._limitInputSelectionValue("selectionStart")||this._state.selectionEnd!==this._limitInputSelectionValue("selectionEnd"))&&l.setSelectionRange&&l.setSelectionRange(this._state.selectionStart,this._state.selectionEnd,this._state.selectionDirection))},t.prototype._fixIntervalCase=function(){if(this._selectionInsideInterval()){var e=t.detachInterval(this._inputElement.value)
;/[a-z]/.test(e.detached)&&(this._inputElement.value=e.rest+e.detached.toUpperCase())}},t.prototype._selectionInsideInterval=function(e){if(this._ignoreInterval)return!1;var i=t.detachInterval(this._inputElement.value);return!!i&&("string"==typeof e?this._inputElement[e]>i.rest.length:this._inputElement.selectionStart>i.rest.length&&this._inputElement.selectionEnd>i.rest.length)},t.prototype._limitInputSelectionValue=function(e){return this._selectionInsideInterval(e)?t.detachInterval(this._inputElement.value).rest.length:e in this._inputElement?this._inputElement[e]:this._inputElement.value.length},t.prototype._getInputValue=function(){if(this._ignoreInterval)return this._inputElement.value;var e=t.detachStoreInterval(this._inputElement.value);return $(this._inputElement).toggleClass("interval-error",t.intervalError()),e},t.prototype._setInputValue=function(e){this._ignoreInterval?this._inputElement.value=e:this._inputElement.value=t.recallAttachInterval(e)},t.prototype._onSelectionChanged=function(t,e){function i(t,e,i,n,o){s._state.contextTicker=t,s._state.contextExchange=e,s._state.contextType=i,s._state.contextTradable=o,s._state.keepListFor&&s._state.keepListFor===n||(s._getSuggestList(),delete s._state.keepListFor)}var n,s=this,o=F.some(function(t){return t.test(s._state.value)});!o&&(this._isSpreadInInput()||this._inputParserMixin&&!0!==e)?this._inputParserMixin.onSelectionChanged(i):this.$list&&(this._state._selectedTicker=null,n=this._state.value,this._isSpreadInInput()&&this._state.contextToken&&(n=this._state.contextToken.value),i(n,this.getExchangeFilter(),this._state.typeFilter,n,this._state.tradableFilter))},t.prototype._clearSelectionState=function(){delete this._state.contextTicker,delete this._state.contextExchange,delete this._state.contextType,delete this._state.contextToken,delete this._state.keepListFor},t.prototype._clearSearchTimeout=function(){this._searchTimeout&&(clearTimeout(this._searchTimeout),this._searchTimeout=null)},t.prototype._doGetSuggestList=function(){var t,e,i,n,o,r,a,l;this._clearSearchTimeout(),t=s(),e=this._state.contextTicker||"",i=this._state.contextExchange||this.getExchangeFilter()||"",n=this._state.typeFilter||"",o=t&&this._state.tradableFilter,r=this._getUnhideSymbolSearchGroups(),a=window.language||"",this._showLoading(),l=this,ChartApiInstance.searchSymbols(e,i,n,a,N,!1,t,o,r,function(t){e!==(l._state.contextTicker||"")||i!==(l._state.contextExchange||l.getExchangeFilter()||"")||n!==(l._state.typeFilter||"")||(n===d.types.QUANDL&&(t=l._processQuandlResponse(t)),l._renderSuggestList(t),l._onResponse(t))})},t.prototype._getSuggestList=function(){this._clearSearchTimeout(),this._searchTimeout=setTimeout(this._doGetSuggestList.bind(this),t.prototype.searchRequestDelay)},t.prototype._showLoading=function(){if(this.$list&&!this._spinner){this._clearSuggestList();var t=$('<div class="symbol-search-loading">').appendTo(this.$list);this._spinner=new p("medium").spin(t.get(0))}},t.prototype._groupContracts=function(t){var e,i,n,s,o,r=ChartApiInstance.futuresRegex(),a={},l=[]
;for(e=0;e<t.length;++e){if((i=t[e]).prefix||Array.isArray(i.contracts))return t;"futures"===i.type?(n=r.exec(i.symbol))?((s=n[1])in a?o=a[s]:(o=l.length,a[s]=o,l.push({type:i.type,symbol:s,exchange:i.exchange,description:i.description,full_name:i.exchange+":"+s,contracts:[]})),l[o].contracts.push(i)):l.push(i):l.push(i)}return l},t.prototype._renderSuggestList=function(i){var n,s,o,r,a,l,c,p,u,d;if(this.$list)if(i=this._groupContracts(i),w=f("futures-descriptions"),n=this,s=this._state,this._clearSuggestList(),o=h(s.contextTicker).trim(),r=new RegExp(o.replace(" ","|"),"i"+(o.length>1?"g":"")),delete s.highlightedItem,this._hidePro&&(i=i.filter(function(t){return!t.params||-1===t.params.indexOf("pro")})),0!==i.length){for((a=document.createElement("table")).setAttribute("class","symbol-edit-popup"),l={},c=new t.GroupListHandler(a,r,l),p=null,this._renderedResponse=[],u=0;u<i.length;u++)d=i[u],c.append(d),p||d.ticker!==s.contextTicker||d.exchange!==s.contextExchange||(p=d),this._renderedResponse.push(d);e.enabled("expand_symbolsearch_items")||c.collapse(),this._groupListHandler=c,p&&this._highlightItem(d),$(a).on("click","tr",function(t){if(!t.isDefaultPrevented()){t.preventDefault();var e=n._getItemByElement(this);e&&e.full_name&&(n._isSpreadInInput()?n._highlightItem(e,!0,!1):n.accept(e.full_name,e.ticker))}}).appendTo(this.$list)}else this.$list.html('<div style="text-align: center; padding: 7px 0; font-style: italic;">'+$.t("No symbols matched your criteria")+"</div>")},t.prototype._isEmptySuggestList=function(){return!Boolean(this._renderedResponse&&this._renderedResponse.length)},t.prototype._isSpreadInInput=function(){return this._inputParserMixin&&this._state.parsed&&this._state.parsed.length>1},t.prototype._getItemByElement=function(t){return this._renderedResponse&&this._groupListHandler?this._groupListHandler.getItemByTicker(t.getAttribute("data-item-ticker")):null},t.prototype._getElementByItem=function(t){return this._renderedResponse&&this.$list?this.$list.get(0).querySelector('tr[data-item-ticker="'+(t.ticker||t.full_name)+'"]'):null},t.prototype._highlightItem=function(t,e,i){var n,s,o=this._state;o.highlightedItem&&(n=this._getElementByItem(o.highlightedItem))&&$(n).removeClass("symbol-edit-popup-active"),o.highlightedItem=t,(s=this._getElementByItem(o.highlightedItem))&&($(s).addClass("symbol-edit-popup-active"),this._scrollHighlightIntoView()),e&&this._replaceCurrentSymbol(i)},t.prototype._scrollHighlightIntoView=function(){var t=this.$list.find("tr.symbol-edit-popup-active");t.length&&(t.offset().top<this.$list.offset().top?this.$list.scrollTop(this.$list.scrollTop()-(this.$list.offset().top-t.offset().top)):t.offset().top+t.outerHeight()>this.$list.offset().top+this.$list.outerHeight()&&this.$list.scrollTop(this.$list.scrollTop()+(t.offset().top+t.outerHeight()-(this.$list.offset().top+this.$list.outerHeight()))))},t.prototype._clearSuggestList=function(){this._renderedResponse=null,this._spinner&&(this._spinner.stop(),delete this._spinner),this.$list&&this.$list.empty()},
t.prototype._showErrorNotice=function(){this.$list&&(this._clearSuggestList(),this.$list.text("Invalid expression"))},t.prototype._replaceCurrentSymbol=function(t){var e,i,n,s,o=this._state;if(o.highlightedItem){if(e=o.highlightedItem,i="",n=0,this._isSpreadInInput()||this._inputParserMixin&&!0!==t){if(!(s=this._inputParserMixin.replaceCurrentSymbol(e)).ok)return;i=s.newValue,n=s.newCaretPos,o.keepListFor=s.keepListFor}else this._state._selectedTicker=e.ticker||e.symbol,o.keepListFor=this._state._selectedTicker,n=(i=!0===t&&e.full_name&&this._inputParserMixin?e.full_name:e.symbol).length;this._setInputValue(N?i.replace(O,""):i),this._inputElement.setSelectionRange?this._inputElement.setSelectionRange(n,n):this._inputElement.select(),this._eventListener(void 0,t)}},t.prototype.splitAndAcceptUserInput=function(){var t,e=this._getInputValue().split(",");for(t=0;t<e.length;t++)this.acceptSymbolIn(e[t])},t.prototype.acceptSymbolIn=function(t){var e,i;this._inputParserMixin?e=this._inputParserMixin.parseSymbol(t):(e=t,i=this._state._selectedTicker||t),this.accept(e,i)},t.prototype.acceptTypeIn=function(){this._allowMultipleSymbols?this.splitAndAcceptUserInput():this.acceptSymbolIn(this._getInputValue())},t.prototype.accept=function(e,i){var n=this,s=function(){if((i=i||e)||""===i&&n.acceptEmpty){delete n._state.keepListFor;var s=n._ignoreInterval?void 0:t.getInterval(!0);n._inputElement.value=e,n._eventListener(),n._callback&&n._callback(i,s),$(n._inputElement).trigger("accept-symbol",[i])}};s()},t.prototype.bindListWrapper=function(t){if(0===(t=$(t).eq(0)).size())throw new TypeError("element must be a DOM element, jQuery object or selector");this.$list=t,this._clearSelectionState(),this._eventListener()},t.prototype.removeListWrapper=function(){delete this.$list,this._clearSuggestList(),this._clearSelectionState(),this._eventListener()},t.prototype.selectExchangeFilter=function(){this.$filterContainer.find(".exchange-filter").hide(),this._state.typeFilter===d.types.QUANDL?this.$filterContainer.find("#quandl-filter").show():this._state.typeFilter!==d.types.ECONOMIC&&this.$filterContainer.find("#exchange-filter").show()},t.prototype._onResponse=function(t){t.length>0&&(this._state.typeFilter===d.types.QUANDL&&this._showNotification())},t.prototype._showNotification=function(){var t,e;TVSettings.getBool("symboledit.show_quandl_notification",!0)&&(t=$.t("Quandl is a huge financial database that we have connected to TradingView. Most of its data is EOD and is not updated in real-time, however the information may be extremely useful for fundamental analysis.")+' <a target="_blank" href="'+("fa"===window.locale?"http://blog.tradingview.com/?p=1530&lang=ru":"http://blog.tradingview.com/?p=1530")+'">'+$.t("Read our blog for more info!")+"</a>",(e=$('<div class="symbol-edit-notification">').prependTo(this.$list)).html(t),e.find("a").click(function(t){t.preventDefault();var e=$(this).attr("href");window.open(e,"_blank")}),$('<a class="close">').appendTo(e).click(function(){
TVSettings.setValue("symboledit.show_quandl_notification",!1),e.remove()}))},t.prototype._processQuandlResponse=function(t){return t.datasets.filter(function(t){return!t.premium}).map(function(t){return{description:t.name,exchange:t.database_code,full_name:"QUANDL:"+t.database_code+"/"+t.dataset_code,params:["eod"],symbol:t.dataset_code,type:"quandl"}})},t.prototype._getUnhideSymbolSearchGroups=function(){var t,e="",i=n();return i&&(t=i.metainfo().configFlags.supportUnhideSymbolSearchGroups,i.connectionStatus()===CONNECTSTATUSES.CONNECTED&&t&&(e=i.unhideSymbolSearchGroups().join(",")),tradingService().trackEvent("Symbol Search Tradable checkbox",s()&&this._state.tradableFilter?"on":"off")),e},t.prototype.forceFocus=function(){this._inputElement.focus()},t.createSuggestListRow=function(e,i,n,s){var a,l,c,p,u,h,d,g,f,_,m,y,v,b;return s||(s={}),a=document.createElement("tr"),l="symbol-edit-popup",s.addClass&&(l+=" "+s.addClass),a.setAttribute("class",l),c=!N||"quandl"===e.type,(p=document.createElement("td")).setAttribute("class","symbol-edit-popup-td name apply-overflow-tooltip apply-overflow-tooltip--allow-text"),u=c?e.symbol.replace(i,"<strong>$&</strong>"):e.symbol,h=s.nameContent||u,e.broker_symbol&&(h=h+" ("+(c?e.broker_symbol.replace(i,"<strong>$&</strong>"):e.broker_symbol)+")"),p.innerHTML=h,(d=document.createElement("td")).setAttribute("class","symbol-edit-popup-td desc apply-overflow-tooltip"),g=e.description.toUpperCase(),w&&e.contractDescription&&(g+=(f=R.exec(e.contractDescription))?" ("+r(n,f[1])+" "+f[2]+")":" ("+r(n,e.contractDescription)+")"),d.innerHTML=!c||i.test(e.symbol)?g:g.replace(i,"<strong>$&</strong>"),(_=document.createElement("td")).setAttribute("class","symbol-edit-popup-td type apply-overflow-tooltip"),m="",s.typeContent?m=s.typeContent:(e.params&&~e.params.indexOf("eod")&&(m='<i class="eod">eod</i>&nbsp;'),y=r(n,e.type),e.exchange?m+=y+" - "+o(e):m+=y),_.innerHTML=m,(v=document.createElement("td")).setAttribute("class","symbol-edit-popup-td flag apply-overflow-tooltip"),v.innerHTML=t.getItemFlag(e),(b=v.getElementsByTagName("svg")[0])&&b.setAttribute("class","flag"),a.appendChild(p),a.appendChild(d),a.appendChild(_),a.appendChild(v),a},t.getItemFlag=function(t){return""},V=function(t,i,n,s){!(i=l.displayedExchangesFilter(i)).some(function(t){return t.value===n})&&i.length>0&&(n=i[0].value);var o=$("<select>").appendTo(s);i.forEach(function(t){var e=t.value,i=t.name||e,s=t.desc||i,r=$("<option>").addClass("filter-item").attr("value",e).text($.t(i)).data("custom-option-text",$.t(s)).appendTo(o);t.value===n&&r.attr("selected",!0)}),o.change(function(){var e=$(this).val()||"";TVSettings.setValue("symboledit.exchangefilter",e),t.setExchangeFilter(e)}),o.selectbox({speed:0,useCustomPrependWithSelector:"after",customPrependSelectorClass:"exchange-with-flag",classHolder:"tv-unstyled-select-container tv-symbol-select",classOptions:e.enabled("symbol_search_three_columns_exchanges")?"sbOptions three-column-filter":"sbOptions"})},t.showDialog=function(e){var n,s,o,r,a,l,c,p,u,h,d,g;if(e=e||{},
n="Symbol Search",!_.get(n))return s=_.createDialog(n,{hideTitle:!0,hideCloseCross:!0,dragHandle:".filter",width:"750px",dragOptions:{cancel:".sbOptions"},content:C,ownerDocument:e.ownerDocument}),_.positionDialog(s),r=(o=s.find("._tv-dialog-content").addClass("symbol-search-dialog")).find(".results"),a=o.find("input").get(0),e.initialValue&&(a.value=e.initialValue),"selectionStart"in a&&(a.selectionStart=a.selectionEnd=a.value.length),a.focus(),S()&&(e.ignoreInterval||(c=t.getInputValueGetter(a),p=t.getInputValueSetter(a)),l=SymbolSearchInputParserMixin.addSpreadActions(o.find(".spread-actions"),a,c,p)),u=new t({input:a,list:o.find(".results").get(0),callback:function(t,i){e.callback&&e.callback(t,i),_.destroy(n)},onParse:l,ignoreInterval:e.ignoreInterval}),h=o.find(".filter"),u.$filterContainer=h,d=i(u,h),g=L(u),d||g||h.attr("style","display: none"),_.resizeContent(s.height(),r),_.applyHandlers(s),_.positionDialog(s),s.on("destroy",function(){TVSettings.setValue("symboledit.dialog_last_entry",a.value)}),s},t.bindToInput=function(n,s){function o(){b&&(h.removeWindow(c),R.removeListWrapper(),b.off(),b.remove(),b=null,u.hide(),"function"==typeof s.onPopupClose&&s.onPopupClose())}function r(t){t.preventDefault()}function l(t){I(n,t),R.resetState()}var c,p,h,d,f,_,v,b,T,w,C,k,R,A,F,O;return s=s||{},n=$(n).eq(0),c=y(),p=n.prop("ownerDocument"),h=s.overlapManager||m(p),d=s.callback,f=null,_=null,v=!1,b=null,(w=s.spreadActions&&$(s.spreadActions).eq(0))&&w.size()&&S()&&(s.ignoreInterval||(C=t.getInputValueGetter(n.get(0)),k=t.getInputValueSetter(n.get(0))),T=SymbolSearchInputParserMixin.addSpreadActions(w,n.get(0),C,k)),R=new t({input:n,onValueChanged:function(){var t,n,o,a,l;b||(t=h.ensureWindow(c,{position:"relative"}),n=function(t,e){var n,s,o,r,a,l,c,p,u,h=$('<div class="symbol-edit-popup">').appendTo(e),d=$('<div class="filter">').appendTo(h);return t.$filterContainer=d,i(t,d),L(t),n=$('<div class="table-wrapper">').appendTo(h),o=(s=$(t._inputElement)).offset(),r=0,a=Math.max(0,Math.min(o.left+r,$(window).width()-h.outerWidth())),h.css("left",a+"px"),h.css("top",o.top+s.outerHeight()+1),l=d.outerHeight(),c=$(window).scrollTop(),p=s.height(),u=(TradingView.isMobile.any()?parseInt(window.screen.height,10):parseInt($(window).height(),10))-(o.top-c)-p/2,n.css("maxHeight",u-p-l+"px"),{popup:h,listWrapper:n}}(R,t),b=n.popup,R.bindListWrapper(n.listWrapper),b.on("focus",r),b.on("click",r),b.on("mousedown",r),b.on("focus","*",r),b.on("click","*",r),b.on("mousedown","*",r),"function"==typeof s.onPopupOpen&&s.onPopupOpen(n.popup)),e.enabled("charting_library_base")&&(o=this._state).keepListFor&&(o.highlightedItem?(a=o.highlightedItem,l=this._getInputValue(),e.enabled("uppercase_instrument_names")&&(l=l.toUpperCase()),a.symbol!==l&&delete this._state.keepListFor):delete this._state.keepListFor)},callback:function(t,e){o(),"function"==typeof _&&_(t,e)||("function"==typeof d&&d(t,e),"function"==typeof f&&f(t,e)),s.clearAfterAccept&&n.val(""),s.keepFocus?n.get(0).focus():n.get(0).blur(),R.resetState()},hidePro:s.hidePro,
autoFocus:s.autoFocus,onEmptyApply:s.onEmptyApply,onParse:T,acceptEmpty:s.acceptEmpty,dontUseInputParser:s.dontUseInputParser,allowMultipleSymbols:s.allowMultipleSymbols,ignoreInterval:s.ignoreInterval}),A=!1,F=!0,TradingView.isMobile.iOS()&&$("body").css("cursor","pointer"),n.on("focus",function(t,e){A=!0,v=!0,R._skipAutoFocus?delete R._skipAutoFocus:setTimeout(function(){A&&n.get(0).select()},0)}),n.on("blur",function(t){var e,i,s,r,a=this;if(b&&(e=document.activeElement,i=b.is(e),s=b.has(e).length>0,(-1!==navigator.userAgent.indexOf("Trident")||-1!==navigator.userAgent.indexOf("MSIE"))&&(i||s)))return t.preventDefault(),t.stopImmediatePropagation(),void setTimeout(function(){n.focus()},0);TradingView.isMobile.iOS()&&F&&(F=!1,A=!0),TradingView.isMobile.iOS()&&A&&null===t.relatedTarget?(r=function(t){$(t.target).closest(b).length||($(a).is($(t.target))?$(document).off("touchend","body",r):(A=!1,setTimeout(function(){o(),$(document).off("touchend","body",r)},0)))},$(document).on("touchend","body",r)):A=!1,setTimeout(function(){A||o()},0)}),s.syncWithChartWidget&&(l(!0),a.seriesShortSymbol.subscribe(function(){l(!0)}),f=function(t,e){v=!(t||e),t&&a.symbol.setValue(t),e&&x(e)},_=E,s.syncOnBlur&&n.on("blur",function(){v&&(l(!0),v=!1)}),O=function(){n.get(0).blur(),l(!1)},n.on("keypress",function(t){t.keyCode===g.ESC&&O()}),n.on("keydown",function(t){t.keyCode===g.ESC&&O()})),R},A.isRoot=function(t){return!(!t||!Array.isArray(t.contracts))},A.prototype.addRoot=function(t,e){var i,n;this._currentTbody=null,i=document.createElement("tbody"),this._container.appendChild(i),n=this,e.addEventListener("click",function(i){i.preventDefault(),e.classList.contains("collapsed")?n.expand(t):n.collapse(t)}),e.setAttribute("data-root",t),i.appendChild(e),this._roots[t]={titleRow:e,tbody:i}},A.prototype.append=function(e){var i,n,s,a,l,c=null,p=null;if(A.isRoot(e))for(i=e.symbol,n=(e.exchange||"unknown")+"_"+i,c=t.createSuggestListRow(e,this._tickerRegExp,this._translationCache,{nameContent:"<div>"+(N?i:i.replace(this._tickerRegExp,"<strong>$&</strong>"))+"</div>",typeContent:r(this._translationCache,e.type)+(e.exchange&&" - "+o(e)),addClass:"group-title"}),this._roots[n]||this.addRoot(n,c),s=0;s<e.contracts.length;++s)a=e.contracts[s],l=t.createSuggestListRow(a,this._tickerRegExp,this._translationCache),p=a.ticker||a.full_name,this._itemsByTicker[p]=a,l.setAttribute("data-item-ticker",p),this._roots[n].tbody.appendChild(l);else this._currentTbody||(this._currentTbody=document.createElement("tbody"),this._container.appendChild(this._currentTbody)),c=t.createSuggestListRow(e,this._tickerRegExp,this._translationCache),this._currentTbody.appendChild(c);p=e.ticker||e.full_name,this._itemsByTicker[p]=e,c.setAttribute("data-item-ticker",p)},A.prototype.toggleCollapsed=function(t,e){var i;if(t)(i=this._roots[t])&&($(i.titleRow).toggleClass("collapsed",!!e),$(i.tbody).find("tr:not(.group-title)").toggleClass("hidden",!!e));else for(t in this._roots)this.toggleCollapsed(t,e)},A.prototype.collapse=function(t){this.toggleCollapsed(t,!0)},
A.prototype.expand=function(t){this.toggleCollapsed(t,!1)},A.prototype.getItemByTicker=function(t){return this._itemsByTicker[t]||null},t.GroupListHandler=A,t.detachInterval=function(t){var e=/,[^,]*$/i.exec(t)||[];if(e[0])return{rest:t.substr(0,t.length-e[0].length),detached:e[0]}},D="",P=null,t.resetStoredInterval=function(){D="",P=null},t.detachStoreInterval=function(e){var i=t.detachInterval(e);return i?(D=i.detached,P=b(D),i.rest):(t.resetStoredInterval(),e)},t.recallAttachInterval=function(t){return t+D},t.getInterval=function(e){var i=P;return!0===e&&t.resetStoredInterval(),i},t.getInputValueGetter=function(e){return function(){return t.detachStoreInterval(e.value)}},t.getInputValueSetter=function(e){return function(i){e.value=t.recallAttachInterval(i)}},t.intervalError=function(){return!(!D||/^,\s*$/.test(D)||P)},t}(),t.exports=L}).call(this,i("Kxc7"))},qdOW:function(t,e,i){"use strict";var n=i("Kxc7");t.exports.displayedExchangesFilter=function(t){return n.enabled("symbol_search_limited_exchanges")&&(t=t.filter(function(t){return!("bitcoin"===t.flag||t.hideInSymbolSearch)})),t},t.exports.sortExchangesListByFlagIfNeeded=function(t){return t}}}]);