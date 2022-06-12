async function ppl(){

    let res=await fetch("https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10");
    let res1=await res.json();
    console.log(res1);
    

    var container=document.createElement("div");
    container.setAttribute("class","container");
    var row=document.createElement("div");
    row.setAttribute("class","row");
    var col=document.createElement("div");
    col.setAttribute("class","col-lg-12 col-md-12 col-sm-12");

    var table=document.createElement("table");
    table.setAttribute("id","tab");
    var tbody=document.createElement("tbody");

    let head=document.createElement("h2");
    head.innerHTML="BIBLE DESCRIPTION";
    let t1=trow(`Reference:${res1.reference}`);
    let t2=trow(`Text:${res1.text}`);
    let t3=trow(`Translation id:${res1.translation_id}`);
    let t4=trow(`Translation name:${res1.translation_name}`);
    let t5=trow(`Translation note:${res1.translation_note}`);
    
    let topic=document.createElement("h2");
    topic.innerHTML="BIBLE VERSES";
    for(var i=0;i<res1.verses.length;i++)
    {
    let r1=document.createElement("tr");

    let d1=divi(`book id:${res1.verses[i].book_id}`)
    let d2=divi(`book name:${res1.verses[i].book_name}`)
    let d3=divi(`chapter:${res1.verses[i].chapter}`)
    let d4=divi(`text:${res1.verses[i].text}`)
    let d5=divi(`verse:${res1.verses[i].verse}`)
    

    r1.append(d1,d2,d3,d4,d5);
    tbody.append(r1);
    col.append(head,t1,t2,t3,t4,t5,topic,tbody);
    row.append(col);
    container.append(row);
    document.body.append(container);
    }

    function trow(a){
        var x=document.createElement("div");
        x.innerHTML=a;
        return x;
    }
    function divi(a){
        var x=document.createElement("td");
        x.innerHTML=a;
        return x;
    }
}
ppl();