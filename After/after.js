const consumicions = [
  { nom: 'Cervesa', preu: 5 },
  { nom: 'Copa Premium', preu: 15 },
  { nom: 'Aigua', preu: 3 },
  { nom: 'Shot de Tequila', preu: 8 },
  { nom: 'Ampolla reservat', preu: 200 }
];

// 1. Filtra les consumicions que costin més de 10€.
const consumiciones = consumicions.filter(bebidas => bebidas.preu > 10);
// 2. Amb el resultat, crea un nou array de strings (map) que digui:
//    "NOM: [CARO 💸]" si val més de 50€, o "NOM: [ACCEPTABLE ✅]" si no.
const llistaFinal = consumiciones.filter(bebida => bebida.preu > 10).map(bebida => {
    if (bebida.preu > 50) {
        return `${bebida.nom}: [CARO 💸]`;
    } else {
        return `${bebida.nom}: [ACCEPTABLE ✅]`;
    }
});
console.log(llistaFinal);    
// PISTA: const llistaFinal = consumicions.filter(...).map(...);
