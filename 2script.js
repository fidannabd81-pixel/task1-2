function netMaas(maas) {
    let vergi = maas * 0.13;
    return maas - vergi;
}
console.log(netMaas(1000));
