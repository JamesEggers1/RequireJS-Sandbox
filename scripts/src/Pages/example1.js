require(["../Models/example1", "../Behaviors/example1"], 
function (model, behaviors) {
	model.username = $("#username");
	model.password = $("#password");
	model.submit = $("#submit");
	
	require.ready(function (){
		model.submit.bind("click", behaviors.formSubmitted);
	});
});