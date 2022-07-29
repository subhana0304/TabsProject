const tabsEl = document.querySelector(".tabs");
const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

tabsEl.addEventListener("click", (event) => {
    const id = event.target.dataset.id;

    if(id){
        btns.forEach((btn) => {
            btn.classList.remove("live");
        });
        event.target.classList.add("live"); 

        contents.forEach((content)=>{
            content.classList.remove("live")
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    };
})