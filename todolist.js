let inp = document.getElementById("rop");
let text = document.querySelector(".write");

function Add(){
    if(inp.value == ""){
        alert("Please Enter Task")
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inp.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inp.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}