function verificarIdade(idades) 
{
    if (idades < 18) 
    {
        return "Menor d idade";
    } else 
    {
        return "Maior de idade";
    }
}
console.log(verificarIdade(15));  
console.log(verificarIdade(18));
console.log(verificarIdade(21))

/**
 * Esta função verifica idades.
 * 
 * @exemplo 
 *  exemplo (>18); // "maior de idade"
 * 
 */