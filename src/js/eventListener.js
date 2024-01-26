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