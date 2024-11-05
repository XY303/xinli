//DOM功能预配置区
const div = document.getElementById("txtname");
const sizenum = document.getElementById("text-content");
const showsize = document.getElementById("showSize");
//目录功能预配置区
let start = 0;
let stop = 10;
const pageMAX = Math.ceil(fileList.length / 10) * 10;
updatetxtlist();
//字体字号预配置区
const textElement = document.getElementById("text-content");
const currentFontSize = getComputedStyle(textElement).getPropertyValue('--size');
let size = 18;
textElement.style.setProperty('--size', size + 'px');
showsize.innerHTML = "当前字号: " + size;


/*---------------------------------------------------------------
------------------------------函数区------------------------------
---------------------------------------------------------------*/

//增加字号
function sizeup(change) {
    size += 1;
    textElement.style.setProperty('--size', size + 'px');
    showsize.innerHTML = "当前字号: " + size;
    document.getElementById('zdown').disabled = size <= 1;
    document.getElementById('zup').disabled = size >= 100;
}
//减小字号
function sizedown(change) {
    size -= 1;
    textElement.style.setProperty('--size', size + 'px');
    showsize.innerHTML = "当前字号: " + size;
    document.getElementById('zdown').disabled = size <= 1;
    document.getElementById('zup').disabled = size >= 100;
}
//目录下一页
function addPage(change) {
    if (stop < pageMAX) {
        start += change;
        stop += change;
        updatetxtlist();
    } else {
        alert("这是最后一页");
    }
}
//目录上一页
function deductPage(change) {
    if (start > 0) {
        start -= change;
        stop -= change;
        updatetxtlist();
    } else {
        alert("这是第一页");
    }
}
//更新目录
function updatetxtlist() {
    document.getElementById("num").innerHTML = "第" + stop / 10 + "页,共" + pageMAX / 10 + "页";
    removespan();
    for (let x = start; x < stop; x++) {
        const newspan = document.createElement("span");
        newspan.setAttribute("dir", "小说/" + fileList[x].replace(decodeURIComponent(property.dir), ""));
        newspan.textContent = fileList[x].replace(decodeURIComponent(property.dir), "");
        const newbr = document.createElement("br");
        div.appendChild(newspan);
        div.appendChild(newbr);
    }
    div.addEventListener("click", (go)=>{
        const target = go.target;
        if (target.tagName === "SPAN") {
            const goto = target.getAttribute("dir");
            loadFile(goto);
        }
    }
    )
}
//清除目录
function removespan() {
    while (document.getElementById("txtname").firstChild) {
        document.getElementById("txtname").removeChild(document.getElementById("txtname").firstChild);
    }
}
// 将页面滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动效果
    });
}
