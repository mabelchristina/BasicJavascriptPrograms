const HEAD = 1;
let headWins = 0;
let tailWins = 0;

while (headWins < 11 && tailWins < 11) {
    let flip = Math.floor(Math.random() * 10) % 2;
    if (flip == HEAD)
        headWins++;
    else
        tailWins++;
}
console.log("Head counts : " + headWins + " " + "Tail Counts : " + tailWins);