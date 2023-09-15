(function(){
  function executeScript() {
    try {
      const scriptCode = document.getElementById("xe-script-input").value;
      const result = eval(scriptCode);
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

  executeButton.addEventListener("click", executeScript);

  container.appendChild(input);
  container.appendChild(executeButton);

  document.body.appendChild(container);
})();
