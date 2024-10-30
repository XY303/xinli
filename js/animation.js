var i = 1;
document.body.addEventListener('click', function() {
    //document.body.style.setProperty('--scale-factor', scaleFactor[1]);
    createBranch(trunk, 5, 100, 100, 0, 5, animationDelay);
    createBranch(trunk, 5, 100, 100, 30, 5, animationDelay);
    createBranch(trunk, 5, 100, 100, -30, 5, animationDelay);
    showNextCharacter(`${i}l`, `${i}l.txt`, 0);
    showNextCharacter(`${i}r`, `${i}r.txt`, 0);
    i++;
    setInterval(function() {
        showNextCharacter(`${i}l`, `${i}l.txt`, 0);
        showNextCharacter(`${i}r`, `${i}r.txt`, 0);
        i++;
    }, 10000);
    setTitle(1);
    document.body.removeEventListener('click', arguments.callee);
});

const title = ['种子阶段','幼苗阶段','成长期阶段','成熟阶段','衰老阶段','end'];
function setTitle(n) {
    //document.getElementById('title').innerText = title[n];
    showNextCharacter('title', title[n], 1);
    //if(title[n] === 'end') return;
    setTimeout(() =>setTitle(n+1), 10000);
}