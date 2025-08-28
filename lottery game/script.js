
let pickaNumberbtn = document.getElementById("pickanumber");
let result = document.getElementById("result");
let lotterysheet = document.getElementById("lotterysheet");
let tap=new Audio("tap.wav");
let over=new Audio("completedlevel.wav")

let gifts = ["100 cash", "toy car", "chocolate box", "500 cash", "smartphone cover", "book",
    "perfume", "watch", "chain", "teddy bear", "puzzle game", "200 cash", "headphones", "movie ticket",
    "gamming controller", "wallet", "camera strap", "mug", "travel pillow", "pen set", "drawing set",
    "earbuds", "hamper", "300 cash", "lamp", "shopping card", "speaker", "cooking set", "sunglasses", "charger",
    "dress", "mini bagpack", "laptop bag", "digital clock", "key chain", "wireless mouse",
    "fitness band", 'dumble', "skectches", "1000 cash prize", "toy robot", "keyboard",
    "puzzle game set", "dinner set", "kitchen set", "competitive books set", "mobile phone",
    "hand bag", "pen pouch", "frame"
]
pickaNumberbtn.addEventListener("click", function () {
    for (let i = 1; i < 50; i++) {
        document.getElementById(i).classList.remove("winningBox");

    } result.textContent = "please wait..........";

    let secondscount = 0;
    const intervalid = setInterval(function () {
        tap.pause();
         tap.currentTime=0;
         tap.play();
        secondscount = secondscount + 1;
        const randombox = Math.floor(Math.random() * 50) + 1;
        console.log(randombox);
        for (let i = 1; i <= 50; i++) {
            if (i === randombox) {
                document.getElementById(i).classList.add("highlightedBox");
            }
            else {
                document.getElementById(i).classList.remove("highlightedBox");
            }
        }
        // document.getElementById(randombox).classList.add("highlightedBox");







        if (secondscount === 5) {
            let randomnumber = Math.random() * 50;
            let drawnnumber = Math.floor(randomnumber) + 1;
            const gift = gifts[drawnnumber - 1];

            result.textContent = `you  have got ${drawnnumber} so you won ${gift}`;
           
            document.getElementById(randombox).classList.remove("highlightedBox");
             document.getElementById(drawnnumber).classList.add("winningBox");
             over.pause();
             over.currentTime=0;
             over.play();
            clearInterval(intervalid);
        }


    }, 1000);

});

gifts.forEach(function (value, i) {
    // <!-- <div class="box">1.100 cash</div>
    let boxelement = `<div class="box" id=${i + 1}> ${i + 1}.${value}</div>`
    // console.log(boxelement);
    lotterysheet.insertAdjacentHTML("beforebegin", boxelement)
});
