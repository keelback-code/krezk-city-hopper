// Shopping cart functionality

// Common variables
let priceTotal = [];
let products = [];

// Product specific variables
clickBtn(document.getElementById("copperTour").innerHTML, document.getElementById("copperPrice").innerHTML, document.getElementById("copperBtn"));
clickBtn(document.getElementById("goldTour").innerHTML, document.getElementById("goldPrice").innerHTML, document.getElementById("goldBtn"));
clickBtn(document.getElementById("weeklyTour").innerHTML, document.getElementById("weeklyPrice").innerHTML, document.getElementById("weeklyBtn"));
clickBtn(document.getElementById("yearlyTour").innerHTML, document.getElementById("yearlyPrice").innerHTML, document.getElementById("yearlyBtn"));
clickBtn(document.getElementById("smlTour").innerHTML, document.getElementById("smlTourPrice").innerHTML, document.getElementById("smlTourBtn"));
clickBtn(document.getElementById("wineTour").innerHTML, document.getElementById("winePrice").innerHTML, document.getElementById("wineBtn"));
clickBtn(document.getElementById("curiousTour").innerHTML, document.getElementById("curiousPrice").innerHTML, document.getElementById("curiousBtn"));
clickBtn(document.getElementById("wildlifeTour").innerHTML, document.getElementById("wildlifePrice").innerHTML, document.getElementById("wildlifeBtn"));

// Call final Checkout button
checkout()

// Function to collect button, name and price information
function clickBtn(prodName, prodPrice, btnID) {
    // Listen to buttons, add products and prices to arrays and alter display
    btnID.addEventListener("click", function () {

        if (btnID.innerHTML == "Add to Cart") {
            products.push(prodName);
            priceTotal.push(prodPrice);
            btnID.innerHTML = "Remove from Cart";
            btnID.style.background = "#741313";
            btnID.style.boxShadow = "10px 10px 30px black";
        }
        else {
            btnID.innerHTML = "Add to Cart";            
            btnID.style.background = "black";
            btnID.style.boxShadow = "none";

            // Remove only specified values from product arrays
            for (var i = 0; i < products.length; i++) {
                if (products[i] === prodName) {
                    products.splice(i, 1);
                }
            }
            // Remove only specified values from price arrays
            for (var j = 0; j < priceTotal.length; j++) {
                if (priceTotal[j] === prodPrice) {
                    priceTotal.splice(j, 1);
                }
            }
        }
    })
}

// Function to Checkout
function checkout() {
    // Listen to buttons, add products and prices to arrays and alter display
    document.getElementById("btnCheckout").addEventListener("click", function () {
        // Define sum to initiate counting, and convert html string to float
        let sum = 0;
        let total = priceTotal.map(parseFloat);

        // Check for products, error check or calculate total
        if (products.length === 0) {            
            alert("Whoops, there's nothing to checkout! If you would like to buy something, please return to the shop page or get in touch.");
        }
        else {            
            for (var k = 0; k < total.length; k++) {
                sum += total[k];
            } 
        }

        // Display items and total price to user
        cart = "Items in your cart:";

        for (var l = 0; l < products.length; l++) {
            cart = cart + "\n " + products[l] + " EUR" + priceTotal[l];
        }

        cart = cart + "\n Total cost: EUR" + sum;

        alert(cart);
    })
}
