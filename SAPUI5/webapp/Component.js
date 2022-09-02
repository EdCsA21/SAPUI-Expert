//@ts-nocheck
sap.ui.define([
    //"sap/ui/core/mvc/Controller",
    //"sap/m/MessageToast",
  //  "sap/ui/model/json/JSONModel"
    "dtt/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent"
],
//@param{typeof sap.ui.core.mvc.Controller} Controller
//@param{typeof sap.m.MessageToast} MessageToast
/**
     * @param{dtt/SAPUI5/model/Models} Models
     * @param{sap.ui.model.resource.ResourceModel} ResourceModel
     * @param{sap.ui.core.UIComponent} UIComponent
     */
    function (Models, ResourceModel, UIComponent) {
        return UIComponent.extend("dtt.SAPUI5.Component", {
            //MetaData
            metadata:{manifest:"json"
 //               "rootView":{
 //                   "viewName":"dtt.SAPUI5.view.App",
 //                   "type":"XML",
 //                   "async":true,
 //                   "id":"app"
 //               }
            },
            init: function(){
                UIComponent.prototype.init.apply(this, arguments);
                //var oData = {
                //    recipient:{
                  //      name:"World"
                    //}
                //};
                //var oModel = new JSONModel(oData);
               // this.getView().setModel(oModel);
               this.setModel(Models.createRecipient());
               var i18nModel = new ResourceModel({bundleName:"dtt.SAPUI5.i18n.i18n"});
               this.setModel(i18nModel,"i18n");
            }
        });
    });    