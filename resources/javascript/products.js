let images = ['resources/images/cream1.webp', 'resources/images/cream2.webp', 'resources/images/cream 3.webp'];
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
        function addToBasket() {
            document.getElementById('basketIcon').src = 'resources/images/full-basket.png'; 
            document.getElementById('quantity').value = 1;// Change to a full basket image
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
