/*interface iAnimal {
    nome: String;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}
*/

/**interface iAnimal {
    nome: String;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
    
}
 
interface iCanino extends iAnimal{
    porte : "pequeno" | "medio" | "grande";
}

interface iFelinos extends iAnimal{
    visaoNortuna: boolean;

}

type Idomestico = iFelinos | iCanino;


const animal: Idomestico = {
   domestico: true,
   nome: 'gato',
   porte: "pequeno",
   tipo: 'terrestre',
   
} */

/**const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener("input", (event) => {});
console.log('Digitei');*/

// generic types

/**function adicionarApendiceLista<NaoSei>(array: any[], valor: NaoSei){
    return array.map(item => item + valor);
}


adicionarApendiceLista([1,2,3],1);*/

/**
 * 
 * caracter ?
 * 
interface iUsuario {
    id:string;
    email: string;
    cargo?:"gerente" | "coodernador" | "Supervisor" | "funcionário" ;
}


function redirecione(usuario: !iUsuario ){
    if(usuario.cargo){
        //rediocionar();
    }


    //redirecione para a area do usuario;

}*/

/*
interface gato {
    nome: string;
     idade: number;
     parqueFavorito?: string;
}

type GatoSomenteLeitura = {
    readonly [ k in keyof gato]-?: gato[k];
}

class meuGato implements gato{
        
    nome;
    idade;
    parqueFavorito;
    
    constructor(nome, idade){
        
        this.nome = nome;
        this.idade = idade;
    }
}

const cat = new meuGato('bolota', 2);
cat.idade = 9;

console.log(cat);*/


interface Estudante {
    name:string;
    idade:number;
}

interface Estudante {
    serie: string;
}
