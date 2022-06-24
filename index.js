const back=document.querySelector("#previosly");
const next=document.querySelector("#nextPlace");


const photos=[ "field.jpg", "forest.jpg", "beach.jpg", "waterfall.jpg", "mountains.jpg", "lake.jpg"];

let i=0;

next.addEventListener("click", ()=>{
    i++;
    if(i>photos.length-1){
        i=0;
    }
    document.querySelector("#photo").src=photos[i];
})

back.addEventListener("click", ()=>{
    i--;
    if(i<0){
        i=photos.length-1;
    }
    document.querySelector("#photo").src=photos[i];
})