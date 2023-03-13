/**
 * VARIABLES
 */

const actuall_date = new Date();
var today = document.getElementById("datum");
var day = actuall_date.getDate();
var month = actuall_date.getMonth() +1;
var year = actuall_date.getFullYear();
today.innerHTML = day + "." + month + "." + year;



var total_amount_pills = document.getElementById("anzahl");
var amount_pills = 1;

var box_amb = document.getElementById("amb");
var box_hct = document.getElementById("hct");
var box_cad = document.getElementById("cad");
var box_ros = document.getElementById("ros");

var menue_amb = document.getElementById('wirkstoff1');
var menue_hct = document.getElementById('wirkstoff2');
var menue_cad = document.getElementById('wirkstoff3');
var menue_ros = document.getElementById('wirkstoff4');

var dos_amd1 = document.getElementById('dosierung1');
var dos_amd2 = document.getElementById('anzeige1');
var math_amd = 0;

var dos_hct1 = document.getElementById('dosierung2');
var dos_hct2 = document.getElementById('anzeige2');
var math_hct = 0;

var dos_cad1 = document.getElementById('dosierung3');
var dos_cad2 = document.getElementById('anzeige3');
var math_cad = 0;

var dos_ros1 = document.getElementById('dosierung4');
var dos_ros2 = document.getElementById('anzeige4');
var math_ros = 0;

var video = document.getElementById('print_vid');

/**
 * FUNCTIONS
 */

function amount_add_1 () {
    if (amount_pills < 30) {
        amount_pills ++;
        total_amount_pills.innerHTML = amount_pills;
    } 
}

function amount_add_5 () {
    if (amount_pills < 25) {
        amount_pills = amount_pills + 5;
        total_amount_pills.innerHTML = amount_pills;
    } else if (amount_pills < 30) {
        amount_pills = 30;
        total_amount_pills.innerHTML = amount_pills;
    }
}

function amount_reduce_1 () {
    if (amount_pills > 1) {
        amount_pills --;
        total_amount_pills.innerHTML = amount_pills;
    }
}

function amount_reduce_5 () {
    if (amount_pills > 5) {
        amount_pills = amount_pills - 5;
        total_amount_pills.innerHTML = amount_pills;
    } else if (amount_pills > 1) {
        amount_pills = 1;
        total_amount_pills.innerHTML = amount_pills;
    }
}

function show_amb () {
    if (box_amb.style.display == 'none'){
        box_amb.style.display = 'block';
        box_hct.style.display = 'none';
        box_cad.style.display = 'none';
        box_ros.style.display = 'none';        
        
        menue_amb.style.backgroundColor = "#99d69f";
        menue_hct.style.backgroundColor = "#9bdaf3";
        menue_cad.style.backgroundColor = "#9bdaf3";
        menue_ros.style.backgroundColor = "#9bdaf3";
    } else {
        box_amb.style.display = 'none';
        menue_amb.style.backgroundColor = "#9bdaf3";
    }
}

function show_hct () {
    if (box_hct.style.display == 'none'){
        box_amb.style.display = 'none';
        box_hct.style.display = 'block';
        box_cad.style.display = 'none';
        box_ros.style.display = 'none';

        menue_amb.style.backgroundColor = "#9bdaf3";
        menue_hct.style.backgroundColor = "#99d69f";
        menue_cad.style.backgroundColor = "#9bdaf3";
        menue_ros.style.backgroundColor = "#9bdaf3";
    } else {
        box_hct.style.display = 'none';
        menue_hct.style.backgroundColor = "#9bdaf3";
    }
}

function show_cad () {
    if (box_cad.style.display == 'none'){
        box_amb.style.display = 'none';
        box_hct.style.display = 'none';
        box_cad.style.display = 'block';
        box_ros.style.display = 'none';

        menue_amb.style.backgroundColor = "#9bdaf3";
        menue_hct.style.backgroundColor = "#9bdaf3";
        menue_cad.style.backgroundColor = "#99d69f";
        menue_ros.style.backgroundColor = "#9bdaf3";
    } else {
        box_cad.style.display = 'none';
        menue_cad.style.backgroundColor = "#9bdaf3";
    }
}

