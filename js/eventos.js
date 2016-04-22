//la function principal de la pagina
var empiezaApp = function()
{
	var ValidarUsuario = function()
	{
		var usuario = $("#usuario").val();
		var clave   = $("#clave").val();
		if (usuario!="" && clave!="")
		{
			var parametros = "opc=validaentrada"+"&usuario="+usuario+"&clave="+clave+"&id="+Math.random();
			$.ajax({
				cache:false,
				type: "POST",
				dataType: "json",
				url: "php/utilerias.php",
				data: parametros,
				success: function(response){
					if(response.respuesta==true)
					{
						$("#login").hide("slow");
						$("#menuprincipal").show("slow");
						$("#nombreusuario").html("Bienvenido: "+response.nombre);
					}
				},
				error: function(xhr,ajaxOptions,thrownError){

				}
			});
		}
		else
			alert("Nombre de usuario o contraseña incorrectos");
	}
	var usuario_tecla = function(tecla)
	{
		if (tecla.which==13)
		{
			$("#clave").focus();
		}	
	}
	var clave_tecla=function(tecla)
	{
		if (tecla.which==13) 
		{
			ValidarUsuario();
		};
	}

	$("#btnEntrar").on("click",ValidarUsuario);
	$("#usuario").on("keypress",usuario_tecla);
	$("#clave").on("keypress",clave_tecla);
}
// inicio de la pagina
$(document).on("ready",empiezaApp);