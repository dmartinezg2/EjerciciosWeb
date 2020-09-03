{
    var mcd = (a,b) => {if(b){return mcd(b,a%b);} return a;}
    var a=4;
    var b =8;
    console.log("El máximo común divisor de: "+a+ " y " + b + " es = "+ mcd(a,b));
    return "El máximo común divisor de: "+a+ " y " + b + " es = "+ mcd(a,b);
}