// function Player(nickname){
//     this.nickname = nickname;
//     this.playedmatch = 0;

// }
// Player.prototype.play = function(){
//    this.playedmatch++;
//    console.log(this.nickname, this.playedmatch) 
// }



// Player.prototype.getTierLevel = function(){
//     if(this.playedmatch < 4){
//         return "A";
//     }
//     else if(this.playedmatch > 4 && this.playedmatch<7){
//         return "B"
//     }
//     else{
//         return "C"
//     }
 
// }


class Player{
    constructor(nickname){
        this.nickname = nickname;
        this.playedmatch = 0
        
    }
    play(){
        this.playedmatch++;
        console.log(this.nickname, this.playedmatch) 
    }
    getTierLevel(){
        if(this.playedmatch < 4){
                    return "A";
                }
                else if(this.playedmatch > 4 && this.playedmatch<7){
                    return "B"
                }
                else{
                    return "C"
                }
    }
}


const gomszab = new Player("gomszab")

gomszab.play();gomszab.play();gomszab.play();gomszab.play();gomszab.play();gomszab.play();gomszab.play();



console.log(gomszab.getTierLevel())

//Hazi


//Gezas

class Person{
    constructor(nev){
        this.nev=nev

    }
    getName(){
        return this.nev}

    }


class Student extends Person{
    constructor(school, nev){
        super(nev)
        this.school=school
    }
    getMinden(){
        return this.school}
}
const geza_nev_suli =new Student("Bolyai","Géza");
console.log(geza_nev.getName());
console.log(geza_nev.getMinden())



//Allatos


class Animal{
    constructor(allatnev){
        this.allatnev=allatnev;
    }
    kommunikacio() {
        console.log(`A/Az ${this.allatnev} tud hangot kiadni.`);
    }
}
class Mammal extends Animal{
    constructor(allatnev) {
        super(allatnev);
    }
    mozog(){
        console.log(`A(z) ${this.allatnev} jár.`);
    }
}
class Bird extends Animal{
    constructor(allatnev) {
       super(allatnev);
    }
    mozog(){
        console.log(`A(z) ${this.allatnev} repül`);
    }
}




const madar = new Bird("Galamb");
const nagytestu = new Mammal("Teknős");

madar.kommunikacio();
madar.mozog();

nagytestu.kommunikacio();
nagytestu.mozog();