(function () {
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if (a > 750) {
            a = 750;
        }
        rem = a / 7.5;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function () {
        clearTimeout(t);
        t = setTimeout(w, 300)
    }, false);
})();
window.onload = function () {
   
    var bannerSwiper = new Swiper('#banner', {
        autoplay:  {
            delay: 3000,
            disableOnInteraction: false,
        },
        visibilityFullFit: true,
        loop: true,
        pagination: {
            el: '#banner .pagination',
        }
    });

    var tabsSwiper = new Swiper('#tabs-container', {
        speed: 500,
        on: {
            slideChangeTransitionStart: function () {
                $(".tabs .active").removeClass('active');
                $(".tabs a").eq(this.activeIndex).addClass('active');
            }
        }
    })
    $(".tabs a").on('click', function (e) {
        e.preventDefault()
        $(".tabs .active").removeClass('active')
        $(this).addClass('active')
        tabsSwiper.slideTo($(this).index())
    })
}
// 滚动加载开始
function getScrollY() {
    return document.documentElement.scrollTop || document.body.scrolltop || window.pageYOffset;
}

var page = 1;
var flag = true;
window.onscroll = function () {
    var winH = window.innerHeight;
    var list = document.querySelector(".floor-news");
    var listTop = list.offsetTop + list.clientHeight
    console.log(listTop)
    var scrollT = getScrollY();
    if (winH + scrollT >= listTop) {
        if (flag) {
            flag = false;
            var xhr = new XMLHttpRequest();
            xhr.open("get", "api/nine.php?page=" + page, true)
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    console.log(data);
                    var str = ""
                    for(var i=0;i<data.length;i++){
                        str +="<ul class=\"new-item\">"
                        str +="<li>"
                        str +="<div class=\"item-picter\">"
                        str +="<img src="+data[i].img1+">"
                        str +="</div>"
                        str +="<div class=\"item-meal\">"
                        str +="<p>"+data[i].title1+"</p>"
                        str +="<div class=\"user\">"
                        str +="<span>"+data[i].name1+"</span>"
                        str +="<span>"+data[i].num1+"</span>"
                        str +="</div>"
                        str +="</div>"
                        str +="</li>"
                        str +="<li>"
                        str +="<div class=\"item-picter\">"
                        str +="<img src="+data[i].img2+">"
                        str +="</div>"
                        str +="<div class=\"item-meal\">"
                        str +="<p>"+data[i].title2+"</p>"
                        str +="<div class=\"user\">"
                        str +="<span>"+data[i].name2+"</span>"
                        str +="<span>"+data[i].num2+"</span>"
                        str +="</div>"
                        str +="</div>"
                        str +="</li>"
                        str +="<li>"
                        str +="<div class=\"item-picter\">"
                        str +="<img src="+data[i].img3+">"
                        str +="</div>"
                        str +="<div class=\"item-meal\">"
                        str +="<p>"+data[i].title3+"</p>"
                        str +="<div class=\"user\">"
                        str +="<span>"+data[i].name3+"</span>"
                        str +="<span>"+data[i].num3+"</span>"
                        str +="</div>"
                        str +="</div>"
                        str +="</li>"
                        str +="<li>"
                        str +="<div class=\"item-picter\">"
                        str +="<img src="+data[i].img4+">"
                        str +="</div>"
                        str +="<div class=\"item-meal\">"
                        str +="<p>"+data[i].title4+"</p>"
                        str +="<div class=\"user\">"
                        str +="<span>"+data[i].name4+"</span>"
                        str +="<span>"+data[i].num4+"</span>"
                        str +="</div>"
                        str +="</div>"
                        str +="</li>"
                        str +="</ul>"
                        str +="<div class=\"big-pic\">"
                        str +="<img src="+data[i].img5+">"
                        str +="<div class=\"new-big-title\">"
                        str +="<span>"+data[i].title5+"</span>"
                        str +="</div>"
                        str +="</div>"
                    }
                    list.innerHTML += str;
                    flag = true;
                    page++;
                }
            }
        }

    }
}