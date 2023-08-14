/*
    Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") 
    devolverá 32°F.
*/

const temperatureConverter = (temperature=undefined, degree="") => {
    if (temperature === undefined) return console.warn("Debe ingresar una temperatura");
    if (!Number.isInteger(temperature)) return console.error("Error, debe ingresar un valor númerico para la temperatura");
    if (!degree) return console.warn("Debe ingresar tipo de grado 'C' o 'F', Celcius o Farenheit respectivamente"); 
    if (!(degree === "C") && !(degree === "F")) return console.error(`Error, ingresate '${degree}' grados. Debe ingresar tipo de grado 'C' o 'F', Celcius o Farenheit respectivamente`);

    if (degree === "C"){
        let tempCToTempF = (temperature * 9/5) + 32;
        
        return console.info(`Ingresaste ${temperature} grados ${degree}, su conversión es: ${tempCToTempF} grados F`);
    } else{
        let tempFToTempC = (temperature - 32) * 5/9 ;

        return console.info(`Ingresaste ${temperature} grados ${degree}, su conversión es: ${tempFToTempC} grados C`);
    }
}


console.info("EJERCICIO 14");
temperatureConverter();
temperatureConverter(10);
temperatureConverter(23,"A");
temperatureConverter("hola","F");
temperatureConverter(32,"F");
temperatureConverter(0,"C");
temperatureConverter(140,"F");
temperatureConverter(45,"C");




