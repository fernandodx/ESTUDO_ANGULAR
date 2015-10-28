angular.module("listaTelefonica").service("operadoraAPIService", function($http, config) {


	this.getOperadoras = function () {
		return $http.get( config.baseUrl + "operadoras");
	};


});