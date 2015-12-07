angular.module("listaTelefonica").directive("uiAlert", function () {

	return {

			template: "<div class=col-md-6><div class=ui-alert><div class=ui-alert-title> {{title}} </div><div class=ui-alert-message ng-transclude> </div></div></div>",
			replace: true, 
			restrict: "AE",
			scope: {
				title: "@"
			}, 
			transclude:true

	};

});