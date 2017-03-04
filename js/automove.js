$("#am1").click(function(){
  amove(1);
})
$("#am2").click(function(){
  amove(2);
})
$("#am3").click(function(){
  amove(3);
})
$("#am4").click(function(){
  amove(4);
})
$("#am_2").click(function(){
  amove(2);
})
function amove(i)
{
  var ost=$("#div_"+i).offset().top;
  $('html, body').stop().animate( { scrollTop : ost-60 },600 );
}
