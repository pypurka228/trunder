function window5(){
alert('Подтвердите действие \n Добавьте заказ')
}
function calculator(){
let a=prompt('Введите 1 число')
let d=prompt('Введите 2 число')
alert('1 - умножение '+ '2 - деление '+ '3 - сложение '+ '4 - вычитание ')
let j=prompt('Выберите действие')
if(j==1){
alert('умножение '+ a*d)}
if(j==2){
alert('деление '+ a/d)}
if(j==3){
alert('сложение '+ a+d)}
if(j==4){
alert('вычитание '+ a-d)}
}
function calc(){
    let l=prompt('Введите текст')
    let g=l.length
    let h=l[g-1]
    let b=l[0]
    alert('количество символов '+g +'\n' +'последний символ ' +h +'\n' + 'первый символ ' +b)
}
function tetx2(){
    let l=prompt('Введите текст')
    alert(l.toLowerCase())
}
function text3(){
    let l=prompt('Введите текст');
    let g=l.replace('русскому','английскому');
    alert(g)
}
function text4(){
    let l=document.getElementById('zv')
    l.classList.toggle("rd")
}
function text5(){
    let a=prompt('Введите 1 число')
    let d=prompt('Введите 2 число')
    if(a==d)
    {alert('числа одинаковые')}
    if(a!=d)
    {alert('числа неравны')}
}
function test_us() {
    var arr = ['trg','was','bvn','vbw','fhd'];

    for (let i=0; i < arr.length; i++)
    {
        alert(arr[i]);
    }
}
function change() {
      let but = ['but01', 'but02', 'but03', 'but04', 'but05']
  for ( let i=0; i< but.length; i++ )
   {
    let l=document.getElementById(but[i])
    l.classList.toggle("ew")
    l.classList.toggle("ew2")
   }
   let ka = document.getElementById('ch01')
   ka.classList.toggle('ch01')
   let d=document.getElementById('ch02')
   d.classList.toggle('ch02')
}
function show_modal() {
       let ret =document.getElementById('show_modal')
       ret.classList.toggle('juy') 
}
function iongh(){
    let ret =document.getElementById('df85')
    ret.classList.remove('fggl')
}
setTimeout(iongh,2000)
function  valid(){
    document.getElementById('a06').innerHTML=""
    let name =document.getElementById('a01').value
    let surname =document.getElementById('a02').value
    let email =document.getElementById('a03').value
    let mobile_phone =document.getElementById('a04').value
    if(name==""||name==" "||name.length<2||name.length>15){ document.getElementById('a06').innerHTML="Введите имя "}
    if(surname==""||surname==" "||surname.length<3||surname.length>14){ document.getElementById('a06').innerHTML="Введите фамилию "}
    if(email.indexOf("@")==-1){ document.getElementById('a06').innerHTML="Введите почту "}
    if(mobile_phone.indexOf("+7")==-1){ document.getElementById('a06').innerHTML="Введите телефон "}
    // document.getElementById('a06').innerHTML="Имя " + name.value + "<br> " + "Фамилия " + surname.value + "<br>" + "Почта " + email.value + "<br>" + "Телефон " + mobile_phone.value
}
function ewqrt(){
    let c = ['c01', 'c02', 'c03', 'c04','c05']
    for (let i=0;  c.length; i++ )
{
    let l=document.getElementById(c[i])
    l.src="картинки/ar.png"
}
}
function asds(){
    let c = ['c01', 'c02', 'c03', 'c04','c05']
    for (let i=0;  c.length; i++ )
{
    let l=document.getElementById(c[i])
    l.src="картинки/ar2.png"
}
}
































