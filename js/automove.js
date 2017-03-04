
function amove(i)
{
  var ost=$("#div_"+i).offset().top;
  $('html, body').stop().animate( { scrollTop : ost-60 },600 );
}