function show_ros () {
    if (box_ros.style.display == 'none'){
        box_amb.style.display = 'none';
        box_hct.style.display = 'none';
        box_cad.style.display = 'none';
        box_ros.style.display = 'block';

        menue_amb.style.backgroundColor = "#9bdaf3";
        menue_hct.style.backgroundColor = "#9bdaf3";
        menue_cad.style.backgroundColor = "#9bdaf3";
        menue_ros.style.backgroundColor = "#99d69f";
    } else {
        box_ros.style.display = 'none';
        menue_ros.style.backgroundColor = "#9bdaf3";
    }
}

function m01_amd () {
    if (math_amd > 0) {
        math_amd = math_amd - 0.1;
        math_amd_rounded = math_amd.toFixed(1);
        dos_amd1.innerHTML = math_amd_rounded;
        dos_amd2.innerHTML = math_amd_rounded;
    }
}

function m1_amd () {
    if (math_amd > 1) {
        math_amd = math_amd - 1;
        math_amd_rounded = math_amd.toFixed(1);
        dos_amd1.innerHTML = math_amd_rounded;
        dos_amd2.innerHTML = math_amd_rounded;
    } else if (math_amd > 0) {
        math_amd = 0;
        math_amd_rounded = math_amd.toFixed(1);
        dos_amd1.innerHTML = math_amd_rounded;
        dos_amd2.innerHTML = math_amd_rounded;
    }
}

function p01_amd () {
    math_amd = math_amd + 0.1;
    math_amd_rounded = math_amd.toFixed(1);
    dos_amd1.innerHTML = math_amd_rounded;
    dos_amd2.innerHTML = math_amd_rounded;   
}

function p1_amd () {
    math_amd = math_amd + 1;
    math_amd_rounded = math_amd.toFixed(1);
    dos_amd1.innerHTML = math_amd_rounded;
    dos_amd2.innerHTML = math_amd_rounded;
}

function m01_hct () {
    if (math_hct > 0) {
        math_hct = math_hct - 0.1;
        math_hct_rounded = math_hct.toFixed(1);
        dos_hct1.innerHTML = math_hct_rounded;
        dos_hct2.innerHTML = math_hct_rounded;
    }
}

function m1_hct () {
    if (math_hct > 1) {
        math_hct = math_hct - 1;
        math_hct_rounded = math_hct.toFixed(1);
        dos_hct1.innerHTML = math_hct_rounded;
        dos_hct2.innerHTML = math_hct_rounded;
    } else if (math_amd > 0) {
        math_hct = 0;
        math_hct_rounded = math_hct.toFixed(1);
        dos_hct1.innerHTML = math_hct_rounded;
        dos_hct2.innerHTML = math_hct_rounded;
    }
}

function p01_hct () {
    math_hct = math_hct + 0.1;
    math_hct_rounded = math_hct.toFixed(1);
    dos_hct1.innerHTML = math_hct_rounded;
    dos_hct2.innerHTML = math_hct_rounded;   
}

function p1_hct () {
    math_hct = math_hct + 1;
    math_hct_rounded = math_hct.toFixed(1);
    dos_hct1.innerHTML = math_hct_rounded;
    dos_hct2.innerHTML = math_hct_rounded;
}

function m01_cad () {
    if (math_cad > 0) {
        math_cad = math_cad - 0.1;
        math_cad_rounded = math_cad.toFixed(1);
        dos_cad1.innerHTML = math_cad_rounded;
        dos_cad2.innerHTML = math_cad_rounded;
    }
}

function m1_cad () {
    if (math_cad > 1) {
        math_cad = math_cad - 1;
        math_cad_rounded = math_cad.toFixed(1);
        dos_cad1.innerHTML = math_cad_rounded;
        dos_cad2.innerHTML = math_cad_rounded;
    } else if (math_cad > 0) {
        math_cad = 0;
        math_cad_rounded = math_cad.toFixed(1);
        dos_cad1.innerHTML = math_cad_rounded;
        dos_cad2.innerHTML = math_cad_rounded;
    }
}

