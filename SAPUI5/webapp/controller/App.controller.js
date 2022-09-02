//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
  //  "sap/ui/model/json/JSONModel"
  //  "dtt/SAPUI5/model/Models",
    //"sap/ui/model/resource/ResourceModel"
],
    /**
     * @param{typeof sap.ui.core.mvc.Controller} Controller
     * @param{typeof sap.m.MessageToast} MessageToast
     * @param{dtt/SAPUI5/model/Models} Models
     * @param{sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast) {
        return Controller.extend("dtt.SAPUI5.controller.App", {
            onInit: function(){
                
                //var oData = {
                //    recipient:{
                  //      name:"World"
                    //}
                //};
                //var oModel = new JSONModel(oData);
               // this.getView().setModel(oModel);
               //var i18nModel = new ResourceModel({bundleName:"dtt.SAPUI5.i18n.i18n"});
               //this.getView().setModel(i18nModel,"i18n");
               //this.getView().setModel(Models.createRecipient());
            },
            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMSG = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show(sMSG);
                //alert("Hello World!");
            }
        });
    });