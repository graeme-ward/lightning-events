({
	appEvtHandler : function(component, event) {

        // set attribute on handler component with parameters from event    
        var appEvtInput = event.getParam("appEvtInput");
        component.set("v.appEvtOutput", appEvtInput);

        if(appEvtInput != ''){
            component.set("v.appEvtTrue", true);
        }else{
            component.set("v.appEvtTrue", false);
        }

    }
})