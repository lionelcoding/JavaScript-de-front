function clique(){
let footer = document.querySelector("footer");
let i = 1
footer.addEventListener("click", function(){
    console.log("je clique"+i)
    i ++
})
}

clique()

function hamburger(){
    
    let nav = document.getElementById("navbarHeader")
    let hamburger = document.querySelector(".navbar-toggler")
    hamburger.addEventListener("click", function(){
    nav.classList.toggle("collapse")
    })

}

hamburger()


function redText(){
let editCardButtonOne = document.querySelectorAll(".btn-outline-secondary")[0]
let textCardOne = document.querySelectorAll(".card-text")[0]

editCardButtonOne.addEventListener("click",function(){
    textCardOne.style.color = "red"
})
}

redText()


function buttonGreen (){
let editCardButtonTwo = document.querySelectorAll(".btn-outline-secondary")[1]
let textCardTwo = document.querySelectorAll(".card-text")[1]

editCardButtonTwo.addEventListener("click",function(){
    if(textCardTwo.style.color === "green")
    textCardTwo.style.color = "black";
    else
    textCardTwo.style.color = "green";
    
})
}

buttonGreen()


// function nucleaire (){
let topBar = document.querySelector("header");
let cdn = document.querySelector("head link");
let hrefBootstrapElement = cdn.getAttribute("href");


topBar.addEventListener("dblclick", function(){
    if(cdn.getAttribute("href")){
        cdn.removeAttribute("href");
}
    else 
    {console.log("cdnBBB")
    cdn.setAttribute("href",hrefBootstrapElement)
}
})
// }

// nucleaire()