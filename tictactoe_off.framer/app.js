var bg, checkVictory, circle, cross, scaleFactor, startButton, startNewGame;

Framer.Info = {
  title: "",
  author: "Андрей Максимов",
  twitter: "",
  description: ""
};

cross = "<svg width=\"112px\" height=\"112px\" viewBox=\"151 190 112 112\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"cross\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(151.000000, 190.000000)\">\n        <rect id=\"Rectangle-Copy\" fill=\"#EEEEEE\" opacity=\"0\" x=\"0\" y=\"0\" width=\"112\" height=\"112\"></rect>\n        <polygon fill=\"#9EE493\" points=\"63.4974747 56.4264069 102.388348 17.5355339 95.3172798 10.4644661 56.4264069 49.3553391 17.5355339 10.4644661 10.4644661 17.5355339 49.3553391 56.4264069 10.4644661 95.3172798 17.5355339 102.388348 56.4264069 63.4974747 94.6101731 101.681241 101.681241 94.6101731\"></polygon>\n    </g>\n</svg>";

circle = "<svg width=\"112px\" height=\"112px\" viewBox=\"31 190 112 112\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"circle\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(31.000000, 190.000000)\">\n        <rect id=\"Rectangle\" fill=\"#FFF\" opacity=\"0\" x=\"0\" y=\"0\" width=\"112\" height=\"112\"></rect>\n        <path d=\"M56,106 C83.6142375,106 106,83.6142375 106,56 C106,28.3857625 83.6142375,6 56,6 C28.3857625,6 6,28.3857625 6,56 C6,83.6142375 28.3857625,106 56,106 Z M56,96 C78.09139,96 96,78.09139 96,56 C96,33.90861 78.09139,16 56,16 C33.90861,16 16,33.90861 16,56 C16,78.09139 33.90861,96 56,96 Z\" fill=\"#86BBD8\"></path>\n    </g>\n</svg>";

if (Utils.isDesktop()) {
  scaleFactor = 1;
} else {
  scaleFactor = 3;
}

bg = new BackgroundLayer({
  backgroundColor: "#2F4858"
});

startButton = new Layer;

startNewGame = function() {
  var board, buttons, cell, i, indexX, indexY, j, k, l, layer, len, m, matrix, results;
  buttons = [];
  i = 1;
  m = 0;
  matrix = [];
  board = new Layer({
    x: Align.center,
    y: Align.center,
    width: (114 * 3 - 2) * scaleFactor,
    height: (114 * 3 - 2) * scaleFactor,
    backgroundColor: "rgba(255,255,255,0.10)"
  });
  for (indexY = j = 0; j <= 2; indexY = ++j) {
    for (indexX = k = 0; k <= 2; indexX = ++k) {
      cell = new Layer({
        x: indexX * 114 * scaleFactor,
        y: indexY * 114 * scaleFactor,
        size: 112 * scaleFactor,
        backgroundColor: "#2F4858",
        opacity: 1,
        parent: board,
        name: m,
        html: " "
      });
      buttons.push(cell);
      matrix.push(" ");
      m++;
    }
  }
  results = [];
  for (l = 0, len = buttons.length; l < len; l++) {
    layer = buttons[l];
    results.push(layer.onClick(function() {
      i++;
      if (this.html === " ") {
        if ((i % 2) === 0) {
          matrix[this.name] = "1";
          buttons[this.name].html = cross;
          print(matrix);
          if (checkVictory("1", matrix)) {
            return board.destroy();
          }
        } else if ((i % 2) === 1) {
          matrix[this.name] = "0";
          buttons[this.name].html = circle;
          print(matrix);
          if (checkVictory("0", matrix)) {
            return board.destroy();
          }
        }
      }
    }));
  }
  return results;
};

checkVictory = function(XO, matrix) {
  if (matrix[0] === XO && matrix[1] === XO && matrix[2] === XO) {
    return true;
  }
  if (matrix[3] === XO && matrix[4] === XO && matrix[5] === XO) {
    return true;
  }
  if (matrix[6] === XO && matrix[7] === XO && matrix[8] === XO) {
    return true;
  }
  if (matrix[0] === XO && matrix[3] === XO && matrix[6] === XO) {
    return true;
  }
  if (matrix[1] === XO && matrix[4] === XO && matrix[7] === XO) {
    return true;
  }
  if (matrix[2] === XO && matrix[5] === XO && matrix[8] === XO) {
    return true;
  }
  if (matrix[0] === XO && matrix[4] === XO && matrix[8] === XO) {
    return true;
  }
  if (matrix[6] === XO && matrix[4] === XO && matrix[2] === XO) {
    return true;
  }
};

startButton.onClick(function() {
  return startNewGame();
});
