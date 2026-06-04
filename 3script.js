function endirimHesabla(mebleg) {
    if (mebleg >= 200) {
        return mebleg * 0.8;
    } else if (mebleg >= 100) {
        return mebleg * 0.9; 
    } else {
        return mebleg;
    }
}
console.log(endirimHesabla(250)); 
console.log(endirimHesabla(150));
console.log(endirimHesabla(80)); 