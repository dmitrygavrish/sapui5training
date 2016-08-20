sap.ui.define([
		'jquery.sap.global',
		"sap/ui/demo/wt/model/formatter",
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/m/MessageToast"
	], function(jQuery, formatter, Controller, JSONModel, Filter, FilterOperator, MessageToast) {
	"use strict";
 
	var TableController = Controller.extend("sap.ui.demo.wt.controller.ColumnTable", {
		formatter: formatter,

		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

		onFilterTable : function(oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");

			if (sQuery) {
				aFilter.push( new Filter([
					new Filter("ProductName", FilterOperator.Contains, sQuery),
					new Filter("ShipperName", FilterOperator.Contains, sQuery)
				]));
			}

			// filter binding
			var oList = this.getView().byId("idProductsTable");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		onRatingChange : function (oEvent) {
			var fValue = oEvent.getParameter("value");
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
		},

		productListFactory : function(sId,oContext) {
			var oUIControl = null;

			oUIControl = new sap.m.ColumnListItem(sId, {
				cells: [
					new sap.m.ObjectIdentifier({
						title: "{invoice>ProductName}"
					}),
					new sap.m.Text({
						text: "{invoice>ShipperName}"
					}),
					new sap.ui.core.Icon({
						src: "sap-icon://{invoice>IconName}",
						color: {
							path: 'invoice>ShipperName',
							formatter: formatter.statusColor
						}
					}),
					new sap.m.ObjectNumber({
						number: {
							parts: [{path: 'invoice>ExtendedPrice'}, {path: 'view>/currency'}],
							type: 'sap.ui.model.type.Currency',
							formatOptions: {
								showMeasure: false
							}
						},
						unit: "{view>/currency}",
						state: {
							path: 'invoice>ExtendedPrice',
							formatter: formatter.statusNumber
						}
					})
				]
			});

			oUIControl.setBindingContext(oContext);

			return oUIControl;
		} 
	});
 
 
	return TableController;
 
});