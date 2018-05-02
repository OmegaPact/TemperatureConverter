function ConvertTemperature()
{
    //get the degree and type inputs
    var UserDegree = parseFloat(document.getElementById("txtDegree").value);
    var DegreeType = this.document.getElementById("optType").value;

    //convert and display
    switch(DegreeType)
    {
        case 'fahrenheit':
        ConvertFromFahrenheit(UserDegree);
        break;
        case 'celsius':
        ConvertFromCelsius(UserDegree);
        break;
        case 'kelvin':
        ConvertFromKelvin(UserDegree);
        break;
    }


    //alert(UserDegree + " " + DegreeType);

    //convert to all and display them
    
    
    
}

function ConvertFromFahrenheit(Temp)
{
    //F to C = (% - 32) * 5/9
    //F to K = (% + 459.67) * 5/9

    var F = Temp;
    var C = (Temp - 32) * 5/9;
    var K = (Temp + 459.67) * 5/9;
    DisplayOutPut(F,C,K);
}

function ConvertFromCelsius(Temp)
{
    //C to F = % *9/5 + 32
    //C to k = % + 273.15
    var F = Temp* 9/5 + 32;
    var C = Temp;
    var K = Temp + 273.15;
    DisplayOutPut(F,C,K);

}

function ConvertFromKelvin(Temp)
{
    //K to F = % * 9/5 - 459.67
    //K to C = % - 273.15
    var F = Temp * 9/5 - 459.67;
    var C = Temp - 273.15;
    var K = Temp;
    DisplayOutPut(F,C,K);
}

function DisplayOutPut(FahrenheitTemp, CelsiusTemp,KelvinTemp)
{
    
    document.getElementById("OutputList").innerHTML = "<li class=\"list-group-item\"> Fahrenheit: " + FahrenheitTemp.toFixed(2) + "<li class=\"list-group-item\"> Celsius: " + CelsiusTemp.toFixed(2) + "<li class=\"list-group-item\"> Kelvin: " + KelvinTemp.toFixed(2);
}