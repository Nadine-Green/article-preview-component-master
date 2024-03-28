function tip() {

let share = document.querySelector(".div");
//share.style.position = "relative";

let facebook = "images/icon-facebook.svg";
let twitter = "images/icon-twitter.svg";
let pinterest = "images/icon-pinterest.svg";


let paragraphBox = document.createElement("div");
/*paragraphBox.style.width = "13rem";
paragraphBox.style.height = "3rem";
paragraphBox.style.borderRadius = ".7rem";
//paragraphBox.style.overFlow = "hidden";
paragraphBox.style.backgroundColor = "red";
paragraphBox.style.position = "absolute";
paragraphBox.style.bottom = "3rem";
paragraphBox.style.left = "-6rem";*/
//paragraphBox.style.display = "flex";
paragraphBox.setAttribute("id", "flex")
let paragraph = document.createElement("p");

/*
paragraph.style.width = "100%";
paragraph.style.height = "100%";
paragraph.style.borderRadius = ".7rem";
//paragraph.style.overFlow = "hidden";

paragraph.style.display = "flex";
paragraph.style.justifyContent = "space-around";
paragraph.style.alignItems = "center";
paragraph.style.color =  "white";
paragraph.style.padding = "1rem";
paragraph.style.fontWeight = "100";
paragraph.style.textTransform = "uppercase";
paragraph.style.fontSize = "10px";

paragraph.style.letterSpacing = ".5rem";
*/
paragraph.textContent = "Share ";
paragraph.innerHTML+= `<img src = "${facebook}" alt="facebook" style="width:1.5rem; height:1.5rem; class="social";"/>`;
paragraph.innerHTML+= `<img src = "${twitter}" alt="twitter" style="width:1.5rem; height:1.5rem; class="social";"/>`;
paragraph.innerHTML+= `<img src = "${pinterest}" alt= "pinterest" style="width:1.5rem; height:1.5rem; class="social";"/>`;
//paragraph.style.position = "absolute";
//paragraph.style.backgroundColor = "hsl(217, 19%, 35%)";BACKGROUND-COLOR PARAGRAPH
//paragraph.style.bottom = "7rem";
paragraph.setAttribute("id", "paragraph");
paragraphBox.append(paragraph);

let arrow = document.createElement("p");
arrow.style.position = "absolute";
arrow.style.backgroundColor = "hsl(217, 19%, 35%)";
arrow.style.width = "1rem";
arrow.style.height = "1rem";
arrow.style.bottom = "-.5rem";
arrow.style.rotate = "45deg";
arrow.style.left = "6.5rem";
arrow.setAttribute("id", "arrow");
paragraphBox.append(arrow);
share.append(paragraphBox);
share.style.cursor = "pointer";

share.addEventListener("mouseleave", function(){
    //let paragraph= document.getElementById("paragraph");
    //let arrow= document.getElementById("arrow");
    let paragraphBox= document.getElementById("flex");
    if (/*paragraph && arrow*/ paragraphBox) {
        //share.removeChild(paragraph);
        //share.removeChild(arrow);
        share.removeChild(paragraphBox);
    }
}, false);

}

let share = document.querySelector(".div");

share.addEventListener("mouseenter", tip, false);
/*
//NEW FUNCTION//

function tip1(){
    let paragraphBox = document.getElementById("flex");
    let paragraph = document.getElementById("paragraph");
    let arrow = document.getElementById("arrow");
    share.style.backgroundColor = "yellow";
    paragraphBox.style.bottom = "-1rem";
    paragraphBox.style.left = "-20rem";
    paragraphBox.style.width = "25rem";
    paragraphBox.style.backgroundColor= "transparent";
    paragraph.style.width = "80%";
    paragraphBox.removeChild(arrow);
    //paragraphBox.style.zIndex = 1;
  }

  //share.style.backgroundColor = "yellow";
  //paragraphBox.style.backgroundColor= "red";
if(windowWidth <= 400){
    share.addEventListener("mouseenter", tip1, false);
 }   


*/

