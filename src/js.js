const x=document.getElementById('buttonG');
const y=document.getElementById('pass');
x.addEventListener('click',()=>{
  let charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+='.split('');
  let s=[''];
  for (let x = 0; x < 16; x++) {
    s[x]=charset[Math.floor(Math.random() * charset.length)];
  }
  s=s.join('');
  y.innerHTML=s;
  navigator.clipboard.writeText(s);
});