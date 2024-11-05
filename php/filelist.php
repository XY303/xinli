<?php
// 获取参数
$requestedDir = isset($_GET["dir"]) ? $_GET["dir"] : "";
$htmlDirectory = "D:/nginx/html/" . $requestedDir;
$fileformat = isset($_GET["format"]) ? $_GET["format"] : null;

// 验证用户传输的dir参数，确保它不包含 ".." 或其他潜在的危险字符
if (strpos($requestedDir, '..') !== false || strpos($requestedDir, '\\') !== false) {
    header('HTTP/1.1 400 Bad Request');
    echo "你在干什么,小老弟?";
    exit;
}

// 构建完整的目录路径
$htmlDirectory = rtrim($htmlDirectory, '/') . '/'; // 确保目录路径以斜杠结尾

// 获取文件列表
if ($fileformat === null) {
    $Files = array_filter(scandir($htmlDirectory), function ($file) use ($htmlDirectory) {
        return is_dir($htmlDirectory . $file) && $file !== '.' && $file !== '..';
    });
} else {
    $Files = array_filter(scandir($htmlDirectory), function ($file) use ($fileformat, $htmlDirectory) {
        // 文件匹配，并过滤掉当前目录（.）和上级目录（..）
        return preg_match('/' . preg_quote($fileformat) . '/i', $file) && $file !== '.' && $file !== '..';
    });
}

// 返回JSON格式的文件列表
header('Content-Type: application/json');
echo json_encode(array_map(function ($file) use ($requestedDir) {
    return $requestedDir . $file;
}, array_values($Files)));
?>
