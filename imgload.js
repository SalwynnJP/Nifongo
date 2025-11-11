count = 0;
data = new Array("./image/book.png","./image/book2.png","./image/info.png","./image/info2.png","./image/hyogen.png","./image/hyogen2.png");
prImg= new Array();
for (i=0; i<data.length; i++){
prImg[i] = new Image();
prImg[i].src = data[i];}
function nextImg(){
count++;
count %= data.length;
document.myIMG.src = data[count];
status = count;}