{
    function encrypt(arr,key){ 
    var rta=[];
    arr.forEach(element => rta.push(element+key));
    return rta;  
    }
    
    function decrypt(arr,key){
      arr.forEach(element => element-=key);
      return arr;  
    }
    
    function secret(arreglo,func,llave){
        if(func=="encrypt"){
            return encrypt(arreglo,llave);
        }
        else if(func=="decrypt"){
           return decrypt(arreglo, llave);
        }
        else
        {
            console.log("Introduzca una función valida");
        }
    }
    var arr = [1,2,3,4,5];
    var llave=1;
   
    console.log("El arreglo encriptado es: "+ secret(arr,"encrypt",llave));
    return "El arreglo encriptado es: "+ secret(arr,"encrypt",llave);
    /* return "El arreglo desencriptado es: "+ secret(arr,"decrypt",llave);*/
}