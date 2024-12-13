const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
//1. lépés
class Person{
constructor(obj){
    this.firstname1 = obj.firstname1;
    this.firstname2 = obj.firstname2;
    this.lastname = obj.lastname
}
   render(parentElement){
   const sor = document.createElement('tr')
    parentElement.appendChild(sor)
    

    const td3 = document.createElement('td')
    td3.innerHTML = this.lastname
    sor.appendChild(td3)


    const td1 = document.createElement('td')
    td1.innerHTML = this.firstname1
    sor.appendChild(td1)

    if(this.firstname2 !== undefined){
    const td2 = document.createElement('td')
    td2.innerHTML = this.firstname2
    sor.appendChild(td2)
    }
    else{

            td1.colSpan = 2 

    }



    

   }

}    
//2. lépés
function init() {
    
for(let i = 0; i< array.length; i++){
    const pers = new Person(array[i])

    pers.render(document.getElementById('tbodyId'));



}




}
init()




class FormControllerDeCsakNevbenController{
    #form
    constructor(form){

        this.#form = form

    }

    #GetInputByID(id){
        return this.#form.querySelector('#' + id)
    }

    get lastname(){
        const getter = this.#GetInputByID('lastname')
        return getter.value;
    }

    get firstname1(){
        const getter = this.#GetInputByID('firstname1')
        return getter.value;
    }

    get firstname2(){
        const getter = this.#GetInputByID('firstname2')
        return getter.value;
    }

}