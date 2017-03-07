({
    bubbleEvtHandler : function(component, event) {
        
        // set attribute on handler component with parameters from event    
        var compEvtInput = event.getParam("compEvtInput");
        component.set("v.bubbleEvtOutput", compEvtInput);
        
        if(compEvtInput != ''){
            component.set("v.bubbleEvtTrue", true);
        }else{
            component.set("v.bubbleEvtTrue", false);
        }

    },

    captureEvtHandler : function(component, event) {
    
        // set attribute on handler component with parameters from event    
        var compEvtInput = event.getParam("compEvtInput");
        component.set("v.captureEvtOutput", compEvtInput);
        
        if(compEvtInput != ''){
            component.set("v.captureEvtTrue", true);
        }else{
            component.set("v.captureEvtTrue", false);
        }

    }
})
