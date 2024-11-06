let randomNumber = Math.floor(Math.random() * 100) +1;
//수학 알고리즘을 통해 1부터 100까지 사이의 무작위 수를 할당한다.

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
//참조를 저장해여 문단에 텍스트를 삽입하기 위해 사용함.

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
//추측한 숫자를 제출할 때 사용할 양식 텍스트 입력 칸과 제출 버튼의 참조를 저장한다.

let guessCount = 1;
let resetButton;
//플레이어가 사용한 턴 수인 1과, 초기화 버튼의 참조를 저장하기 위해 사용함.
// guessField.focus()
//메서드를 사용하여, 페이지 로딩이 끝나면 커서가 자동으로 <input>에 가도록 하는 코드.

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    //텍스트 필드에 입력된 값을 저장합니다. 확실한 숫자 값으로 만들기 위해 number()로 나타내었습니다.
    //guesses의 변수가 1과 일치하는지, 즉 플레이어의 첫 턴인지를 테스트합니다.
    //이 조건이 참이라면 guesses의 텍스트 내용을 Previous guesses로 설정합니다.

    guesses.textContent = `${guesses.textContent} ${userGuess}`;
    //현재 userGuess 변수 값을 guesses문단의 맨 뒤에 붙이고, 공백을 붙여 나타냅니다.
    
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    //첫 번째로 randomnumber와 userguess가 일치하는지 확인하고, 일치하다면 축하의 메시지를 전달합니다.
    //그 후 setGameOver을 호출합니다.

    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    //두 번째 천이 마지막 턴이였는지 확인합니다. 마지막 턴이라면 GAMEOVER문구를 나타내고 setGameOver를 호출합니다.
    }else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!' ;
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
        }
    //세 번째 모두 true값을 반환하지 않았을 때 실행됩니다.
    //추측이 틀렸다고 문구를 내보내고, 추측한 숫자가 낮은지 높은지에 대해 설명합니다.
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
    //guesscount 변수에 1을 더하고 필드에 입력된 값을 지운 후 다시 focus를 부여하여 입력하게 합니다.  
}

guessSubmit.addEventListener('click', checkGuess);
//addEventListener는 두 개의 입력 값을 받는 메소드로, 각각 유형을 가리키는 문자열과, 실행할 코드입니다.

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    //텍스트 입력 칸과 제출 버튼의 속성을 true로 설정하여 비활성화합니다.
    //플레이어가 정답을 추가로 입력하여 게임이 망가지는 것을 막기 위함입니다.

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    //새로운 butyon요소를 생성하고, 텍스트 레이블을 Start New Game으로 설정하여 추가합니다.

    resetButton.addEventListener('click', resetGame);
    //버튼을 클릭하면 resetGame()이라는 함수를 호출합니다.
}

function resetGame() {
    guessCount = 1;
    // guesscount를 다시 1로 낮춥니다.
    
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }
    // 모든 정보 텍스트 문단의 내용을 지웁니다.
    // class가 resultparas인 div안의 모든 문단 요소를 선택, 하나씩 순화하면서
    // 각각의 textcontent를 빈문자열로 설정하는 방식

    resetButton.parentNode.removeChild(resetButton);
    //HTML에서 초기화 버튼을 제거합니다.

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    // 양식 요소를 다시 활성화하고, 입력 칸을 바우고, 포커스를 부여하여 새로운 값을 입력받을 준비를 합나다.

    lastResult.style.backgroundColor = 'white';
    // lastResult 문단의 배경색을 제거합니다.

    randomNumber = Math.floor(Math.random() * 100) + 1;
    // 이전 게임과는 다른 숫자를 맞힐 수 있도록 무작위 숫자로 새로 선택합니다.
}