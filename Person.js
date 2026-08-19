fetch('/API/text.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('文件读取失败!状态码: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('output').textContent = data.person;
    })
    .catch(error => {
        document.getElementById('output').textContent = '加载失败' + error.message;
    })