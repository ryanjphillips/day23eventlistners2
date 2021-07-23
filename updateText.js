function updateText(){
    const headingNode = document.querySelector("h1");
    const headingNodeTwo = document.getElementById("second-head");


    document.body.addEventListener('keypress', e => {
      const keyStroke = e.code;

      headingNode.textContent = "You Pressed:";
      headingNodeTwo.textContent = e.keyCode;
      headingNodeTwo.style.color = "green";
      headingNodeTwo.style.fontSize = "50px"

      if(keyStroke.match(/Key/gi) || keyStroke.match(/Digit/gi)){
        
        headingNode.textContent += ` ${keyStroke[keyStroke.length - 1]}` ;
    
      }else{
        headingNode.textContent += ` ${keyStroke}`;
      }

    })

}