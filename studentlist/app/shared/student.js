class Student{
    #average;
    #name;
    #comment;
    #bad;

    get name(){
        return this.#name;
    }

    get average(){
        return this.#average;
    }

    get comment(){
        return this.#comment;
    }

    get bad(){
        return this.#bad;
    }

    constructor(name, average, comment, bad){
        this.#name = name;
        this.#average= average;
        this.#comment = comment;
        this.#bad = bad;
    }
}