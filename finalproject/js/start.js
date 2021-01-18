var r=''
var timecounter
$(()=>{
    $('button#startgame').on('click',()=>{
        $('button#startgame').attr('disabled',true)
        $('button#resetgame').attr('disabled',false)
        count=0
        ans='0000'
        A=0
        B=0
        var rand=Array(10)
        for(let i=0;i<10;i++){
            rand[i]=i
        }
        for(let i=0;i<4;i++){
            a=parseInt(Math.random()*(10-i))
            r+=rand[a]
            rand.splice(a,1)
            console.log(rand)
        console.log(r)
        }
        $('button#giveans').show()
        $('.bombdot').css({'visibility':'visible'})
        $('.remindnumber').remove()
        $('.remindresult').remove()
        $('#input').attr('disabled',false).val('')
        var time=300000
        $('.bm1').css({'background-image':'url(../jpg/數字'+parseInt((time/1000)/600)+'.png)'})
        $('.bm2').css({'background-image':'url(../jpg/數字'+parseInt((time/1000)/60)+'.png)'})
        $('.bm3').css({'background-image':'url(../jpg/數字'+parseInt(((time/1000)%60)/10)+'.png)'})
        $('.bm4').css({'background-image':'url(../jpg/數字'+((time/1000))%10+'.png)'})
        timecounter = setInterval(()=>{time-=1000
        $('.bm1').css({'background-image':'url(../jpg/數字'+parseInt((time/1000)/600)+'.png)'})
        $('.bm2').css({'background-image':'url(../jpg/數字'+parseInt((time/1000)/60)+'.png)'})
        $('.bm3').css({'background-image':'url(../jpg/數字'+parseInt(((time/1000)%60)/10)+'.png)'})
        $('.bm4').css({'background-image':'url(../jpg/數字'+((time/1000))%10+'.png)'})
        if(time==0){
            alert('時間久到炸彈都爆炸拉OAO，正確答案是'+r+'喔!')
            $('button#resetgame').trigger('click')
        }
        },1000)
        
    })

})