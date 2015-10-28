angular.module("listaTelefonica").filter("teste", function () {
	return function (input) {

		var listaNomes = input.split(' ');
		var listaNomesFormatada = listaNomes.map(function (nome) {
			
			if(/(da|de)/.test(nome.toLowerCase())) return nome.toLowerCase();

			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});

		return listaNomesFormatada.join(" ");
	};
});