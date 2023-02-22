const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//Set canvas width and height
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

draw();

//Every time the window is resized make sure to change canvas
onresize = (event) => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    draw();
}

function draw() {
    c.fillRect(50, 50, 100, 100);
    c.fillRect(500, 500, 200, 200);
}