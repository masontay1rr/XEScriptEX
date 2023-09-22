javascript:(function(){
function executeScript() {
  try {
    const scriptCode = document.getElementById("xe-script-input").value;
    
    if (scriptCode === "Script1") {
      // Predefined script 1
      console.log("Executing Predefined Script 1");
      // Add your script logic here
      for(Q=64,m=b=Q*Q,a=[P=l=u=d=p=S=w=0],u=89,f=(h=j=t=(b+Q)/2)-1,(B=(D=document).body).appendChild(x=D.createElement('p')),(X=x.style).position='fixed',X.left=X.top=0,X.background='#FFF',x.innerHTML='%3Cp%3E%3C/p%3E%3Ccanvas%3E',v=(s=x.childNodes)[0],(s=s[1]).width=s.height=Q*5,c=s.getContext('2d'),onkeydown=onblur=F=function(e,z){z?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+(f/R|0)*2,z)):F(f):e%3C0?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=.8)/4,m=999/(u+++10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert('Game%20Over')):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):'Press%20P')):-e?(y=(a[e]=e%3CQ|e%3E=Q*Q-Q|!(e%Q)|e%Q==Q-1|(e==h)*2)+(e==f),e==h&&(a[j]=2+h),c.fillStyle='hsl('+!a[e]*99+','+m*2+'%,'+y*50+'%)',c.fillRect(e%Q*5,(e/Q|0)*5,5,5)):isNaN(y=e.keyCode-37)|y==43?(P=y&&!P)&&F(-1):p=!P|y&-4|!(y^2^d)?p:y;return!1};--b;F(b));void%20F(-1)

    } else if (scriptCode === "Script2") {
      // Predefined script 2
      console.log("Executing Predefined Script 2");
      // Add your script logic here
      (function(){var elems=document.getElementsByTagName("*");for(var i = 0; i<elems.length;i++){elems[i].style.fontFamily="Comic Sans MS";elems[i].style.fontSize=Math.random()*75+"px";elems[i].style.color='#'+Math.random().toString(16).slice(2,%208);elems[i].style.backgroundColor='#'+Math.random().toString(16).slice(2,8)}})();document.onclick=function(){(function(){var%20d=0;setInterval(function(){document.body.style['-webkit-transform']=%20'rotate('+%20d%20+'deg)';d+=1},100)}());};
    } else if (scriptCode === "Script3") {
      // Predefined script 3
      console.log("Executing Predefined Script 3");
      // Add your script logic here
    } else {
      console.log("Script not found.");
    }
  } catch (error) {
    console.log("Error executing script: " + error.message);
  }
}


  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "20px";
  container.style.right = "20px";
  container.style.backgroundColor = "black";
  container.style.color = "green";
  container.style.border = "2px solid green";
  container.style.padding = "10px";
  container.style.borderRadius = "10px";
  container.style.zIndex = "9999";

  const input = document.createElement("textarea");
  input.id = "xe-script-input";
  input.style.width = "200px";
  input.style.height = "100px";
  input.placeholder = "Enter your script here...";

  const executeButton = document.createElement("button");
  executeButton.textContent = "Execute";
  executeButton.style.backgroundColor = "green";
  executeButton.style.color = "black";
  executeButton.style.border = "none";
  executeButton.style.padding = "5px 10px";
  executeButton.style.marginTop = "5px";
  executeButton.style.cursor = "pointer";

  const scriptSelect = document.createElement("select");
scriptSelect.id = "xe-script-select";

const option1 = document.createElement("option");
option1.value = "Script1";
option1.text = "Snake";

const option2 = document.createElement("option");
option2.value = "Script2";
option2.text = "Ugly";

const option3 = document.createElement("option");
option3.value = "Script3";
option3.text = "Script 3";

scriptSelect.appendChild(option1);
scriptSelect.appendChild(option2);
scriptSelect.appendChild(option3);

container.appendChild(scriptSelect);

  executeButton.addEventListener("click", executeScript);

  container.appendChild(input);
  container.appendChild(executeButton);

  document.body.appendChild(container);
})();
