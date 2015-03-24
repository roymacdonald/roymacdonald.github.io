//---------------------------------------------------------------
function setLang(L){
  	if(L == 'en' || L == 'es'){
  		$("[lang]:not(.langOpt)").each(function(i, el){
  	   		if($(this).attr("lang") == L){
	    		$(this).show();
	    	}else{
	    		$(this).hide();
	    	} 
	    });
	}
	updateDropdownMenu(L);
	sessvars.lang = L;
};
//---------------------------------------------------------------
function getLangName(L){
	if(L == 'en'){
		return "English";
	}else if(L == 'es'){
		return "Español";
	}
	return "";
};
//---------------------------------------------------------------
$(document).ready(function(){
	if(!sessvars.lang){
		sessvars.lang = 'en';
	}
	setLang(sessvars.lang);
}); 
//---------------------------------------------------------------
function updateDropdownMenu(L){
		$('a.langOpt').each(function(i, el) {
			if($(this).attr("lang") == L){
				if(!$(this).hasClass('active')){
			    	$(this).addClass('active');
				}
			}else {
				if ($(this).hasClass('active')){
					$(this).removeClass('active');			
				}
			}
		});

        $('a.dropdown-hover').html(getLangName(L));
        $('.dropdown-menu').removeClass('open');
};
//---------------------------------------------------------------
$(function() {
    var $dropdownmenu = $('.dropdown-menu');
    $dropdownmenu.each(function(i, el) {
        $(this).hover(function() {
            $(this).addClass('open');
        }, function(e) {  
            $(this).removeClass('open');
        });
    });
	
    $('.dropdown-hover', '.langOpt').click(function() {
       return false;
    });
    
    $('.langOpt').click(function(){
		var L = $(this).attr("lang");
        setLang(L);
    });
});
//---------------------------------------------------------------