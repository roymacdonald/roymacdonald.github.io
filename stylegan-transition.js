let outputImage;

const imgSize = 512; //our image will be 512x512 pixels, which is what StyleGAN requires
const sliderTop = 512;
const sliderHeight = 500;
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

function setup() {
  createCanvas(windowWidth, windowHeight);

  getServerState();
  
  generateImage();
  getServerState();
  outputImage = createImg("", "");
  outputImage.hide();

  sliderWidth = windowWidth / float(imgSize);
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
      console.log("got image");
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
  let prevY;

  for (let i = 0; i < imgSize; i++) {
    //loop through all pixels, and select the corresponding value for the vector with the randomness generated from our Noise Loop function
    let y = map(a[i], 1, -1, sliderTop, sliderBottom);
    if (i == aIndex) {
      stroke(70);
      fill(255, 255, 0);
    } else {
      noStroke();
      fill(200);
    }
    rect(i * sliderWidth, y, sliderWidth, sliderBottom - y);
  }

  noStroke();
  fill(200);

  let txt = "Waiting for response: " + ((bWaiting===true)?"YES":"NO");
  txt += "\nServer state: " + serverState;
//   let txt = "count: " + count;
//   txt += "\naIndex: " + aIndex;
//   txt += "\na[aIndex]: " + a[aIndex];

//   txt += "\nbDraggingSlider: " + bDraggingSlider;
//   txt += "\nprevSliderIndex: " + prevSliderIndex;

  text(txt, 600, 40);
}

// function keyPressed() {
//  getServerState();
// }
//function imageReady() { //saves the image
//
//
//  count++;
////  generateImage();
//}
//
