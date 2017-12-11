jQuery(document).ready(function(){

    function progressShow(){
        jQuery(".pi1").animate({'width' : '90%'}, 1000);
        jQuery(".pi2").animate({'width' : '80%'}, 1000);
        jQuery(".pi3").animate({'width' : '70%'}, 1000);
    }
    $('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    })

    jQuery(window).scroll(function(){
        var distance = jQuery(window).scrollTop();

        if(distance >= 1000){
            progressShow();
            jQuery(".progress-inner p").show();
        }
        
    });
})