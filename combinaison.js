document.addEventListener('DOMContentLoaded', function() {
    getFile(); // Call the function to fetch and render products on page load
});

function getFile() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            let productContainer = document.querySelector(".product-container");
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                const productImg = document.createElement('img');
                productImg.src = product.image;
                productImg.alt = "Product Image";

                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.price.toFixed(2)}`;

                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;

                productDiv.appendChild(productImg);
                productDiv.appendChild(productPrice);
                productDiv.appendChild(productDescription);

                productContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}
  
  
  
  