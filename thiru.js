async function thiru(){
    try{
    var res=await fetch("https://api-thirukkural.vercel.app/api?num=1");
    var res1=await res.json();
    console.log(res1);
    }catch(error){console.log(error)}



var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
var col=document.createElement("div");
col.setAttribute("class","col-lg-12 col-md-12 col-sm-12");


var table=document.createElement("table");
table.setAttribute("id","tab");
var tbody=document.createElement("tbody");

var td1=topic("Chapter name<sub>(in English)</sub>");
var td01=des(`${res1.chap_eng}`);
var td2=topic("Chapter name<sub>(in Tamil)</sub>");
var td02=des(`${res1.chap_tam}`);
var td3=topic("Chapter group<sub>(in English)</sub>");
var td03=des(`${res1.chapgrp_eng}`);
var td4=topic("Chapter group<sub>(in Tamil)</sub>");
var td04=des(`${res1.chapgrp_tam}`);
var td5=topic("Kural line<sub>(in English)</sub>");
var td05=des(`${res1.eng}`);
var td6=topic("Kural line<sub>(in English)</sub> with explanation");
var td06=des(`${res1.eng_exp}`);
var td7=topic("Kural line<sub>(in Tamil)</sub>");
var td07=des(`${res1.line1}<br>
${res1.line2}`);
var td8=topic("Kural line<sub>(in Tamil)</sub> with explanation");
var td08=des(`${res1.tam_exp}`);
var td9=topic("Number");
var td09=des(`${res1.number}`);
var td10=topic("Section in English");
var td010=des(`${res1.sect_eng}`);
var td11=topic("Section in Tamil");
var td011=des(`${res1.sect_tam}`);
var r1=trow(td1,td01);
var r2=trow(td2,td02);
var r3=trow(td3,td03);
var r4=trow(td4,td04);
var r5=trow(td5,td05);
var r6=trow(td6,td06);
var r7=trow(td7,td07);
var r8=trow(td8,td08);
var r9=trow(td9,td09);
var r10=trow(td10,td010);
var r11=trow(td11,td011);
tbody.append(r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11);

table.append(tbody);
col.append(table);

row.append(col);
container.append(row);
document.body.append(container);


function trow(a,b){
    var x=document.createElement("tr");
    x.append(a,b);
    return x;
}

function topic(y){
    
    var x=document.createElement("td");
    x.innerHTML=y;
    x.setAttribute("class","header");
    return x;
}
function des(y){
    var x=document.createElement("td");
    x.innerHTML=y; 
    return x;
}
/*function e(y,c){
    var tr=document.createElement("tr");
    var x=document.createElement("td");
    x.innerHTML=y;
    x.setAttribute("class","header");
    
    var z=document.createElement("td");
    z.innerHTML=c;
    tr.append(x,z);
    tbody.append(tr);
    return y,c;
}*/
}
thiru();