function Player(nickname){
    this.nickname = nickname;
    this.playedmatch = 0;

}
Player.prototype.play = function(){
   this.playedmatch++;
   console.log(this.nickname, this.playedmatch) 
}



Player.prototype.getTierLevel = function(){
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
const gomszab = new Player("gomszab")

gomszab.play();gomszab.play();gomszab.play();gomszab.play();gomszab.play();gomszab.play();gomszab.play();



console.log(gomszab.getTierLevel())


