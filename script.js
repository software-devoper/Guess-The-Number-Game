let input = document.querySelector('input');
let button = document.querySelector('.click');
let message = document.querySelector('.message');
let er = document.querySelector('p');
let restart = document.querySelector('.res');
let heading = document.querySelector('h2');
let start = document.querySelector('.Start');
let close = document.querySelector('.Close');
let Main = document.querySelector('.main');
let rgb = () => {
    color1 = Math.ceil(Math.random() * 255);
    color2 = Math.ceil(Math.random() * 255);
    color3 = Math.ceil(Math.random() * 255);
    return `rgb(${color1},${color2},${color3})`;
}
let c = 0;
const Update = () => {
    let GAMENO = Math.ceil(Math.random() * 100);
    return GAMENO;
}
let gameNo = Update();
console.log(gameNo);
let Game = () => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = rgb();
        let guessNo = input.value;
        if (guessNo >= 101) {
            return alert('Enter number between 1 and 100');
        }
        if (guessNo == gameNo) {
            Winner();
            heading.style.display = 'block';
            heading.innerText = `Your score: ${110 - (c + 1) * 10}`;
            return message.innerText = `Congratulation!You won in ${(c + 1)} times`;
        }
        else if (guessNo === '') {
            return message.innerText = 'Please enter a number';
        }
        else if (guessNo >= gameNo) {
            let max = guessNo - gameNo;
            if (max >= 5) {
                message.innerText = 'Too High';
            }
            else {
                message.innerText = 'High';
            }
        }
        else if (gameNo >= guessNo) {
            let min = gameNo - guessNo;
            if (min >= 5) {
                message.innerText = 'Too Low';
            }
            else {
                message.innerText = 'Low';
            }
        }
        c++;
        let count = 10 - c;
        er.innerText = `Now you have ${count} chances`;
        if (count == 0) {
            message.innerText = 'Game Over';
            GameOver();
        }
    })
    restat();
}

let GameOver = () => {
    input.style.display = 'none';
    restart.style.display = 'block';
    button.style.display = 'none';
    message.classList.add('ms');
    message.classList.remove('remove');
    er.innerText = `The number was ${gameNo}`;
}
let restat = () => {
    restart.addEventListener('click', () => {
        heading.style.display = 'none';
        heading.innerText = '';
        restart.style.display = 'none';
        er.innerText = `You have 10 chances to win`;
        input.style.display = 'block';
        button.style.display = 'block';
        message.innerText = '';
        input.value = '';
        gameNo = Update();
        message.classList.remove('ms');
        message.classList.add('remove');
        c = 0;
    })
}
Game();
Update();

let Winner = () => {
    restat();
    heading.style.display = 'none'
    input.style.display = 'none';
    restart.style.display = 'block';
    button.style.display = 'none';
    message.classList.add('ms');
    message.classList.remove('remove');
    er.innerText = `The number was ${gameNo}`;
}
start.addEventListener('click', () => {
    Main.style.display = 'block';
    start.style.display = 'none';
    close.style.display = 'block';
})
close.addEventListener('click', () => {
    Main.style.display = 'none';
    start.style.display = 'block';
    close.style.display = 'none';
});
