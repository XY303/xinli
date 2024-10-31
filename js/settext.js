function showNextCharacter(divId, textUrl, switchId) {
    let index = 0;
    let text = '';
    let div = document.getElementById(divId);

    if(textUrl.includes('txt')){
        // 加载文本文档
        fetch(window.location.pathname + "text/" + textUrl)
            .then(response => response.text())
            .then(data => {
                text = data;
                // 清空所选位置的文字
                clearText(divId, switchId, () => {
                    // 开始逐个字符显示
                    showCharacters();
                });
            })
            .catch(error => console.error('Error loading text file:', error));
    } else {
        text = textUrl;
        clearText(divId, switchId, () => {
            // 开始逐个字符显示
            showCharacters();
        });
    }


    function showCharacters() {
        if (index < text.length) {
            div.innerHTML += text.charAt(index);
            index++;
            setTimeout(showCharacters, 20); // 每20毫秒出现下一个字符
        }
    }
}

function clearText(divId, switchId, callback) {
    let div = document.getElementById(divId);
    if (switchId === 1) {
        div.classList.add('flash');

        // 等待闪烁动画完成
        setTimeout(() => {
            // 清空所选位置的文字
            div.innerHTML = '';
            // 移除闪烁类
            div.classList.remove('flash');
            // 调用回调函数
            if (callback) {
                callback();
            }
        }, 1000);
    } else {
        // 如果不需要闪烁，直接清空内容
        div.innerHTML = '';
        if (callback) {
            callback();
        }
    }
}
