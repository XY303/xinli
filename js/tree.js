var width = window.innerWidth / 2; // 获取浏览器窗口大小

// 全局变量来跟踪每一层的动画延迟
let animationDelay = 0;


// 生成一个指定范围内的随机整数
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBranch(parent, x, y, length, angle, depth, delay) {
    if (depth <= 0) return;

    // 创建新的树枝并设置位置和旋转角度
    const branch = document.createElement('div');
    branch.classList.add('branch');
    branch.style.left = `${x}px`;
    branch.style.bottom = `${y}px`;
    branch.style.transform = `rotate(${angle}deg)`;
    branch.style.animationDelay = `${delay}s`;
    branch.style.backgroundColor = `hsl(${getRandomInt(0, 360)}, 50%, 50%)`;

    parent.appendChild(branch);

    // 计算下一层树枝的参数
    const newLength = length * 0.7;
    const newDelay = delay + intervalTime / 1000; // 延迟0.5秒以等待父树枝生长完成

    // 创建子树枝，使用新的延迟时间
    createBranch(branch, 0, y, newLength, 360 - angle - 20, depth - 1, newDelay);
    createBranch(branch, 0, y, newLength, 360 - angle + 20, depth - 1, newDelay);
}

const tree = document.querySelector('.tree');
const trunk = tree.querySelector('.trunk');

/*/ 从树干开始生成树枝
createBranch(trunk, 5, 100, 100, 0, 6, animationDelay);
createBranch(trunk, 5, 100, 100, 30, 6, animationDelay);
createBranch(trunk, 5, 100, 100, -30, 6, animationDelay);
*/