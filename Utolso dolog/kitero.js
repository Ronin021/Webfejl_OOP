class Person{
    #birth
    #name
    #mood
constructor(name,birth,mood){
        this.#name = name
        this.#birth = birth
        this.#mood = mood
    }
    get value(){
        return this.#name
    }

    set name(value){
        this.#name = value
    }

    get birth(){
        return this.#birth
    }
    
    set mood(value){
        this.#mood = value
    }



    

}
const person = new Person("Imike", "2025", "Nem okos")// Visszatérési érték a példány

class Personview{
    #person
    #span

    constructor(person){
        this.#person = person
        const div = document.createElement('div')
        document.body.appendChild(div)
        const span = document.createElement('span')

        this.#span = span

        document.body.appendChild(span)
        div.innerText = `${this.#person.value} - ${this.#person.birth}`
    }

    set footer(value){
        this.#span.textContent = value
    }
    
}

const personview = new Personview(person)


person.mood = ''

console.log(person);


const personview2 = new Personview(person)

personview2.footer = "lábléc"