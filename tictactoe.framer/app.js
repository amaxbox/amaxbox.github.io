var Firebase, bg, board, buttons, cell, circle, cross, i, indexX, indexY, l, m, matrix, matrix_receive, tictacDB;

Framer.Info = {
  title: "",
  author: "Андрей Максимов",
  twitter: "",
  description: ""
};

buttons = [];

i = 0;

cross = "<svg width=\"112px\" height=\"112px\" viewBox=\"151 190 112 112\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"cross\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(151.000000, 190.000000)\">\n        <rect id=\"Rectangle-Copy\" fill=\"#EEEEEE\" opacity=\"0\" x=\"0\" y=\"0\" width=\"112\" height=\"112\"></rect>\n        <polygon fill=\"#9EE493\" points=\"63.4974747 56.4264069 102.388348 17.5355339 95.3172798 10.4644661 56.4264069 49.3553391 17.5355339 10.4644661 10.4644661 17.5355339 49.3553391 56.4264069 10.4644661 95.3172798 17.5355339 102.388348 56.4264069 63.4974747 94.6101731 101.681241 101.681241 94.6101731\"></polygon>\n    </g>\n</svg>";

circle = "<svg width=\"112px\" height=\"112px\" viewBox=\"31 190 112 112\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"circle\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(31.000000, 190.000000)\">\n        <rect id=\"Rectangle\" fill=\"#FFF\" opacity=\"0\" x=\"0\" y=\"0\" width=\"112\" height=\"112\"></rect>\n        <path d=\"M56,106 C83.6142375,106 106,83.6142375 106,56 C106,28.3857625 83.6142375,6 56,6 C28.3857625,6 6,28.3857625 6,56 C6,83.6142375 28.3857625,106 56,106 Z M56,96 C78.09139,96 96,78.09139 96,56 C96,33.90861 78.09139,16 56,16 C33.90861,16 16,33.90861 16,56 C16,78.09139 33.90861,96 56,96 Z\" fill=\"#86BBD8\"></path>\n    </g>\n</svg>";

bg = new BackgroundLayer({
  backgroundColor: "#2F4858"
});

matrix = [];

matrix_receive = [];

Firebase = require('firebase').Firebase;

tictacDB = new Firebase({
  projectID: "tictactoe-b9a3e",
  secret: "s13WpAEb3SVrSO5e3DCuWgA9OHma6CoRwfGULdhm"
});

board = new Layer({
  x: Align.center,
  y: Align.center,
  rotationX: 45,
  width: 114 * 3 - 2,
  height: 114 * 3 - 2,
  backgroundColor: "rgba(255,255,255,0.10)"
});

for (indexY = l = 0; l <= 2; indexY = ++l) {
  for (indexX = m = 0; m <= 2; indexX = ++m) {
    cell = new Layer({
      x: indexX * 114,
      y: indexY * 114,
      size: 112,
      backgroundColor: "#2F4858",
      opacity: 1,
      parent: board,
      html: " "
    });
    buttons.push(cell);
    matrix.push(" ");
  }
}

tictacDB.put("/matrix", matrix);

tictacDB.put("/index", i);

tictacDB.get("/matrix", function(matrix_receive) {
  var j, n, ref, results;
  results = [];
  for (j = n = 0, ref = matrix.length; 0 <= ref ? n < ref : n > ref; j = 0 <= ref ? ++n : --n) {
    if (matrix_receive[j] === "0") {
      results.push(buttons[j].html = circle);
    } else if (matrix_receive[j] === "1") {
      results.push(buttons[j].html = cross);
    } else {
      results.push(void 0);
    }
  }
  return results;
});

tictacDB.get("/index", function(k) {
  var layer, len, n, results;
  results = [];
  for (n = 0, len = buttons.length; n < len; n++) {
    layer = buttons[n];
    results.push(layer.onClick(function() {
      var actual_layer, actual_layer_id;
      actual_layer = this.html;
      actual_layer_id = this.id - 3;
      if (actual_layer === " ") {
        if ((k % 2) === 0) {
          matrix[actual_layer_id] = "1";
          tictacDB.put("/matrix", matrix);
          k++;
        } else {
          matrix[actual_layer_id] = "0";
          tictacDB.put("/matrix", matrix);
          k++;
        }
        tictacDB.put("/index", k);
        print(matrix);
        return print(k);
      }
    }));
  }
  return results;
});

tictacDB.onChange("/index", function(k) {
  return tictacDB.get("/matrix", function(matrix_receive) {
    var j, n, ref, results;
    results = [];
    for (j = n = 0, ref = matrix.length; 0 <= ref ? n < ref : n > ref; j = 0 <= ref ? ++n : --n) {
      if (matrix_receive[j] === "0") {
        results.push(buttons[j].html = circle);
      } else if (matrix_receive[j] === "1") {
        results.push(buttons[j].html = cross);
      } else {
        results.push(void 0);
      }
    }
    return results;
  });
});
