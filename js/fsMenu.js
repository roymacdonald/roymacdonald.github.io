function enableFutureSketchesMenu()
{
	    let fsMenu = document.getElementById("futureSketchesMenu");
        if(fsMenu)
        {
        	fsMenu.style = "";
            fsMenu.classList.add("current")
        }


        window.localStorage.setItem('showFutureSketches', 'true');	
        

        let nav = document.querySelector(".main-nav");
        if(nav){
            let current = nav.querySelector(".current");
            if(current != fsMenu)
            {
                current.classList.remove("current");
            }
        }
        

}
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {
    console.log(window.localStorage);
	if(window.location.pathname.includes("future_sketches"))
	{
        console.log("future_sketches");		
		enableFutureSketchesMenu();
	}else{
		let bShowFutureSketches = window.localStorage.getItem('showFutureSketches');
    	console.log(bShowFutureSketches);
    	if (bShowFutureSketches != null && (bShowFutureSketches == "true" || bShowFutureSketches == true)){
            console.log("nojsdfak sm");
    		enableFutureSketchesMenu();
    	}	
	}


}
//);