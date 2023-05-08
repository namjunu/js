
comLotto = new Array(6);
userLotto = [1,2,3,4,5,6];

comLotto[0]=Math.floor(Math.random()*45+1);
dw("첫번호: "+comLotto[0]);
hr();

while(true){
    comLotto[1]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[1]){
        continue;
    } else {
        dw("두번째 번호:"+comLotto[1]);
        hr();
        break;
    }
}

while(true){
    comLotto[2]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[2]){
        continue;
    } else if(comLotto[1] == comLotto[2]){
        continue;
    } else {
        dw("세번째 번호:"+comLotto[2]);
        hr();
        break;
    }
}

while(true){
    comLotto[3]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[3]){
        continue;
    } else if(comLotto[1] == comLotto[3]){
        continue;
    } else if(comLotto[2] == comLotto[3]){
        continue;
    } else {
        dw("네번째 번호:"+comLotto[3]);
        hr();
        break;
    }
}

while(true){
    comLotto[4]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[4]){
        continue;
    } else if(comLotto[1] == comLotto[4]){
        continue;
    } else if(comLotto[2] == comLotto[4]){
        continue;
    } else if(comLotto[3] == comLotto[4]){
        continue;
    } else {
        dw("다섯번째 번호:"+comLotto[4]);
        hr();
        break;
    }
}

while(true){
    comLotto[5]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[5]){
        continue;
    } else if(comLotto[1] == comLotto[5]){
        continue;
    } else if(comLotto[2] == comLotto[5]){
        continue;
    } else if(comLotto[3] == comLotto[5]){
        continue;
    } else if(comLotto[4] == comLotto[5]){
        continue;
    } else {
        dw("여섯번째 번호:"+comLotto[5]);
        hr();
        break;
    }
}



var winningCount = 0;
for(var i=0;i<userLotto.length;i++){
    for(var j=0;j<comLotto.length;j++){
        if(userLotto[i] == comLotto[j]){
            dw("하나 당첨");
            hr();
            winningCount++;
        }
    }
}

dw("총 당첨된 갯수는 :"+winningCount);