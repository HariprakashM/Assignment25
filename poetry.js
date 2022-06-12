async function app(){
    try{
    var res=await fetch ("https://poetrydb.org/title/Ozymandias/lines.json");
    var res1=await res.json();
    console.log(res1);
    }catch(error){
        console.log(error);
    }

    var container=document.createElement("div");
    container.setAttribute("class","container");
    var row=document.createElement("div");
    row.setAttribute("class","row");
    var col=document.createElement("div");
    col.setAttribute("class","col-lg-12 col-md-12 col-sm-12");


    
    let d1=divi(`${res1[0].lines[0]}`);
    let d2=divi(`${res1[0].lines[1]}`);
    let d3=divi(`${res1[0].lines[2]}`);
    let d4=divi(`${res1[0].lines[3]}`);
    let d5=divi(`${res1[0].lines[4]}`);
    let d6=divi(`${res1[0].lines[5]}`);
    let d7=divi(`${res1[0].lines[6]}`);
    let d8=divi(`${res1[0].lines[7]}`);
    let d9=divi(`${res1[0].lines[8]}`);
    let d10=divi(`${res1[0].lines[9]}`);
    let d11=divi(`${res1[0].lines[10]}`);
    let d12=divi(`${res1[0].lines[11]}`);
    let d13=divi(`${res1[0].lines[12]}`);
    let d14=divi(`${res1[0].lines[13]}`);
    
    col.append(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14);
    row.append(col);
    container.append(row);
    document.body.append(container);

    function divi(a){
        var x=document.createElement("div");
        x.innerHTML=a;
        return x;
    }
    
}       
app();