document.getElementById("button").addEventListener("click", addLista);

function addLista(){
    const InputContent = document.getElementById("frmLista");
    const UlElement = document.getElementById("ul");
    const LiELement = document.createElement("li");
    LiELement.innerHTML = InputContent.value;
    UlElement.appendChild(LiELement);
}