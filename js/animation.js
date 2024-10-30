for(let i=0;i<=4;i++)
{
    showNextCharacter(`text${i}`, `test${i}.txt`, 1);
}
setTimeout(function(){
    for(let i=0;i<=4;i++)
    {
        showNextCharacter(`text${i}`, `测试：${i}` , 1);
    }
}, 5000);