function httpGet(url, error, callback) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.withCredentials = true;
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText !== '')) {
                callback({
                    url: url,
                    status: 200,
                    body: xhr.responseText || '',
                    data: JSON.parse(xhr.responseText)
                });
            }
            else {
                error({
                    url: url,
                    status: xhr.status,
                    body: xhr.responseText || ''
                });
            }
        }
    };

    xhr.send();
}


function getPhotosByAlbumId(id) {
    var url = "https://jsonplaceholder.typicode.com/albums/" + id + "/photos?_limit=8";
    httpGet(url, error, getAlbums);
}

function error(e) {
    console.log(e);
}

let photoArr = [];

function getAlbums(response) {
    let photos = "";
    photoArr = response.data;
    response.data.forEach(item => {
        photos += '<img src="' + item.thumbnailUrl + '" title="' + item.title + '" onclick="getPhoto(' + item.id + ')"/>';
    });
    document.getElementById('album').innerHTML = photos;
}

function getPhoto(id) {
    let item = photoArr.find(function (e) { if (e.id == id) { return e; } });
    document.getElementById('photo').innerHTML = '<img src="' + item.url + '" title="' + item.title + '"/>';
}

