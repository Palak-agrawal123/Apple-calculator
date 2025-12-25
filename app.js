let buttons=document.querySelectorAll('button');
let input =document.querySelector('input');
let timeout;
function resetTimer(){
    clearTimeout(timeout);
    timeout=setTimeout(()=>{
        input.value="";
    },10000);
}
for(let button of buttons){
    button.addEventListener('click',function(event){
        let btntext=event.target.innerText;
        resetTimer();
        if(btntext==='AC'){
            input.value='';
        }
        else if(btntext==='='){
            try{
                input.value=eval(input.value);
            }
            catch(e){
                input.value='invalid statement'
            }

        }
        else{
            input.value+=btntext;
        }
    })
}


