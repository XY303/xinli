document.body.addEventListener('click', function() {
    //document.body.style.setProperty('--scale-factor', scaleFactor[1]);
    createBranch(trunk, 5, 100, 100, 0, 5, animationDelay);
    createBranch(trunk, 5, 100, 100, 30, 5, animationDelay);
    createBranch(trunk, 5, 100, 100, -30, 5, animationDelay);
    showNextCharacter(`${i}l`, `${i}l.txt`, 0);
    showNextCharacter(`${i}r`, `${i}r.txt`, 0);
    setTitle(1);
    document.body.removeEventListener('click', arguments.callee);
});

const title = ['种子阶段','幼苗阶段','成长期阶段','成熟阶段','衰老阶段','end'];
function setTitle(n) {
    //document.getElementById('title').innerText = title[n];
    if(title[n] === 'end') return;
    showNextCharacter('title', title[n], 1);
    showNextCharacter(`${n}l`, `${n}l.txt`, 0);
    showNextCharacter(`${n}r`, `${n}r.txt`, 0);
    setTimeout(() =>setTitle(n+1), 10000);
}

const element = document.getElementById('color-changing-background');
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // 颜色数组
let index = 0;

function changeBackgroundColor() {
    element.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length; // 循环数组
}

// 每隔5秒改变一次背景颜色
setInterval(changeBackgroundColor, 5000);