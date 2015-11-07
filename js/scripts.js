document.getElementById("go").onclick = change;

function change() {
    
	var url = "http://rwhitely.com/images/"
   
    var radioButtons = document.getElementsByName("frame");
    
    for ( var i in radioButtons ) {       
        if ( radioButtons[i].checked ) {
            var checkedButton = radioButtons[i].value;
            break;
        }
    }
	
	var newSource = url + checkedButton + ".png";
	
    var image = document.getElementById("comic");
	image.setAttribute( "src", newSource );
    
}