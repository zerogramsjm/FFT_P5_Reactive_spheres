
// - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - 

var system;
var mic, fft;

var x;
var y;

var i;

var sound, sound1, sound2, sound3;

var bar, bar1, bar2, bar3;

var mouseVec;

function setup(){
  createCanvas(710, 400, WEBGL);

  camera(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 
       0.0, 0.0, 0.0);

	var x = 0;
	var y = 0;

  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

// - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - 

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

    sound = 1;
    
    sound1 = 21;
    
    sound2 = 41;
    
    sound3 = 65;

// - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - 

function draw() {

  orbitControl();

  var spectrum = fft.analyze();

  for (var i = 0; i < sound; i++) {

    for (var i1 = 20; i1 < sound1; i1++) {

      for (var i2 = 40; i2 < sound2; i2++) {

        for (var i3 = 64; i3 < sound3; i3++) {

  // - - - - - - - - - - - - - 

          var bar = spectrum[i] /50; 

          var bar1 = spectrum[i1] /100;

          var bar2 = spectrum[i2] /550;

          var bar3 = spectrum[i3] /1000;

           ambientLight(50);

  directionalLight(bar  * 800, 
                   bar1 * 800, 
                   bar2 * 800, 0.50, 0.50, 0.50);
  pointLight(frameCount * 20, 0, 200, 0, 0, 0);
  pointLight(200, 200, 0, 0, 0, 0);

  for(var j = 0; j < 10; j++){
    push();
    for(var i = 0; i < 30; i++){
      translate(
        sin(bar  * 5),
        sin(bar1 * 5),
        i * bar2 * 5);

      rotateZ(sin(150 * bar3 / 350));
      rotateY(sin(150 * bar2 / 250));
      rotateX(sin(150 * bar1 / 150));
      push();

      specularMaterial(175);

      sphere(
          20, 
          20, 
          20); 
      pop();
    }
    pop();
  }
}

        }

      }

    }

  }
