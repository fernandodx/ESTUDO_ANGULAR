angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPIFactory, config, serialGenerator){


			console.log(serialGenerator.gerar());
			

			$scope.titulo = config.tituloApp;

			$scope.contatos = [];

			$scope.operadoras = contatosAPIFactory.getListaOperadoras();

			$scope.classe = "selecionado";

			$scope.adicionarContato = function(contato) {
				$scope.contatos.push(angular.copy(contato));
				$scope.contatoForm.$setPristine();
				delete $scope.contato;

			};

			$scope.removerContatos = function(contatos) {
				$scope.contatos = contatos.filter( function (contato) {
					if(!contato.selecionado){
						return contato;
					}
				});
			};

			$scope.isContatoSelecionado = function(contatos) {
				return contatos.some(function (contato) {
					return !contato.selecionado;
				});
			}

			$scope.ordenarPor = function(campo) {
				$scope.parametroOrdem = campo;
				$scope.ordenacao = !$scope.ordenacao;
			}

			var carregarContatos = function() {
				contatosAPIFactory.getContatos().success(function (data) {
					console.log(data);
				}).error(function (data, status) {
					$scope.error = "Não foi possivel carregar os contatos."
				});
			};

			//carregarContatos();

		});