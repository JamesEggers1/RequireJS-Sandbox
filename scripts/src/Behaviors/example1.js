define(["../Models/example1"], function (model) {
	return { 
		formSubmitted: function (e){
			e.preventDefault();
			alert(model.username.val());
		}
	};
});