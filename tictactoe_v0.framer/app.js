var Button, bg, board, circle, cross, dpr, drawBoard, drawMatrix, drawO, drawX, gameMatrix, turn;

Framer.Info = {
  title: "",
  author: "Андрей Максимов",
  twitter: "",
  description: ""
};

dpr = require('DevicePixelRatio').dpr;

Button = require('Button').Button;

cross = "<svg width=\"dpr 112\" height=\"dpr 112\" viewBox=\"151 190 112 112\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"cross\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(151.000000, 190.000000)\">\n        <rect id=\"Rectangle-Copy\" fill=\"#EEEEEE\" opacity=\"0\" x=\"0\" y=\"0\" width=\"112\" height=\"112\"></rect>\n        <polygon fill=\"#9EE493\" points=\"63.4974747 56.4264069 102.388348 17.5355339 95.3172798 10.4644661 56.4264069 49.3553391 17.5355339 10.4644661 10.4644661 17.5355339 49.3553391 56.4264069 10.4644661 95.3172798 17.5355339 102.388348 56.4264069 63.4974747 94.6101731 101.681241 101.681241 94.6101731\"></polygon>\n    </g>\n</svg>";

circle = "<svg width=\"dpr 112\" height=\"dpr 112\" viewBox=\"31 190 112 112\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"circle\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(31.000000, 190.000000)\">\n        <rect id=\"Rectangle\" fill=\"#FFF\" opacity=\"0\" x=\"0\" y=\"0\" width=\"112\" height=\"112\"></rect>\n        <path d=\"M56,106 C83.6142375,106 106,83.6142375 106,56 C106,28.3857625 83.6142375,6 56,6 C28.3857625,6 6,28.3857625 6,56 C6,83.6142375 28.3857625,106 56,106 Z M56,96 C78.09139,96 96,78.09139 96,56 C96,33.90861 78.09139,16 56,16 C33.90861,16 16,33.90861 16,56 C16,78.09139 33.90861,96 56,96 Z\" fill=\"#86BBD8\"></path>\n    </g>\n</svg>";

bg = new BackgroundLayer({
  backgroundColor: "#2F4858"
});

drawBoard = function(numCell, sizeCell, gameMatrix) {
  var board, boardArray, boardCell, i, j, k, l, ref, ref1;
  boardArray = [];
  board = new Layer({
    size: dpr(numCell * sizeCell + 2 * sizeCell / 20),
    backgroundColor: "rgba(255,255,255,0.10)"
  });
  board.center();
  for (i = k = 0, ref = numCell - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
    for (j = l = 0, ref1 = numCell - 1; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
      boardCell = new Layer({
        width: dpr(sizeCell),
        height: dpr(sizeCell),
        x: dpr((sizeCell + sizeCell / 20) * j),
        y: dpr((sizeCell + sizeCell / 20) * i),
        parent: board,
        backgroundColor: "#2F4858"
      });
      boardArray.push(boardCell);
      gameMatrix.push("");
    }
  }
  return boardArray;
};

drawX = function(boardCell) {
  return boardCell.html = cross;
};

drawO = function(boardCell) {
  return boardCell.html = circle;
};

drawMatrix = function(board, matrix) {
  var i, k, len, results, sign;
  results = [];
  for (i = k = 0, len = matrix.length; k < len; i = ++k) {
    sign = matrix[i];
    if (sign === "0") {
      drawO(board[i]);
    }
    if (sign === "1") {
      results.push(drawX(board[i]));
    } else {
      results.push(void 0);
    }
  }
  return results;
};

gameMatrix = [];

turn = 0;

board = drawBoard(3, 100, gameMatrix);
