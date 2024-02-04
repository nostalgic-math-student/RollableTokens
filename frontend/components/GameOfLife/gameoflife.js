let arr= []
for(let i=0; i<2; i++) {
    arr[i] = [];
    for(let j=0; j<60; j++){
      arr[i][j] = []
      for(var k=0; k<50; k++){
        arr[i][j][k] = 0
      }
    }
}
var curr=0,run=1,next=0;
var B=[3,4],S=[2,3];
export function setup(p5, canvasParentRef){
    p5.createCanvas(500,500 ).parent(canvasParentRef);

   p5.frameRate(10);
  
  const noiseScale = 0.15;
  const noiseLevel = 255;
   for(let i=0;i<50;i++)for(let j=0;j<60;j++){
     let nx = noiseScale * i;
    let ny = noiseScale * j;
     arr[0][j][i]=p5.int(p5.noise(nx,ny)*noiseLevel > 120);
     arr[1][j][i]=0;
   }
     for(let i=0;i<50;i++)for(let j=0;j<60;j++){
      if(arr[curr][j][i]==1)p5.fill(255,255,255);
      else p5.fill(0,0,0);
      p5.rect(j*10,i*10,10,10);
    }
}
function update(curr){
  var vec,x,y,vool=0;
  var exp=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]]; 
  for(let i=0;i<50;i++)for(let j=0;j<60;j++){
    
    vec=0;
    for(let k=0;k<8;k++){
      x=j+exp[k][0];y=i+exp[k][1];
      if(x<60&&x>=0&&y<50&&y>=0)vec+=arr[curr][x][y];
    }
    
  
    vool=0;
    
    if(arr[curr][j][i]==0){
      for(let k=0;k<B.length;k++)
        if(vec==B[k])vool=1;
      
      if(vool==1)
        arr[(curr+1)%2][j][i]=1;
      else 
        arr[(curr+1)%2][j][i]=0;
    }else{
      for(let k=0;k<S.length;k++)
        if(vec==S[k])vool=1;
      
      if(vool==1)
        arr[(curr+1)%2][j][i]=1;
      else
        arr[(curr+1)%2][j][i]=0;
    }
    
  }
}

/* function mousePressed(){
  if(mouseButton == LEFT){
    if(arr[curr][p5.int(mouseX/10)][p5.int(mouseY/10)]==1){
      arr[curr][p5.int(mouseX/10)][p5.int(mouseY/10)]=0;
      p5.fill(0,0,0);
    }else{
      arr[curr][p5.int(mouseX/10)][p5.int(mouseY/10)]=1;
      p5.fill(255,255,255);
    }
    rect(p5.int(mouseX/10)*10,p5.int(mouseY/10)*10,10,10);
  }
}
function mouseDragged(){
    if(mouseButton == LEFT){
      if(mouseX/10<60&&mouseX/10>=0&&mouseY/10<50&&mouseY/10>=0){
        arr[curr][p5.int(mouseX/10)][p5.int(mouseY/10)]=1;
        p5.fill(255,255,255);
        rect(p5.int(mouseX/10)*10,p5.int(mouseY/10)*10,10,10);
      }
    }else if(mouseButton==RIGHT){
      if(mouseX/10<60&&mouseX/10>=0&&mouseY/10<50&&mouseY/10>=0){
        arr[curr][p5.int(mouseX/10)][p5.int(mouseY/10)]=0;
        p5.fill(0,0,0);
        rect(p5.int(mouseX/10)*10,p5.int(mouseY/10)*10,10,10);
      }
    }
}
function keyPressed(){
  if(key==' '){ 
    if(run==0)run=1;
    else run=0;
  }
  if(key=='Enter'){
    next=1;
  }
  if(key=='Enter'){
    p5.fill(0,0,0);
    for(var i=0;i<50;i++)for(var j=0;j<60;j++){
       arr[0][j][i]=0;
       arr[1][j][i]=0;
       rect(j*10,i*10,10,10);
     }
     run=0;
  }
}  */

export function draw(p5){
  if(run==1||next==1){
    p5.clear();
    for(let i=0;i<50;i++){
      for(let j=0;j<60;j++){
        if(arr[curr][j][i]===0){
          p5.fill(0,0,0);
        }
        else {
          p5.fill(255,255,255);
        }
        p5.rect(j*10,i*10,10,10);
      }
    }
    update(curr);
    curr=(curr+1)%2;
    next=0;
  }
}