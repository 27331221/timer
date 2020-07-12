'use strict';

  const timer=document.getElementById('timer');
  const start=document.getElementById('start');
  const stop=document.getElementById('stop');
  const reset=document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime=0;
  
  function countUp(){
    // console.log(Date.now()-startTime);
    const d=new Date(Date.now()-startTime+elapsedTime);
    const m=String(d.getMinutes()).padStart(2,'0');
    const s=String(d.getSeconds()).padStart(2,'0');
    const ms=String(d.getMilliseconds()).padStart(3,'0');

    timer.textContent=`${m}:${s}.${ms}`;

    timeoutId=setTimeout(() => {
      countUp();
    }, 10);
  }
  
  function setbtnInitial(){
    start.disabled=false;
    stop.disabled=true;
    reset.disabled=true;

  }
  function setbtnRanning(){
    start.disabled=true;
    stop.disabled=false;
    reset.disabled=true;
    
  }
  function setbtnStopped(){
    start.disabled=false;
    stop.disabled=true;
    reset.disabled=false;
  }

  setbtnInitial();
  
  start.addEventListener('click',()=>{
    setbtnRanning();
    startTime=Date.now();
    countUp();
  });
  
  stop.addEventListener('click',()=>{
    setbtnStopped();
    clearTimeout(timeoutId);
    elapsedTime+=Date.now()-startTime;
  });
  
  reset.addEventListener('click',()=>{
    setbtnInitial();
    timer.textContent='00.00.000';
    elapsedTime=0;
  });



  // console.log(d);
  // console.log(now);

  

  