/*--------JS FILE TO CONTROL CONTACT FORM IN CONTACT PAGE--*/

function checkEmail () {

		var getEmail = document.forms["form"]["email"].value;
		// console.log(getEmail);

		if (getEmail.lastIndexOf("@") < 0) {
			alert("Please enter a valid email");
		} else {
			alert("Thank you for your contact, I'll reply as soon as possible");
		}
		
}
