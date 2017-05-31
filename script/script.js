
  $(document).ready(function() {
    
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://",
      data: {
        q: "",
        type: "",
        filter: {
        "posts_per_page": 5
        }
      },

      success: function(response) {
        // $("#repos").html("");
        console.log(response);
      }
    });
  }); 
