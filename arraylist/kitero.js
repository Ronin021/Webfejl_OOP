function fun(param){
    console.log(param.nev)

}

fun({nev: "Cirmi"})

const csirke = fun

csirke({nev: "Cirmi"})

const funa = function (param){
    console.log(param.nev)
}

funa({nev: "Tutel"})


const funb = function (){
    console.log(this.nev)
}

const tojas = funb.bind({nev: "Etelka"})

tojas()

const func =(param)=> {
    console.log(param.nev)
}

const obj = {funA:(param)=>(console.log(param.nev)),
    funB:(param)=>(console.log(param.eletkor)),
}

const pers = {nev: "Cirmi", eletkor: 25}


obj.funA(pers)
obj.funB(pers)











