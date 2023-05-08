comLotto = new Array(6);
userLotto = [11,12,13,14,15,16];

comLotto[0] = Math.floor(Math.random() * 45 + 1);
dw("첫번째 번호 : " + comLotto[0]);
br()

while(true){
    comLotto[1] = Math.floor(Math.random() * 45 + 1);
    if(comLotto[0] != comLotto[1]){
        break;
    }
}
dw("두번째 번호 : " + comLotto[1]);
br()

while(true){
    comLotto[2] = Math.floor(Math.random() * 45 + 1);
    if(comLotto[2] != comLotto[0] && comLotto[2] != comLotto[1]){
        break;
    }
}
dw("세번째 번호 : " + comLotto[2]);
br()

while(true){
    comLotto[3] = Math.floor(Math.random() * 45 + 1);
    if(comLotto[3] !=comLotto[0] && comLotto[3] != comLotto[1] && comLotto[3] != comLotto[2]){
        break;
    } 
}
dw("네번째 번호 : " + comLotto[3]);
br()

while(true){
    comLotto[4] = Math.floor(Math.random() * 45 + 1);
    if(comLotto[4] !=comLotto[0] && comLotto[4] != comLotto[1] && comLotto[4] != comLotto[2] && comLotto[4] != comLotto[3]){
        break;
    } 
}
dw("다섯번째 번호 : " + comLotto[4]);
br()

while(true){
    comLotto[5] = Math.floor(Math.random() * 45 + 1);
    if(comLotto[5] !=comLotto[0] && comLotto[5] != comLotto[1] && comLotto[5] != comLotto[2] && comLotto[5] != comLotto[3] && comLotto[5] != comLotto[4]){
        break;
    } 
}
dw("여섯째 번호 : " + comLotto[5]);
br()


var winningCount = 0;
for (var i = 0 ; i < userLotto.length; i ++) {
    for(var j = 0 ; j < comLotto.length; j ++){
        if(comLotto[j]==userLotto[i]){
            winningCount = winningCount + 1;
        }
    }
    br();
}


