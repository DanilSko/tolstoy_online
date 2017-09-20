$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  /*
  $("#viewswitcher").click(function(){
    $(".pointer_line").hide();
  */
  $('#links_view_on').click( function(){  
  var $button = $(this);
  //alert ('SHOWING LINKS');
  //alert ($button.data('off'));
  //alert ($button.attr('on_off'))
  if ($button.attr('on_off') == 'off')
  
{  
 //alert ('iftrue');
 $(this).attr("on_off", 'on')
 //alert ('off after change');
 //alert ($(this).attr('off'))
//alert ('looing for linked items')
  $('.linked').each (function() {
  
  	var $t = $(this);
  	//alert (this);
  	//alert ($t.data('linkto'));
  	
    var $i = $('#' + $t.data('linkto'));
    if ($i.offset() != undefined) { 

    // find offset positions for the word (t = this) and image (i)
    var ot = {
        x: $t.offset().left + $t.width() / 2,
        y: $t.offset().top + $t.height() / 2
    };
    var oi = {
        x: $i.offset().left + $i.width() / 2,
        y: $i.offset().top + $i.height() / 2
    };

    // x,y = top left corner
    // x1,y1 = bottom right corner
    var p = {
        x: ot.x < oi.x ? ot.x : oi.x,
        x1: ot.x > oi.x ? ot.x : oi.x,
        y: ot.y < oi.y ? ot.y : oi.y,
        y1: ot.y > oi.y ? ot.y : oi.y
    };

    // create canvas between those points
    var c = $('<canvas/>').attr({
        'width': p.x1 - p.x,
        'height': p.y1 - p.y + 15
    }).css({
        'position': 'absolute',
        'left': p.x,
        'top': p.y - 15,
        'z-index': 1
    }).appendTo($('body'))[0].getContext('2d');

    // draw line between target and source
    c.strokeStyle = '#1356c1';
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(ot.x - p.x, ot.y - p.y);
    c.lineTo(oi.x - p.x, oi.y - p.y);
    c.stroke();
    
    // draw line up source
    c.strokeStyle = '#1356c1';
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(ot.x - p.x, ot.y - p.y);
    c.lineTo(ot.x - p.x, ot.y - p.y +15);
    c.stroke();
    
    // draw line up target
    c.strokeStyle = '#1356c1';
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(oi.x - p.x, oi.y - p.y);
    c.lineTo(oi.x - p.x, oi.y - p.y +15);
    c.stroke();
    }
    //else {alert ($t.data('linkto'))}
});

} 

else {
    //alert ('RENMOVING CANVAS')
    $button.attr('on_off', 'off')
    $('canvas').remove();}
    

});
    
    
    $('#roles_view_on').click (function()
    {
    //alert ('ROLES!');
    
    /*
    //$(".agent").css("background-color", "yellow");
    $('.agent').css("background-color", "yellow");
    $('.object').css("background-color", "khaki");
    $('.experiencer').css("background-color", "blue");
    $('.possessor').css("background-color", "green");
    $('.addressee').css("background-color", "crimson");
    $('.finalpoint').css("background-color", "pink");
    */
     $('.popuptext').toggle ();
     $(this).text( $(this).text() == 'Спрятать роли' ? 'Показать роли' : 'Спрятать роли' );
    });
    $('.popuptext').click(function(){$this.hide()})  
  /*
  $('#roles_view_on').toggle (function(){ $(this).text("Спрятать семантические роли");}, 
    function() {$(this).text("Показать семантические роли");}
    );
    */
  
});

//$('.popuptext').css("visibility", "visible");
/*    
$('.person_link').click(function () {
	alert ('WORKING')
    var $t = $(this);
    var $i = $('#' + $t.data('id'));

    // find offset positions for the word (t = this) and image (i)
    var ot = {
        x: $t.offset().left + $t.width() / 2,
        y: $t.offset().top + $t.height() / 2
    };
    var oi = {
        x: $i.offset().left + $i.width() / 2,
        y: $i.offset().top + $i.height() / 2
    };

    // x,y = top left corner
    // x1,y1 = bottom right corner
    var p = {
        x: ot.x < oi.x ? ot.x : oi.x,
        x1: ot.x > oi.x ? ot.x : oi.x,
        y: ot.y < oi.y ? ot.y : oi.y,
        y1: ot.y > oi.y ? ot.y : oi.y
    };

    // create canvas between those points
    var c = $('<canvas/>').attr({
        'width': p.x1 - p.x,
        'height': p.y1 - p.y
    }).css({
        'position': 'absolute',
        'left': p.x,
        'top': p.y,
        'z-index': 1
    }).appendTo($('body'))[0].getContext('2d');

    // draw line
    c.strokeStyle = '#f00';
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(ot.x - p.x, ot.y - p.y);
    c.lineTo(oi.x - p.x, oi.y - p.y);
    c.stroke();
}, function () {
    $('canvas').remove();
});

});
*/  

