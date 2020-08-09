$(document).ready(function() {
    $("#logout").on('click', function (event) {
          event.preventDefault();
           console.log('pressing the sign-outbutton')
           
                if(confirm("Are you sure you want to logout?"))
                    window.location.href = "/";
    
                return false;
            });
        });