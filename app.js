var btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
 var mail=document.getElementById('mail').value;

 if (mail.endsWith("@gmail.com")) {
     //nothing
 }else{
     var a=document.getElementById('alert');
     a.style.display="block";
 }
});