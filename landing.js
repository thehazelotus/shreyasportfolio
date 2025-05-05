const landingCard = document.querySelector('.landing-card');

landingCard.addEventListener('click', () => {
    landingCard.style.transform = 'scale(1.5)';
    landingCard.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 800);
});

document.querySelector('.photo-container').addEventListener('click', () => {
    const container = document.querySelector('.photo-container');
    container.style.transform = 'scale(1.1)';
    container.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 800);
});

// Add hover effect to quote
const quote = document.querySelector('.quote-text');
quote.addEventListener('mouseover', () => {
    quote.style.fontStyle = 'normal';
    quote.style.fontWeight = '500';
});

document.addEventListener('DOMContentLoaded', function() {
    const text = "Creative Developer";
    const typingText = document.querySelector('.typing-text');
    
    // Reset the text content
    typingText.textContent = '';
    
    let currentIndex = 0;
    
    function typeText() {
        if (currentIndex < text.length) {
            typingText.textContent += text[currentIndex];
            currentIndex++;
            setTimeout(typeText, 100); // 100ms delay between each character
        }
    }
    
    // Start typing
    typeText();
});

document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.portrait-card');
    const cardLink = document.querySelector('.card-link');
    
    // Initial animation
    cardLink.style.opacity = '0';
    cardLink.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        cardLink.style.opacity = '1';
        cardLink.style.transform = 'translateY(0)';
        cardLink.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }, 100);

    // Mouse tracking for 3D effect
    document.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset card position when mouse leaves
    document.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(2000px) rotateX(0) rotateY(0)';
    });

    // Page transition
    document.getElementById('mainLink').addEventListener('click', function(e) {
        e.preventDefault();
        const link = this;
        const href = link.getAttribute('href');
        const transition = document.querySelector('.page-transition');
        
        // Start transition
        link.classList.add('transitioning');
        transition.classList.add('active');
        
        // Navigate after transition
        setTimeout(() => {
            window.location.href = href;
        }, 600);
    });
}); 