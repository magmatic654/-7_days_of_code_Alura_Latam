// Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

// Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
 
// Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.
 
// Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.
 
// Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.

user_area = Number(prompt('¿Quieres seguir hacia el area Front-End o hacia Back-End? 1. Front-End / 2. Back-End')) 

if(user_area === 1){
    alert('Podrás aprender React o Vue')
}else if (user_area === 2){
    alert('Podrás aprender C# o Java')
}

user_election = (area)=>{
    switch(area){
        case 1:
            return 'Front-End'
        case 2:
            return 'Back-End'
        default:
            return 'No definido'
    }

}
user_inverse_election = (area)=>{
    switch(area){
        case 1:
            return 'Back-End'    
        case 2:
            return 'Front-End'
        default:
            return 'No definido'
    }

}

user_specialization = Number(prompt(`¿Deseas seguir especializandote en ${user_election(user_area)} o deseas cambiar a ${user_inverse_election(user_area)} para convertirte en Full-Stack? 
    \n1. Seguir especializacion ${user_election(user_area)} 
2. Convertise Full-Stack pasando a ${user_inverse_election(user_area)}`))

if(user_specialization === 1){
    alert(`¡Felicidades! Podrás seguir especializandote en ${user_election(user_area)}`)
}else if (user_specialization === 2){
    alert(`¡Felicidades! Podrás convertirte en un Full-Stack Developer `)
}

user_tecnologies = []

while(true){
    tecnologies = prompt('¿Qué tecnologías le gustaría especializarse o conocer? Responde una a la vez y dale aceptar para continuar con la siguiente')
    if (tecnologies == ''){
        break
    }
    user_tecnologies.push(tecnologies)
}

alert(`Me gustaron tus elecciones ${user_tecnologies}`)
// tecnologies_plus = prompt('¿Hay alguna otra tecnologia?')

// alert(tecnologies)