$(function () {

    $(".header-right").toggle(
        function () {
            $('.icon-2').addClass("icon-th-list").removeClass('icon-th-large');
        },
        function () {
            $('.icon-2').addClass('icon-th-large').removeClass('icon-th-list')
        }
    );
    $(".sord .sort-option").toggle(
        function () {
            $(this).children('.f1').addClass("sort-item-show");
            $('.icon-1').addClass('icon-caret-up').removeClass('icon-caret-down')
        },
        function () {
            $('.f1').removeClass("sort-item-show");
            $('.icon-1').removeClass('icon-caret-up').addClass('icon-caret-down')
        }
    );
    // 页面滚动tab导航悬浮
    $(function(){
        var searchHeight = $('.wrapper-box').height()
        console.log(searchHeight)
        $(window).scroll(function(){
            var winScroll = $(window).scrollTop()
            if(winScroll-searchHeight>=0){
                $('.sord').css({
                    position:'fixed',
                    top:0,
                    left:0
                })
            }else{
                $('.sord').css({
                    position:'static',
                    top:2.5+'rem',
                    left:0
                })
            }
        })
    })
    // ejs用法
    // console.log(see)
    // console.log(seekGao.data.product.list)
    var index = 0,num=0;
    function feng(data,num){
        var tpl = $('#tpl').html()
        var tpl1 = $('#tpl1').html()
        if(num == 0){
            // console.log(0)
            var html = ejs.render(tpl, { list: data});
        }else if(num == 1){
            // console.log(1)
            var html = ejs.render(tpl1, { list: data});
        }
            $('.sord-show').append(html);
    }
    $('.header-right ').click(function(){
        if($(this).children('i').hasClass('icon-th-large')){
            num = 0;
        }else{
            num = 1;
        }
        $('.sord-show').children().remove()
        switch(index){
            case 0:
            feng(seekDi.data.product.list,num)
            break;
            case 1:
            feng(seekXiao.data.product.list,num)
            break;
            case 2:
            feng(seekGao.data.product.list,num)
            break;
            case 3:
            feng(seekNew.data.product.list,num)
            break;
        }
    })
    // 综合首屏加载--获取json数据
    $(".sort-option1").show(function () {
        feng(seekZong.data.product.list,num)
        $(".sort-zong").html('综合').css({ color: 'red' })
        $('.icon-1').css({ color: 'red' })
    }
    ).css({ color: 'red' })
    // 按价格排序点击加载--获取json数据
    function fun1(){
        index = $(this).data('num')
        $(this).css({ color: 'red' }).siblings().css({ color: '' });
        $(this).parent().next().children().remove()
        $(this).parent().children('.sort-option').children('.sort-zong').css({color:''})
        $(this).parent().children('.sort-option').children('.icon-1').css({color:''})
        $(this).parent().children('.sort-option').children('.f1').children('.sort-item-option').css({color:''})
    }
    $(".sort-list1").toggle(
        function () {
            $(this).children('.item-up').removeClass('icon-caret-down').addClass('icon-caret-up')
            index = $(this).data('num')
            $(this).css({ color: 'red' }).siblings().css({ color: '' });
            $(this).parent().next().children().remove()
            $(this).parent().children('.sort-option').children('.sort-zong').css({color:''})
            $(this).parent().children('.sort-option').children('.icon-1').css({color:''})
            $(this).parent().children('.sort-option').children('.f1').children('.sort-item-option').css({color:''})
            // fun1()
            feng(seekGao.data.product.list,num)
        },
        function () {
            $(this).children('.item-up').removeClass('icon-caret-up').addClass('icon-caret-down')
            index = $(this).data('num')
            $(this).css({ color: 'red' }).siblings().css({ color: '' });
            $(this).parent().next().children().remove()
            $(this).parent().children('.sort-option').children('.sort-zong').css({color:''})
            $(this).parent().children('.sort-option').children('.icon-1').css({color:''})
            $(this).parent().children('.sort-option').children('.f1').children('.sort-item-option').css({color:''})
            // fun1()
            feng(seekDi.data.product.list,num)
        }
    );
    // 按新品优先排序点击加载--获取json数据
    $(".sort-list2").click(function () {
        index = $(this).data('num')
        $(this).css({ color: 'red' }).siblings().css({ color: '' });
        $(this).parent().next().children().remove()
        $(this).parent().children('.sort-option').children('.sort-zong').css({color:''})
        $(this).parent().children('.sort-option').children('.icon-1').css({color:''})
        $(this).parent().children('.sort-option').children('.f1').children('.sort-item-option').css({color:''})
        feng(seekNew.data.product.list,num)
    })
    
    // 按综合排序点击加载--获取json数据
    $(".sort-option1").click(function () {
        index = $(this).data('num')
        $(this).css({ color: 'red' }).siblings().css({ color: '' });
        $(".sort-zong").html('综合').css({ color: 'red' })
        $('.icon-1').css({ color: 'red' })
        $(this).parent().parent().parent().next().children().remove()
        $(this).parent().parent().parent().children('.sort-list1').css({color:''})
        $(this).parent().parent().parent().children('.sort-list2').css({color:''})
        feng(seekZong.data.product.list,num)
    })
    // 按销量排序点击加载--获取json数据
    $(".sort-option2").click(function () {
        $(this).css({ color: 'red' }).siblings().css({ color: '' });
        $(".sort-zong").html('销量').css({ color: 'red' })
        $('.icon-1').css({ color: 'red' })
        $(this).parent().parent().parent().next().children().remove()
        $(this).parent().parent().parent().children('.sort-list2').css({color:''})
        $(this).parent().parent().parent().children('.sort-list1').css({color:''})
        feng(seekXiao.data.product.list,num)
    })
    // 点击导航‘刷选’跳出遮罩层
    $('.sort-screen').click(function(){
        $('.screen-box').show()
    })
    $('.mask').click(function(){
        $('.screen-box').hide()
    })
    $('.flex-9').toggle(
        function(){
            $(this).children('i').removeClass('icon-up').addClass('icon-down')
            $(this).parent().parent().children('.price-section').addClass('over-1')
            
        },
        function(){
            $(this).children('i').removeClass('icon-down').addClass('icon-up')
            $(this).parent().parent().children('.price-section').removeClass('over-1')
        }
    )
})