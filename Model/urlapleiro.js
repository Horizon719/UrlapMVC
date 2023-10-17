export const URLAPLEIRO={
    nev: {
        megjelenes: "Név",
        tipus: "text",
        value: "",
        placeholder: "Valaki Vagyok",
        regex: "[A-z][a-z]{2,15}"
    },

    szulEv: {
        megjelenes: "Születési év",
        tipus: "number",
        value: "2000",
        placeholder: "",
        regex: {
            min: 1000,
            max: 2023,
        }
    }
}