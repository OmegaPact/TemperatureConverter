function ConvertTemperature()
{
    //get the degree and type inputs
    var UserDegree = parseFloat(document.getElementById(txtDegree));

    var other = document.getElementById(optType).Value;
    
    alert(other);

    //var DegreeType = document.getElementById(optType).options[0];

    //alert(UserDegree + " " + DegreeType);

    //convert to all and display them
    ConvertToFahrenheit();
    ConvertToCelsius();
    ConvertToKelvin();
}

function ConvertToFahrenheit()
{

}