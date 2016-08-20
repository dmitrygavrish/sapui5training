sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/Filter',
		'sap/ui/model/json/JSONModel',
		"sap/ui/core/IconPool"
	], function(jQuery, Fragment, Controller, Filter, JSONModel, IconPool) {
	"use strict";
 
	var CController = Controller.extend("sap.ui.demo.wt.controller.IconChoose", {
 		onInit: function() {
 			var sURI = sap.ui.core.IconPool.getIconNames();
      		var mapped = sURI.map(function(item) {
       		return { "iconName": item };
     		 });
      		var iconModel = new JSONModel(mapped);
      		this.getView().setModel(iconModel, "icons");
 		},
		onExit : function () {
			if (this._oDialog) {
				this._oDialog.destroy();
			}
		},
 
		handleSelectDialogPress: function (oEvent) {
			if (! this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sap.ui.demo.wt.view.IconDialog", this);
				this._oDialog.setModel(this.getView().getModel("icons"));
				this.getView().addDependent(this._oDialog);
			}
 
			// Multi-select if required
			var bMultiSelect = !!oEvent.getSource().data("multi");
			this._oDialog.setMultiSelect(bMultiSelect);
 
			// Remember selections if required
			var bRemember = !!oEvent.getSource().data("remember");
			this._oDialog.setRememberSelections(bRemember);
 
			// clear the old search filter
			this._oDialog.getBinding("items").filter([]);
 
			// toggle compact style
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
			// oEvent.addDependent(this._oDialog);
			this._oDialog.open();
		},
 
		handleSearch: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Name", sap.ui.model.FilterOperator.Contains, sValue);
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},
 
		handleClose: function(oEvent) {
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts.length) {
				MessageToast.show("You have chosen " + aContexts.map(function(oContext) { return oContext.getObject().Name; }).join(", "));
			};
			oEvent.getSource().getBinding("items").filter([]);
		}
	});
 
 
	return CController;
 
});