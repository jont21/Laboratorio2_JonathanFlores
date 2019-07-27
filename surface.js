const cuadrado=(s) =>{
    return s*s;
}

const rectangulo=(a,b)=>{
    return a*b;
}
const triangulo =(b,h) =>{
    return b*h/2;
}

const circulo =(r)=>{
    return Math.PI*r*r;
}

const elipse =(a, b)=> {
    return Math.PI * a * b;
};

module.exports={cuadrado,rectangulo,circulo,elipse,triangulo}