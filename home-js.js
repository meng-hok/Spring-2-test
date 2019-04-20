var number_location = 0;
var div_location = ['#id_2_div', '#id_3_div', '#id_4_div', '#id_5_div', '#id_6_div'];
const func_location = () => {

    document.getElementById("btn_move").href = div_location[number_location];
    number_location >= 3 ? number_location = 0 : number_location++;
    //  alert (div_location[number_location] );
}