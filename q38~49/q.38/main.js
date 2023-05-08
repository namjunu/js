/**********************************************************************
로또 (v0.2.0)
[기존 기능]
- 1~45 당첨 숫자 6개 출력 기능

[v0.2.0 업데이트 내용]
- 내 구매 로또 한 게임을 유저 배열에 6개 수 임의로 정하셔서 넣는 기능(하드코딩)
ex. 11, 12, 13, 14, 15, 16		
myLotto = [11, 12, 13, 14, 15, 16] ;

- 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 출력하기					 
ex. 3개 일치
**********************************************************************/

comLotto = new Array(6);
userLotto = [1,2,3,4,5,6];  // 유저 구매 로또

//컴퓨터 로또번호에 무작위 숫자 넣어줌
for(var i=0;i<comLotto.length;i++){
    comLotto[i]=Math.floor(Math.random()*45+1);
    dw(comLotto[i]);
    br();
}

/* 일치 수 비교 */
var winningCount = 0;
for(var i=0;i<userLotto.length;i++){
    for(var j=0;j<comLotto.length;j++){
        if(userLotto[i] == comLotto[j]){
            dw("하나 당첨");
            br();
            winningCount++;
        }
    }
}

dw("총 당첨된 갯수는 :"+winningCount);