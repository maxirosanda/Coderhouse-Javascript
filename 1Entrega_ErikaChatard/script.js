const preguntas = [
    {
        id: 1,
        pregunta: "¿Qué significa HTML?",
        opciones: ["Hyper Text Markup Language", "Highly Technical Modern Language", "Hyperlink and Text Markup Language"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 2,
        pregunta: "¿Cuál es el propósito principal de CSS?",
        opciones: ["Definir la estructura de una página web", "Establecer el diseño y estilo de una página web", "Manejar la funcionalidad de una página web"],
        correcta: 1,
        respuesta: null,
        puntos: 0
    },
    {
        id: 3,
        pregunta: "¿Qué significa CSS?",
        opciones: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 4,
        pregunta: "¿Qué elemento HTML se utiliza para crear un enlace o hipervínculo?",
        opciones: ["<a>", "<link>", "<href>"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 5,
        pregunta: "¿Qué propiedad CSS se utiliza para cambiar el color de fondo de un elemento?",
        opciones: ["background-color", "color", "background"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 6,
        pregunta: "¿Cuál es la forma correcta de comentar en HTML?",
        opciones: ["<!-- Esto es un comentario -->", "// Esto es un comentario", "/* Esto es un comentario */"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 7,
        pregunta: "¿Qué selector CSS seleccionará todos los elementos de un tipo específico?",
        opciones: ["Selector de tipo", "Selector de clase", "Selector de ID"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 8,
        pregunta: "¿Cuál es la propiedad CSS que se utiliza para cambiar el tamaño de un texto?",
        opciones: ["font-size", "text-size", "size"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 9,
        pregunta: "¿Qué etiqueta HTML se utiliza para definir una lista no ordenada?",
        opciones: ["<ul>", "<ol>", "<li>"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 10,
        pregunta: "¿Cuál es el resultado de aplicar 'display: none;' a un elemento en CSS?",
        opciones: ["El elemento desaparece de la página", "El elemento se vuelve transparente", "El elemento se encoge y se hace invisible"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    }
]
const comenzarPreguntas = () =>{
    const comenzar = confirm("quiere jugar al juego de preguntas?")
    if(comenzar){
        preguntas.forEach((pregunta)=>{
            alert(pregunta.pregunta)
            alert(`Las opciones son: 
                        1)${pregunta.opciones[0]} 
                        2)${pregunta.opciones[1]} 
                        3)${pregunta.opciones[2]}`)
            const respuesta = parseInt(prompt("Ingrese el numero de la respuesta correcta (1,2,3)")) 
            pregunta.respuesta = respuesta - 1
            if(pregunta.correcta === pregunta.respuesta){
                pregunta.puntos = 10
            }else{
                pregunta.puntos= 0
            }
    
        })
    }
    
}
const mostrarResultadoTotal = () =>{
    const resultado = preguntas.reduce((acc,pregunta)=> acc + pregunta.puntos,0)
    alert("tu puntaje fue: " + resultado )
}
const mostrarRespuestas = ()=>{
    const verRespuesta = confirm("quiere ver las respuesta realizadas")
    if(verRespuesta){
        preguntas.forEach((pregunta)=>{
            alert(`La pregunta fue: ${pregunta.pregunta}
                   Las opciones eran: 1) ${pregunta.opciones[0]} 
                                      2)${pregunta.opciones[1]} 
                                      3)${pregunta.opciones[2]}
                   La respuesta correcta es: ${pregunta.correcta + 1}
                   Tu respuesta fue: ${pregunta.respuesta + 1}
                   Tu puntaje fue: ${pregunta.puntos}`)
                   
        })
    }
}

comenzarPreguntas()
mostrarResultadoTotal()
mostrarRespuestas()
alert("gracias por jugar!!!")




