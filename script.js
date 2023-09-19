function getFormvalue() {
    //Write your code here

	var form = document.getElementById("form1")

	var firstName = form.elements["firstName"].value;
  var lastName = form.elements["lastName"].value;
	
	alert("First Name: " + firstName + "\nLast Name: " + lastName);

}

document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting
  getFormValue(); // Call the getFormValue function
});
