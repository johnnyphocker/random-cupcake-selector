const cupcake = document.getElementById('cupcake');
const container = document.getElementById('orders');

const cupcakes = [
	{id: 1, flavor: 'fresa'},
	{id: 2, flavor: 'plátano'},
	{id: 3, flavor: 'manzana'}
];

let randomCupcake;
let orderNumber = 0;
const baseAmount = 5;
let finalAmount;
const discountId = 2;
const discountAmount = 3;
let message;

cupcake.addEventListener('click', function() {

	randomCupcake = Math.floor(Math.random() * cupcakes.length);
	orderNumber += 1;
	finalAmount = discountId == cupcakes[randomCupcake].id ? (baseAmount - discountAmount) : baseAmount;
	message = 'ganaste un cupcake de ' + cupcakes[randomCupcake].flavor + ' por $' + finalAmount + ', tu orden es #' + orderNumber + '<br>';
	container.insertAdjacentHTML('beforeend', message);

});

