
  $(document).ready(function() {

    $.ajax({

      type: "GET",
      dataType: "json",
      url: "https://api.github.com/users/Mario77x/repos",
      token: "30beaca9fd7428c4fcbdca14c46aa8d646219edf",
//       data: {
// name,
// url,
// html_url
// description

//       },

      success: function(response) {
        // $("#repos").html("");
        console.log(response);
      },
    });
  }); 
