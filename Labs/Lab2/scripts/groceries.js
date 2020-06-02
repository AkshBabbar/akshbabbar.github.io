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
	        name: "Eggs",
	        vegetarian: false,
	        glutenFree: true,
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
	        name: "Bananas",
	        vegetarian: true,
	        glutenFree: true,
	        organic: true,
	        price: 2.00
	    },
	    {
	        name: "Cake",
	        vegetarian: true,
	        glutenFree: true,
	        organic: false,
	        price: 10.99
	    },
	    {
	        name: "Salmon",
	        vegetarian: false,
	        glutenFree: true,
	        organic: false,
	        price: 10.00
	    },
	    {
	        name: "Chicken",
	        vegetarian: false,
	        glutenFree: true,
	        organic: true,
	        price: 14.99
	    },
	    {
	        name: "Orange Juice",
	        vegetarian: true,
	        glutenFree: true,
	        organic: true,
	        price: 7.00
	    }
	];



	// given restrictions provided, make a reduced list of products
	// prices should be included in this list, as well as a sort based on price

	function restrictListProducts(prods, restriction) {
	    let product_names = [];
	    for (let i = 0; i < prods.length; i += 1) {
	        if ((restriction.includes("Vegetarian")) && (prods[i].vegetarian == true)) {
	            product_names.push(prods[i].name);
	        } else if ((restriction.includes("GlutenFree")) && (prods[i].glutenFree == true)) {
	            product_names.push(prods[i].name);
	        } else if ((restriction.includes("Organic")) && (prods[i].organic == true)) {
	            product_names.push(prods[i].name);
	        } else if (restriction.includes("None")) {
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