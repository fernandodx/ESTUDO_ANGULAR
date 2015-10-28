angular.module("listaTelefonica").directive("uiAlert", function () {

	return {

			template: "<div class=col-md-6><div class=ui-alert><div class=ui-alert-title>Ops! Aconteceu um problema. :|</div><div class=ui-alert-message>{{error}}</div></div></div>",
			replace:true

	};

});