<!DOCTYPE html>
<html>
  <head>
    <title>Calculator</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div class="container">
      <div class="calculator">
        <input type="text" placeholder="0">
        <button onclick="clear()">CL</button>
        <button onclick="del()">DEL</button>
        <button onclick="display(%)">%</button>
        <button onclick="display(/)">/</button>
        <button onclick="display(7)">7</button>
        <button onclick="display(8)">8</button>
        <button onclick="display(9)">9</button>
        <button onclick="display(*)">*</button>
        <button onclick="display(4)">4</button>
        <button onclick="display(5)">5</button>
        <button onclick="display(6)">6</button>
        <button onclick="display(-)">-</button>
        <button onclick="display(1)">1</button>
        <button onclick="display(2)">2</button>
        <button onclick="display(3)">3</button>
        <button onclick="display(+)">+</button>
        <button onclick="display(.)">.</button>
        <button onclick="display(0)">0</button>
        <button onclick="Calculate()">=</button>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
