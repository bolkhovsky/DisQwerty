//рабочее тело. функция, крирпая вызывается по таймеру и переключает выбор строки или кнопки

nowButton=0,nowRow=-1;
nowChoose=started=false;
startStop = function(){
    started=started?false:true;
    workbody();
}   

workbody = function () {
    
    if (started){
try{clearInterval(timer)} catch(e){} ;
timer =  setInterval(function(){
     if(!nowChoose){     nowRow=(nowRow==trs.length-1)?0:nowRow+1;
                    nowTr=trs[nowRow];
                      prevTr= trs[(nowRow==0)?trs.length-1:nowRow-1]
                   }
     else   {nowButton=(nowButton==trs[nowRow].childElementCount-1)?0:nowButton+1;
             nowTd=nowTr.childNodes[nowButton];
             prevTd = (nowButton==0)?nowTr.lastElementChild:nowTr.childNodes[nowButton-1]; 
            }
                       workbody()}, timeout);
        timeout = $("timeoutInput").value*1000;
        if(!nowChoose){
     
       prevTr.style.background="#FFF";   
         prevTr.style.color="#000";   
         nowTr.style.background="#000";   
         nowTr.style.color="#FFF";  

        }
        else {
         
        
         prevTd.style.background="inherit";   
         prevTd.style.color="inherit";   
         nowTd.style.background="#000";   
         nowTd.style.color="#FFF";
          
        }
        
    }
}