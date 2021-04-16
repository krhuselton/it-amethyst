$( "#CircleForm" ).validate({

});

function displayCalculations() {
    if ($("#CircleForm").valid()) {
        
        document.getElementById("diameter").innerHTML = "";
        
        var radius;
        var radiusfp;
        var diameter;
        
        radius = document.getElementById("radius").value;
        
        radiusfp = parseFloat( radius );
        
        diameter = calcDiameter(radiusfp);
        
        document.getElementById("diameter").innerHTML = diameter.toString();
        
        document.getElementById("circumference").innerHTML = "";
        
        var circumference;
        
        radius = document.getElementById("radius").value;
        
        radiusfp = parseFloat( radius );
        
        circumference = calcCircumference(radiusfp);
        
        document.getElementById("circumference").innerHTML = circumference.toString();
        
        document.getElementById("area").innerHTML = "";
        
        var area;
        
        radius = document.getElementById("radius").value;
        
        radiusfp = parseFloat( radius );
        
        area = calcArea(radiusfp);
        
        document.getElementById("area").innerHTML = area.toString();
        
        var radius = prompt ("Please enter a Radius Value","Please input a Real Number")
    }
}

function calcDiameter (radius) {
    return Math.PI = (2 * radius);
}

function calcCircumference (radius) {
    return 2*Math.PI * (radius);
}

function calcArea (radius) {
    return Math.PI * (radius * radius);
}

function clearForm() {
            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerHTML = "";
            document.getElementById("diameter").innerHTML = "";
            document.getElementById("circumference").innerHTML = "";
            document.getElementById("area").innerHTML = "";
        }