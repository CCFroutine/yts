// 顶部搜索滚动变色
function scroll() {
    var wraHeight = $('.wrapper-box .wrapper').height();
    $(window).scroll(function () {
        var winScroll = $(window).scrollTop();
        // console.log(winScroll)
        if (winScroll > 0 && winScroll <= 100) {
            $('.wrapper-box .wrapper').addClass('wrapper2')
        } else if (winScroll > 100) {
            $('.wrapper-box .wrapper').removeClass('wrapper2').addClass('wrapper3');
        } else {
            $('.wrapper-box .wrapper').removeClass('wrapper2').removeClass('wrapper3');
        }
    })
}
scroll()
// 轮播图
window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        //   direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,//可选选项，自动滑动
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
    var navSwiper = new Swiper('#header', {
        freeMode: true,
        slidesPerView: 'auto',
        freeModeSticky: true,
    });
}
// 品牌推荐tab切换
     // 首屏默认加载
$(function(){
    $.ajax({
        type: 'get',
        url: "api/tab-ajax.php",
        data:'code=1',
        dataType: 'json',
        success: function (list) {
            console.log(list)
            var tpl = $('#tpl').html()
            console.log(tpl)
            var pageStr = ejs.render(tpl, { list: list });
            $('.tabs-content').append(pageStr);
        }
    })
})
$(function() {
    $('.relative li').first().css({ color: 'red', borderBottom: '.1rem solid red' });
    $('.relative li').click(function () {
        $('.relative-tabs .tabs-content li').remove()
        $(this).css({ color: 'red', borderBottom: '.1rem solid red' }).siblings().css({ color: '', borderBottom: '' })
        var code = $(this).index() + 1;

        $.ajax({
            type: 'get',
            url: "api/tab-ajax.php",
            data: 'code=' + code,
            dataType: 'json',
            success: function (list) {
                // console.log(list);
                var tpl = $('#tpl').html()
                // console.log(tpl)
                // ejs用法
                var html = ejs.render(tpl, { list: list });
                $('.tabs-content').append(html);
            }

        })
    })
})
// function cb(data) {
//     // console.log(data.s)
//     var list = document.querySelector('.wrapper-list')
//     list.innerHTML = "";
//     for (var i = 0; i < data.s.length; i++) {
//         var node = document.createElement('li')
//         node.innerHTML = data.s[i]
//         list.appendChild(node)
//     }
// }
// var search = document.querySelector(".inp");
// search.onkeyup = function () {
//     var scriptE = document.createElement("script");
//     scriptE.src = " https://sug.so.360.cn/suggest?word=" + this.value + "&encodein=utf-8&encodeout=utf-8&pq=&callback=cb"
//     document.body.appendChild(scriptE)
// }
