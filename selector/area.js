class Area{


    /**
     * @type {HTMLDivElement} Az adott példány területének az eleme
     */
#div

    get div(){
        return this.#div
    }

    /**
     * @param {Manager} manager
     * @param {string} cssclass beállítja az adott terület css osztályát
     */
    constructor(cssclass, manager){
        const container = this.#getcontainer()
        this.#div = document.createElement('div')
        this.#div.className = cssclass
        container.appendChild(this.#div)
        manager.setFinishCallback((eredmeny)=>{
            container.innerHTML = ""
            const div = document.createElement('div')
            div.className = 'result'
            div.textContent = eredmeny
            container.appendChild(div)
        })
    }

    /**
     * megnézi hogy létezik e container classal rendelkező div element a bodyn ha nem rendelkezik létrehozza és visszatér vele
     * 
     * @return {HTMLDivElement}ami a szülő div containere
     * 
     */


    #getcontainer(){
        let container = document.querySelector('.container')
        if(!container){
            container = document.createElement("div")
            container.className = 'container'
            document.body.appendChild(container)
        }
        return container
    }

}


class DeckArea extends Area{
    
/**
 * Ez fogja tartalmazni a paklikat(mindig egy darab kártyát jelenít meg)
 *@param {string} cssClass cssclass példányt tartalmazza
 * @param {Manager} manager manager példányt tartalmazza
*/
    constructor(cssClass, manager){
        super(cssClass, manager)
        manager.setNextCardCallback((kartyaszoveg) =>{ //Ez fog lefutni amikor új kártyát húzunk tehát meghívjük a NextCard callbacket

            this.div.innerHTML = ""

            const skipButton =document.createElement('button')

            skipButton.textContent = 'Skip'
            skipButton.addEventListener('click', ()=>{
                manager.nextCard()
            })
            this.div.appendChild(skipButton)
            const cardElement = document.createElement("div")
            cardElement.textContent = kartyaszoveg
            cardElement.className = 'largecard'
            cardElement.addEventListener('click', ()=>{
                manager.nextCard(kartyaszoveg)
            })
            this.div.appendChild(cardElement)
        } )
    }
}
/**
 * Ez tartalmazza az igaznak vélt kártyáinkat
 */
class SolutionArea extends Area{
   /**
    * 
    * @param {string} cssClass 
    * @param {Manager} manager 
    */
    constructor(cssClass, manager){
        super(cssClass, manager)
        manager.setAppendCardToSolutionCallback((kartyaszoveg)=>{
            const card = document.createElement('div')
            card.className = 'card'
            card.textContent = kartyaszoveg
            this.div.appendChild(card)
        })
    }
}

