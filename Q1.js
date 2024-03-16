$(document).ready(function() {
    
    $('#signInForm').submit(function(e) {
        var signInUsername = $('#signInUsername').val();
        var signInPassword = $('#signInPassword').val();
        if (signInUsername === '' || signInPassword === '') {
            alert('Please fill in all fields for Sign In.');
            e.preventDefault();
        }
    });


    $('#signUpForm').submit(function(e) {
        var fullName = $('#fullName').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var phoneNumber = $('#phoneNumber').val();
        var address = $('#address').val();
        var gender = $('#gender').val();
        var age = $('#age').val();



        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName === '' || email === '' || password === '' || phoneNumber === '' || address === '' || gender === '' || age === '') {
        alert('Please fill all fields for sign Up.');
        e.preventDefault();
    } else if (!emailRegex.test(email) || !email.endsWith("gmail.com")) {
        alert('Please enter a valid Gmail address.');
        e.preventDefault();
    }

        
    });
});

