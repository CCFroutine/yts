// 点击编辑切换完成及替换去结算与删除所选
$('.full-title').toggle(
    function(){
        $(this).html('完成')
        $('.settlement').html('删除所选')
        $('.settlement').addClass('orange-bg').removeClass('white')
        $('.total-price').hide()
    },
    function(){
        $(this).html('编辑')
        $('.settlement').html('去结算')
        $('.settlement').addClass('white').removeClass('orange-bg')
        $('.total-price').show()
    }
)

// 页面滚动替换头部
var  topHeight = $('.top').height();
$(window).scroll(function(){
   var winScroll = $(window).scrollTop()
   if(winScroll - topHeight >=0){
       $('.car-title').show()
       $('.top').css({
        position:'fixed',
        left:0,
        top:0
    })
   }else{
    $('.car-title').hide()
    $('.top').css({
        
        position:'static',
        left:0,
        top:0
    })
   }
})
// 首屏加载商品
    var tpl = $('#tpl').html()
    var html = ejs.render(tpl, { list: gou.data.recommend.list});
    $('.mt-5').append(html);

// 点击购物车图标清空默认样式及显示底部样式
$('.gou-car').click(function(e){
    e.preventDefault()
    $(this).parent().parent().parent().parent().parent().children('.noding').html('')
    $(this).parent().parent().parent().parent().parent().children('.car-total').removeClass('none')
})

var allShop = document.querySelector('.allShop')
var shop = document.getElementsByClassName('shop')
var add = document.getElementsByClassName('add')
var reduce = document.getElementsByClassName('reduce')
var total = document.getElementsByClassName('total')[0]
var allnumber = document.getElementsByClassName('allnumber')[0]
var num = document.getElementsByClassName('num')[0]
var pro = document.getElementsByClassName('pro-num')
var price = document.getElementsByClassName('price')
var xiaoji = document.getElementsByClassName('xiaoji')

// 点击全选---选中商品
allShop.onclick = function(){
    for( var i=0;i<shop.length;i++){
        shop[i].checked = this.checked;
    }
    pri()
}
//单选商品，实现全选选中
for(var i=0;i<shop.length;i++){
    shop[i].onclick = function(){
        var n = 0;
         for(var j=0;j<this.parentNode.parentNode.parentNode.children.length;j++){
             if(this.parentNode.parentNode.parentNode.children[j].children[0].children[0].checked){
                n++;
             }
         }
         if(n == this.parentNode.parentNode.parentNode.children.length){
            this.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[0].children[0].checked = true
         }else{
            this.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[0].children[0].checked = false
         }
         pri()
    }
}
// 数量加减
for(var i = 0;i<add.length;i++){
    // 数量相加
    add[i].onclick = function(){
        var val = parseInt(this.parentNode.parentNode.parentNode.children[1].children[1].children[1].value)
        val++;
        this.parentNode.parentNode.parentNode.children[1].children[1].children[1].value = val;
        this.parentNode.parentNode.parentNode.children[2].children[0].innerHTML =( this.parentNode.parentNode.parentNode.children[1].children[0].children[0].innerHTML*val).toFixed(2);
        // this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[3].children[1].children[0].children[0].innerHTML =( this.parentNode.parentNode.parentNode.children[1].children[0].children[0].innerHTML*val).toFixed(2);
        pri()
    }
    // 数量相减
    reduce[i].onclick = function(){
        var val = parseInt(this.parentNode.parentNode.parentNode.children[1].children[1].children[1].value)
        val--;
        if(val==0){
            val = 1;
        }
        this.parentNode.parentNode.parentNode.children[1].children[1].children[1].value = val;
        this.parentNode.parentNode.parentNode.children[2].children[0].innerHTML =( this.parentNode.parentNode.parentNode.children[1].children[0].children[0].innerHTML*val).toFixed(2);
        // this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[3].children[1].children[0].children[0].innerHTML =(this.parentNode.parentNode.parentNode.children[1].children[0].children[0].innerHTML*val).toFixed(2);
        pri()
    }
}
function pri(){
    var sum = 0;
    var allnum = 0;
    for(var i=0;i<shop.length;i++){
        if(shop[i].checked){
            sum += parseFloat(xiaoji[i].innerHTML)
            allnum += parseInt(pro[i].value)
        }
    }
    // 底部产品总数
    allnumber.innerHTML = allnum
    // 顶部产品总数
    num.innerHTML = allnum
    // 底部产品合计
    total.innerHTML = sum
}
