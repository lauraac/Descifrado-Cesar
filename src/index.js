
console.log(cipher);

function getName() {
    let name=document .getElementById ("name").value;
    let pat=document.getElementById ("pat").value;
    let mat= document.getElementById ("mat").value;
    console.log (name + "  " +  pat + "  " + mat); 
}

//listener u observador
document.querySelector('#lac').addEventListener('click', getName)


let ButtonEncode = document.getElementById("encode");
let ButtonDecode = document.getElementById("decode");
// se ponen 2 variables con lef para darle una funcion
let string = '';
let offset = 0;

function actionData() {
  string = document.getElementById("texto").value;
  offset = parseInt(document.getElementById("displace").value);
}

ButtonEncode.onclick = function () {
  actionData();
  document.getElementById("result").value = cipher.encode(offset, string);
};

ButtonDecode.onclick = function () {
  actionData();
  document.getElementById("result").value = cipher.decode(offset, string);
};