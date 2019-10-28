module.exports = {

    // Multiplicar todos los numeros de un array por dos
    transform: function(input) {

        for(i=0; i < input.length; i++){
            input[i] *= 2;
        };

        return input;
    },

    // Filtrar lista para obtener usuarios activos
    usersActive: function(input) {
        let users = [];

        input.forEach(element => {
            if(element.active==true){
              users.push(element);
            }
        });

        return users;
    }
}
