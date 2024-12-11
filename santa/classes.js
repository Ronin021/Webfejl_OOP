
class Factory {
    constructor() {
        this.companionLista = [];
        this.arealista = [];
    }
    addArea(area) {
        if (!area || this.arealista.includes(area)) {
            return;
        }


        this.arealista.push(area);
        const selector = document.getElementById('area_class');
        const option = document.createElement('option');
        option.value = area;
        option.innerHTML = area;
        selector.appendChild(option);


    }
    addCompanion(companion) {
        this.companionLista.push(companion);
        createRow(companion);

        Appendchild(companion.id, companion.teljesnev);
    }


    newId(){
        return this.companionLista.length
    }
    getCompanion(id){
 
 
        return this.companionLista[id]


    }
}




class Companion {
    constructor(id, firstname, lastname, area) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.area = area;
        this.products = [];
    }
    addProduct(product, addOnLoad=false) {
        this.products.push(product);
        if (!addOnLoad) {
            refresh(this);5
        }
    }
    get teljesnev() {
        return this.lastname + " " + this.firstname;
    }
}