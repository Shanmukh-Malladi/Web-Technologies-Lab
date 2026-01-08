let mycanvas = document.getElementById("myCanvas");
let ctx = mycanvas.getContext('2d');


ctx.fillStyle = 'red';
ctx.fillRect(50,50,200,100);


ctx.beginPath();
ctx.arc(350,100,50,0,Math.PI * 2);
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();


ctx.beginPath();
ctx.moveTo(50, 200);   
ctx.lineTo(450, 200);
ctx.strokeStyle = 'orange'; 
ctx.lineWidth = 10;
ctx.stroke();  


ctx.font = '30px Arial';
ctx.fillStyle = "Green"; 
ctx.fillText('Exercise HTML5 Canvas', 80, 260);
ctx.textAlign = 'center';
