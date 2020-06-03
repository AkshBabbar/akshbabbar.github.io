	// Array of products, each product is an object with different fieldset
	// A set of ingredients should be added to products		 

	var products = [{
	        name: "Brocoli",
	        vegetarian: true,
	        glutenFree: true,
	        organic: true,
	        price: 1.99
	    },
	    {
	        name: "Spinach",
	        vegetarian: true,
	        glutenFree: true,
	        organic: true,
	        price: 2.99
	    },
	    {
	        name: "Bread",
	        vegetarian: true,
	        glutenFree: false,
	        organic: false,
	        price: 2.35
	    },
	    {
	        name: "Milk",
	        vegetarian: true,
	        glutenFree: true,
	        organic: false,
	        price: 4.00
	    },
	    {
	        name: "Eggs",
	        vegetarian: false,
	        glutenFree: true,
	        organic: false,
	        price: 4.50
	    },
	    {
	        name: "Bananas",
	        vegetarian: true,
	        glutenFree: true,
	        organic: true,
	        price: 6.00
	    },
	    {
	        name: "Orange Juice",
	        vegetarian: true,
	        glutenFree: true,
	        organic: true,
	        price: 7.00
	    },
	    {
	        name: "Salmon",
	        vegetarian: false,
	        glutenFree: true,
	        organic: false,
	        price: 10.00
	    },
	    {
	        name: "Cake",
	        vegetarian: true,
	        glutenFree: false,
	        organic: false,
	        price: 10.99
	    },
	    {
	        name: "Chicken",
	        vegetarian: false,
	        glutenFree: true,
	        organic: true,
	        price: 14.99
	    }
	];



	// given restrictions provided, make a reduced list of products
	// prices should be included in this list, as well as a sort based on price

	function restrictListProducts(prods, restriction) {
	    let product_names = [];
	    if (restriction.length != 1 && restriction.includes("None")) {
	        alert("You cannot choose 'NONE' option with other filters");
	        return;
	    }
	    let r1 = restriction.includes("Vegetarian");
	    let r2 = restriction.includes("GlutenFree");
	    let r3 = restriction.includes("Organic");
	    let r4 = restriction.includes("None");
	    for (let i = 0; i < prods.length; i += 1) {
	        let veg = prods[i].vegetarian;
	        let gf = prods[i].glutenFree;
	        let org = prods[i].organic;
	        if ((r1 && r2 && r3) && (veg && gf && org) && (restriction.length == 3)) {
	            product_names.push(prods[i].name);
	        } else if ((r1 && r2) && (veg && gf) && (restriction.length == 2)) {
	            product_names.push(prods[i].name);
	        } else if ((r2 && r3) && (gf && org) && (restriction.length == 2)) {
	            product_names.push(prods[i].name);
	        } else if ((r1 && r3) && (veg && org) && (restriction.length == 2)) {
	            product_names.push(prods[i].name);
	        } else if ((r1 && veg) && (restriction.length == 1)) {
	            product_names.push(prods[i].name);
	        } else if ((r2 && gf) && (restriction.length == 1)) {
	            product_names.push(prods[i].name);
	        } else if ((r3 && org) && (restriction.length == 1)) {
	            product_names.push(prods[i].name);
	        } else if (r4) {
	            product_names.push(prods[i].name);
	        }
	    }
	    return product_names;
	}

	// Calculate the total price of items, with received parameter being a list of products
	function getTotalPrice(chosenProducts) {
	    totalPrice = 0;
	    for (let i = 0; i < products.length; i += 1) {
	        if (chosenProducts.indexOf(products[i].name) > -1) {
	            totalPrice += products[i].price;
	        }
	    }
	    return totalPrice;
	}

	function getPrice(product) {
	    for (let i = 0; i < products.length; i += 1) {
	        if (products[i].name == product) {
	            return products[i].price;
	        }
	    }
	}