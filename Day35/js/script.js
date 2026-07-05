const box = document.getElementById("box");

let x = 20;
let y = 20;

function moveTo(targetX, targetY){
    const speed = 3;

    const animate = () => {
        if(x < targetX) x += speed;
        if(x > targetX) x -= speed;

        if(y < targetY) y += speed;
        if(y > targetY) y -= speed;

        box.style.left = x + "px";
        box.style.top = y + "px";

        if(
            Math.abs(x - targetX) > speed ||
            Math.abs(y - targetY) > speed
        ){
            requestAnimationFrame(animate);
        }
    };

    animate();
}

document.getElementById("leftBtn").onclick = () => {
    moveTo(x - 100, y);
};

document.getElementById("rightBtn").onclick = () => {
    moveTo(x + 100, y);
};

document.getElementById("downBtn").onclick = () => {
    moveTo(x, y + 100);
};
document.getElementById("UpBtn").onclick = () => {
    moveTo(x,y  - 100);
}