/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//onclick "convert to KPL" = mpgtokpl(input)
function mpgtokpl(){
    var input = document.getElementById("input").value;
    var result = input * 0.4251;
    document.getElementById("output").value = result.toFixed(1);
}

//onclick "convert to MPG" = mpgtokpl(input);
function kpltompg(){
    var input = document.getElementById("input").value;
    var result = input * 2.352;
    document.getElementById("output").value = result.toFixed(1);
}
