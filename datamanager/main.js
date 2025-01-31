
/**
 * @typedef {{nev: String, eletkor: Number}} Person
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
        this.#Updatecallback(this.#array)
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

    /**
     * 
     * @param {Datamanager} datamanager 
     */
    constructor(datamanager){
        const table = document.createElement('table')
        const thead = document.createElement('thead')
        const tbody = document.createElement('tbody')

        document.body.appendChild(table)
        table.appendChild(thead)
        table.appendChild(tbody)

        

        datamanager.setUpdateCallback((persons) =>{
            tbody.innerHTML = ''
            for(const person of persons){
                const row =document.createElement('tr')
                tbody.appendChild(row)

                const cella1 = document.createElement('td')
                row.appendChild(cella1)
                cella1.innerHTML = person.name

                const cella2 = document.createElement('td')
                row.appendChild(cella2)
                cella2.innerHTML = person.age

        }});
    
    }

}

const adat = new Datamanager([{nev: 'Feri', eletkor: '17'},{nev: 'Géza',eletkor: '17'},{nev:'Józsi', eletkor: '16'}]);
const table = new Datatable(adat);