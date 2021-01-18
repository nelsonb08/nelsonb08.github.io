$(()=>{
    $('button#resetgame').on('click',()=>{
        $('button#startgame').attr('disabled',false)
        $('button#resetgame').attr('disabled',true)
        $('button#giveans').hide()
        $('.bombdot').css({'visibility':'hidden'})
        clearInterval(timecounter)
        for(let i=0;i<4;i++){
        $('.bm'+(i+1)).css({'background-image':'url(./jpg/number'+ans[i]+'.png)'})
        }
        $('#input').attr('disabled',true).val(A+'A'+B+'B')
    })
    })
