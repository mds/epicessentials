$( document ).ready(function() {

  var rellax = new Rellax('.rellax', {
    // center: true
    callback: function(position) {
        // callback every position change
        console.log(position);
    }
  });

  // $('.class').on("click", function (event) {
  //   something();
  // });

  // function something(){
  //   console.log("something");
  // }

  // event tracking
  // $('.class').click(function(){ _gs('event', 'class was clicked') });

});
