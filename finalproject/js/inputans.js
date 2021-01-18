var count=0
var A=0
var B=0
$(()=>{
    $('button#giveans').on('click',()=>{
        ans=$('#input').val()
        $('#input').val("")
        var check=0
        console.log(ans)
        if(ans.length==4){
        for(let i=0;i<4;i++){
            if(ans[i].charCodeAt()>=48 && ans[i].charCodeAt()<=57){
                check+=1
            }
            for(let j=i+1;j<4;j++){
                if(ans[i]!=ans[j]){
                    check+=1
                }
            }

        }}
        if(check==10){
            A=0
            B=0
            count+=1
            for(let i=0;i<4;i++){
                for(let j=0;j<4;j++){
                    if(ans[i]==r[j]){
                        if(i==j){
                            A+=1
                        }
                        else{
                            B+=1
                        }

                    }
                }
            }

            if(count<7&&A!=4){
                $div=$('<div>').attr('id',count).addClass('remindword').addClass('remindnumber').text(ans)
                $('div#'+count+'.remindline').append($div)
                $div=$('<div>').attr('id',count).addClass('remindword').addClass('remindresult').text(A+'A'+B+'B')
                $('div#'+count+'.remindline').append($div)
            }
        }
            if (A==4){
                alert('恭喜你成功了!!!')
                $('button#resetgame').trigger('click')
            }
            else if (count==7){
                alert('按錯太多次炸彈爆炸了OAO，正確答案是'+r+'喔!')
                $('button#resetgame').trigger('click')
            }
        console.log(check)
        console.log(count)
        console.log(A)
        console.log(B)
        
    })
})