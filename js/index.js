var tl1,tl2,tl3,tl4,tl5,tl6,tlman;


$(document).ready(function () {
    initNoteScrollBar();
    initTopBtn();
    initAniEl();
    initJumpBtn();
    initATag();
    
})

function initAniEl() {
    tl1 = new TimelineMax();
    tl2 = new TimelineMax();
    tl3 = new TimelineMax();
    tl4 = new TimelineMax();
    tl5 = new TimelineMax();
    tl6 = new TimelineMax();
    tlman = new TimelineMax();

    tl1.set('.b_steps .aniEl',{autoAlpha:0,scale:.7})
    .set('.b_steps .aniTop',{top:20,autoAlpha:0})
    .staggerTo('.b_steps .aniEl',.6,{delay:.6,autoAlpha:1,scale:1},.1)
    .to('.b_steps .aniTop',.6,{top:0,autoAlpha:1},'-=0.3')
    .pause();

    tl2.set('.b_plan .aniEl',{autoAlpha:0,scale:.7})
    .set('.b_plan .aniTop',{top:20,autoAlpha:0})
    .staggerTo('.b_plan .aniEl',.6,{delay:.4,autoAlpha:1,scale:1},.1)
    .to('.b_plan .aniTop',.6,{top:0,autoAlpha:1},'-=0.3')
    .pause();

    tl3
    .set('.b_examples .aniTop',{top:20,autoAlpha:0})
    .staggerTo('.b_examples .aniTop',.6,{delay:.4,top:0,autoAlpha:1},.3)
    .pause();

    tl4.set('.b_rewards .aniEl',{autoAlpha:0,scale:.7})
    .set('.b_rewards .aniTop',{top:20,autoAlpha:0})
    .set('.b_rewards .sun',{marginTop:60,marginLeft:30})
    .set('.b_rewards .balloon',{marginTop:60,marginRight:-200})
    .staggerTo('.b_rewards .aniEl',.6,{delay:.4,autoAlpha:1,scale:1},.1)
    .to('.b_rewards .sun',3,{marginTop:0,marginLeft:0},.3)
    .to('.b_rewards .aniTop',.6,{top:0,autoAlpha:1},'-=0.3')
    .to('.b_rewards .balloon',4,{marginTop:0,marginRight:0},0)
    .to('.b_rewards .balloon',2,{marginTop:20,repeat:-1,yoyo:true,ease:Power1.easeInOut},4)
    .pause();

    tl5.set('.b_offer .aniEl',{autoAlpha:0,scale:.7})
    .set('.b_offer .aniTop',{top:20,autoAlpha:0})
    .staggerTo('.b_offer .aniEl',.6,{delay:.4,autoAlpha:1,scale:1},.1)
    .to('.b_offer .aniTop',.6,{top:0,autoAlpha:1},'-=0.3')
    .pause();

    tl6.set('.b_notes .aniEl',{autoAlpha:0,scale:.7})
    .set('.b_notes .aniTop',{top:20,autoAlpha:0})
    .staggerTo('.b_notes .aniEl',.6,{delay:.4,autoAlpha:1,scale:1},.1)
    .to('.b_notes .aniTop',.6,{top:0,autoAlpha:1},'-=0.3')
    .pause();

    tlman.set('.b_steps .m2',{autoAlpha:0,scale:.7,marginTop:6,marginLeft:8})
    .to('.b_steps .m2',.6,{delay:.3,scale:1,autoAlpha:1,marginTop:0,marginLeft:0,ease:Back.easeOut})
    .pause();

    $('.inViewDiv').one('inview', function (event, isInView) {
        console.log($(this).attr('data-ani'));
        window[$(this).attr('data-ani')].play();
    });


    var tl_cloud = new TimelineMax();
    tl_cloud.to('.clouds .c01',10,{marginLeft:100,repeat:-1,yoyo:true,ease:Power1.easeInOut})
    .to('.clouds .c02',3,{marginLeft:-80,repeat:-1,yoyo:true,ease:Power1.easeInOut},0)
    .to('.clouds .c03',4,{delay:.6,marginLeft:120,repeat:-1,yoyo:true,ease:Power1.easeInOut},0)

}


function initTopBtn() {
    window.onscroll = function () {
        if (ChungTool.windoePosTop() > 500) {
            $('.topBtn').addClass('show')
        } else {
            $('.topBtn').removeClass('show');
        }
    };

    $('.topBtn').on('click', function () {
        ChungTool.pageScrollAni(0);
    });
}

function initJumpBtn() {
    $('.jumpBtn').on('click',function(e){
        e.preventDefault();
        ChungTool.pageScrollAni($("#" +$(this).attr('data-goto')).offset().top);
    });
}

function initNoteScrollBar() {
    $("#note").perfectScrollbar()
}

function initATag() {
    $('a.linkCheck').each(function(){
        if(ChungTool.isPhone()){
            $(this).attr('href',$(this).attr('data-mLink'));
        }
    })
}