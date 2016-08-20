sap.ui.define([
  "sap/ui/core/Icon",
  "sap/ui/core/Control",
  "sap/m/ComboBox",
  "sap/m/Label",
  "sap/m/Button",
  "sap/ui/core/ListItem"

], function (Icon, Control, ComboBox, Label, Button, ListItem) {
  "use strict";
  return ListItem.extend('sap.ui.demo.wt.control.ComboCustom', {
    metadata: {
      properties: {

      },
      aggregations: {
        // _icon: {
        //   type: "sap.ui.core.Icon",
        //   multiple: false
        // }
      },
      events: {

      }
    },

    init : function () {
      this.setAggregation("_icon", new Icon({
        src: "sap-icon://world"
      }));
    },

    renderer : function (oRM, oControl) {
      oRM.write("<div");
      oRM.writeControlData(oControl);
      oRM.writeClasses();
      oRM.write(">");
      // oRM.renderControl(oControl.getAggregation("_icon"));
      oRM.write("</div>");
    }
  });
});
