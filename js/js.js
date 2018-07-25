function Registe() {
    
}
function length() {
    var len = 0;
    for (var i=0; i<this.length; i++) {
        var get =document.getElementsByClassName("footer").valueOf();
        if (get.charCodeAt(i)<6 ) {
            alert("用户名不得低于六位")
        }
    }
    return len;
}