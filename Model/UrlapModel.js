import { URLAPLEIRO } from "./urlapleiro.js";

class UrlapModel{
    #leiro={};
    constructor(){
        this.#leiro = URLAPLEIRO;
    }

    get leiro(){
        return { ...this.#leiro};
    }

} export default UrlapModel