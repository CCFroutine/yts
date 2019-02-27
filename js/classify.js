window.onload = function () {
   $('.border-left a').on('click', function (e) {
      e.preventDefault();
      $('.border-left .active').removeClass('active');
      $(this).addClass('active')
      var code = $(this).index() + 1
      console.log(code)
      $.ajax({
         type: 'get',
         url: "api/classify.php",
         data: 'code=' + code,
         dataType: 'json',
         success: function (data) {
            var str = "";
            $.each(data, function (index, ele) {
               console.log(index)
               console.log(ele)
               str += "<a class=\"cate-img\"><img src=" + ele.img1 + "></a>";
               str += "<div class=\"cate-item-wrap\">";
               str += "<div class=\"cate-title\">";
               str += "<p>" + ele.title1 + "</p>"
               str += "</div>"
               str += "<div class=\"cate-list\">";
               str += "<a href=\"\" class=\"cate-list-f1\">"
               str += "<img src=" + ele.img2 + ">";
               str += "<span>" + ele.name2 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f1\">"
               str += "<img src=" + ele.img3 + ">";
               str += "<span>" + ele.name3 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f1\">"
               str += "<img src=" + ele.img4 + ">";
               str += "<span>" + ele.name4 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f1\">"
               str += "<img src=" + ele.img5 + ">";
               str += "<span>" + ele.name5 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f1\">"
               str += "<img src=" + ele.img6 + ">";
               str += "<span>" + ele.name6 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f1\">"
               str += "<img src=" + ele.img7 + ">";
               str += "<span>" + ele.name7 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f1\">"
               str += "<img src=" + ele.img8 + ">";
               str += "<span>" + ele.name8 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f1\">"
               str += "<img src=" + ele.img9 + ">";
               str += "<span>" + ele.name9 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f1\">"
               str += "<img src=" + ele.img10 + ">";
               str += "<span>" + ele.name10 + "</span>"
               str += "</a>"
               str += "</div>"
               str += "<div class=\"cate-gd\">"
               str +="<p>"+ele.title2+"</p>"
               str += "</div>"
               str += "<div class=\"cate-gd-list\">"
               str += "<a class=\"cate-list-f2\">"
               str += "<img src=" + ele.img11 + ">";
               str += "<span>" + ele.name11 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f2\">"
               str += "<img src=" + ele.img12 + ">";
               str += "<span>" + ele.name12 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f2\">"
               str += "<img src=" + ele.img13 + ">";
               str += "<span>" + ele.name13 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f2\">"
               str += "<img src=" + ele.img14 + ">";
               str += "<span>" + ele.name14 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f2\">"
               str += "<img src=" + ele.img15 + ">";
               str += "<span>" + ele.name15 + "</span>"
               str += "</a>"
               str += "<a class=\"cate-list-f2\">"
               str += "<img src=" + ele.img16 + ">";
               str += "<span>" + ele.name16 + "</span>"
               str += "</a>"
               str += "</div>"
               str += "</div>"
            })
            $('.cate-child').html(str)
         }
      })
   })
   
}
function scroll(){
   var topHeight = $('header .top').height();
   console.log($('header .top'))
   console.log(topHeight)
   $(window).scroll(function(){
      var winScroll = $(window).scrollTop()
      // var stiWidth = $('.sticky').width();
      var leftLeft = $('.border-left').offset().left;
      // var cartWidth = $('.cate-child').width()
      console.log(winScroll)
      if(winScroll-topHeight>=0){
         $('.border-left').css({
            position:'fixed',
            top:0,
            left:left
         })
      }else if(winScroll-topHeight<0){
         $('.border-left').css({
            position:'absolute',
            top:2.75+'rem',
            left:0
         })
      }
   })
   // function a(){
      
   // }
   // function b(){
      
   // }
}
scroll()
