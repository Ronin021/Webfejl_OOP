
/**
 * @callback NextCardCallback
 * @param {string} text a kirenderelendő kártya szövege
 * 
 * @callback AppendCardToSolutionCallback
 * @param {string} text A kártya szövege
 * 
 * @callback FinishCallback
 * @param {string} result
 */
class Manager {

    /**
     * @type {Card[]}
     */
    #array
    

    /**
     * @type {Object} Az igaznak vélt állításokat tárolja
     */
    #solution

    /**
     * @type {Number} Az aktuális kártya száma
     */
    #currentCardNumber

    /**
     * @type {NextCardCallback}
     */
    #nextCardCallback

/**
     * @type {AppendCardToSolutionCallback}
     */
    #appendCardToSolutionCallback

    /**
     * @type {FinishCallback}
     */
    #finishSolution

/**
 * 
 * @param {Card[]} array 
 */
    constructor(array){
        this.#array = array
        this.#solution = []
        this.#currentCardNumber = 0
    }

    /**
     * Beállítja a paraméter alapján a NextCard callbacket
     * 
     * @param {NextCardCallback} callback Tartalmazza a logikát ami le fog futni 
     */
    setNextCardCallback(callback){
        this.#nextCardCallback = callback
    }

     /**
     * Beállítja a paraméter alapján a appendCardToSolutionCallback callbacket
     * 
     * @param {AppendCardToSolutionCallback} callback Tartalmazza a logikát ami le fog futni 
     */
    setAppendCardToSolutionCallback(callback){
        this.#appendCardToSolutionCallback = callback
    }

     /**
     * Beállítja a paraméter alapján a finishSolution callbacket
     * 
     * @param {FinishCallback} callback Tartalmazza a logikát ami le fog futni 
     */
    setFinishCallback(callback){
        this.#finishSolution = callback
    }

    /**
     * Ezt a függvényt akkor írjuk 
     * majd meg ha egy új kártyára van szükségünk
     * (Ha a kártyára kattintunk(paraméterrel)
     *  vagy ha a skip-re (paraméter nélkül))
     * @param {string?} answer 
     */
    nextCard(answer){

        if(answer){// Ha a kártyára kattintva lépünk eltároljuk az aktuális választ
            this.#solution[this.#currentCardNumber] = answer
        this.AppendCardToSolutionCallback(answer)
        //A soluton objektumba csak azon kártyák számánál 
        //lesz érték amit igaznak vélünk


        }
        this.#currentCardNumber++
        if(this.#currentCardNumber < this.#array.length){
            this.#nextCardCallback(this.#array[this.#currentCardNumber].text)

        }else{
            let sum = 0
            for(const index in this.#array){
                if(this.#array[index].correct){
                    if(this.#solution[index]){
                        sum++
                    }
                }else{
                    if(!this.#solution[index]){
                        sum++
                    }
                }
            }
            const result = `A feladatban elért pontszám az ${this.#array.length}/${sum}`
            this.#finishSolution(result)
        }
    }
    /**
     * Megmutatja az első kártya tartalmát
     */
    start(){
        this.#nextCardCallback(this.#array[0].text) //Ez a sor először ugyanaz mint ez:
         //#nextCardCallback(this.#array[this.#currentCardNumber].text)

    }
}