function reqemSayi(eded) {
    let say = 0;

    while (eded > 0) {
        eded = Math.floor(eded / 10); 
        say++;
    }
    return say;
}
console.log(reqemSayi());
