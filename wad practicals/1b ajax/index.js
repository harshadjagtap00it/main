// myscript.js

$(document).ready(function(){
    $('#btnAddStudent').click(function(){
        // Get form data
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var contactNo = $('#contactNo').val();
        var dob = $('#dob').val();
        var gender = $('input[name="gender"]:checked').val();
        var branch = $('#sub').val();
        var rollno = $('#rollno').val();
        var registrationDate = $('#registrationDate').val();
        var parentName = $('#parentName').val();
        var parentMobileNo = $('#parentMobileNo').val();

        // Create student object
        var student = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contactNo: contactNo,
            dob: dob,
            gender: gender,
            branch: branch,
            rollno: rollno,
            registrationDate: registrationDate,
            parentName: parentName,
            parentMobileNo: parentMobileNo
        };

        // Add student data to local storage
        var students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));

        // Redirect to display data page
        window.location.href = 'display-data.html';
    });
});
