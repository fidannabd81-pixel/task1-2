function cutEdedlerinCemi(eded) {
    let cem = 0;
    for (let i = 1; i <= eded; i++) {
        if (i % 2 == 0) {
            cem += i;
        }
    }
    return cem;
}
console.log(cutEdedlerinCemi());