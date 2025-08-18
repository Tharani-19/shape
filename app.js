
function shape(){
    let radioButtons=document.getElementsByName('shape');
    for(let i=0;i<radioButtons.length;i++){
        if(radioButtons[i].checked){
            return radioButtons[i].value;
        }
    }
    return null;
}
let num=1;
function shapes() {
    const selectedShape = shape();
    let body=document.querySelector(".print");
    let place=document.querySelector(".shape");
    let loop = parseInt(document.getElementById("number").value, 10);
    console.log(place);
    for(let i=0;i<loop;i++){
        if(selectedShape==="Circle"){
            let circle = document.createElement('div');
            circle.className="out";
            circle.setAttribute("style","height: 50px; width: 50px;background-color:darkgoldenrod; border-radius: 100%;"); 
            let content=document.createTextNode(num);
            circle.appendChild(content);
            body.insertBefore(circle,place);
        }
        else  if(selectedShape==="Square"){
            let square = document.createElement('div');
            square.className="out";
            square.setAttribute("style","height: 50px; width: 50px;  background-color:darkseagreen;"); 
            let content=document.createTextNode(num);
            square.appendChild(content);
            body.insertBefore(square, place);
        }
        else if(selectedShape==="Rectangle"){
            let rect = document.createElement('div');
            rect.className="out";
            rect.setAttribute("style","height: 50px; width: 75px;  background-color:limegreen; "); 
            let content=document.createTextNode(num);
            rect.appendChild(content);
            body.insertBefore(rect, place);
        }
        num++;
    }
}