function amove(i)
{
  var ost=$("#div_"+i).offset().top;
  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            window.scrollTo(0,ost-60);
}
else
  $('html, body').stop().animate( { scrollTop : ost-60 } );
}
