let i=0;
let f=false;
setInterval(() => {
    if(f==false)
    {
        show();
        f=true;
    }
    else if(f==true)
    {
        show1();
        f=false;
    }
}, 3000);
function show(){
    let j;
    let w=document.getElementsByClassName("par");
    for(j=0;j<w.length;j++)
    {
        w[j].style.color="#ff7200";
    }
}
function show1(){
    let j;
    let w=document.getElementsByClassName("par");
    for(j=0;j<w.length;j++)
    {
        w[j].style.color="white";
    }
}
