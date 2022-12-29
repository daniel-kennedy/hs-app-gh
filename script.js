$(document).ready(function(){
  $("#filterInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#iconTable td").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function dismissSwb() {
  document.getElementById('sitewide-banner').style.display = "none";
}

function getFocus(){
  document.getElementById('filterInput').focus();
}