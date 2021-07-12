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
    getCharacters = async ()=>{
        const res = await this.getResource(`/characters/?page=5&Size=10`);
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id)=>{
        const res = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(res);
    }
    getBooks = async ()=>{
        const res = await this.getResource(`/books/`)
        return res.map(this._transformBooks)
    }
    getBook = async (id)=>{
        const res = await this.getResource(`/books/${id}`)
        return this._transformBooks(res)
    }
    getHouses = async ()=>{
        const res = await this.getResource(`/houses/`)
        return res.map(this._transformHouses)
    }
    getHouse = async (id)=>{
        const res = await this.getResource(`/houses/${id}`)
        return this._transformHouses(res)
    }

    _regularID = (data)=>{
        return +data.match(/\d{1,}/)[0];
    }

    _transformCharacter = (data)=>{
        const id = this._regularID(data.url);
        return{
            id: id,
            name: data.name,
            gender: data.gender,
            born: data.born,
            died: data.died,
            culture: data.culture
        }
    }
    _transformBooks = (data)=>{
        const id = this._regularID(data.url);
        return{
            id: id,
            name: data.name,
            numberOfPages: data.numberOfPages,
            publiser: data.publiser,
            released: data.released,
            culture: data.culture
        }
    }
    _transformHouses = (data)=>{
        const id = this._regularID(data.url);
        return{
            id: id,
            name: data.name,
            region: data.region,
            words: data.words,
            titles: data.titles,
            overlord: data.overlord,
            ansetralWeapons: data.ansetralWeapons
        }
    }
}