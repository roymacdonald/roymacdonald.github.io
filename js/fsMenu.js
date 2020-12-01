function enableFutureSketchesMenu()
{
	    let fsMenu = document.getElementById("futureSketchesMenu");
        if(fsMenu)
        {
        	fsMenu.style = "";
            fsMenu.classList.add("current")
        }
        localStorage.showFutureSketches =  true;	
        let nav = document.querySelector(".main-nav");
        if(nav){
            let current = nav.querySelector(".current");
            if(current != fsMenu)
            {
                current.classList.remove("current");
            }
        }
        

}
document.addEventListener("DOMContentLoaded", function(event) {

	if(window.location.pathname == "/future_sketches/")
	{
		
		enableFutureSketchesMenu();
	}else{
		let bShowFutureSketches = localStorage.showFutureSketches;
    	
    	if (bShowFutureSketches != null && (bShowFutureSketches == "true" || bShowFutureSketches == true)){
    		enableFutureSketchesMenu();
    	}	
	}


});