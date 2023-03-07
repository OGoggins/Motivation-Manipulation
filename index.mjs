window.setInterval(timeloop, 1000);


const options = {month: "long"};
let startUp = true;
let impTime = [];


function timeloop()  {
  let time = document.querySelector('#time');
  let date = new Date();
  let month = new Intl.DateTimeFormat("en-US", options).format(date);
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  time.textContent =  `${addedZero(hour)}:${addedZero(min)}:${addedZero(sec)} - ${addedZero(day)} ${month}`;
  if(startUp == true){
    timeUpdate(hour,min,sec,day,month);
    startUp = false;
  }
}


function addedZero(time){
  if ( time <= 9) {
    return time = `0${time}`;
  } else {
    return time;
  }
}
XMLDocument

function TimeSet(hour,min,sec,day){
  let start = true;
  let tempH = hour;
  let HTA = 0;
  let tempM = min;
  let MTA = 0;
  let tempS = sec
  let tempD = day-1;
  tempD = tempD*4;
  
  while(start = true){
    if(tempH >= 6){
      tempD++;
      tempH -=6;
    }
    if(tempM >= 15){
      HTA ++;
      tempM -= 15;
    }
    if(tempS >= 15){
      MTA ++;
      tempS -= 15;
    }
    
    if(tempH <6 && tempM < 15 && tempS < 15){
      start = false;
      return [tempH*4 + HTA, tempM*4 + MTA, tempS*4,tempD]; // to display ac time * by 4 
    }
  }

}

function timeUpdate(hour, min, sec, day, month){
  let timeUp = document.querySelector('#imTime');
  

  impTime =TimeSet(hour,min,sec,day); 
  
  let ISec = impTime[2];
  let IMin = impTime[1];
  let IHour = impTime[0];
  
  let run = window.setInterval(loop, 250);
  
  
  function loop(){
    ISec++;
    
    if(ISec >= 60){
      IMin++;
      ISec=0;
    }
    if(IMin >= 60){
      IHour++
      IMin=0;
    }
    if(IHour >=24){
      IHour= 0;
    }
    
    timeUp.textContent =  `${addedZero(IHour)}:${addedZero(IMin)}:${addedZero(ISec)} - ${addedZero(impTime[3])} ${month}`;
    
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////
  // reset func   
  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible'){
      clearTimeout(run);
      impTime = [];
      startUp = true;
    }
  });
  
}
