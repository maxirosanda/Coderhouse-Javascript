const preguntas = () => {
    let comenzar = prompt("Escribe la letra de la respuesta correcta, ¿Estás Listo? (SI/NO)")
    let pregunta1
    let pregunta2

    while (comenzar.toUpperCase() === "SI") {
        pregunta1 = prompt("¿Con qué se pincha el dedo la princesa Aurora en la Bella Durmiente?\nA.Con una Rueca\nB.Con una aguja de costura\nC.Con la espina de una rosa")
        if (pregunta1.toUpperCase() === "A") {
            alert("Respuesta Correcta!!!")
        }
        else {
            alert("Incorrecto, Fue con una rueca")
        }
        pregunta2 = prompt("¿Cómo se llama la empresa en dónde trabajaba Mr.Increíble?\nA.Sanitas\nB.Seguritas\nC.Heroes")
        if (pregunta2.toUpperCase() === "B") {
            alert("Respuesta Correcta!!!")
        }
        else {
            alert("Incorrecto, se llamaba Seguritas")
        }
        alert("Eso es todo, ¡Gracias por participar!")
        let comenzar = prompt("Escribe la letra de la respuesta correcta, ¿Estás Listo? (SI/NO)")
    }
}

preguntas()
