export default class GotApi {

    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api';
    }

    getResource = async (url) =>{
        const res = await fetch(this._apiBase + url);

        if (!res.ok) {
            throw new Error(`Fetch Error ${url}`)
        }
        return await res.json();
    }
    getAllCharacters = ()=>{
        return this.getResource(`/characters/?page=5&Size=10`)
    }
    getCharacter = (id)=>{
        return this.getResource(`/characters/${id}`)
    }
    getBooks = ()=>{
        return this.getResource(`/books/`)
    }
    getBook = (id)=>{
        return this.getResource(`/books/${id}`)
    }
    getHouses = ()=>{
        return this.getResource(`/houses/`)
    }
    getHouse = (id)=>{
        return this.getResource(`/houses/${id}`)
    }
}