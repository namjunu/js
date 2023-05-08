comLotto = new Array(7);
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

while(true){
    comLotto[6] = Math.floor(Math.random() * 45 + 1);
    if(comLotto[6] !=comLotto[0] && comLotto[6] != comLotto[1] && comLotto[6] != comLotto[2] && comLotto[6] != comLotto[3] && comLotto[6] != comLotto[4] && comLotto[6] != comLotto[5]){
        break;
    } 
}
dw("보너스 번호 : " + comLotto[6]);
br()



// comLotto[0] = 11;
// comLotto[1] = 12;
// comLotto[2] = 13;
// comLotto[3] = 14;
// comLotto[4] = 15;
// comLotto[6] = 16;

var bonusCount = 0;
var winningCount = 0;
for (var i = 0 ; i < userLotto.length; i ++) {
    for(var j = 0 ; j < comLotto.length - 1; j ++){
        if(comLotto[j] == userLotto[i]){
            winningCount = winningCount + 1;
        }   
    }
    if(comLotto[6] == userLotto[i]){
            bonusCount = bonusCount + 1;
        }
    br();
}

dw(" 산 로또 번호는 : " + userLotto[0] +"\n" + userLotto[1] + "\n" + userLotto[2] + "\n" + userLotto[3] + "\n" + userLotto[4] + "\n" + userLotto[5]);
br();

if(winningCount == 0 || winningCount == 1 || winningCount == 2){
    dw("당첨되지 않았습니다.")
}
if(winningCount == 3){
    dw("5등입니다.")
}
if(winningCount == 4){
    dw("4등입니다.")
}
if(winningCount == 5 && bonusCount == 0){
    dw("3등입니다.")
}
if(winningCount == 5 && bonusCount == 1){
    dw("2등입니다.")
}
if(winningCount == 6){
    dw("1등입니다.")
}

