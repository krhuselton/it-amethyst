
$( "#CircleForm" ).validate({

});
function displayCalculations(){
    document.getElementById("diameter").innerHTML = "";
    
    var radius;
    var diameter;
    var circumference;
    var area;
    var result;
}

function calcArea (radius) {
    return radius * radius * math.PI;
    
}
function calcCircumference (radius) {
    return radius * math.PI * 2;
}
function calcDiameter (radius) {
    return radius * 2;
}