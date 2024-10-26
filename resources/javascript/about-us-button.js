document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons with the class 'mission-link'
    const missionLinks = document.querySelectorAll('.mission-link');

    missionLinks.forEach(function (missionLink) {
        // Apply styles to each button container's parent and the button itself
        const buttonContainer = missionLink.parentElement;

        // Apply styles to center the container and add padding
        if (buttonContainer) {
            buttonContainer.style.textAlign = 'center';
            buttonContainer.style.paddingBottom = '300px';
        }

        // Apply styles to the button
        missionLink.style.display = 'inline-block';
        missionLink.style.fontSize = '1.2em';
        missionLink.style.color = '#f6fff1';
        missionLink.style.backgroundColor = '#768459';
        missionLink.style.padding = '15px 25px';
        missionLink.style.textDecoration = 'none';
        missionLink.style.borderRadius = '8px';
        missionLink.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        missionLink.style.transition = 'all 0.5s ease, transform 0.5s ease'; // Updated transition duration for bigger effect

        // Add event listeners for mouse hover to create a larger transition effect
        missionLink.addEventListener('mouseover', function () {
            missionLink.style.transform = 'scale(1.1)'; // Scale up slightly for emphasis
            missionLink.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // More pronounced shadow
            missionLink.style.backgroundColor = '#66a007'; // Lighter background color on hover
        });

        missionLink.addEventListener('mouseout', function () {
            missionLink.style.transform = 'scale(1)'; // Revert to original size
            missionLink.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Revert to original shadow
            missionLink.style.backgroundColor = '#768459'; // Revert to original background color
        });
    });
});
