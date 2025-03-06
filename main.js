let codigos = {
    "mari.cami21": ["Maria Camila", "Cami, eres una mujer maravillosa, fuerte y llena de una luz que ilumina todo a su alrededor ✨. Que hoy y siempre la vida te regale el amor, el reconocimiento y las oportunidades que mereces, porque eres especial en cada sentido. Sigue brillando con tu esencia única y conquistando el mundo con esa magia que solo tú tienes. Sin ustedes, las mujeres, el mundo perdería su color y su esencia. Gracias por existir y por hacer de cada día algo más hermoso. 💖🌸💫"],
    "samy.j": ["Samantha", "Samy eres una mujer increíble, fuerte y llena de luz ✨. Que hoy y siempre recibas todo el amor, el reconocimiento y las oportunidades que mereces. Sigue brillando y conquistando el mundo con tu esencia única. 💖🌸"],
    "sarita.p": ["Sarita", "Eres una mujer increíble, fuerte y llena de luz ✨. Que hoy y siempre recibas todo el amor, el reconocimiento y las oportunidades que mereces. Sigue brillando y conquistando el mundo con tu esencia única. 💖🌸"],
    "vale.caballero": ["Valerie", "Vale eres una mujer increíble y maravillosa, fuerte y llena de una luz que ilumina todo a su alrededor ✨. Que hoy y siempre recibas todo el amor, el reconocimiento y las oportunidades que mereces. Sigue brillando y conquistando el mundo con tu esencia única y especial. Gracias por existir y por hacer de cada día mejor. 💖🌸"],
    "ronniee.jk": ["Veronica", "Vero eres una mujer increíble, fuerte y llena de luz ✨. Que hoy y siempre recibas todo el amor, el reconocimiento y las oportunidades que mereces. Sigue brillando y conquistando el mundo con tu esencia única. 💖🌸"],
    "meli.19": ["Melanie", "Meli eres una mujer increíble, fuerte y llena de luz ✨. Que hoy y siempre recibas todo el amor, el reconocimiento y las oportunidades que mereces. Sigue brillando y conquistando el mundo con tu esencia única. 💖🌸"]
}

let codigo = document.getElementById("codigo");
let entrar = document.getElementById("entrar");

function cargar(codigo){
    let nombre = codigos[codigo][0];
    let mensaje = codigos[codigo][1];

    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "flex";

    document.getElementById("nombre").textContent = `${nombre}`;
    document.getElementById("mensaje").textContent = mensaje;

}

entrar.addEventListener("click", ()=>{
    let codigoIngresado = codigo.value.toLowerCase();
    if(codigos[codigoIngresado]){
        cargar(codigoIngresado);
    }
})
