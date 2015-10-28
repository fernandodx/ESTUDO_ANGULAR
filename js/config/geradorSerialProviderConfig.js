angular.module("listaTelefonica").config(function (serialGeneratorProvider) {

	console.log(serialGeneratorProvider.getMaximo());
	serialGeneratorProvider.setTamanho(100);

});