angular.module("listaTelefonica").factory("contatosAPIFactory", function($http, config) {

	var _operadora = function(nome, codigo, categoria, preco) {
		return {
			nome : nome,
			codigo: codigo,
			categoria : categoria,
			preco: preco
		};
	};

	var _getContatos = function() {

		return $http.get(config.baseUrl +  "contatos");
	};

	var _listaOperadoras = function() {

		return  [ 
				  _operadora("GVT", 25, "Fixo", 1),
				  _operadora("NET", 11, "Fixo", 1),
				  _operadora("OI", 12, "Celular", 1),
 				  _operadora("TIM", 9, "Celular", 1),
				  _operadora("CLARO", 98, "Celular", 1),
				  _operadora("ANATEL", 12, "Fixo", 2)

		];
				
	};


	return {
			getListaOperadoras : _listaOperadoras,
			getContatos : _getContatos
		};

});