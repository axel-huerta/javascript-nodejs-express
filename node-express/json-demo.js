//const curso = require("../node-express/curso.json");

//console.log(curso.titulo)
//console.log(curso.temas)
//console.log(typeof curso);
//creacion de oob
const infoCurso = {
    "titulo": "aprende a programar",
    "numVistas": 65365,
    "numLikes": 300,
    "temas": [
        "java",
        "python"
    ],
    "esPublico": true
}
//console.log(infoCurso)
//conversion a JSON-->

let infoCursoJson = JSON.stringify(infoCurso); //conversion
console.log(infoCursoJson);
//conversion de JSON a un OOB
let infoCursoObjeto = JSON.parse(infoCursoJson);
console.log(infoCursoObjeto);
console.log(infoCursoObjeto.temas);





