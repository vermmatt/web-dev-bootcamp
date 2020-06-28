var faker = require("faker")


function fake(){
	console.log("==================");
	console.log("WELCOME TO MY SHOP")
	console.log("==================");
	for(var i = 0; i <10; i++){
	var productName = faker.commerce.productName();
	var price = faker.commerce.price();
	console.log(productName + " - $" + price);
	};
};
fake();
