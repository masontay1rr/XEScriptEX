javascript:(function () {
  function executeScript() {
    try {
      const scriptCode = document.getElementById("xe-script-input").value;
      const result = eval(scriptCode);
      outputConsole(`Script executed successfully: ${result}`);
    } catch (error) {
      outputConsole(`Error executing script: ${error.message}`);
    }
  }

  function outputConsole(message) {
    const consoleOutput = document.getElementById("xe-script-console");
    const outputText = document.createElement("div");
    outputText.textContent = message;
    consoleOutput.appendChild(outputText);
  }

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "0";
  container.style.left = "0";
  container.style.right = "0";
  container.style.backgroundColor = "black";
  container.style.color = "green";
  container.style.borderTop = "2px solid green";
  container.style.padding = "10px";
  container.style.zIndex = "9999";

  const input = document.createElement("textarea");
  input.id = "xe-script-input";
  input.style.width = "100%";
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

  const consoleOutput = document.createElement("div");
  consoleOutput.id = "xe-script-console";
  consoleOutput.style.height = "150px";
  consoleOutput.style.overflowY = "auto";
  consoleOutput.style.marginTop = "10px";
  consoleOutput.style.borderTop = "1px solid green";

  container.appendChild(input);
  container.appendChild(executeButton);
  container.appendChild(consoleOutput);

  document.body.appendChild(container);
})();
