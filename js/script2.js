
 $('document').ready(function(){
                // init slider
                $('#cbp-fwslider').cbpFWSlider();

               /**
                     Set a 3 seconds interval
                     if next button is visible (so is not the last slide)  click next button
                     else it finds first dot and click it to start from the 1st slide
                **/
                setInterval( function(){
                    if($('.cbp-fwnext').is(":visible"))
                        {
                            $('.cbp-fwnext').click();   


                }
                else{
                        $('.cbp-fwdots').find('span').click();
                    }
            } ,3000 );
        });
