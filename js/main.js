'use strict';
document.addEventListener("DOMContentLoaded",()=>{
    const size=4;
    const difficulty=500;
    const shuffleCount=size*difficulty;
    const table=document.getElementById("table");
    const msgBox=document.getElementById("msgBox");
    const startBt=document.getElementById("startBt");
    let panels;
    let emptyIdx;
    const init=()=>{
        panels=[];
        table.textContent=null;
        msgBox.textContent=null;
        createStage();

    }

    const createStage=()=>{
        for(let i=0;i<size;i++){
            const tr=document.createElement("tr");
            for(let j=0;j<size;j++){
                const td=document.createElement("td");
                td.posId=i*size+j;
                td.textContent=td.posId+1;
                if(td.posId===size*size-1){
                    td.textContent="";
                    td.classList.add("empty");
                    emptyIdx=td.posId;

                }
                panels.push(td);
                tr.append(td);
            }
            table.append(tr);
        }
    };
    init();
});