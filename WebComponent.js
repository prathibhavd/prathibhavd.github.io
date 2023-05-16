(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    ` <label for="ProjectedValue">Projected Value</label>` ; 
  
    class GlassChartWebComponent extends HTMLElement {
        constructor() {
            super();
            this.init();    
        }
		
		connectedCallback() {
		
		}

        init() {            
              
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
		          
        }

  	
        
    }			
		
    customElements.define('glasschart-webcomponent', GlassChartWebComponent);
})();
