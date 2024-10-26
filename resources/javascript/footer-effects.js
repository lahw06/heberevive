document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.footer button');

    buttons.forEach(button => {
        const underline = button.nextElementSibling; // Get the underline div next to the button
        
        button.addEventListener('mouseenter', () => {
            // Set hover styles
            button.style.transform = 'translateY(-2px)'; // Slight lift on hover
            if (underline) {
                underline.style.width = '100%'; // Expand underline from left to right
            }
        });

        button.addEventListener('mouseleave', () => {
            // Revert to original styles
            button.style.transform = 'translateY(0)'; // Remove lift effect
            if (underline) {
                underline.style.width = '0'; // Collapse underline to hidden
            }
        });
    });
});
function updateBasketIcon() {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const basketIcon = document.querySelector('.basket-logo');
    
    if (basketIcon) {
        if (basket.length > 0) {
            basketIcon.src = 'resources/images/full-basket-logo.png'; // Path to "full" basket icon
        } else {
            basketIcon.src = 'resources/images/basket-logo.png'; // Path to "empty" basket icon
        }
    }
}

// Call updateBasketIcon on page load
window.addEventListener('load', updateBasketIcon);
