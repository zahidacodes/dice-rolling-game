let x;
let y;
let z;

document.getElementById("rollbutton").onclick=function(){
    x=Math.floor(Math.random() *6+1);
    y=Math.floor(Math.random() *6+1);
    z=Math.floor(Math.random() *6+1);

    document.getElementById("A").innerText=x;
    document.getElementById("B").innerText=y;
    document.getElementById("C").innerText=z;
}