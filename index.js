let pizza = ['aceitunas','queso','tomate','huevo','salsa','cebolla','romero','sal','pimienta','harina'];

const func = (arr)=>{
    let arrPar =[];
    let arrImp =[];
    for(let ingredientes in arr){
        if(arr[ingredientes].length%2===0){
            arrPar.push(arr[ingredientes]);
        }
        else{
            arrImp.push(arr[ingredientes]);
        }
    }
    return console.log(`Ingredientes Pares: ${arrPar},\nIngredientes impares: ${arrImp}`);
}

func(pizza)