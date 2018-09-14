function main()  {
  VF = Vex.Flow
  var div = document.getElementById("main");
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(500, 500)
  var context = renderer.getContext();

  var stave = new VF.Stave(10, 40, 400);
  stave.addClef("treble").addTimeSignature("4/4");
  stave.setContext(context).draw();
}

document.addEventListener("DOMContentLoaded", main);

