

// for product
document.querySelector("#viewAllPlant").addEventListener("click", function () {
    document.querySelector("#showPlant").style.display = "flex";
    document.querySelector("#collapsePlant").style.display = "inline";
})
document.querySelector("#collapsePlant").addEventListener("click", function () {
    document.querySelector("#showPlant").style.display = "none";
    document.querySelector("#collapsePlant").style.display = "none";

})
// for plant
document.querySelector("#viewAllPot").addEventListener("click", function () {
    document.querySelector("#showPot").style.display = "flex";
    document.querySelector("#collapseAllPot").style.display = "inline";
})
document.querySelector("#collapseAllPot").addEventListener("click", function () {
    document.querySelector("#showPot").style.display = "none";
    document.querySelector("#collapseAllPot").style.display = "none";

})
// for supply
document.querySelector("#viewAllSupply").addEventListener("click", function () {
    document.querySelector("#showSupply").style.display = "flex";
    document.querySelector("#collapseAllSupply").style.display = "inline";
})
document.querySelector("#collapseAllSupply").addEventListener("click", function () {
    document.querySelector("#showSupply").style.display = "none";
    document.querySelector("#collapseAllSupply").style.display = "none";

})


//for plant

var plantCards = document.querySelectorAll('.productCard');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("click", function () {
        plantCard.querySelector('.filter').style.display = 'block';
        plantCard.querySelector('.description').style.display = 'block';
    });
});

var plantCards = document.querySelectorAll('.productCard');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("mouseleave", function () {
        plantCard.querySelector('.filter').style.display = 'none';
        plantCard.querySelector('.description').style.display = 'none';
        plantCard.querySelector('img').style.height = '22rem';
        plantCard.querySelector('img').style.width = '18rem';

        document.querySelector('img').style.display = 'block';
        document.querySelector('#sample').style.display = 'none';
    });
});

//delete later
var plantCards = document.querySelectorAll('.productCard');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("mouseover", function () {
        plantCard.querySelector('img').style.height = '30rem';
        plantCard.querySelector('img').style.width = '26rem';
    });
});

document.querySelector("#viewSupply").addEventListener("click", function () {
    document.querySelector("#potSection").style.display = "none";
    document.querySelector("#supplySection").style.display = "block";
})

document.querySelector("#viewPot1").addEventListener("click", function () {
    document.querySelector("#potSection").style.display = "block";
    document.querySelector("#supplySection").style.display = "none";
})
