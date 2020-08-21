let outputImage;

const imgSize = 512; //our image will be 512x512 pixels, which is what StyleGAN requires
const sliderTop = 512;
const sliderHeight = 200;
const sliderBottom = sliderTop + sliderHeight;

let count = 0;

let aIndex = 0;

let sliderWidth = 1;
let bWasMovingSlider = false;
let prevSliderIndex = 0;
let prevSliderValue = 0;

let bDraggingSlider = false;

let bWaiting = false;


let serverState = "";

let a = new Array(512);
a.fill(0.0, 0);


let randomButton, zeroButton, minButton, maxButton, perlinButton;

function setup() {
  createCanvas(windowWidth, windowHeight);

  getServerState();
  
  generateImage();
  getServerState();
  outputImage = createImg("", "");
  outputImage.hide();

  sliderWidth = windowWidth / float(imgSize);


  let x = 600;

  let y = 120;
  let margin = 20;

  randomButton  = createButton('Random');
  randomButton.position( x, y);
  randomButton.mousePressed(randomButtonPressed);
  
  y += randomButton.height + margin;

  zeroButton  = createButton('Zero');
  zeroButton.position( x, y);
  zeroButton.mousePressed(zeroButtonPressed);
  y += zeroButton.height + margin;
  
  minButton  = createButton('Min');
  minButton.position( x, y);
  minButton.mousePressed(minButtonPressed);
  y += minButton.height + margin;
  
  maxButton  = createButton('Max');
  maxButton.position( x, y);
  maxButton.mousePressed(maxButtonPressed);
  y += maxButton.height + margin;
  
  perlinButton  = createButton('Perlin Noise');
  perlinButton.position( x, y);
  perlinButton.mousePressed(perlinButtonPressed);

  noiseDetail(5, 0.35);




}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  sliderWidth = windowWidth / float(imgSize);
}

function getServerState()
{
  fetch(
    "https://stylegan2mixingconsole.hosted-models.runwayml.cloud/v1",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer jpW7NsVDGkxeDaTGwrvoHg==",
        "Content-Type": "application/json"
      }
    }
  )
  .then(response => response.json())
  .then(myJson => {
    serverState = myJson.status;
    
    // console.log("serverState: " + serverState);
  });
    
}


function setSliderIndex() {
  if (
    mouseY > sliderTop &&
    mouseY < sliderBottom &&
    mouseX >= 0 &&
    mouseX < width
  ) {
    bDraggingSlider = true;
    aIndex = int(mouseX / sliderWidth);
    if (aIndex < 0) aIndex = 0;
    if (aIndex >= 512) aIndex = 511;
    setSelectedSlider();
  }
}

function setSelectedSlider() {
  if (bDraggingSlider) {
    a[aIndex] = map(mouseY, sliderTop, sliderBottom, 1, -1, true);

    if (
      bWasMovingSlider &&
      prevSliderIndex >= 0 &&
      aIndex >= 0 &&
      prevSliderIndex != aIndex
    ) {
      let minInd = min(prevSliderIndex, aIndex);
      let maxInd = max(prevSliderIndex, aIndex);

      // console.log("minInd: " + minInd + "  maxInd: " + maxInd);

      for (let i = minInd; i < maxInd; i++) {
        a[i] = map(i, minInd, maxInd, prevSliderValue, a[aIndex], true);
      }
    }
    bWasMovingSlider = true;
    prevSliderIndex = aIndex;
    prevSliderValue = a[aIndex];
    // generateImage();
  }
}

function mouseDragged() {
  setSliderIndex();
}

function mouseReleased() {
  if(bDraggingSlider)
  {
    generateImage();
  }
  bDraggingSlider = false;
  bWasMovingSlider = false;
  
  
  
}

function mousePressed() {
  setSliderIndex();
}

function generateImage() {
  // if(bWaiting == false)
  //   {
  const data = {
    z: a, //generated latent space vector
    truncation: 0.5 //variation in image generations - higher is more random, lower is more similar
  };

  //// You can use the info() method to see what type of input object the model expects
  // model.info().then(info => console.log(info));
  bWaiting = true;
  fetch(
    "https://stylegan2mixingconsole.hosted-models.runwayml.cloud/v1/query",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer jpW7NsVDGkxeDaTGwrvoHg==",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  )
    .then(response => response.json())
    .then(outputs => {
      //  const { image } = outputs;
      // use the outputs in your project
      //  console.log(outputs);
      outputImage.attribute("src", outputs.image);
      bWaiting = false;
//      console.log("got image");
      //imageReady();
      // use the outputs in your project
    })
  .catch(function(error) {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
    // }
}

function draw() {
  
  if(frameCount%30 == 0)
    {
      getServerState();
    }
  
  background(255);
  image(outputImage, 0, 0, 512, 512);
    
    let bMouseOverSliders = mouseY < sliderBottom && mouseY >= sliderTop && mouseX >=0 && mouseX < imgSize*sliderWidth;
  for (let i = 0; i < imgSize; i++) {
      
      noStroke();
      fill(240);
    rect(i * sliderWidth, sliderTop, sliderWidth, sliderHeight);
      
      
    let y = map(a[i], 1, -1, sliderTop, sliderBottom);
    if((bMouseOverSliders && mouseX >=i*sliderWidth && mouseX < (i + 1)*sliderWidth ) || (i == aIndex))
    {
        stroke(70);   
    }
    else
    {
        noStroke();
    }
      
    if (i == aIndex) {
      fill(255, 255, 0);
    } else {
      fill(200);
    }
    rect(i * sliderWidth, y, sliderWidth, sliderBottom - y);
    
      
  }

  noStroke();
  fill(200);

  let txt = "Waiting for response: " + ((bWaiting===true)?"YES":"NO");
  txt += "\nServer state: " + serverState;
  txt += "\n\n Use the following buttons to set/reset the sliders into some default values.";
//    txt+= "\nMouseY: " + mouseY;
    
//   let txt = "count: " + count;
//   txt += "\naIndex: " + aIndex;
//   txt += "\na[aIndex]: " + a[aIndex];

//   txt += "\nbDraggingSlider: " + bDraggingSlider;
//   txt += "\nprevSliderIndex: " + prevSliderIndex;

  text(txt, 600, 40);



}


function randomButtonPressed()
{
  for (let i = 0; i < imgSize; i++) {
    a[i] = random(-1, 1);
  }
   generateImage();
}
function zeroButtonPressed()
{
  a.fill(0.0, 0);
  generateImage();
}
function minButtonPressed()
{
  a.fill(-1.0, 0);
  generateImage();

}
function maxButtonPressed()
{
  a.fill(1.0, 0);
  generateImage();

}
function perlinButtonPressed()
{
  let inc = 0.09;
  for (let i = 0; i < imgSize; i++) {
    a[i] = 2 * noise(inc * i) - 1;
  }
  generateImage();
}












