const body=document.querySelector('body');
const button=document.querySelector('button');
const parent=document.getElementById('parent');
parent.addEventListener('click',(e)=>{
  const child=e.target;
  body.style.backgroundColor=child.id;  
})