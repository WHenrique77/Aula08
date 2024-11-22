function definirDiaSemana(dias)
 {
    var diasDaSemana = 
    {
      1: "Domingo",
      2: "Segunda",
      3: "Terça",
      4: "Quarta",
      5: "Quinta",
      6: "Sexta",
      7: "Sábado"
    };
    if (dias >= 1 && dias <= 7) 
    {
      return diasDaSemana[dias];
    } else 
    {
      return "Número invalido";
    }
  }
console.log(definirDiaSemana(3))
console.log(definirDiaSemana(7))
console.log(definirDiaSemana(8))
