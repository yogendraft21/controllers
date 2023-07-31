
    imgInp.onchange = evt => {
  const [file] = imgInp.files
  if (file) {
    blah.src = URL.createObjectURL(file)
  }
}
sign.onchange = evt => {
  const [file] = sign.files
  if (file) {
    bla.src = URL.createObjectURL(file)
  }
}






var aadharerror=document.getElementById('aadhar-error');
var onameerror=document.getElementById('ownername-error');
var cpan=document.getElementById('cpan-error');
var mobileerror=document.getElementById('mobile-error');
var panerror=document.getElementById('pan-error');
var aadharerror=document.getElementById('aadhar-error');
var aadharerror=document.getElementById('aadhar-error');
var aadharerror=document.getElementById('aadhar-error');


function validate(){
  var aadhar=document.getElementById('aadhar').value
  if(aadhar.value==0){
    aadharerror.innerHTML='aadhar is required'
    return false
  }
  if(!aadhar.match(/^[0-9]{12}$/)){
    aadharerror.innerHTML='Enter valid Aadhar'
 return false
  }
  aadharerror.innerHTML='  '
    return true;
  
   
}

function onamevalidate(){
  var name =document.getElementById('oname').value
  if(name.value==0){
    onameerror.innerHTML='Name is required'
    return false
  }
  if(!name.match(/^[A-Za-z]*\s[A-Za-z]*$/)){
    onameerror.innerHTML='Enter full name'
    return false
  }
  onameerror.innerHTML=' '
  return true
}
function cpanvalidate(){
  var cpann =document.getElementById('cpann').value
  if(cpan.value==0){
    cpan.innerHTML='Pan number is required'
    return false
  }
  if(!cpann.match(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/)){
    cpan.innerHTML='Enter valid pan number'
    return false
  }
  cpan.innerHTML=' '
  return true
}

function panvalidate(){
  var pann =document.getElementById('pan').value
  if(pann.value==0){
    panerror.innerHTML='Pan number is required'
    return false
  }
  if(!pann.match(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/)){
    panerror.innerHTML='Enter valid pan number'
    return false
  }
  panerror.innerHTML=' '
  return true
}

function mobilevalidation(){
  var mobile =document.getElementById('mobile').value
  if(mobile.value==0){
    mobileerror.innerHTML='Mobile number is required'
    return false
  }
  if(!mobile.match(/^[0-9]{10}$/)){
    mobileerror.innerHTML='Enter valid pan number'
    return false
  }
  mobileerror.innerHTML=' '
  return true
}
