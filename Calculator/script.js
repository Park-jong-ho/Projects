//결과 요소 선택
const resultText = document.getElementById("result-text")

//모든 buuton의 키를 눌렀을 때 btnClick 함수 실행
document.querySelectorAll('.button')
    .forEach(btn => {
        btn.addEventListener("click", btnClick)
    })

    //클래스에 따라 함수 실행
function btnClick(event){
    if(Array.from(event.target.classList).includes('number')){
        btnClickNumber(event.target.textContent);
    }
    if(Array.from(event.target.classList).includes('dot')){
        btnClickDot();
    }
    if(Array.from(event.target.classList).includes('function')){
        btnClickFunction(event.target.textContent);
    }
    console.log(event.target.textContent);
}
// 숫자가 클릭 되었을 때 결과 출력
// 결과에 0이고 수소점이 없으면 결과를 초기화함
function btnClickNumber(number){
    if(Number(resultText.textContent)===0 && !hasDot()){
        resultText.textContent = number;
        return;
    }
    resultText.textContent += number;
}

function hasDot(){
    return resultText.textContent.includes('.')
}
// 소수점이 없을 경우에만 소수점 추가
function btnClickDot(){
    if(!hasDot()){
        resultText.textContent += '.';
    }
}
// 버튼을 누르면 결과를 0으로 초기화
function btnClickFunction(operator){
    switch(operator){
        case 'C':
            resultText.textContent = 0;
            break;
        default:
    }
}