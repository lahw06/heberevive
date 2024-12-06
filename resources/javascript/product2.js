
        // Image Carousel
        let images = ['resources/images/scrub1.webp', 'resources/images/scrub2.webp', 'resources/images/scrub3.webp'];
        let currentImageIndex = 0;

        function showImage(index) {
            document.getElementById('mainImage').src = images[index];
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        }

        // Quantity functions
        function increaseQuantity() {
            let quantity = document.getElementById('quantity');
            quantity.value = parseInt(quantity.value) + 1;
        }

        function decreaseQuantity() {
            let quantity = document.getElementById('quantity');
            if (quantity.value > 0) {
                quantity.value = parseInt(quantity.value) - 1;
            }
        }

        // Add to basket function
        function addToBasket(name, price, image) {
            // Retrieve the basket from localStorage or initialize as empty array
            let basket = JSON.parse(localStorage.getItem('basket')) || [];
            let quantityToAdd = parseInt(document.getElementById('quantity').value) || 1;
            
            // Find item by name in basket
            let existingItem = basket.find(item => item.name === name);
            
            if (existingItem) {
                // Update quantity if item already exists
                existingItem.quantity += quantityToAdd;
            } else {
                // Add item as new entry if it doesn’t exist
                basket.push({ name, price, quantity: quantityToAdd, image });
            }
            
            // Save updated basket back to localStorage
            localStorage.setItem('basket', JSON.stringify(basket));
            
            // Optional: Provide user feedback
            alert(`${quantityToAdd} x ${name} has been added to your basket.`);
        }
        
        

        // Toggle content function
        function toggleContent(contentId, iconId) {
            var content = document.getElementById(contentId);
            var icon = document.getElementById(iconId);
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                icon.innerHTML = "-";
            } else {
                content.style.display = "none";
                icon.innerHTML = "+";
            }
        }
    
