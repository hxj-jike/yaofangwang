//1.快速回到顶部
function toQuicktop(ele, ih) {
    var box = document.getElementById(ele);
    window.onscroll = function() {
        var scrollTop = window.scrollY;
        if (scrollTop >= ih) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    }
    //点击按钮快速回到顶部
    ele.onclick = function() {
        window.scrollTo(0, 0);
    }
}
//2.缓慢回到顶部
function toSlowtop(ele, ih, speed) {
    window.onscroll = function() {
        var scrollTop = window.scrollY;
        if (scrollTop >= ih) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    }

    ele.onclick = function() {
        var scrollTop = window.scrollY;
        var timer = setInterval(function() {
            scrollTop -= speed;
            if (scrollTop <= 0) {
                clearInterval(timer);
                window.scrollTo(0, 0);
            } else {
                window.scrollTo(0, scrollTop);
            }
        }, 30);
    }
}
//3.下拉菜单
function pullDownMenu(btn, box) {
    var istrue = true;
    btn.onclick = function(ev) {
        if (istrue) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
        istrue = !istrue;
        ev.stopPropagation();
    }
    //点击document时盒子收起
    document.onclick = function() {
        istrue = true;
        box.style.display = 'none';
    }
}
//4.手风琴
function accordionMenu(cla) {
    var mark = document.getElementsByClassName(cla);
    for (var i = 0; i < mark.length; i++) {
        mark[i].onmouseover = function() {
            this.children[1].style.height = '120px';
            this.children[1].style.overflow = '';
        }
        mark[i].onmouseout = function() {
            this.children[1].style.height = '0';
            this.children[1].style.overflow = 'hidden';
        }
    }
}
//5.轮播图
function imgScroll(id, cls) {
    /*
        需求：轮播图
            * 把图片放大右侧，除了第一张放在可视区
            * 开启定时器让图片动起来
            * 左右按钮可以切换上下张
            * 点击焦点可以跳转 
     */

    let box = document.getElementById(id);
    let lis = box.querySelectorAll('.imglist li');
    let iw = lis[0].offsetWidth;
    let light = box.querySelector('.light');
    let now = 0; //存放可视区图片下标
    let prevbtn = box.querySelector('.prev');
    let nextbtn = box.querySelector('.next');

    //1.把图片放大右侧，除了第一张放在可视区
    for (var i = 1; i < lis.length; i++) {
        lis[i].style.left = iw + 'px';
    }

    //2.开启定时器让图片动起来,自动轮播

    let timer = null;

    timer = setInterval(next, 2000); //每间隔两秒钟切换一个图片

    function next() {
        //旧图挪走，新图进场
        startMove(lis[now], { 'left': -iw });
        //新图
        now++;
        if (now >= lis.length) { //临界点
            now = 0;
        }
        lis[now].style.left = iw + 'px'; //快速把新图放在右侧
        startMove(lis[now], { 'left': 0 });
        lightMove(); //焦点跟随
    }

    function prev() {
        //旧图：挪到右边
        startMove(lis[now], { 'left': iw });
        //新图
        now--;
        if (now < 0) { //临界值
            now = lis.length - 1;
        }
        //新图快速放在左边，再挪进可视区
        lis[now].style.left = -iw + 'px';
        startMove(lis[now], { 'left': 0 });
        lightMove(); //焦点跟随
    }

    //3.生成焦点并焦点跟随
    var html = '';
    for (var i = 0; i < lis.length; i++) {
        html += `<span>${i + 1}</span>`;
    }
    light.innerHTML = html;
    light.children[0].className = cls;

    //焦点跟随
    function lightMove() {
        //排他
        for (var i = 0; i < light.children.length; i++) {
            light.children[i].className = '';
        }
        light.children[now].className = cls;
    }

    //4.左右按钮可以切换上下张

    //输入移入停止播放，鼠标移出继续播放
    box.onmouseover = () => {
        clearInterval(timer);
    }

    box.onmouseout = () => {
        timer = setInterval(next, 2000); //每间隔两秒钟切换一个图片
    }

    //下一张
    //补充：两次点击的时间间隔过短，第二次视为无效
    // var oldtime = new Date();
    // nextbtn.onclick = () => {
    //     if(new Date() - oldtime >= 800) {
    //         next();
    //     }
    //     oldtime = new Date();
    // }

    nextbtn.onclick = () => {
        next(); //下一张
    }

    prevbtn.onclick = () => {
        prev(); //上一张
    }


    //5.点击焦点能快速的跳转到对应图片
    light.onclick = ev => {
        if (ev.target.tagName.toLowerCase() == 'span') {
            // console.log(ev.target.innerHTML - 1);
            let index = ev.target.innerHTML - 1;
            if (index > now) {
                //新图从右边切入
                //旧图挪到左侧
                startMove(lis[now], { 'left': -iw });
                //新图快速放在右侧，挪到可视区
                lis[index].style.left = iw + 'px';
                startMove(lis[index], { 'left': 0 });
            }
            if (index < now) {
                //从左边切入
                startMove(lis[now], { 'left': iw });
                lis[index].style.left = -iw + 'px';
                startMove(lis[index], { 'left': 0 });
            }
            //新图变旧图
            now = index;
            lightMove();
        }
    }
}
//6.选项卡
function tabCard(id) {
    var left = document.getElementById(id);
    var lis = left.getElementsByTagName('li');
    var bigimg = left.children[0];
    var imglist = left.children[1];
    var imgs = imglist.querySelectorAll('img');

    imglist.onmouseover = function(ev) {
        if (ev.target.tagName.toLowerCase() == 'img') {
            bigimg.children[0].src = ev.target.src;
            imgs.forEach(function(item) {
                item.className = '';
            });
            ev.target.className = 'active';
        }
    }
}
//7.百度分享
function shareMove(id) {
    //找节点
    var box = document.getElementById(id);
    //滑入
    box.onmouseover = () => {
        startMove(box, { 'right': 0 });
    }
    //滑出
    box.onmouseout = () => {
        startMove(box, { 'right': -200 });
    }
}
//8.放大镜
function magnify(id1, id2) {
    var left = document.getElementById(id1);
    var bigimg = left.children[0]; //大图盒子
    var imglist = left.children[1]; //小图ul
    var bImg = bigimg.children[0]; //大图

    var imgs = imglist.querySelectorAll('img'); //所有小图片集合
    var cover = bigimg.children[1]; //遮罩
    var right = document.getElementById(id2); //右边放大区域

    //选项卡:高亮
    imglist.addEventListener('mousemove', function(ev) {
        ev.stopPropagation();
        if (ev.target.tagName == 'IMG') {
            bImg.src = ev.target.src; //滑过列表图片时大图跟着改变
            right.style.backgroundImage = 'url(' + ev.target.src + ')'; //右边放大区域的背景图片换成与左边大图相同的图片
            // 排他
            imgs.forEach(function(item) {
                item.className = '';
            });
            ev.target.className = 'active'; //高亮
        }
    });

    var cx = bImg.getBoundingClientRect().left; //右边大图距离可视窗口的左距离
    var cy = bImg.getBoundingClientRect().top; //右边大图距离可视窗口的上边距离
    bigimg.addEventListener('mouseover', function(ev) {
        ev.stopPropagation(); //阻止冒泡
        var x = ev.clientX; //鼠标当前可视窗口的左距离
        var y = ev.clientY; //鼠标当前可视窗口的上距离
        var ix = x - cx - 75; //使鼠标处于遮罩中心位置
        var iy = y - cy - 75;
        cover.style.display = 'block'; //滑过后遮罩出现
        if (ix < 0) {
            ix = 0;
        }
        if (iy < 0) {
            iy = 0;
        }
        if (ix > 250) { //250=400-150
            ix = 250;
        }
        if (iy > 250) {
            iy = 250;
        }
        right.style.opacity = 1; //滑过大图照片时右边放大区域从透明度0变为1
        right.style.backgroundPosition = ix / 250 * 100 + '% ' + iy / 250 * 100 + '%'; //放大区域以百分比的形式放大
        cover.style.left = ix + 'px'; //遮罩位置
        cover.style.top = iy + 'px';
    });

    //当鼠标移出大图时在document上的任意位置移动遮罩和放大区域均消失
    document.addEventListener('mousemove', function(ev) {
        if (ev.clientX - cx < 0 || ev.clientX - cx > 400 || ev.clientY - cy < 0 || ev.clientY - cy > 400) {
            cover.style.display = 'none';
            right.style.opacity = 0;
        }
    });
}