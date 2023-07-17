const imgContainer = document.getElementById("images");
const btnAdd = document.getElementById("add");
const btnRemove = document.getElementById("remove");

const numImgToDel = document.getElementById("number-to-del");

let nImages = 0;

btnAdd.addEventListener("click", () => {
    if (nImages >= 5) return;

    const img = document.createElement("img");
    img.src = "https://picsum.photos/300/300";
    img.alt = "Random image " + nImages;

    imgContainer.appendChild(img);

    nImages++;

    numImgToDel.max = nImages;
});

btnRemove.addEventListener("click", () => {
    if (nImages <= 0) return;

    let n = numImgToDel.value;

    if (n < 1 || n > nImages) return;

    imgContainer.removeChild(imgContainer.children[n - 1]);

    nImages--;

    if (nImages < 1) numImgToDel.max = 1;
    else numImgToDel.max = nImages;
});
