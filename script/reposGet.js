/*--------JS FILE PULLING REPOS FROM GITHUB--*/

$(document).ready(function() {

    $.ajax({

        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/Mario77x/repos",

        success: function(response) {

            for (var i=0; i<response.length; i++) {
              
              $("#name" + i.toString()).html("<a href='" + response[i].html_url + "' target='_blank'>" + response[i].name + "</a>");
              $("#descrip" + i.toString()).html(response[i].description);   
              
            }
        
        }

    });

}); 
