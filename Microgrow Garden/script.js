
function underline(temp){
    temp.style.color = '#286123';
    temp.style.textDecoration = 'underline'; 
    temp.style.textDecorationColor = 'green';
    temp.style.textDecorationThickness = '.3rem';
    temp.style.textDecorationBorderRadius = '50%';
}
function removeUnderline(temp){
    temp.style.textDecoration = 'none'; 
    temp.style.color = '#11a303';
}

let homeLink = document.querySelector('#homeLink');
let plantLink = document.querySelector('#plantLink');
let supLink = document.querySelector('#supLink');
let storeLink = document.querySelector('#storeLink');
let contactLink = document.querySelector('#contactLink');

// for nav bar
document.querySelector('#homeLink').addEventListener('click', function(){
    underline(homeLink);
    removeUnderline(plantLink);
    removeUnderline(supLink);
    removeUnderline(storeLink);
    removeUnderline(contactLink);
})
document.querySelector('#plantLink').addEventListener('click', function(){
    
    removeUnderline(homeLink);
    underline(plantLink);
    removeUnderline(supLink);
    removeUnderline(storeLink);
    removeUnderline(contactLink);
})
document.querySelector('#supLink').addEventListener('click', function(){
    removeUnderline(homeLink);
    removeUnderline(plantLink);
    underline(supLink);
    removeUnderline(storeLink);
    removeUnderline(contactLink);
})
document.querySelector('#storeLink').addEventListener('click', function(){
    removeUnderline(homeLink);
    removeUnderline(plantLink);
    removeUnderline(supLink);
    underline(storeLink);
    removeUnderline(contactLink);
})
document.querySelector('#contactLink').addEventListener('click', function(){
    removeUnderline(homeLink);
    removeUnderline(plantLink);
    removeUnderline(supLink);
    removeUnderline(storeLink);
    underline(contactLink);
})



// document.querySelector('#viewPot').addEventListener('click', function(){
//     underline(viewPotLink);
//     removeUnderline(viewSupplyLink);
// })

// document.querySelector('#viewSupply').addEventListener('click', function(){
//     removeUnderline(viewPotLink);
//     underline(viewSupplyLink);
// })
// // --------------------------------------
// document.querySelector('#viewPot1').addEventListener('click', function(){
//     underline(viewPotLink1);
//     removeUnderline(viewSupplyLink1);
// })

// document.querySelector('#viewSupply1').addEventListener('click', function(){
//     removeUnderline(viewPotLink1);
//     underline(viewSupplyLink1);
// })




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
var plantCards = document.querySelectorAll('.productCardplant');
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
    });
});
var plantCards = document.querySelectorAll('.productCardplant');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("mouseleave", function () {
        plantCard.querySelector('.filter').style.display = 'none';
        plantCard.querySelector('.description').style.display = 'none';
        plantCard.querySelector('img').style.height = '22rem';
        plantCard.querySelector('img').style.width = '18rem';
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
var plantCards = document.querySelectorAll('.productCardplant');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("mouseover", function () {
        plantCard.querySelector('img').style.height = '30rem';
        plantCard.querySelector('img').style.width = '26rem';
    });
});

// for supply & pot tab
let viewPotLink = document.querySelector('#viewPot');
let viewSupplyLink = document.querySelector('#viewSupply');

let viewPotLink1 = document.querySelector('#viewPot1');
let viewSupplyLink1 = document.querySelector('#viewSupply1');


document.querySelector("#viewPot").addEventListener("click", function () {
    document.querySelector("#potSection").style.display = "block";
    document.querySelector("#supplySection").style.display = "none";

    underline(viewPotLink);
    removeUnderline(viewSupplyLink);
})

document.querySelector("#viewSupply").addEventListener("click", function () {
    document.querySelector("#potSection").style.display = "none";
    document.querySelector("#supplySection").style.display = "block";
    
    removeUnderline(viewPotLink);
    underline(viewSupplyLink1);
})

document.querySelector("#viewPot1").addEventListener("click", function () {
    document.querySelector("#potSection").style.display = "block";
    document.querySelector("#supplySection").style.display = "none";

    underline(viewPotLink);
    removeUnderline(viewSupplyLink1);
})

document.querySelector("#viewSupply1").addEventListener("click", function () {
    document.querySelector("#potSection").style.display = "none";
    document.querySelector("#supplySection").style.display = "block";


    removeUnderline(viewPotLink1);
    underline(viewSupplyLink1);
})














// Function to filter products based on search query
const filterProducts = (query) => {
    const searchTerm = query.toLowerCase().trim();
    allProducts.forEach((product) => {
        const productName = product.querySelector("p:nth-of-type(1)").textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = "flex"; // Show matching products
        } else {
            product.style.display = "none"; // Hide non-matching products
        }
    });
};

// Event listener for the search input
searchInput.addEventListener("input", function (event) {
    const searchQuery = event.target.value.trim(); // Get the search query

    // If the search query is not empty
    if (searchQuery !== "") {
        filterProducts(searchQuery); // Filter products based on the query
    } else {
        // If the search query is empty, display all products
        allProducts.forEach((product) => {
            product.style.display = "flex";
        });
    }
});
;
// Get the modal element and the link that triggers the modal
const modal = document.getElementById('contactModal');
const link = document.getElementById('contactLink');

// Function to display/hide the modal when the link is clicked
link.addEventListener('click', function(event) {
event.preventDefault(); // Prevent the default behavior of the anchor tag
modal.classList.toggle('show-modal'); // Toggle the visibility of the modal
});

// Close the modal when the close button is clicked
const closeBtn = document.querySelector('.modal-content .close');
closeBtn.addEventListener('click', function() {
modal.classList.remove('show-modal');
});

