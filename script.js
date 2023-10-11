function getFormvalue() {
    //Write your code here

	var form = document.getElementById("form1");

	var firstName = document.getElementById("firstname");
	var lastName = document.getElementById("lastname");
	
	alert(firstName.value + " " + lastName.value);

}

//document.getElementById("form1").addEventListener("submit", function (e) {
  //e.preventDefault(); // Prevent the form from submitting
  //getFormValue(); // Call the getFormValue function
//});
