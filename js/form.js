function postToGoogle() {
    var field1 = $("#fnameField").val();
    var field2 = $("#lnameField").val();
    var field3 = $("#emailField").val();
    var field4 = $("#phoneField").val();
    var field5 = $("#messageField").val();


    if (field1 == ""){
        alert('Please fill your first name');
        document.getElementById("fnameField").focus();
        return false;
    }
    if (field2 == ""){
        alert('Please fill your last name');
        document.getElementById("lnameField").focus();
        return false;
    }

    if (field3 == ""){
        alert('Please fill your email');
        document.getElementById("emailField").focus();
        return false;
    }
    if (field4 == "" || field4.length > 10 || field4.length < 10){
        alert('Please fill your complete phone #');
        document.getElementById("phoneField").focus();
        return false;
    }
    if (field5 == ""){
        alert('Please fill your message');
        document.getElementById("messageField").focus();
        return false;
    }

    $.ajax({
        url:"https://docs.google.com/forms/d/e/1FAIpQLSfb9eb-I3rpMn-UJQoJNOnJ_U5b8BtNQsfVYtB58II_3TM8gg/formResponse?",
        data: {"entry.778339149":field1, "entry.248488145":field2, "entry.1110892934":field3, "entry.880517738":field4, "entry.683958658":field5},
        type:"POST",
        dataType: "xml",
        success: function clearcontactForm() {
            $('$success-msg').show();
            $('#contactForm')[0].reset();
            $('$contactForm').hide();
        },
        error: function(x, y, z)
            {
                $('$success-msg').show();
                $('#contactForm')[0].reset();
                $('$contactForm').hide();
            }
        });
    return false;

}


function clearcontactForm() {
    $('$success-msg').show();
    $('#contactForm')[0].reset();
    $('$contactForm').hide();
}
