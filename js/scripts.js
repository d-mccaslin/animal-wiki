$(document).ready(function() {
  $("button#form-button").click(function() {
    const animal = $("#animal").val();
    if (animal === "Deer") {
      $("#deer").show();
      $("#horse").hide();
      $("#gorilla").hide();
    } else if (animal === "Horse") {
      $("#horse").show();
      $("#deer").hide();
      $("#gorilla").hide();
    } else {
      $("#gorilla").show();
      $("#deer").hide();
      $("#horse").hide();
    }
  });
});