$("document").ready(function(){

    $("#btn1").click(function ()
    {
       $("#img1").animate({
           left: '150px',
           opacity: '1',
           height:'400px',
           width: '400px'
       }, 2000);
    });

});