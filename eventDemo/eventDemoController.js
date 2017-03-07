({
	compEvtHandler : function(component, event) {
	
        // set attribute on handler component with parameters from event    
        var compEvtInput = event.getParam("compEvtInput");
        component.set("v.compEvtOutput", compEvtInput);

        if(compEvtInput != ''){
            component.set("v.compEvtTrue", true);
        }else{
            component.set("v.compEvtTrue", false);
        }
    }
})