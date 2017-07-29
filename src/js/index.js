//jq容器
$(function () {
    //首页点击事件
    $(".nav_menu li").click(function () {
        $(".nav_menu li").removeClass("shouye");
        $(this).addClass("shouye");

    });
    //图片的移入移出
    $(".big_container_img div").hover(function () {

        $(".big_container_img_mengban").eq($(this).index()).show();
        $(".hengxian").eq($(this).index()).show()
    },function () {
        $(".big_container_img_mengban").eq($(this).index()).hide();
        $(".hengxian").eq($(this).index()).hide()

    });
    //TING图片部分
    $(".img_di_fu").hover(function () {
            $(".img_di_fu").eq()

    },function () {

    })



});


















