const content=document.getElementById("content");
const date=document.getElementById("date");
const time=document.getElementById("time");
const addedBtn=document.getElementById("addedBtn");
const deletedBtn=document.getElementById("deletedBtn");
const list=document.getElementById("list");

const listContent=[];

function update(){
    let htmlstr=''
    listContent.forEach(function(item){
        htmlstr=htmlstr+`
        <div class="item">
            <div>
                <p>內容：${item.content}</p>
                <p>時間：${item.date} ${item.time} </p> 
            </div>
         </div>
         `
    })
    list.innerHTML=htmlstr
}


addedBtn.addEventListener("click",function(){
   
      
     listContent.unshift({
         content:content.value,
         date:date.value,
         time:time.value,

     })
     
     update()

    });

deletedBtn.addEventListener("click",function(){
     listContent.shift()
     update()
     
});




   


