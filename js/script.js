// Inputs
const pizzaSize = document.getElementById('pizzaSize');
const pizzaTopping = document.getElementById('pizzaTopping');
const pizzaCrust = document.getElementById('pizzaCrust');

// CheckoutPoint
const placeOrder = document.getElementById('placeOrder');
const orderMoreBtn = document.getElementById('orderMoreBtn')
const checkout = document.getElementById('checkout');

const orderSummary = document.getElementById('orderSummary');

const total = document.getElementById('total')

const locationInfo = document.getElementById('locationInfo')
const orderDetails = document.getElementById('orderDetails')

const deliver = document.getElementById('deliver')

locationInfo.style.visibility = 'hidden'
orderDetails.style.visibility = 'hidden'

pizzaData = {
    "Small":{"price":500, "topping":200, "crust":250},
    "Medium":{"price":700, "topping":300, "crust":350},
    "Large":{"price":1000, "topping":450, "crust":500} 
}

let totalPrice = 0
let noOfOrders = 0

placeOrder.addEventListener('click', function() {
    orderDetails.style.visibility = 'visible'
    const size = pizzaSize.value
    const priceOfPizza = pizzaData[size].price + pizzaData[size].topping + pizzaData[size].crust
    totalPrice += priceOfPizza
    orderSummary.innerHTML += `
    <tr>
    <td>${noOfOrders += 1}</td>
    <td>${pizzaSize.value}</td>
    <td>${pizzaTopping.value}</td>
    <td>${pizzaCrust.value}</td>
    <td>${priceOfPizza}</td>
    </tr>`

    orderMoreBtn.style.display = 'visible'
    placeOrder.style.display = 'hidden'
})

orderMoreBtn.addEventListener('click', function() {
    const size = pizzaSize.value
    const priceOfPizza = pizzaData[size].price + pizzaData[size].topping + pizzaData[size].crust
    noOfOrders += 1
    orderSummary.innerHTML += `
      <tr>
        <td>${noOfOrders}</td>
        <td>${pizzaSize.value}</td>
        <td>${pizzaTopping.value}</td>
        <td>${pizzaCrust.value}</td>
        <td>${priceOfPizza}</td>
      </tr>
      `
      totalPrice += priceOfPizza
      console.log(totalPrice)


})



// var small = parseInt(500);
// var medium = parseInt(700);
// var large = parseInt(1000);

// var cheese = parseInt(300)
// var olives = parseInt (350)
// var peperoni = parseInt(500)

// var crispy = parseInt(500)
// var stuffed = parseInt(550)
// var glutten = parseInt(650)