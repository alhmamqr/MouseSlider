const container =document.querySelector(".container");

const cards=document.querySelector(".cards");



let ispressdown=false;


// x horzizintal space of courser

let cursorXspace;


container.addEventListener("mousedown",(e)=>{
ispressdown=true;
// console.log("e.offsetx",e.offsetX);
// console.log("cards.offsetLeft",cards.offsetLeft)
cursorXspace = e.offsetX - cards.offsetLeft;
// console.log("cursorXspace",cursorXspace)
container.style.cursor="grabbing";

})
window.addEventListener("mouseup",()=>{
    container.style.cursor="grab";
})
window.addEventListener("mouseup",()=>{
    ispressdown=false;
})
container.addEventListener("mousemove",(e)=>{
    if(!ispressdown)return
    e.preventDefault();
   cards.style.left=`${e.offsetX - cursorXspace}px`
   boundCards()
 })

function boundCards(){
    const container_rect=container.getBoundingClientRect();
    const cards_rect=cards.getBoundingClientRect();



    if(parseInt(cards.style.left) > 0){
        cards.style.left=0;
    }else if(cards_rect.right < container_rect.right){
        cards.style.left=`-${cards_rect.width - container_rect.width}px` 
    }
    // console.log("cards_rect",cards_rect)
    // console.log("cards.style.left",cards.style.left)
    // console.log("container_rect",container_rect)
    // console.log("container.style.left",container.style.left)
}
