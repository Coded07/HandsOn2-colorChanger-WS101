let state = false

document.getElementById("btnClick").addEventListener("click", change_color);

function change_color() {
    if (state) {
        let style =document.head.appendChild(document.createElement("style"));
        style.innerHTML = `.heart {background-color: green;}
                           .heart:after {background-color: green;}
                           .heart:before {background-color: green;}`;

    } else {
        let style =document.head.appendChild(document.createElement("style"));
        style.innerHTML = `.heart {background-color: blue;}
                           .heart:after {background-color: blue;}
                           .heart:before {background-color: blue;}`;
    }
    state = !state
}