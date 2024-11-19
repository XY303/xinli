document.body.addEventListener('click', function() {
    //document.body.style.setProperty('--scale-factor', scaleFactor[1]);
    createBranch(trunk, 5, 100, 100, 0, 5, animationDelay);
    createBranch(trunk, 5, 100, 100, 30, 5, animationDelay);
    createBranch(trunk, 5, 100, 100, -30, 5, animationDelay);
    setTitle(1);
    document.body.removeEventListener('click', arguments.callee);
});

const title = ['种子阶段','幼苗阶段','成长期阶段','成熟阶段','衰老阶段','end'];

const intervalTime = 2000;
function setTitle(n) {
    //document.getElementById('title').innerText = title[n];
    if(title[n] === 'end') return;
    showNextCharacter('title', title[n], 0);
    showNextCharacter(`${n}l`, `${n}l.txt`, 0);
    showNextCharacter(`${n}r`, `${n}r.txt`, 0);
    setTimeout(() =>setTitle(n+1), intervalTime);
    setInterval(changeBackgroundColor, intervalTime);
}

const colors = ['#ffebfc','#af7b7b', '#599859', '#8888df', '#ffff00']; // 颜色数组
let index = 0;
changeBackgroundColor();
function changeBackgroundColor() {
    if(index === 5) return;
    document.body.style.backgroundColor = colors[index];
    index++;
}