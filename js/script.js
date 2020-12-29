$(document).ready(function(){
    $('.head a').click(function(){
        $('.head a').removeClass('current')
        $(this).addClass('current')
        $('#heading').text($(this).text())
        let category = $(this).text().toLowerCase().replace(" ","-")
        console.log(category);
        $('.gallery ul li').fadeOut('slow')
        if(category === 'all-projects'){
            $('.gallery ul li').fadeIn('slow').removeClass('hidden')
        }else{
         
            $('.gallery ul li').each(function(){
                $()
                if(!$(this).hasClass(category)){
                    $(this).hide().addClass('hidden')
                }else{
                    $(this).fadeIn('slow').removeClass('hidden')
                }
            })
        }
        return false;   
    })
    $('.gallery ul li').on('mouseenter',function(){
         title = $(this).data('title')
        let desc = $(this).data('desc')
        
        if(title == undefined){
            title = "title goes here"
        }
        if(desc == undefined){
            desc = "desc goes here"
        }
        console.log(title)

        $(this).append('<div class="overlay"></div>')

        var overlay  = $(this).children('.overlay')

        overlay.html('<h1>'+title+'</h1><p>'+desc+'</p>')

        overlay.fadeIn(800)
        return false
    })
    $('.gallery ul li').on('mouseleave',function(){
       title = $(this).data('title')
       let desc = $(this).data('desc')
       
       if(title == undefined){
           title = "title goes here"
       }
       if(desc == undefined){
           desc = "desc goes here"
       }
       console.log(title)

       

       var overlay  = $(this).children('.overlay')

       

       overlay.fadeOut(800)
       return false
   })
 
})