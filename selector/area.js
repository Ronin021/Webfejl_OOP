class Area{


    /**
     * @type {HTMLDivElement} Az adott példány területének az eleme
     */
#div

    get div(){
        return this.#div
    }

    /**
     * 
     * @param {string} cssclass beállítja az adott terület css osztályát
     */
    constructor(cssclass){
        const container = this.#getcontainer()
        this.#div = document.createElement('div')
        this.#div.className = cssclass
        container.appendChild(this.#div)
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

/**
 * Ez fogja tartalmazni a paklikat(mindig egy darab kártyát jelenít meg)
 */

class DeckArea extends Area{
    constructor(cssClass){
        super(cssClass)
    }
}
/**
 * Ez tartalmazza az igaznak vélt kártyáinkat
 */
class SolutionArea extends Area{
    constructor(cssClass){
        super(cssClass)
    }
}