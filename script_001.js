window.addEventListener('load', () => {
  console.log('1つ目のonloadイベント');
  // canvasエレメントを取得
  var c = document.getElementById('canvas-001');
  c.width = 500;
  c.height = 300;

  // webglコンテキストを取得
  var gl = c.getContext('webgl') || c.getContext('experimental-webgl');

  // canvasを黒でクリア(初期化)する
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
});
