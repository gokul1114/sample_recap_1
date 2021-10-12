var selectBtn = document.getElementById('select');
var submitBtn = document.getElementById('submit');
var text =  document.getElementById('add');
submitBtn.addEventListener('click',()=>{
    
    if(text.value.length > 0) {
        selectBtn.innerHTML = selectBtn.innerHTML + `<option>${text.value}</option>`
        text.value = '';
    }
    else{
        alert('enter value');
    }
})