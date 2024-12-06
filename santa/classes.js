

//Factory is a ManoList= extendes variáció
//Factory ha a ManoList = this.valamis variáció




// TODO  9, 10
class Factory{
 constructor(){ //Utólag lesz a paraméter hozzátéve
    this.ManoList= []//Factory példányának lesz majd manolist tulajdonsága
 }  
 
    addMano(mano){//Függvény ami manót vár hogy majd hozzátegye a manot a listához
        this.ManoList.push(mano);//This kell mert ezzel mondja meg konkrétan hogy melyik cuccmók kell(Itt éppen magára referál) Pushnak mindig kell info hogy mit tol bele a listába
    }

   }
   
   // TODO 5
   class Companion{
    constructor(id, keresztnev, vezeteknev, reszleg){//Ez kell mert e nélkül nem lehet értelmezni a példát(Mármint a példányok)
        this.id= id;//Példány egy tulajdosága lesz az id<---Itt id amúgy ha másról van szó akkkor azt. Paraméter Mindig értéket ad át
        this.keresztnev= keresztnev;
        this.vezeteknev= vezeteknev;
        this.reszleg= reszleg;
        this.productList= [];//Üres tömb mert amikor beregisztrál még nincsen productja


        
    }

    getName(){//Nem kell paraméter mert látja a példány paramétereit


    }
   }