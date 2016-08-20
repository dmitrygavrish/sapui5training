sap.ui.define([
  'jquery.sap.global',
  'sap/m/MessageToast',
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel'
], function(jQuery, MessageToast, Controller, JSONModel) {
  "use strict";

  return Controller.extend("sap.ui.demo.wt.controller.ComboBox", {

    onInit : function () {
      var oViewModel = new JSONModel({
        currency: "EUR"
      });
      this.getView().setModel(oViewModel, "view");
    }
  });
});
