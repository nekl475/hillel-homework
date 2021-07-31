let kitchenProducts = [{
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [{
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

let cosmeticsProducts = [{
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];



function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
}

Product.prototype.render = function() {
        return `<tr>
		<td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
		<td>${this.type}</td>
		<td>${Array.isArray(this.price) ? this.price.join(`-`) : this.price } USD</td>
	</tr>`;
};

function createProduct(arr, category){
	return arr
		.map(function(item){
			return new Product(category, item.type, item.price);
		})
		.map(function(item){
			return item.render();
		})
		.join('');
}

function renderTable(products){
	let TRS = [];

	for(let key in products){
		TRS.push(createProduct(products[key],key));
	}

	document.write(`<table border ="1px">${TRS.join('')}</table>`);
}

let allProducts = {
	kitchen: kitchenProducts,
	devices: devicesProducts,
	cosmetics: cosmeticsProducts
};

renderTable(allProducts);