function p01_cad () {
    math_cad = math_cad + 0.1;
    math_cad_rounded = math_cad.toFixed(1);
    dos_cad1.innerHTML = math_cad_rounded;
    dos_cad2.innerHTML = math_cad_rounded;   
}

function p1_cad () {
    math_cad = math_cad + 1;
    math_cad_rounded = math_cad.toFixed(1);
    dos_cad1.innerHTML = math_cad_rounded;
    dos_cad2.innerHTML = math_cad_rounded;
}

function m01_ros () {
    if (math_ros > 0) {
        math_ros = math_ros - 0.1;
        math_ros_rounded = math_ros.toFixed(1);
        dos_ros1.innerHTML = math_ros_rounded;
        dos_ros2.innerHTML = math_ros_rounded;
    }
}

function m1_ros () {
    if (math_ros > 1) {
        math_ros = math_ros - 1;
        math_ros_rounded = math_ros.toFixed(1);
        dos_ros1.innerHTML = math_ros_rounded;
        dos_ros2.innerHTML = math_ros_rounded;
    } else if (math_ros > 0) {
        math_ros = 0;
        math_ros_rounded = math_ros.toFixed(1);
        dos_ros1.innerHTML = math_ros_rounded;
        dos_ros2.innerHTML = math_ros_rounded;
    }
}

function p01_ros () {
    math_ros = math_ros + 0.1;
    math_ros_rounded = math_ros.toFixed(1);
    dos_ros1.innerHTML = math_ros_rounded;
    dos_ros2.innerHTML = math_ros_rounded;   
}

function p1_ros () {
    math_ros = math_ros + 1;
    math_ros_rounded = math_ros.toFixed(1);
    dos_ros1.innerHTML = math_ros_rounded;
    dos_ros2.innerHTML = math_ros_rounded;
}

function print_b () {
    document.getElementById('controll_frame').style.display = "none";
    video.style.display = "inline-flex";

    setTimeout(()=> {video.style.display = "none";},14000);
    setTimeout(()=> {document.getElementById("frame_3").style.display = "block";},14000);  
    
    var charge_nr = document.getElementById("chargennummer").value;
    var display_charge_nr = document.getElementById("display_chargennr");
    display_charge_nr.innerHTML = charge_nr;

    qr_decision();
}

function qr_decision() {
    var selection_name = document.getElementById("patient").value;
    var selection_sprache = document.getElementById("sprache").value;
    var display_qr = document.getElementById("qr_code");

    if (selection_name == 'frau_wohlfarth' && selection_sprache == 'deutsch') {
        display_qr.style.backgroundImage = "url(./assets/qrcode/wohlfarthDE.png)"
    } else if (selection_name == 'frau_wohlfarth' && selection_sprache == 'englisch') {
        display_qr.style.backgroundImage = "url(./assets/qrcode/wohlfarthEN.png)"
    } else if (selection_name == 'frau_wohlfarth' && selection_sprache == 'hindi') {
        display_qr.style.backgroundImage = "url(./assets/qrcode/wohlfarthHI.png)"
    } else if (selection_name == 'herr_schneider' && selection_sprache == 'deutsch') {
        display_qr.style.backgroundImage = "url(./assets/qrcode/schneiderDE.png)"
    } else if (selection_name == 'herr_schneider' && selection_sprache == 'englisch') {
        display_qr.style.backgroundImage = "url(./assets/qrcode/schneiderEN.png)"
    } else if (selection_name == 'herr_schneider' && selection_sprache == 'hindi') {
        display_qr.style.backgroundImage = "url(./assets/qrcode/schneiderHI.png)"
    } else if (selection_name == 'frau_ammer' && selection_sprache == 'deutsch') {
        display_qr.style.backgroundImage = "url(./assets/qrcode/ammerDE.png)"
    } else if (selection_name == 'frau_ammer' && selection_sprache == 'englisch') {
        display_qr.style.backgroundImage = "url(./assets/qrcode/ammerEN.png)"
    } else if (selection_name == 'frau_ammer' && selection_sprache == 'hindi') {
        display_qr.style.backgroundImage = "url(./assets/qrcode/ammerHI.png)"
    }
}
