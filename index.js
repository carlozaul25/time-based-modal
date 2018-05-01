var modal=document.getElementById('modal')
var button=document.getElementById('btn')

setTimeout(displayModel,5000)

function displayModel(){
 modal.style.display= "block"
}

button.addEventListener("click", function(){
 modal.style.display= "none"
})

