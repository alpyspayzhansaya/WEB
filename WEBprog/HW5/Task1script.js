function aaa(){
  const n1 = document.querySelector("#n1");
  const n2 = document.querySelector("#n2");
  const n3 = document.querySelector("#n3");
  const n4 = document.querySelector("#n4");
  const n5 = document.querySelector("#n5");
  const n6 = document.querySelector("#n6");
  const n7 = document.querySelector("#n7");
  const n8 = document.querySelector("#n8");
  const n9 = document.querySelector("#n9");
  let a = (parseInt(n1.value)*parseInt(n5.value)*parseInt(n9.value))+(parseInt(n2.value)*parseInt(n6.value)*parseInt(n7.value))+(parseInt(n4.value)*parseInt(n8.value)*parseInt(n3.value))
  -((parseInt(n3.value)*parseInt(n5.value)*parseInt(n7.value))+(parseInt(n4.value)*parseInt(n2.value)*parseInt(n9.value))+(parseInt(n8.value)*parseInt(n6.value)*parseInt(n1.value)));
  document.querySelector("#res").innerHTML =a;
}
document.querySelector("#button").addEventListener('click',aaa);
