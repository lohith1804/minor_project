// JavaScript code for your e-commerce website

// Example code for adding products to cart
const addToCartButtons = document.querySelectorAll('.product button');

//addToCartButtons.forEach((button) => {
 //   button.addEventListener('click', addToCart);
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
          alert('Product added to cart!');
        });
});


function addToCart(event) {
    const product = event.target.parentElement;
    const productName = product.querySelector('h2').textContent;
    const productPrice = getProductPrice(product);

    // Example code: Add the product to the cart
    addToCartData(productName, productPrice);

    // Example code: Display a success message to the user
    alert('Product added to cart!');
}

function getProductPrice(product) {
    // Example code: Get the product price from the product element
    // Modify this code based on your product price structure
    const priceElement = product.querySelector('.price');
    return parseFloat(priceElement.textContent.replace('$', ''));
}

function addToCartData(productName, productPrice) {
    // Example code: Implement your logic to add the product to cart data
    // This could involve storing the product details in an array or sending an AJAX request to a server
    console.log('Product added to cart:', productName, productPrice);
}
function showOptions(event) {
    event.preventDefault();
    const productOptions = document.getElementById('productOptions');
    productOptions.style.display = 'block';
}

function showCategory(category) {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        if (category === 'all' || product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}