$("#conversionform").submit(function(e) {
  e.preventDefault();
var amount = $("#fromvalue").val();
var from = $("#fromunits").val();
var into = $("#tounits").val();
if (amount === "" || from === "0" || into === "0"){
alert("Value is Required");
  return false;
}});
$.ajax({
  type : "POST",
  url : "https://brucebauer.info/assets/ITEC3650/unitsconversion.php",
  data : 'fromvalue=' + fromvalue + '&fromunits=' + fromunits + '&tounits=' + tounits,
  success : function(res) {
    $("#result").html(res);
  }
});