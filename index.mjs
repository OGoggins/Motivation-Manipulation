window.setInterval(timeloop, 1000);

const options = {month: "long"};
let startUp = true;


function timeloop()  {
  let time = document.querySelector('#time');
  let date = new Date();
  let month = new Intl.DateTimeFormat("en-US", options).format(date);
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  time.textContent =  `${addedZero(hour)}:${addedZero(min)}:${addedZero(sec)} - ${addedZero(day)} ${month}`;
  ImprovedTime(hour,min,sec,day,month);
}
  

function addedZero(time){
   if ( time <= 9) {
    return time = `0${time}`;
  } else {
    return time;
  }
}

let impTime = [];

function ImprovedTime(hour, min, sec, day, month){
  let time = document.querySelector('#imTime');
  let actTime = [hour,min,sec,day];
  
  if (startUp == true){
    impTime = TimeSet(actTime[0],actTime[1],actTime[2],actTime[3]);
    console.log(impTime)
    startUp = false;
    time.textContent =  `${addedZero(impTime[0])}:${addedZero(impTime[1])}:${addedZero(impTime[2])} - ${addedZero(impTime[3])} ${month}`;
    timeUpdate(impTime,month);
  }
}

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
      console.log(tempH+" h1")
      tempD++;
      tempH -=6;
      console.log(tempH+" h2")
    }
    if(tempM >= 15){
      console.log(tempM+" m1")
      HTA ++;
      tempM -= 15;
      console.log(tempM+" m2")
    }
    if(tempS >= 15){
      console.log(tempS+" s1")
      MTA ++;
      tempS -= 15;
      console.log(tempS+" s2")
    }

    if(tempH <6 && tempM < 15 && tempS < 15){
      start = false;
      return [tempH*4 + HTA, tempM*4 + MTA, tempS*4,tempD]; // to display ac time * by 4 
    }
  }
}

function timeUpdate(time,month){
  let timeUp = document.querySelector('#imTime');
  let sec = time[2];
  let min = time[1];
  let hour = time[0];
  
  window.setInterval(loop, 250);
  
  function loop(){
    sec++;
  
    if(sec >= 60){
      min++;
      sec=0;
    }
    if(min >= 60){
      hour++
      min=0;
    }
    if(hour >=24){
      hour= 0;
    }
  
    timeUp.textContent =  `${addedZero(hour)}:${addedZero(min)}:${addedZero(sec)} - ${addedZero(time[3])} ${month}`;

  }
  
  
}

