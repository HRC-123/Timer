let inputs = document.querySelector('.inp');
let boxes = document.querySelector('.box');
let myDiv = document.querySelector('.myDiv');
function start(){
    let value = inputs.value;
     console.log(value);
   
 

  console.log("Hii");
  let tex = document.createElement('p');
  myDiv.replaceChild(tex,boxes);
  
  
  const hex = document.querySelector('.myDiv');
  hex.style.cssText = 'color:red;display:flex;height:100vh;width:100vw;justify-items:center;align-items:center;justify-content:center;font-size:100px;gap:20px'
  let time = value*60;
  
  let nex = document.createElement('button');
  


function updateTime(){
  if(time<0){
    hex.style.cssText = 'color:red;display:flex;height:100vh;width:100vw;justify-items:center;align-items:center;justify-content:center;font-size:50px;'
    open();
  }
  else{
    const Minutes = Math.floor(time/60);
    let sec = time%60;

    hex.innerText = `${Minutes} : ${sec}`;
    myDiv.appendChild(nex);
    nex.innerText = 'Stop';
    nex.style = 'background-color:aquamarine;padding : 20px;border-radius:0.2rem;border-color:blue;color:black;gap:30px;'
    
    nex.addEventListener('click',function(){
       stop(Minutes,sec);
    });

    
    time--;
  }
    
     
    
  }
  
  
  setInterval(updateTime,1000);
  
  function open(){
   hex.innerHTML = 'Timer has been Ended , Refresh the page';
  }

   function stop(Minutes,sec){
    
    nex.innerText = 'Start';
    nex.style = 'background-color:aquamarine;padding : 20px;border-radius:0.2rem;border-color:blue;color:black;gap:30px;';
    nex.addEventListener('click',function(){
       setTimeout(()=>{
            hex.innerText = "Ruko Bhai";
            console.log("Ruko Bhai");

       },1000);
    });


  }

  
}
























// do{
//         setInterval(()=>{
//             open();
//             value-=1;
//             console.log("The value in t() is : " + value);
//         },1000);
    
// }
// while(value>=0);

//    for(let i=value;i>=0;i--){ 
//     setInterval(() => {tex.innerHTML=i;},1000);
//    }





