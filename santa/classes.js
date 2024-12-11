// Gyár osztály a companionk és areaek kezelésére
class Factory {
    constructor() {
        // Lista a companionkről
        this.companionLista = [];
        // Lista a areaekről
        this.arealista = [];
    }

    // Új area hozzáadása
    addArea(area) {
        // Ha a area üres vagy már létezik, nem adja hozzá
        if (!area || this.arealista.includes(area)) {
            return;
        }

        // area hozzáadása a listához
        this.arealista.push(area);

        // area hozzáadása az oldal dropdown menüjéhez
        const selector = document.getElementById('area_class');
        const option = document.createElement('option');
        option.value = area;
        option.innerHTML = area;
        selector.appendChild(option);
    }

    // Új coompnion hozzáadása
    addCompanion(companion) {
        // companiion hozzáadása a listához
        this.companionLista.push(companion);

        // Új sor létrehozása a táblázatban 
        createRow(companion);

        // Nevek hozzáadása 
        Appendchild(companion.id, companion.teljesnev);
    }

    // Új azonosító generálása 
    newId() {
        return this.companionLista.length;
    }

    // id lekérése azonosító alapján
    getCompanion(id) {
        return this.companionLista[id];
    }
}

//  osztály, amely az egyes  adatait tárolja
class Companion {
    constructor(id, firstname, lastname, area) {
        // Azonosító
        this.id = id;
        // Keresztnév
        this.firstname = firstname;
        // Vezetéknév
        this.lastname = lastname;
        // area
        this.area = area;
        // Termékek listája
        this.products = [];
    }

    // Új termék hozzáadása 
    addProduct(product, addOnLoad = false) {
        // Termék hozzáadása a listához
        this.products.push(product);

   
    }

    // Teljes név lekérése (vezetéknév + keresztnév)
    get teljesnev() {
        return this.lastname + " " + this.firstname;
    }
}
