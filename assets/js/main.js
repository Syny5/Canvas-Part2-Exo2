function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    //Courbe haut de la soucoupe volante
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.quadraticCurveTo(200, 120, 300, 200);
    ctx.fillStyle = '#e0e1f3';
    ctx.fill();
    // Courbe bas de la soucoupe volante
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.quadraticCurveTo(200, 270, 300, 200);
    ctx.fillStyle = '#e0e1f3';
    ctx.fill();
    // Capsule fenêtre blanche
    ctx.beginPath();
    ctx.moveTo(160, 166);
    ctx.quadraticCurveTo(200, 100, 240, 166);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}
