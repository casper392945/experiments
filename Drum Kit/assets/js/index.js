$(document).ready(function(){
    var keys = $('.key');
    $(document).keydown(function(e){
        console.log(e.keyCode);
        var audio = $('audio[data-key='+e.keyCode+']').get(0);
        if(!audio){
            return;
        }
        var key = $('.key[data-key='+e.keyCode+']');
        audio.currentTime = 0; //restart 
        key.addClass('playing');
        audio.play();     
    });

    keys.on('transitionend', function(e){
        if(e.originalEvent.propertyName !== 'transform'){
            return;
        }
        $(this).removeClass('playing');
    })
});