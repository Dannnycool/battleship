function setup() {
    createCanvas(600, 600);
    background(100);
    background("white")

    rect(i, 250, 100, 50);
    fill("pink")
}
let Alaphabet = ["A","B"]
let i = 0
grid = [];
let x = 0;
let y = 0;
while (x < 1000) {
    while (y < 1000) {
        grid[i] = [x, y];
        y += 100;
        i++;
    }
    x += 100;
    y = 0;
}
i = 0;
function draw() {
    while (i < 501) {
        rect(i, 0, 50, 50);
        rect(i, 50, 50, 50);
        rect(i, 100, 50, 50);
        rect(i, 150, 50, 50);
        rect(i, 200, 50, 50);
        rect(i, 250, 50, 50);
        rect(i, 300, 50, 50);
        rect(i, 350, 50, 50);
        rect(i, 400, 50, 50);
        rect(i, 450, 50, 50);
        rect(i, 500, 50, 50);
        i += 50;

    }
}