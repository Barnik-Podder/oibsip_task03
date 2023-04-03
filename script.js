const Calculate_Temp = () => {
    const input_temp = document.getElementById('temp').value;
    const temp_option = document.getElementById('temp_degree');
    const value_temp = temp_degree.options[temp_option.selectedIndex].value;

    // Celsius to Fahrenheit
    const cel_fah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fah_cel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (value_temp == 'cel') {
        document.getElementById("result").innerHTML = cel_fah(input_temp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fah_cel(input_temp) + "&#176; Celsius";
    }
}

