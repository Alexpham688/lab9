
$('li').mouseover(function(){
   $(this).fadeTo('slow',0.25)
});
$('li').mouseout(function(){
     $(this).fadeTo('1000',1.00);
   });

$('li').on('click',function(){
  $(this).css('background-color','orange');
});
$('li').on('click',function(){
  $(this).css('background-color','blue');
});

// $('li').click(function(){
//   $('li').fadeOut(function(){
//     $('li').text(($('li').text()== 'Home' ?'Clicked':'Home').fadeIn();
//   });
// });
// $('li').click(fnction(){
//   $(this).toggleClass('li');
// })
$('li').on('click',function(){
  $(this).text('Home');
  });
  $('li').on('click',function(){
    $(this).text('Clicked');
  });
// $('li').on('click',function(){
// } $(this)
