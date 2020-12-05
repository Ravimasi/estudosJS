function atribNota(nota) {
    if (nota > 90) {
        return 'A, excelente.';
    } else if (nota > 80) {
        return 'B, meus parabéns.';
    } else if (nota > 70) {
        return 'C, nada mal.';
    } else if (nota > 65) {
        return 'D 😔';
    } else {
        return 'F, caramba. 😢';
    }
}
for (var i = 70; i <= 100; i++) {
  console.log('Pela nota ' + i + ', te daremos um ' + atribNota(i));
}