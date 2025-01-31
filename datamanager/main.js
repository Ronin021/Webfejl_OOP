
/**
 * @typedef{nev: String, eletkor: Number} Person
 * @callback UpdateCallback
 * @param {Person[]} persons
 * @returns {void}
 */
class Datamanager{
    /**
     * @type {Person[]}
     */
    #array
/**
 * @type {UpdateCallback}
 */
    #Updatecallback

/**
 * 
 * @param {Person[]} array 
 */
    constructor(array = []) {
        this.#array = [];
     this.UpdateCallback = () =>{}   
    }

/**
 * 
 * @param {Callback} Callback 
 */
 setUpdateCallback(Callback) {
        this.#Updatecallback = Callback;
    }
    

    add(Person){
        this.#array.push({Person})

        this.#Updatecallback = this.#array

    }

    filterage(age){
        const result= []

        for(
            const elem of this.#array) {
                if(elem.eletkor === age){
                result.push(age)
        

        }
    }
    this.#Updatecallback(result)
}

                
    filtername(names){
        const nameresult = []

        for(const elem of this.#array){
            if(elem.nev.includes(names)){
                nameresult.push(names)
        }

    }
    this.#Updatecallback(nameresult)

}

    
}


class Datatable{

}