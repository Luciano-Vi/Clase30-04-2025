document.writeln("<h1> clase 2 java script</h1>")
//crear arreglo con 20 numeros

let arraynumeros=[]

for(let i=1;i<=20;i++){
    arraynumeros.push(i*2)
}

console.log(arraynumeros)

//sumar items de un arreglo

let edades=[21,8,5,15,44]

let suma=0

edades.forEach(funsuma)

function funsuma(item){
    suma+=item; console.log(suma)
}

console.log("la suma es",suma)

//ejercicio

let alumno=["Ana","Carlos","Javier","Pablo","Felipe"]
let notas=[6.7,4.5,5.5,6.6,7.0]
//mostrar el nombre y la nota del alumno con mayor nota

let NotaMayor=0

notas.forEach((nota)=>{
    if (nota > NotaMayor) {
        NotaMayor = nota;
    }
})

console.log(NotaMayor)

function corresponderEstudiante (estudiante) {
    if (notas.indexOf(NotaMayor) == alumno.indexOf(estudiante)) {
        console.log(`El alumno ${estudiante} obtuvo la mejor calificación con un ${NotaMayor}`);
    }
}

alumno.forEach(corresponderEstudiante);