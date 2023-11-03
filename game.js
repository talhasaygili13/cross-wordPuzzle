var values = [  'wwwwwwbwwwww',
'wwwwwwwwwwww',
'wwwwwwwwwwww',
'wwwwbwwwbwww',
'bwwwwwwbwwww',
'bwwwwbwwwbbb',
'bbbwwwbwwwwb',
'wwwwbwwwwwwb',
'wwwbwwwbwwww',
'wwwwwwwwwwww',
'wwwwwwwwwwww',
'wwwwwbwwwwww'
];
var ans_key =  ["SHAGGY-GREAT",
"LUPITANYONGO",
"IMANOPENBOOK",
"MATS-APT-CRY",
"-NOLITA-CHAO",
"-SWIM-LAO---",
"---NOM-KNOB-",
"HANG-APACHE-",
"ALI-DIL-OWES",
"DOGGYDAYCARE",
"THERESNOTIME",
"OARED-AUSTEN",
];
var total_rows = values.length;
var total_cols = values[0].length;
var spans_value = { "0,0":"1",
    "0,1":"2",
    "0,2":"3",
    "0,3":"4",
    "0,4":"5",
    "0,5":"6",
    "0,7":"7",
    "0,8":"8",
    "0,9":"9",
    "0,10":"10",
    "0,11":"11",
    "1,0":"12",
    "2,0":"14",
    "3,0":"15",
    "4,1":"18",
    "5,1":"21",
    "4,4":"19",
    "1,0":"12",
    "1,6":"13",
    "6,5":"25",
    "7,5":"32",
    "7,6":"33",
    "3,5":"16",
    "3,9":"17",
    "4,8":"20",
    "5,6":"22",
    "5,7":"23",
    "6,7":"26",
    "6,9":"27",
    "6,10":"28",
    "6,3":"24",
    "7,0":"29",
    "7,1":"30",
    "7,2":"31",
    "8,0":"34",
    "9,0":"38",
    "10,0":"41",
    "11,0":"42",
    "8,4":"35",
    "8,8":"36",
    "9,7":"40",
    "8,11":"37",
    "9,3":"39",
    "11,6":"43",

  };
var current = null;
function createFrameBoxes() {
var boxes = '';
for (let i = 0; i < values.length; i++) {
boxes += "<tr>";
for (let j = 0; j < values[i].length; j++) {
var s = spans_value[i + "," + j] ?? "";
boxes += `<th class="${values[i][j]}" row="${i}" col="${j}" data-row="${i}" data-col="${j}" id="th-${i}-${j}"><span>${s}</span><b></b></th>`
}
boxes += "</tr>"
}
document.getElementById('table').innerHTML = boxes;
}
createFrameBoxes();

const thElements = document.querySelectorAll("th");
thElements.forEach((thElement) => {
thElement.addEventListener("click", () => {
if (current !== null && current !== thElement) {
current.classList.remove("selected");
current.backgroundColor = "transparent";
}
if (thElement.classList.contains('w')) {
thElement.classList.add("selected");
}
current = thElement;
});
});

document.addEventListener("keyup", function(event) {
if (current != null) {
//console.log(event);
if (event.keyCode >= 37 && event.keyCode <= 40) {
nextMover(event.keyCode);
}
if (event.keyCode >= 65 && event.keyCode <= 90) {
current.innerHTML = event.key.toUpperCase();
nextMover(39);
}
if (event.keyCode == 8 || event.keyCode == 46){
current.innerHTML = '';
}
}
});

function nextMover(code) {
var row = parseInt(current.getAttribute("row"));
var col = parseInt(current.getAttribute("col"));

switch (code) {
case 37: // left
col = col == 0 ? total_cols - 1 : col - 1;
break;
case 38: // up
row = row == 0 ? total_rows - 1 : row - 1;
break;
case 39: // right
col = col == total_cols - 1 ? 0 : col + 1;
break;
case 40: // down
row = row == total_rows - 1 ? 0 : row + 1;
break;
default:
break;
}
if (current.classList.contains('w')) {
current.style.backgroundColor = 'transparent';
}
current = document.querySelectorAll('tr')[row].querySelectorAll('th')[col];
if (current.classList.contains('b')) {
nextMover(code);
}else{
current.style.backgroundColor = "blue";
}
}
var red=[];
var green=[];

function key_check() {

red.splice(0);
green.splice(0);

var whites = document.querySelectorAll('.w');
//console.log(whites);
whites.forEach(element => {
var row = element.getAttribute("row");
var col = element.getAttribute("col");
var text = element.innerHTML;
if(text.length > 0){
console.log(row, col, text);
if(ans_key[row][col] == text){
element.style.backgroundColor = "greenyellow";
green.push(element)
}else{
element.style.backgroundColor = "red";
red.push(element)
}
}
});
if(green.length == whites.length){
alert("Congrats! You got it right");
}
}

function color_clear() {
red.forEach(element => {
element.style.backgroundColor = "transparent";
element.innerHTML = '';
});
green.forEach(element => {
element.style.backgroundColor = "transparent";
});

console.log("WRONG", red);
console.log("CORRECT", green);

}