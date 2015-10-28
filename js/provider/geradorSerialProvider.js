angular.module("listaTelefonica").provider( "serialGenerator" , function () {

	var _tamanho = 10;
	var _maximo = 64;
	var _minimo = 32;

	this.getMaximo = function() {
		return _maximo
	};

	this.setMaximo = function(tamanho) {
		_maximo = tamanho;
	};

	this.setTamanho = function(tamanho) {
		_tamanho = tamanho;
	};

	this.getTamanho = function() {
		return _tamanho;
	};


	this.$get = function(){
		return  {

			gerar: function(){

				var serial = "";
				while(serial.length < _tamanho) {
					serial += String.fromCharCode(Math.floor(Math.random() * _maximo) + _minimo);
				}

				return serial;
			}


		};
	};
});