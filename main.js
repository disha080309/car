canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=50;
rover_y=90;


rover_image="https://cdn2.vectorstock.com/i/1000x1000/13/56/green-car-icon-top-view-vector-25701356.jpg";
mars_image_array=["bg1.jpg","bg2.jpg","bg5.jpg","mars.jpg"];
random_number=Math.floor(Math.random()*4);
background_image=mars_image_array[random_number];

function add(){
    console.log("disha");
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;
    

    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
   
}


function uploadBackground(){
    console.log("hello");
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    console.log("hi");
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
}

function up (){
  if(rover_y >0){
      rover_y=rover_y-10;
      uploadBackground();
      uploadrover();


  } 

}
function down (){
    if(rover_y <500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadrover();
        
  
    } 
  }
  function left (){
    if(rover_x > 0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
        
  
    } 
  }
  function right (){
    if(rover_x <700){
        rover_x=rover_x+10;
        uploadBackground();
        uploadrover();
        
  
    } 
  }