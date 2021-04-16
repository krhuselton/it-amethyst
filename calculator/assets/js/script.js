function calculate() {
    
    /* Make sure that the form is valid */
    if ($("#myform").valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("plusOperator").checked) {
            operator = document.getElementById("plusOperator").value;
        }
        if (document.getElementById("minusOperator").checked) {
            operator = document.getElementById("minusOperator").value;
        }
        if (document.getElementById("multiplyOperator").checked) {
            operator = document.getElementById("multiplyOperator").value;
        }
        if (document.getElementById("divideOperator").checked) {
            operator = document.getElementById("divideOperator").value;
        }

        var result;
        
        if (operator == "+") {
                result = operand1fp + operand2fp;
            }
        if (operator == "-") {
                result = operand1fp - operand2fp;
            }
            if (operator == "*") {
                result = operand1fp * operand2fp;
            }
            if (operator == "/") {
                result = operand1fp / operand2fp;
            }
        
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand3").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("Operand3Error").innerHTML = "";
    document.getElementById("plusOperator").checked = false;
    document.getElementById("minusOperator").checked = false;
    document.getElementById("multiplyOperator").checked = false;
    document.getElementById("divideOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});
