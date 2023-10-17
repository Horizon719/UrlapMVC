import NumberUrlapElem from "./NumberUrlapElem.js";
import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView{
    #leiro={}
    constructor(szuloElem, leiro){
        this.szuloElem = szuloElem;
        this.#leiro = leiro;
        this.szuloElem.append("<form>");
        this.formElem = this.szuloElem.children("form");
        this.#urlapOsszerak();
        this.submitElem = $("#submit");
        this.submitElem.on("click", (event)=>{
            event.preventDefault();
        })
    }

    #urlapOsszerak(){
        for (const key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "text":
                    new TextUrlapElem(key, this.#leiro[key], this.formElem);
                    break;
                case "number":
                    new NumberUrlapElem(key, this.#leiro[key], this.formElem);
                    break;
                default:
                    console.log("ez meg nincs meg");
                    break;
            }
        }
        let txt=`<input type="submit" id="submit" value="OK"></input>`;
        this.formElem.append(txt);
    }
    
    

} export default UrlapView
