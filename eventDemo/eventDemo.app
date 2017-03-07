<aura:application >
    <aura:attribute name="compEvtOutput" type="String" />
    <aura:attribute name="compEvtTrue" type="Boolean" />

    <!-- component event handler -->
    <!-- component event handler must have same name as the name attribute on the event registration -->
    <aura:handler name="compEvtName" event="c:compEvt" action="{!c.compEvtHandler}" />

    <div class="container">
       
        <h1 class="title">Event Application</h1>
        <h2>Parent Component</h2>
        <p class="{!v.compEvtTrue ? '' : 'inactive'}">"{!v.compEvtOutput}" is captured here first</p>

        <div class="middle-parent">

            <c:bubbleComp>
                <c:talkingComp />
            </c:bubbleComp>

        </div>

        <div class="final-handler">
            <c:listeningComp compEvtOutput="{!v.compEvtOutput}"
                            compEvtTrue = "{!v.compEvtTrue}"/>
        </div>

    </div>

</aura:application>