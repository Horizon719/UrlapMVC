class CheckboxUrlapElem{
    #key;
    #leiro;
    #value="";
    #valid=true;
    constructor(key, leiro, szuloElem){
        this.#key = key;
        this.#leiro = leiro;
        this.formElem = szuloElem;
        this.#checkboxElem();

        this.inputElem=$(`#${this.#key}`);
        this.validElem=this.formElem.children("div:last-child").children(".valid");
        this.invalidElem=this.formElem.children("div:last-child").children(".invalid");
        this.inputElem.on("click", ()=>{
            this.#value = this.inputElem.val();
            if (this.inputElem.is(":checked")) {
                this.#valid = true;
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } else {
                this.#valid = false;
                this.invalidElem.removeClass("elrejt");
                this.validElem.addClass("elrejt");
            }
        })
    }

    get valid(){
        return this.#valid;
    }

    get value(){
        return this.#value;
    }

    get key(){
        return this.#key;
    }

    #checkboxElem(){
        let txt=`<div>
                <label for="${this.#key}">${this.#leiro.megjelenes}</label>
                <input  type="${this.#leiro.tipus}" 
                        id="${this.#key}" 
                        name="${this.#key}" 
                        min="${this.#leiro.regex.min}"
                        max="${this.#leiro.regex.max}"
                        value="${this.#leiro.value}">
                    <div class="valid elrejt">ok</div>
                    <div class="invalid elrejt">${this.#leiro.validalas}</div>
              </div>`;
              this.formElem.append(txt);
    }

} export default CheckboxUrlapElem