// companionlista típusdefinícióval (companionk és tulajdonságaik)
/**
 * @type {{
*   firstname: string;
*   lastName: string;
*   products: string[];
*   area: string;
* }[]}
 */
const companionLista = [
   {
       firstname: 'Géza',
       lastName: 'Kiss',
       area: 'plastic',
       products: ['kisauto', 'barbibaba']
   },
   {
       firstname: 'Ferenc',
       lastName: 'Tóth',
       area: 'paper',
       products: ['könyv']
   },
   {
       firstname: 'Gábor',
       lastName: 'Nagy',
       area: 'plastic',
       products: ['zokni']
   },
];

// Gyár objektum létrehozása és areaek inicializálása
const factory = new Factory();
factory.addArea("plastic");
factory.addArea("paper");

// Eseménykezelők űrlapokhoz
// companion hozzáadása az űrlap beküldésekor
document.getElementById('companion').addEventListener('submit',function(e){
   e.preventDefault(); // Alapértelmezett művelet letiltása
   const form =  e.currentTarget;
   addCompanion(form); // companion hozzáadása
   form.reset(); // Űrlap alaphelyzetbe állítása
});

// Termék hozzáadása az űrlap beküldésekor
document.getElementById('product').addEventListener('submit',function(e){
   e.preventDefault(); // Alapértelmezett művelet letiltása
   const form = e.currentTarget;
   addProductForm(form); // Termék hozzáadása
});

// Új area hozzáadása az űrlap beküldésekor
document.getElementById('area').addEventListener('submit',function(e){
   e.preventDefault(); // Alapértelmezett művelet letiltása
   const form = e.currentTarget;
   factory.addArea(form.areaName.value); // area hozzáadása
   form.reset(); // Űrlap alaphelyzetbe állítása
});

/**
 * companionk és termékek inicializálása a táblázatban
 */
function initTable(){
   for (const companion of companionLista) {
       const newCompanion = new Companion(factory.newId(), companion.firstname, companion.lastName, companion.area);
       for (const product of companion.products) {
           newCompanion.addProduct(product, true); // Termékek hozzáadása
       }
       factory.addCompanion(newCompanion); // companionk hozzáadása
   }
}

// Táblázat inicializálása
initTable();

/**
* Eseménykezelő a companion megtekintése gombra
* 
* @param {EventTarget} e Esemény objektuma
*/
function checkEventListener(e){
   const row = e.currentTarget.parentElement.parentElement; // Táblasor lekérése
   const companionId = row.id; // companion azonosító lekérése
   const companion = factory.getCompanion(companionId); // companion adatai
   refresh(companion); // Táblázat frissítése
}