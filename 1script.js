let bal =prompt("Bal daxil edin (0-100):");

if (bal >= 90 && bal <= 100) {
    alert("A");
} else if (bal >= 75) {
    alert("B");
} else if (bal >= 60) {
    alert("C");
} else if (bal >= 40) {
    alert("D");
} else if (bal >= 0) {
    alert("F");
} else {
    alert("Yanliş bal daxil edilib");
}