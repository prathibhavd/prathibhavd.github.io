(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<label for="ProjectedValue">Projected Value</label>` ;   
   
    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            
              
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
                 
        }

     
        
    }

    customElements.define('custom-button', PerformanceHelp);
})();
