function enableFutureSketchesMenu()
{
	    let menu = document.getElementById("futureSketchesMenu");
        if(menu)
        {
        	menu.style = "";
        }
        localStorage.showFutureSketches =  true;	
}

window.onload = function() {
	if(window.location.pathname == "/future_sketches/")
	{
		
		enableFutureSketchesMenu();
	}else{
		let bShowFutureSketches = localStorage.showFutureSketches;
    	
    	if (bShowFutureSketches != null && (bShowFutureSketches == "true" || bShowFutureSketches == true)){
    		enableFutureSketchesMenu();
    	}	
	}


}