for ( var i = 1; i <= 10; i = i + 1) {
    
    for ( var j = 1; j <= i - 1; j = j + 1) {
        document.write("&nbsp;");
    }

    for ( var k = 10; k >= i; k = k - 1 ){
        document.write("*")
    }       
    document.write("<br>");        
}
