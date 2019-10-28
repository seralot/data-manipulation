let _ = require('lodash');

module.exports = {

    // Multiplicar todos los numeros de un array por dos
    transform_lodash: function(input) {
        return _.map(input, (x) => x*2)
    },

    // Filtrar lista para obtener usuarios activos
    usersActive_lodash: function(input) {
        return _.filter(input,['active',true]);
    },

    // Ordenas lista por id de usuario
    usersSort_lodash: function(input) {
        return _.orderBy(input, ['id'],'asc');
    },  

     // Fusionar listas
     fusion_lodash: function(input1, input2) {
        return _.concat(input1, input2);
    },

    // Obtener el valor con la puntuación más alta
    valor_lodash: function(input) {
        return _.max(input);
    },

    //  Obtener el objeto con la puntuación más alta'
    object_lodash: function(input) {
        return _.maxBy(input, function(o) { return o.score; });;
    },

    // Sumar un array
    sum_lodash: function(input) {
        return _.sumBy(input, function(o) { return o.price; });;
    },

    // Comprobar si existe un objeto en un array
    exists_lodash: function(input, object) {
        return _.some(input, object);
    }
}