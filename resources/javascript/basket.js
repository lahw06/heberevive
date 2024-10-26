
        // Quantity functions
        function increaseQuantity() {
            let quantity = document.getElementById('quantity');
            quantity.value = parseInt(quantity.value) + 1;
        }

        function decreaseQuantity() {
            let quantity = document.getElementById('quantity');
            if (parseInt(quantity.value) > 1) {
                quantity.value = parseInt(quantity.value) - 1;
            }
        }

        // Add to basket function
        function addToBasket(productName, productPrice, productImage) {
            console.log('Adding to basket:', productName, productPrice, productImage);
            let quantity = parseInt(document.getElementById('quantity').value);

            // Get existing basket from localStorage or create a new one
            let basket = JSON.parse(localStorage.getItem('basket')) || [];

            // Check if product is already in basket
            let existingProduct = basket.find(item => item.name === productName);

            if (existingProduct) {
                // Update quantity
                existingProduct.quantity += quantity;
            } else {
                // Add new product to basket
                basket.push({
                    name: productName,
                    price: productPrice,
                    quantity: quantity,
                    image: productImage,
                });
            }

            // Save updated basket back to localStorage
            localStorage.setItem('basket', JSON.stringify(basket));
            

            // Reset quantity to 1
            document.getElementById('quantity').value = 1;

            // Optionally, give feedback to the user
            alert(`${productName} has been added to your basket.`);

            let basketIcon = document.querySelector('.basket-logo');
                if (basketIcon) {
                basketIcon.src = 'resources/images/full-basket-logo.png'; 
                }
            }
