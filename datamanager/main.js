/**
 * @typedef {{nev: String, eletkor: Number}} Person
 * @callback UpdateCallback
 * @param {Person[]} persons
 * @returns {void}
 */
class Datamanager {
    /**
     * @type {Person[]} - Privát tömb, amely a személyeket tárolja
     */
    #array;

    /**
     * @type {UpdateCallback} - Privát callback függvény, amelyet a táblázat frissítésére használunk
     */
    #Updatecallback;

    /**
     * Konstruktor, amely egy tömböt fogad és beállítja az alapértékeket
     * @param {Person[]} array 
     */
    constructor(array = []) {
        this.#array = array;
        this.#Updatecallback = () => {}; // Kezdetben üres függvényként definiáljuk
    }

    /**
     * Beállítja a frissítési callback függvényt
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback = () => {}) {
        this.#Updatecallback = callback;
        this.#Updatecallback(this.#array); // Azonnali frissítés az aktuális adatokkal
    }

    /**
     * Új személyt ad hozzá a tömbhöz, majd frissíti a táblázatot
     * @param {Person} Person 
     */
    add(Person) {
        this.#array.push(Person); // Hozzáadja az új elemet a tömbhöz
        this.#Updatecallback(this.#array); // Frissíti a táblázatot
    }

    /**
     * Életkor alapján szűri a személyeket és frissíti a táblázatot
     * @param {number} age 
     */
    filterage(age) {
        const result = [];

        for (const elem of this.#array) {
            if (elem.eletkor === age) {
                result.push(elem); // Csak azokat az elemeket tároljuk, amelyek megfelelnek a feltételnek
            }
        }
        this.#Updatecallback(result); // Frissítjük a táblázatot a szűrt eredményekkel
    }

    /**
     * Név alapján szűri a személyeket és frissíti a táblázatot
     * @param {string} names 
     */
    filtername(names) {
        const nameresult = [];

        for (const elem of this.#array) {
            if (elem.nev.includes(names)) {
                nameresult.push(elem); // Azokat az elemeket tároljuk, amelyek neve tartalmazza a keresett szót
            }
        }
        this.#Updatecallback(nameresult); // Frissítjük a táblázatot a szűrt eredményekkel
    }
}

class Datatable {
    /**
     * Létrehozza a táblázatot és összekapcsolja az adatkezelővel
     * @param {Datamanager} datamanager 
     */
    constructor(datamanager) {
        const table = document.createElement('table'); // Táblázat létrehozása
        const thead = document.createElement('thead'); // Táblázat fejléc
        const tbody = document.createElement('tbody'); // Táblázat törzs

        document.body.appendChild(table); // Táblázat hozzáadása az oldalhoz
        table.appendChild(thead); // Fejléc hozzáadása
        table.appendChild(tbody); // Törzs hozzáadása

        // Beállítjuk az update callback függvényt, hogy mindig frissítse a táblázatot
        datamanager.setUpdateCallback((persons) => {
            tbody.innerHTML = ''; // Először kiürítjük a táblázatot
            for (const person of persons) {
                const row = document.createElement('tr'); // Új sor létrehozása
                tbody.appendChild(row);

                const cella1 = document.createElement('td'); // Név cella
                row.appendChild(cella1);
                cella1.innerHTML = person.nev;

                const cella2 = document.createElement('td'); // Életkor cella
                row.appendChild(cella2);
                cella2.innerHTML = person.eletkor;
            }
        });
    }
}

// Példányosítjuk az adatkezelőt egy előre megadott tömbbel
const dataManager = new Datamanager([
    { nev: `Feri`, eletkor: 17 },
    { nev: `Geza`, eletkor: 17 },
    { nev: `Jozsi`, eletkor: 16 }
]);

// Létrehozzuk a táblázatot és összekötjük az adatkezelővel
const dataTable = new Datatable(dataManager);

// Név címke létrehozása és hozzáadása az oldalhoz
const nameLabel = document.createElement(`label`);
nameLabel.innerText = `Név: `;
document.body.appendChild(nameLabel);

// Név inputmező létrehozása és hozzáadása az oldalhoz
const nameInput = document.createElement(`input`);
document.body.appendChild(nameInput);

// Kor címke létrehozása és hozzáadása az oldalhoz
const ageLabel = document.createElement(`label`);
ageLabel.innerText = `Kor: `;
document.body.appendChild(ageLabel);

// Kor inputmező létrehozása és hozzáadása az oldalhoz
const ageInput = document.createElement(`input`);
document.body.appendChild(ageInput);

// Név input eseményfigyelője – szűrés a név alapján
nameInput.addEventListener(`input`, () => {
    dataManager.filtername(nameInput.value);
});

// Kor input eseményfigyelője – szűrés az életkor alapján
ageInput.addEventListener(`input`, () => {
    const searchNum = Number(ageInput.value); // A beírt értéket számmá alakítjuk
    dataManager.filterage(searchNum);
});
