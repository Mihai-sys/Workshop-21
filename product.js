const BASE_URL = 'https://fakestoreapi.com';

document.addEventListener('DOMContentLoaded', async () => {
    // your code here
    const productId = localStorage.getItem("productId");
    const productUrl = `${BASE_URL}/products/${productId}`;
    const response = await fetch(productUrl);
    const productData = await response.json();
    console.log(productData);

    const imgContainer = document.getElementById("img-container");
    const img = document.createElement("img");
    img.src = productData.image;
    imgContainer.appendChild(img);

    const imgTitle = document.getElementById("product-title");
    imgTitle.textContent = productData.title;

    const productCat = document.getElementById("product-categ");
    productCat.textContent = productData.category;

    const productPrice = document.getElementById("product-price");
    productPrice.textContent = productData.price;

    const productDescription = document.getElementById("product-description");
    productDescription.textContent = productData.description;
});


