
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
    errorDni : document.getElementById("dniError"),
}

DOM.frm.addEventListener("submit", (e) => {

    const checkboxes = document.querySelectorAll("input[name='hobbie']:checked");
    if(checkboxes.length < 2) {
        e.preventDefault();
        DOM.errorCheck.textContent = "Selecciona al menos 2 aficiones";
        DOM.errorCheck.style.display = "inline";
    }
    else{
        DOM.errorCheck.textContent = "";
        DOM.errorCheck.style.display = "none";
    }
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

DOM.title.addEventListener("keydown", (e) => {
    let currentLength = DOM.title.value.length + 1;
    if (e.key === "Backspace") {
        currentLength = currentLength - 2;
    }
    DOM.titleCount.textContent  = `${currentLength}/15`;

})

DOM.area.addEventListener("keydown", (e) => {
    let currentLength = DOM.area.value.length + 1;
    if (e.key === "Backspace") {
        currentLength = currentLength - 2;
    }
    DOM.areaCount.textContent  = `${currentLength}/120`;
})

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

function passChange() {
    let pass = document.getElementById('pass');
    let isPassword = pass.type === 'password';

    pass.type = isPassword ? 'text' : 'password';
}

