// alert("thank you for visiting my page");
const text=document.querySelector('.fancy');
const strtext=text.textContent;
const splitText=strtext.split("");
text.textContent="";
for(let i=0;i<splitText.length;i++)
{
   text.innerHTML+="<span>"+splitText[i]+"</span>"
}
let char=0;
let timer=setInterval(ontick,50);
function ontick()
{
    const span= text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char=== splitText.length)
        complete();
        return;
}
function complete()
{
    clearInterval(timer);
    timer=null;
}