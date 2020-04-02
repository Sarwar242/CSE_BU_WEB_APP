$(function(){


	$("#error").hide();

	var error_name =false;
	var error_username = false;
	var error_password = false;
	var error_password2 = false;

	var name =1;
	var user =1;
	var pass =1;
	var pass2 =1;

	$("#form_name").focusout(function(){

		check_name();
	});

	$("#form_username").focusout(function(){

		check_username();
	});
	$("#form_username").focusout(function(){

		check_username2();
	});



	$("#form_password").focusout(function(){

		check_password();
	});

	$("#form_password2").focusout(function(){

		check_password2();
	});



	function check_name(){
		var name_length = $("#form_name").val().length;
		if(name_length<5 || name_length>20){
			name = 0;
			$("#error").html("Name should be 5-20 character");
			$("#error").show();
			$("#form_name").addClass("errorclass");
			error_name=true;
			
		}
		else{
			$("#form_name").removeClass("errorclass");
			$("#error").hide();
			
		}

	}

	function check_username(){
		var name_length = $("#form_username").val().length;
		if(name_length<5 || name_length>10){
			user = 0;
			$("#error").html("Username should be 5-10 character");
			$("#error").show();
			$("#form_username").addClass("errorclass");
			error_username=true;
			
		}

		else{
			$("#form_username").removeClass("errorclass");
			$("#error").hide();
			
		}

	}

	function check_password(){
		var pass_length = $("#form_password").val().length;
		if(pass_length<8){
			pass = 0;
			$("#error").html("Password should be 8 characters long");
			$("#error").show();
			$("#form_password").addClass("errorclass");
			error_password=true;
			
		}
		else{
			$("#form_password").removeClass("errorclass");
			$("#error").hide();
			
		}

	}

	function check_password2(){
		var password = $("#form_password").val();
		var password2 = $("#form_password2").val();
		if(password!=password2){
			pass2 = 0;
			$("#error").html("Password does not match!");
			$("#error").show();
			$("#form_password2").addClass("errorclass");
			error_password2=true;
			
		}
		else{
			$("#form_password2").removeClass("errorclass");
			$("#error").hide();
			pass2 = 1;
			
		}

	}


	function check_username2(){
		    $(".valid").hide();
   			 $("document").ready(function(){
     		 $("#form_username").keyup(function(){
      		  var username = $("#form_username").val();
      		  $.ajax({
        		  url : "valid_username.php",
       		   type: "POST",
        		  data : {
         		   username : username
        	  }, success: function(result) {
            if(result == "available") {
             
				$("#error").hide();

            } else {
            	 $("#error").html("Username is not available!");
              $("error").show();
            }
          }
        });
      });
    });
	}


	$("#registration_form").submit(function(){

	var error_name = false;
	var error_username = false;
	var error_password = false;
	var error_password2 = false;

	var name = 1;
	var user = 1;
	var pass = 1;
	var pass2 = 1;

	check_name();
	check_username();
	check_password();
	check_password2();

	if (name == 0 && user == 0 && pass == 0 && pass2== 0)
	 {
	 	return false;
	 }
	 else
	 {
	 	return true;
	 }


	});


});