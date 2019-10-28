module.exports = {

    // Multiplicar todos los numeros de un array por dos
    transform: function(input) {
   
        return input.map( function(num){
            return num *= 2;
        })

    },

    // Filtrar lista para obtener usuarios activos
    usersActive: function(input) {
        
        function filtrarActivos(input){
            if(input.active==true){
                return true;
            }
        }

        return input.filter(filtrarActivos);
    },

    // Ordenas lista por id de usuario
    usersSort: function(input) {
     
     input.sort( function(a, b){
        return a.id - b.id;
     });

         return input;
     },    

    // Fusionar listas
    fusion: function(input1, input2) {
        
        let resultado = input1.concat(input2);

        return resultado;
    },

    // Obtener el valor con la puntuación más alta
    valor: function(input) {
        
        return Math.max.apply(null, input);

    },

    //  Obtener el objeto con la puntuación más alta'
    object: function(input) {

        // Ordenamos la lista de mayor a menor
        input.sort( function(a, b){
            return b.score - a.score;
         });

        //  Y mostramos el primer valor
        return input[0];
    },

    // Sumar un array
    sum: function(input) {
        // Utilizar map 
        let resultado = 0;

        input.map( num => {
            resultado += num.price;
        })

        return resultado;
    },

    // Comprobar si existe un objeto en un array
    exists: function(input, object) {
 
        let exists = function(element){
            return JSON.stringify(element) == JSON.stringify(object);
        }

        return input.some(exists);
    }
}
