export function factBoxTrigger(){
    const factBoxContainer = document.querySelector(".frifag-factbox-collapse");
    const factBox = document.querySelector(".frifag-factbox-container");
    const factBoxTrigger = document.querySelector(".frifag-factbox-trigger");
    const facboxGradient = document.querySelector(".frifag-factbox-gradient");

    factBoxTrigger.addEventListener("click", function () {

        if(factBox.style.height === "auto"){
            factBox.style.height = "100px";
            factBoxTrigger.querySelector("img").style.transform = "rotate(0deg)";
            facboxGradient.style.display = "block";
        } else {
            factBox.style.height = "auto";
            facboxGradient.style.display = "none";
            factBoxTrigger.querySelector("img").style.transform = "rotate(180deg)";
        }
    });
}

export function captionTrigger() {
/*     const captionContainers = document.querySelectorAll(".frifag-caption");

    captionContainers.forEach((captionContainer) => {
        if (captionContainer.clientHeight > 48) {
            captionContainer.style.maxHeight = "48px";
            captionContainer.style.overflow = "hidden";
            captionContainer.style.marginRight = "80px";
            captionContainer.style.background = "linear-gradient(to bottom, transparent, white) 100% 20%";
            const captionTrigger = document.createElement("span");
            captionTrigger.classList.add("frifag-caption-trigger");
            captionTrigger.innerHTML = "Se mer";
            captionContainer.appendChild(captionTrigger);


        } else {
            captionContainer.style.maxHeight = "none"; 
            captionContainer.style.overflow = "visible";
        }
    }); */
}

const phBody = document.querySelector("body");
phBody.classList.add("ph-body");