$("#conversionform").submit(function(e) {
  e.preventDefault();
var amount = $("#fromvalue").val();
var from = $("#fromunits").val();
var into = $("#tounits").val();
if (amount === "" || from === "0" || into === "0"){
alert("Please fill out all of the fields!");
  return false;
          $.ajax({
            type : "POST",
            url : "https://brucebauer.info/assets/ITEC3650/unitsconversion.php",
            data  : 'amount=' + amount +
                    '&from=' + from +
                    '&into=' + into,
            success : function(res) {
              $("#result").html(
                amount
                + " "
                + $('#from option:selected').text()
                + " = "
                + res
                + " "
                + $('#into option:selected').text()
              )
              .css("display", "inline-block");
            }
          });
        });
      });

}});