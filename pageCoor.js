/*
    = Page Coordinator Plugin =
        * Will change url according to string given(and other options)
        
        ** Plugin Status: 	Being Developed
	** Version :		Pre-Alpha 0.0.0
*/

(function($){
    $.fn.pageCoor = function(params){
        var client = $(this);
        
        // Initial Function  ---------------------------------------------------------
        client.init = function(){
            params = $.extend({}, $.fn.pageCoor.defaults, params);
            
            if(params.currDir !== null){
                client.insert(params.currDir);
            }else{
                
            }
        };
        
        // Insert Function  ---------------------------------------------------------
        client.insert = function(currDir){
            console.log(currDir);
            var flag = false;
               for(var i = 0; i < myURLs.length; i++){
                   if(myURLs[i] == currDir){
                       flag = true;
                       currDir = currDir + ((params.extras !== null) ? params.extras : '');
                       params.title = (params.title != 'Default') ? params.title : myTitles[i];
                       
                       history.pushState({title: params.title, currDir: currDir}, null, currDir);
                       $('title').html('wmb.log // '+ params.title);
                   }
               }
               if(!flag){
                    currDir = currDir + ((params.extras !== null) ? params.extras : '');
                    params.title = params.title;
                    
                    history.pushState({title: params.title, currDir: currDir}, null, currDir);
                    $('title').html('wmb.log // '+ params.title);
               }
        };

        // Initial Function Call ---------------------------------------------------------
        client.init();
    };
    
    // Page Coor. Defaults for params '''''''''''''''''''''''''''''''''''''''''''''''''''''
    $.fn.pageCoor.defaults = {
        title: 'Default',
        currDir: null,
        extras: null
    };
    
})(jQuery);

// Main Arrays for page urls and names
// Populate these accordingly so that any static urls will be matched with a title
var myURLs = [''];
var myTitles = [''];

// History PopState Event Listener
window.addEventListener('popstate', function(e) {
    // e.state is equal to the key : value pairs passed in
    var character = e.state;
    
    if(!character){
	// Default Home page
        $currDir = 'index.html';
        //$('body').operatorio({ url:'includes/contentLinked.php?page=welcome', shell: [true,{},'newest'] });
        
        //shlSwitch();
        
        $('title').html('Home - Default');
        
    }else{
	// Designated page
        $currDir = character.currDir;
        //$('body').operatorio({ url:'includes/contentLinked.php' + character.currDir, shell: [true,{},'newest'] });
        
        //shlSwitch();
        
        $('title').html(character.title);
    }
});