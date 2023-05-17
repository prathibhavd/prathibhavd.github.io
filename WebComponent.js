(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<label for="ProjectedValue">Glass Chart</label>` ;   
   
    class GlassChart extends HTMLElement {
        constructor() {
            super();
            this.init(); 
            
        }

        init() {            
	     console.log("In init...");   
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            var width = document.getElementsByTagName('custom-glasschart')[0]. style. width;
	    var height = document.getElementsByTagName('custom-glasschart')[0]. style. height;     
	    console.log("width = " + width + " height = " + height); 
        }

      connectedCallback() {
            console.log("In connectedCallback..."); 
	    
        }
        
    }
	
    function linedraw(ax,ay,bx,by)
	{
    if(ay>by)
    {
        bx=ax+bx;  
        ax=bx-ax;
        bx=bx-ax;
        by=ay+by;  
        ay=by-ay;  
        by=by-ay;
    }
    var calc=Math.atan((ay-by)/(bx-ax));
    calc=calc*180/Math.PI;
    var length=Math.sqrt((ax-bx)*(ax-bx)+(ay-by)*(ay-by));
    document.body.innerHTML += "<div id='line' style='height:" + length + "px;width:1px;background-color:black;position:absolute;top:" + (ay) + "px;left:" + (ax) + "px;transform:rotate(" + calc + "deg);-ms-transform:rotate(" + calc + "deg);transform-origin:0% 0%;-moz-transform:rotate(" + calc + "deg);-moz-transform-origin:0% 0%;-webkit-transform:rotate(" + calc  + "deg);-webkit-transform-origin:0% 0%;-o-transform:rotate(" + calc + "deg);-o-transform-origin:0% 0%;'></div>"
	}
    
    function draw() {   
	    		/*
			var c = this._shadowRoot.getElementById("mycanvas");
			
	    		var ctx = c.getContext("2d");
	    		ctx.lineWidth = 3;
			ctx.strokeStyle = '#488CCC';
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(300, 150);
			ctx.stroke();
	    		
	    		
	    		console.log("In draw...");   
			const canvas = this._shadowRoot.querySelector('sapCustomWidget');
			
			if(!canvas.getContext){
				console.log("No Context...returning");
				return;

			}
			
			const ctx = canvas.getContext('2d');
			
			var projectedval = 10000;
			var currentval = 5000;
			
			ctx.lineWidth = 3;
			ctx.strokeStyle = '#488CCC';
			
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
			
			ctx.strokeStyle = '#488CCC';
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
			*/
		}

    customElements.define('custom-glasschart', GlassChart);
})();
