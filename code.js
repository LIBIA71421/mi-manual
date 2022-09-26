var header = document.getElementById("header")

window.addEventListener('scroll', () =>{
    var scroll = windonw.scrollY
    if(scroll>10){
        header.style.backgroundColor = "#121212"
    }
    else{
        header.style.backgroundColor = "transparent"
    }
})
window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",this.window.scrollY>0);
})