/**
 * @type {{
*   firstName: string;
*   lastName: string;
*   products: string[];
*   area: string;
* }[]}
*/
const companionList = [
   {
       firstName: 'Géza',
       lastName: 'Kiss',
       area: 'plastic',
       products: ['kisauto', 'barbibaba']
   },
   {
       firstName: 'Ferenc',
       lastName: 'Tóth',
       area: 'paper',
       products: ['könyv']
   },
   {
       firstName: 'Gábor',
       lastName: 'Nagy',
       area: 'plastic',
       products: ['zokni']
   },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
   e.preventDefault();
   const form =  e.currentTarget
   addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
   e.preventDefault();
   const form = e.currentTarget;
   addProductForm(form, factory)
});

/**
* table render
*/
// TODO 6
function initTable(){
     for(let c=0; c<companionList.length; c++){

      const currentElement = companionList[c]//Indexelés, Változóba teszi a lista aktuális elemét

      const companion = new Companion(c, currentElement.firstName, 
         currentElement.lastName, 
         currentElement.area)//Példányosítjuk a Companiont. Ezekkel a currentElement adott paramétereivel meghívjuk a megadott paramétereket csak az itt megadott változónevekkel és abban a sorrendben ahogy megadtuk a classesba


         for(const pr of currentElement.products)//Azért kell currentElement mert csak egyesével adjuk a companionhoz a productokat 
         {
            companion.addProduct(pr)//A companion pédánynak az addProductját meghívjuk és a for ciklusban megnevezett produktumot


      
         }
         factory.addMano(companion)
         

     }  
        console.log(factory)
}


initTable()

/**
* 
* eventlistener callback for the button click of companion
* 
* @param {EventTarget} e 
*/
function checkEventListener(e){
   const row = e.currentTarget.parentElement.parentElement;
   const companionId = row.id;
   // TODO 10
}