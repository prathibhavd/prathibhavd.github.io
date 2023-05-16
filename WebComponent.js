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
			//draw();
            /*this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
            }); */          
        }

        fireChanged() {
           
            
        }        
		
		
        
    }
	
	function draw() {
			const canvas = document.querySelector('#canvas');
			
			if(!canvas.getContext){
				Console.log("No Context...returning");
				return;

			}
			
			const ctx = canvas.getContext('2d');
			
			var projectedval = 10000;
			var currentval = 5000;
			
			ctx.lineWidth = 3;
			ctx.strokeStyle = '488CCC';
			
			var glassSideLength = 300;
			var galssBaseWidth = 250;
			var startPointX = 100;
			var startPointY = 100;
			var endPointX = 150;
			var endPointY = 400;
			
			//glass left line
			ctx.beginPath();
			ctx.moveTo(startPointX,startPointY);
			ctx.lineTo(endPointX,endPointY);
			ctx.stroke();
			
			//glass right line
			ctx.beginPath();
			ctx.moveTo(endPointY,startPointX);
			ctx.lineTo(startPointY + galssBaseWidth,endPointY);
			ctx.stroke();

			//glass base line
			ctx.beginPath();
			ctx.moveTo(endPointX,endPointY);
			ctx.lineTo(startPointY + galssBaseWidth,endPointY);
			ctx.stroke();
			
			//glass eclipse at top
			ctx.beginPath();
			ctx.ellipse(250, 100, 50, 150, Math.PI / 2, 0, 2 * Math.PI);
			ctx.strokeStyle = '#488CCC';
			ctx.stroke();
			
			var fillpercent = projectedval / currentval;
			
			ctx.strokeStyle = '488CCC';
			ctx.lineWidth = 3;
			
			//inside glass left line
			ctx.beginPath();
			ctx.moveTo(startPointX +(endPointX - startPointX)/fillpercent + 1,startPointY + (endPointY-startPointY)/fillpercent + 1);
			ctx.lineTo(endPointX + 1,endPointY - 1);
			ctx.stroke();
			
			//glass base line
			ctx.beginPath();
			ctx.moveTo(endPointX+1,endPointY+1);
			ctx.lineTo(startPointY + galssBaseWidth + 1,endPointY - 1);
			ctx.stroke();
			
			//inside glass right line
			ctx.beginPath();
			ctx.moveTo(endPointY + (startPointY + galssBaseWidth - endPointY)/fillpercent,startPointX + (endPointY - startPointX)/fillpercent);
			ctx.lineTo(startPointY + galssBaseWidth,endPointY);
			ctx.stroke();
			
			//inside glass top line
			ctx.beginPath();
			ctx.moveTo(startPointX +(endPointX - startPointX)/fillpercent,startPointY + (endPointY-startPointY)/fillpercent);
			ctx.lineTo(endPointY + (startPointY + galssBaseWidth - endPointY)/fillpercent,startPointX + (endPointY - startPointX)/fillpercent);
			ctx.stroke();
		}
		
		
    customElements.define('glasschart-webcomponent', GlassChartWebComponent);
})();
