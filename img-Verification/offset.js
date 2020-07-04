const h1 = document.querySelector('h1');
const photos = document.querySelector('div.photos');
const movepic = document.querySelector("img[alt='movepic']");

const photoLeft = photos.offsetLeft;
const photoTop = photos.offsetTop;





// 添加鼠标点击事件
movepic.addEventListener('mousedown', (e) => {

    const movepicLeft = e.pageX - photoLeft - movepic.offsetLeft;
    const movepicTop = e.pageY - photoTop - movepic.offsetTop;

    function moving(e) {
        movepic.style.left = e.pageX - movepicLeft - photoLeft + 'px';
        movepic.style.top = e.pageY - movepicTop - photoTop + 'px';
    }

    // 添加鼠标移动事件  因为鼠标点击后再移动，两个事件是关联的
    document.addEventListener('mousemove', moving, false);

    // 鼠标松开事件310 283
    document, addEventListener('mouseup', (e) => {
        // 根据最终松开的位置时movepic的位置判定是否移动到相应位置
        console.log(movepic.offsetLeft, movepic.offsetTop)
        if (movepic.offsetLeft > 305 && movepic.offsetLeft < 315 && movepic.offsetTop > 275 && movepic.offsetTop < 290) {
            h1.innerHTML = "验证成功";
            h1.style.backgroundColor = '#32e0c4';
        }
        else {
            h1.innerHTML = "位置错误";
            h1.style.backgroundColor = 'red';
        }

        document.removeEventListener('mousemove', moving);
    }, false);

}, false);