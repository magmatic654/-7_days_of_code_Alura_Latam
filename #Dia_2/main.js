// Por eso, hoy te voy a enseñar a desarrollar un programa simulando 
// una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas: 

// - ¿Cuál es tu nombre?
// - ¿Cuántos años tienes?
// - ¿Qué lenguaje de programación estás estudiando?

// A medida que se hagan las preguntas, la persona que esté usando 
// el programa debe responder cada una de ellas.

// Al final, el sistema mostrará el mensaje:

// "Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

let user_name = prompt('¿Cuál es tu nombre?');
let user_age =  prompt('¿Cuantos años tienes?');
let user_language = prompt('¿Qué lenguaje de programación estás estudiando?');

alert(`Hola ${user_name ? user_name : 'desconocido'} ${user_age ? `, tienes ${user_age} años` : ''} ${user_language ? `, veo que ya estás aprendiendo ${user_language}!` : ', veo que tienes indecisión con un lenguaje para estudiar'}`)


// EJERCICIO OPCIONAL

// Si deseas profundizar en el tema de hoy, tengo otro ejercicio para ti.
// Pero es 100% opcional.
// Vas a complementar el código para que, después de mostrar el mensaje 
// anterior, el programa pregunte:

// ¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ 
// o 2 para NO.

// Y luego, dependiendo de la respuesta, debería mostrar uno de los 
// siguientes mensajes:

// 1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
// 2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?

likes_language = prompt(`¿Te gusta el lenguaje ${user_language}? Responde con el número 1 para Sí y 2 para No`);

if(likes_language === '1'){
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
}else if(likes_language === '2'){
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}
else{
    alert('Mucha suerte, ¡No te olvides de contarme la próxima vez!')
}  