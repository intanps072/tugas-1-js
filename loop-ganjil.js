var s='';                                // i -> loop ke samping
    for(var i=1; i<=6; i++) {   
        var l=1;    
        for(var j=1; j<=i; j++) {    
            s += l;
            l +=2;
        }
        s +='\n';
    }
    for (var i=6; i>=1; i--) {
        var k=2;
        for(var j=1; j<=i; j++) {    
            s += k;
            k +=2;
        }
        s +='\n';
    }
console.log(s);