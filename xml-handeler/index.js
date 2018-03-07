const  = (xmlFill) => {

    if (xmlFill.endsWith(/.xml/i,"")) {
        
    }

    var xmlHTML = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", , true);
    xhttp.send();
}
