class TextUrlapElem{
    #key;
    #leiro;
    constructor(key, leiro, szuloElem){
        this.#key = key;
        this.#leiro = leiro;
        this.formElem = szuloElem;
        this.#textElem();
    }
    #textElem(){
        let txt=`<div class="mb-3 mt-3">
                <label for="${this.#key}" class="form-label">${this.#leiro.megjelenes}</label>
                <input  type="${this.#leiro.tipus}" class="form-control" 
                        id="${this.#key}" 
                        placeholder="${this.#leiro.placeholder}" 
                        name="${this.#key}" 
                        pattern="${this.#leiro.regex}"
                        value="${this.#leiro.value}">
              </div>`;
              this.formElem.append(txt);
    }

} export default TextUrlapElem