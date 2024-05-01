// display-data.js

$(document).ready(function(){
  // Retrieve student data from local storage
  var students = JSON.parse(localStorage.getItem('students'));

  // Display student data
  $('#rollno').text(students[students.length - 1].rollno);
  $('#firstName').text(students[students.length - 1].firstName);
  $('#lastName').text(students[students.length - 1].lastName);
  $('#dob').text(students[students.length - 1].dob);
  $('#gender').text(students[students.length - 1].gender);
  $('#email').text(students[students.length - 1].email);
  $('#contactNo').text(students[students.length - 1].contactNo);
  $('#branch').text(students[students.length - 1].branch);
  $('#registrationDate').text(students[students.length - 1].registrationDate);
  $('#parentName').text(students[students.length - 1].parentName);
  $('#parentContactNo').text(students[students.length - 1].parentMobileNo);
});
