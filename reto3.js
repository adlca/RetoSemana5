let nc = +prompt("Ingrese por favor el número de su cita: ");

let cc;
let tot = 0;

for (i = 0; i < nc; i++) {
    if (i <= 2) { cc = 200; tot += 200; }
    if (i > 2 && i <= 4) { cc = 150; tot += 150; }
    if (i > 4 && i <= 7) { cc = 100; tot += 100; }
    if (i > 7) { cc = 50; tot += 50; }
}
alert(`El costo de su cita es S/. ${cc}`);
alert(`El costo de todo el tratamiento es S/. ${tot}`)