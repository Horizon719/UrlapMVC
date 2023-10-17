class NumberUrlapElem{
    #key;
    #leiro;
    constructor(key, leiro, szuloElem){
        this.#key = key;
        this.#leiro = leiro;
        this.formElem = szuloElem;
        this.#numberElem();
    }
    #numberElem(){
        let txt=`<div class="mb-3 mt-3">
                <label for="${this.#key}" class="form-label">${this.#leiro.megjelenes}</label>
                <input  type="${this.#leiro.tipus}" class="form-control" 
                        id="${this.#key}" 
                        name="${this.#key}" 
                        min="${this.#leiro.regex.min}"
                        max="${this.#leiro.regex.max}"
                        value="${this.#leiro.value}">
              </div>`;
              this.formElem.append(txt);
    }

} export default NumberUrlapElem