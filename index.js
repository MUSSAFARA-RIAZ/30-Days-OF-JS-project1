function Func() {
    let mainDiv = document.createElement('div')
    let a = document.getElementById("text").value;
    let parentelement = document.createElement('div');
    parentelement.id="childdiv";
    let btn = document.createElement("button");
    btn.id = "mybutton";
   let btntext = document.createTextNode("DELETE");
    btn.appendChild(btntext);
    parentelement.appendChild(btn);
    btn.style.display = 'inline';
    let element = document.createElement('li');
    element.id = "e1";
    let elementtxt = document.createTextNode(a);
    parentelement.style.padding = "10px";
    element.appendChild(elementtxt);
    parentelement.appendChild(element);
    element.style.display = 'inline';
    mainDiv.appendChild(parentelement)
    document.body.appendChild(mainDiv);
    btn.onclick = function () {
        
        mainDiv.removeChild(parentelement);
    }
    document.getElementById("text").value = "";

}
