function tersEded(eded) {
    let ters = 0;
    while (eded > 0) {
        let reqem = eded % 10;  
        ters = ters * 10 + reqem; 
        eded = Math.floor(eded / 10); 
    }
    return ters;}
console.log(tersEded());