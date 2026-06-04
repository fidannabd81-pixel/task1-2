function stipendiyaHesabla(ortalamaBal) {
    function faizHesabla() {
        return ortalamaBal;
    }

    if (faizHesabla() >= 80) {
        return "Stipendiya qazanir";
    } else {
        return "Qazana bilmir";
    }
}
console.log(stipendiyaHesabla(85));
console.log(stipendiyaHesabla(70));