/*
* @Author: hsy
* @Date:   2017-08-11 13:55:52
* @Last Modified by:   hsy
* @Last Modified time: 2017-08-26 18:25:13
*/

'use strict';
$(function(){
    var num=0;
    var timer;
    function aa(){
        clearInterval(timer);
        timer=setInterval(function(){
        num+=1;
        if (num>4) {
            num=0;
        }
        console.log(num)
        $('#banner ul').animate({'margin-left':-1827*num+'px'},1000);
        // $('#banner ol li').eq(num).css('background', 'red').siblings('').css('background', '#b5b5b5');
    },3000)
    }
    aa();
    $('#banner').hover(function() {
        clearInterval(timer)              
    }, function() {
        aa();
    });
    $('#banner ol li').click(function(event) {
        clearInterval(timer);
        num=$(this).index();
        console.log(num);
        $('#banner ul').animate({'margin-left':-1827*num+'px'},500);
        $(this).css('background', 'red').siblings('').css('background', '#b5b5b5');
    });

    $(function(){
        $('.c22 .c23').click(function(event){
            var num2=$(this).index('.c22 .c23');
            $('.c2 ul').eq(num2).slideToggle(500).siblings('ul').slideUp(500);
        })
    })

})