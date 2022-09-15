$(function(){
    $('.attrib .option').click(function(){
      $(this).siblings().removeClass('activ');
      $(this).addClass('activ');
    })
    $('.zoomControl').click(function(){
      $(this).parents('.productCard').addClass('morph');
      $('body').addClass('noScroll');
    })
    $('.closePreview').click(function(){
      $(this).parents('.productCard').removeClass('morph');
      $('body').removeClass('noScroll');
    })
    $('.movControl').click(function(){
      let imgActiv = $(this).parents('.preview').find('.imgs img.activ');
      if ($(this).hasClass('left')) {
        imgActiv.index() == 0 ? $('.imgs img').last().addClass('activ') : $('.imgs img.activ').prev().addClass('activ');
      } else {
        imgActiv.index() == ($('.imgs img').length - 1) ? $('.imgs img').first().addClass('activ') : $('.imgs img.activ').next().addClass('activ');
      }
      imgActiv.removeClass('activ');
    })
  })