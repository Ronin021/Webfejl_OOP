class Manager{
    #array;
    #selectCallback;
    #addCallback;

    constructor(){
        this.#array = [];
    }

    setAddCallback(callback){
        this.#addCallback = callback;
    }

    setSelectCallback(callback){
        this.#selectCallback=callback;
    }

    add(student){
        this.#array.push(student);
    }

    select(student){
        this.#selectCallback(student);
    }

    /**
     * Végigmegy a tömbbön és meghívja az addCallbacket
     */
    render(){
        for(const student of this.#array){
            this.#addCallback(student);
        }
    }
}