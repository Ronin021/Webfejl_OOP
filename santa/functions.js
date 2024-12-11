// Gyár osztály a companionk és areaek kezelésére
class Factory {
    constructor() {
        
        this.companionLista = [];
        
        this.arealista = [];
    }

    // Új aera hozzáadása
    addArea(area) {
        // Ha az area üres vagy már létezik, nem adja hozzá
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

    // Új companion hozzáadása
    addCompanion(companion) {
        // companion hozzáadása a listához
        this.companionLista.push(companion);

        // Új sor létrehozása a táblázatban (feltételezve, hogy a createRow funkció implementálva van)
        createRow(companion);

        // companion nevének hozzáadása (feltételezve, hogy az Appendchild funkció implementálva van)
        Appendchild(companion.id, companion.teljesnev);
    }

    // Új azonosító generálása (lista hosszának alapja)
    newId() {
        return this.companionLista.length;
    }

    // companion lekérése azonosító alapján
    getCompanion(id) {
        return this.companionLista[id];
    }
}

// companion osztály, amely az egyes companionk adatait tárolja
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

    // Új termék hozzáadása a companionhöz
    addProduct(product, addOnLoad = false) {
        // Termék hozzáadása a listához
        this.products.push(product);

        // Ha nem betöltéskor adjuk hozzá, frissítést kér
        if (!addOnLoad) {
            refresh(this); // Feltételezve, hogy a refresh funkció implementálva van
        }
    }

    // Teljes név lekérése (vezetéknév + keresztnév)
    get teljesnev() {
        return this.lastname + " " + this.firstname;
    }
}

/**
 * Új sor létrehozása a companionk táblázatához.
 * 
 * @param {Companion} companion A companion objektuma.
 */
function createRow(companion) {
    // Táblázat és tbody elem lekérése
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');

    // Sor azonosítójának beállítása
    tableRow.id = companion.id;
    tbody.appendChild(tableRow);

    // Új cellák létrehozása névhez és areahoz
    const name = createCell(tableRow);
    const area = createCell(tableRow);

    // Cellák tartalmának beállítása
    name.innerHTML = companion.teljesnev;
    area.innerHTML = companion.area;

    //  gomb hozzáadása
    const action = createCell(tableRow);
    const button = document.createElement('button');

    button.innerHTML = 'Megtekint';
    action.appendChild(button);
    button.addEventListener('click', checkEventListener); // Gomb eseménykezelő hozzárendelése
}

/**
 * Új td cella létrehozása.
 * 
 * @param {HTMLTableRowElement} parentElement A szülő táblasor.
 * @returns {HTMLTableCellElement} Az új cella.
 */
function createCell(parentElement) {
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * Új companion hozzáadása a legördülő menübe.
 * 
 * @param {string} id A companion azonosítója.
 * @param {string} value A companion neve.
 */
function Appendchild(id, value) {
    const productForm = document.getElementById('product');
    const selector = productForm.querySelector('#companionLista');

    const option = document.createElement('option');
    option.value = id;
    option.innerHTML = value;

    selector.appendChild(option);
}

/**
 * Terméklista táblázat frissítése.
 * 
 * @param {Companion} companion A companion objektuma.
 */
function refresh(companion) {
    const companionName = document.getElementById('companion_name');
    companionName.style.display = 'block';
    companionName.innerHTML = companion.teljesnev;

    const productTable = document.getElementById('products');
    productTable.style.display = 'table';

    const productTableBody = productTable.querySelector('tbody');
    productTableBody.innerHTML = '';

    for (const product of companion.products) {
        const productRow = document.createElement('tr');
        const productName = createCell(productRow);

        productName.innerHTML = product;
        productTableBody.appendChild(productRow);
    }
}

/**
 * Új companion hozzáadása az űrlap adatai alapján.
 * 
 * @param {HTMLFormElement} form Az űrlap elem.
 */
function addCompanion(form) {
    const firstname = form.querySelector('#cfirstname');
    const lastname = form.querySelector('#clastname');
    const area = form.querySelector('#area_class');
    const firstnameValue = firstname.value;
    const lastNameValue = lastname.value;
    const areaValue = area.value;

    const newCompanion = new Companion(factory.newId(), firstnameValue, lastNameValue, areaValue);
    factory.addCompanion(newCompanion);
}

/**
 * Új termék hozzáadása az űrlap adatai alapján.
 * 
 * @param {HTMLFormElement} form Az űrlap elem.
 */
function addProductForm(form) {
    const selector = form.querySelector('#companionLista');
    const productName = form.querySelector('#productname');
    const companionId = selector.value;
    
    if (companionId === '') {
        return; 
    }

    const product = productName.value;

    const companion = factory.getCompanion(companionId);
    companion.addProduct(product);
    form.reset(); // Űrlap alaphelyzetbe állítása
}
