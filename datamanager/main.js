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
    #updatecallback;

    /**
     * Konstruktor, amely egy tömböt fogad és beállítja az alapértékeket
     * @param {Person[]} array 
     */
    constructor(array = []) {
        this.#array = array;
        this.#updatecallback = () => {}; // Kezdetben üres függvényként definiáljuk
    }

    /**
     * Beállítja a frissítési callback függvényt
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback = () => {}) {
        this.#updatecallback = callback;
        this.#updatecallback(this.#array); // Azonnali frissítés az aktuális adatokkal
    }

    /**
     * Új személyt ad hozzá a tömbhöz, majd frissíti a táblázatot
     * @param {Person} Person 
     */
    add(Person) {
        this.#array.push(Person); // Hozzáadja az új elemet a tömbhöz
        this.#updatecallback(this.#array); // Frissíti a táblázatot
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
        this.#updatecallback(nameresult); // Frissítjük a táblázatot a szűrt eredményekkel
    }
    /**
     * @param {function (Person):Boolean} 
        
    
     */
    filter(callback){
        const result = [];

        for (const elem of this.#array) {
            if (callback(elem)) {

                
                result.push(elem); // Csak azokat az elemeket tároljuk, amelyek megfelelnek a feltételnek
            }
        }
        this.#updatecallback(result); // Frissítjük a táblázatot a szűrt eredményekkel

    }


    orderBy(Callbackcompare){
        const result = []

        for(const j of this.#array){
            result.push(j)
        }
        for(let j = 0; j < result.length - 1; j++){
            for(let k = j + 1; k < result.length; k++){
                if(Callbackcompare(result[j], result[k]) > 0){
                    const tmp = result[j];


                    result[j] = result[k];
                    result[k] = tmp;
                }
            }
               this.#updatecallback(result);
 }
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
        const headerRow = document.createElement('tr');
        thead.appendChild(headerRow);

        const thName = document.createElement('th');
        thName.innerHTML = 'Név';
        headerRow.appendChild(thName);

        dataManager.orderBy((a, b) => a.nev.localeCompare(b.nev));

        const thAge = document.createElement('th');
        thAge.innerHTML = 'Életkor';
        headerRow.appendChild(thAge);

        dataManager.orderBy((a, b) => b.eletkor - a.eletkor);


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
    //dataManager.filterage(searchNum);
    dataManager.filter((elem) => {
        return elem.eletkor === searchNum
    })

});



//02.07-ei Óra innentől

const input_de_uj= document.createElement("input")
document.body.appendChild(input_de_uj)
input_de_uj.type = "file"
input_de_uj.addEventListener('change', function(e){

const kicsifile = e.target.files[0]

const reader = new FileReader()

reader.readAsText(kicsifile)

reader.onload= (e) =>{

    //e.currentTarget

    const fileContent = reader.result
    console.log(fileContent)

    const splitteles = fileContent.split("\n")

    for(const splitting of splitteles){

       const split_sequence = splitting.split(";")

        const pers = {
            nev:split_sequence[0],
            eletkor:Number(split_sequence[1])



        }

        dataManager.add(pers)

    }

    
}

})








