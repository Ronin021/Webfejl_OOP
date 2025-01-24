class ArrayList {
    /**
     * Ez tárolja el az array list hosszát
     * @type{Number}
     */
    #length // Privát tulajdonság a classnak
    #state // Privát tulajdonság az adatok tárolására

    // A listában lévő elemek számát adja vissza
    get Count() {
        return this.#length;
    }

    constructor() {
        this.#length = 0; // Kezdetben a hossz 0
        this.#state = {}; // Kezdetben az állapot egy üres objektum
    }

    /**
     * Ellenőrzi, hogy a megadott elem benne van-e a listában
     * @param {any} item - A keresett elem
     * @returns {boolean} - True, ha az elem benne van
     */
    Contains(item) {
        for (const variable in this.#state) {
            if (this.#state[variable] === item) { // Ha az elem megtalálható
                return true;
            }
        }
        return false; // Ha az elem nincs benne
    }

    /**
     * Elemet ad hozzá a listához
     * @param {any} item - A hozzáadni kívánt elem
     */
    Add(item) {
        // 1. Az aktuális hossz eltárolása egy változóba
        const index = this.#length;

        // 2. A belső objektum megfelelő indexéhez hozzáadjuk az elemet
        this.#state[index] = item;

        // Az index alapján elérhetővé tesszük az elemet a példányon keresztül
        Object.defineProperty(this, index, {
            get: () => {
                return this.#state[index]; // Az elem elérése
            },
            set:  (value) => {
                this.#state[index] = value; // Az elem módosítása
            },
            enumerable: true // Az elem felsorolható legyen
        });

        // 3. Növeljük a hossz tulajdonságot
        this.#length++;
    }

    /**
     * Törli az összes elemet a listából
     */
    Clear() {
        this.#length = 0; // A hossz nullázása
        this.#state = {}; // Az állapot törlése

        // Az objektumból eltávolítjuk az összes indexet
        for (const kulcs in this) {
            delete this[kulcs];
        }
    }
}

// Példányosítás és tesztelés
const list = new ArrayList();

const nev1 = { nev: "Ferenc" };
const nev2 = { nev: "Tamás" };
const szam1 = { szam: 9 };
const szam2 = { szam: 4 };

list.Add(nev1); // Elem hozzáadása
list.Add(nev2); // Elem hozzáadása
list.Add(szam1); // Elem hozzáadása

// Elem ellenőrzése
console.log(list.Contains(nev1)); // true
console.log(list.Contains(nev2)); // true
console.log(list.Contains(szam1)); // true
console.log(list.Contains(szam2)); // false

class ArrayHtmlElement extends HTMLElement{
    constructor(){
        super()
    }
}

customElements