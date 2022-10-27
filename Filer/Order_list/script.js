let tall = randomArray(20);
sort();

function randomArray(antall) {
    let arr = new Array();
    for (let i = 0; i < antall; i++) {
        let random = Math.floor(Math.random() * 100);
        console.log(random);
        arr.push(random);
    }
    return arr;
}

function sort() {
    console.log("start sorting");
    for (let i = 0; i < tall.length; i++) {
        if (tall[i] < tall[i+1]) {
            let temp = tall[i+1];
            tall[i+1] = tall[i];
            tall[i] = temp;
        }
        console.log(tall[i]);
    }
    console.log(tall);
}