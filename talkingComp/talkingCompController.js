({
	fireCompEvt : function(component, event) {
        
        // get event parameters
        var compEvtInput = component.get("v.compEvtInput");
        
        // define the event (component event uses component.getEvent)
        var compEvt = component.getEvent("compEvtName");

        // set event parameters
        compEvt.setParams({"compEvtInput": compEvtInput });
        
        // fire event
        compEvt.fire();
    
    },

    fireAppEvt : function(component, event) {
    
        // get event parameters
        var appEvtInput = component.get("v.appEvtInput");
        
        // define the event (application event uses $A.get)
        var appEvt = $A.get("e.c:appEvt");

        // set event parameters
        appEvt.setParams({"appEvtInput": appEvtInput });
        
        // fire event
        appEvt.fire();
    
    }
})