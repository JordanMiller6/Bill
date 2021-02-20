var containerEle = document.body.querySelector(".total");

var bill=Number(prompt("What is the bill?"));

var tax=Number(1.07);

var tip=(1.05);

var all=Number(tax*tip)
var round = all.toFixed(2);
document.body.querySelector(".total").innerHTML = "Your bill is $"+round+"!";