var s='';
    for(var i=1; i<=6; i++) {    // ulang ke bawah |
        for(var j=1; j<=i; j++) {    // ulang ke samping ---
            s += s+j;
        }
        s +='\n';
    }
    for (var i=5; i>=1; i--) {
        for(var j=1; j<=i; j++) {    
            s = s+j;
        }
        s +='\n';
    }
console.log(s);