
const DOM = {
    titleCount : document.getElementById("titleCount"),
    title : document.getElementById("title"),
    area: document.getElementById("area"),
    areaCount : document.getElementById("areaCount"),
    dni: document.getElementById("dni"),
    select : document.getElementById("stateSelect"),
    dninieSelect: document.getElementById("stateSelect"),
    frm: document.getElementById("frm"),
    nombre: document.getElementById("name"),
    postal : document.getElementById("postal"),
    errorCheck : document.getElementById("errorCheck"),
    errorRadio : document.getElementById("errorRadio"),
    errorDni : document.getElementById("dniError"),
    yearSelect : document.getElementById("year-select"),
    telInput : document.getElementById('telInput'),
    aficiones : document.getElementById("aficionesFormat"),
    
}


const yearStart =  1920;
const yearEnd = 2010;

for(let year = yearStart; year <= yearEnd; year ++){
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    DOM.yearSelect.appendChild(option);
}

//Para que se ponga automaticamente el +34 y no lo pueda quitar el usuario
DOM.telInput.addEventListener('input', () => {
    if (!telInput.value.startsWith('(+34)')) {
        telInput.value = '(+34)';
    }
  });


DOM.frm.addEventListener("submit", (e) => {

    //Para cambiar los valores por sus 2 primeras palabras
    const Aficiones = {
        "Musica": "MU",
        "Deportes": "DE",
        "Videojuegos": "VI",
        "Manualidades": "MA",
        "Artes": "AR",
        "Lectura": "LE"
    };

    //Creo una array con los nodos que me llegan
    const checkboxes = Array.from(document.querySelectorAll("input[name='Aficiones']:checked"));

    //Nodos con los radios seleccionados
    const radios = document.querySelectorAll("input[type=radio]:checked");

    //Compruebo que se haya seleccionado una cuentaComo
    if(radios.length < 1) {
        e.preventDefault();
        DOM.errorRadio.textContent = "Selecciona al menos 1 cuenta";
        DOM.errorRadio.style.display = "inline";
    }
    else{
        DOM.errorRadio.textContent = "";
        DOM.errorRadio.style.display = "none";
    }

    //Compruebo que se seleccionaron minimo 2 aficiones
    if(checkboxes.length < 2) {
        e.preventDefault();
        DOM.errorCheck.textContent = "Selecciona al menos 2 aficiones";
        DOM.errorCheck.style.display = "inline";
    }
    else{
        let checks = checkboxes.map(hobbie => Aficiones[hobbie.value]);
        DOM.aficiones.value = checks.join(",")
        DOM.errorCheck.textContent = "";
        DOM.errorCheck.style.display = "none";
    }

    //Compruebo que haya seleccionado DNI o NIE
    if(DOM.dninieSelect.value == "none"){
        e.preventDefault();
        DOM.errorDni.textContent = "Seleccione una de las dos opciones";
        DOM.errorDni.style.display = "inline";
    }
    else{
        DOM.errorDni.textContent = "";
        DOM.errorDni.style.display = "none";
    }

})

//Añadi un valor por cada letra escrita en Titulo
DOM.title.addEventListener("keydown", (e) => {
    let currentLength = DOM.title.value.length + 1;
    if (e.key === "Backspace") {
        currentLength = currentLength - 2;
    }
    DOM.titleCount.textContent  = `${currentLength}/15`;

})

//Añadi un valor por cada letra escrita en TextArea
DOM.area.addEventListener("keydown", (e) => {
    let currentLength = DOM.area.value.length + 1;
    if (e.key === "Backspace") {
        currentLength = currentLength - 2;
    }
    DOM.areaCount.textContent  = `${currentLength}/120`;
})

//Para cambiar el pattern dependiendo de lo que se elija
function ChangeState() {
    let value = DOM.select.value;
    const patterns = {
        DNI: '[0-9]{8}[A-Z]',
        NIE: '[XYZ][0-9]{7}[A-Z]'
    };

    if (patterns[value]) {
        DOM.dni.setAttribute('pattern', patterns[value]);
        DOM.dni.removeAttribute('disabled');
    } else {
        DOM.dni.setAttribute('disabled', 'disabled');
    }
}

//Para mostrar la contraseña
function passChange() {
    let pass = document.getElementById('pass');
    let isPassword = pass.type === 'password';

    pass.type = isPassword ? 'text' : 'password';
}

