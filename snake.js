window.onload = alert(localStorage.getItem("name"));
this.document.getElementById('para1').innerText='welcome champ '+localStorage.getItem('name');
// localStorage.removeItem('name');
localStorage.clear();       

localStorage.setItem('cp',0);

const btn=this.document.getElementById('rollbtn');

btn.addEventListener("click",game)

let myPos = 'd0';
function game()
{  if(Number(localStorage.getItem('cp'))<=100)
   {
    
    complete();
    
    var rd=random();
    document.getElementById('p1').innerText="your dice value is "+rd;
    var cpval=Number(localStorage.getItem('cp'))+rd;
    if(cpval==100)
    {
        alert("winner");
        window.location.href="index.html";
    }
    else if(cpval>100){
        cpval=Number(localStorage.getItem('cp'))-rd;
    }
    localStorage.setItem('cp',cpval);
    checkpostion(Number(localStorage.getItem('cp')));
    document.getElementById('p2').innerText="your current position value is "+localStorage.getItem('cp');
    
    //checkpostion(localStorage.getItem('cp'));

    myPos = `d${localStorage.getItem('cp')}`;
    console.log(myPos,typeof(myPos));
    setInterval(blinker1,1000);
    function blinker1(){
        document.getElementById(myPos).style.backgroundColor = 'gold';
        document.getElementById(myPos).style.Color = 'black';
        document.getElementById(myPos).style.border = '4px dashed black';
    }
    setInterval(blinker2,2000);
    function blinker2(){
        document.getElementById(myPos).style.backgroundColor = 'aliceblue';
    }   
   }
   

} 
function random()
{
 return(Math.floor(Math.random() * (6-1) + 1));
}
function checkpostion(cpval)
{
    console.log(cpval)
    switch(cpval)
    {
        case 87:localStorage.setItem('cp',93); break;
        case 80:localStorage.setItem('cp',83); break;
        case 70:localStorage.setItem('cp',90); break;
        case 54:localStorage.setItem('cp',69); break;
        case 44:localStorage.setItem('cp',58); break;
        case 22:localStorage.setItem('cp',41); break;
        case 28:localStorage.setItem('cp',77);break;
        case 30:localStorage.setItem('cp',32);break;
        case 7:localStorage.setItem('cp',29);break;
        case 2:localStorage.setItem('cp',23);break;
    }
    
}

function complete(){
    console.log(myPos);
    if(myPos == 'd0'){
        return ;
    }
    document.getElementById(myPos).style.backgroundColor = 'aliceblue';
    document.getElementById(myPos).style.border = '4px dashed aliceblue';
}