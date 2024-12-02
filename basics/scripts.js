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
}
const geza_nev =new Student("Bolyai","Géza");
console.log(geza_nev.getName());






