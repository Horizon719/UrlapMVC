export const URLAPLEIRO={
    nev: {
        megjelenes: "Név",
        tipus: "text",
        value: "",
        placeholder: "Valaki Vagyok",
        regex: "[A-Z][a-z]{2,15}",
        validalas: "név nagybetűvel kezdődok és legalább 3 karakter",
    },

    szulEv: {
        megjelenes: "Születési év",
        tipus: "number",
        value: "2000",
        placeholder: "",
        regex: {
            min: 1000,
            max: 2023,
        },
        validalas: "1000-2023",
    },

    ASZF: {
        megjelenes: "Elfogadom az általános szerződési feltételeket",
        tipus: "checkbox",
        value: "",
        placeholder: "",
        regex: "",
        validalas: "El kell fogadni az ASZF-t!",
    },

    email: {
        megjelenes: "Email",
        tipus: "email",
        value: "",
        placeholder: "asd@asd.hu",
        regex: "[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,4}",
        validalas: "Nem megfelelő email formátum",
    }
}