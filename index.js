let open= document.getElementById("open")
let ul = document.querySelector("#ul")
let close= document.getElementById("close")



open.onclick=function(){
close.style.display="block"
    this.classList.add("hide")
ul.classList.add("show")

}

    


  
close.onclick=function(){

    close.style.display="none"


    ul.classList.remove("show")
    open.classList.remove('hide')
    
}  