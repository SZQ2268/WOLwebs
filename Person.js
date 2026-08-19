fetch('/API/text.json')
    .then(Response => {
        if (!Response.ok) {
            throw new Error('文件读取失败!状态码: ' + Response.status);
        }
        return Response.json();
    })
    .then(data => {
        document.getElementById('output').textContent = data.person;
    })
    .catch(error => {
        document.getElementById('output').textContent = '加载失败' + error.message;
    })