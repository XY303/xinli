let currentPage = 0;
const PAGE_SIZE = 5000;  // 每页显示的字符数
let pages = [];

function loadFile(relativePath) { 
  fetch(relativePath)
    .then(response => response.text())
    .then(text => {
      pages = []; // 清空上次的内容

      // 分片
      for (let i = 0; i < text.length; i += PAGE_SIZE) {
        pages.push(text.slice(i, i + PAGE_SIZE));
      }

      currentPage = 0; // 重置为第一页
      displayPage(currentPage);
    })
    .catch(error => {
      console.error('无法获取文件内容：', error);
    });
}

function displayPage(pageNumber) {
  const contentElement = document.getElementById('text-content');
  contentElement.textContent = pages[pageNumber] || '';

  // 根据当前页数启用或禁用按钮
  document.getElementById('prev').disabled = pageNumber <= 0;
  document.getElementById('next').disabled = pageNumber >= pages.length - 1;
}

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    displayPage(currentPage);
      scrollToTop()
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    displayPage(currentPage);
      scrollToTop()
  }
});
