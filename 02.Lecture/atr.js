const filterElementsByAttribute = (attributeName, maxPrice) => {
    const elements = document.querySelectorAll(`[${attributeName}]`);
    elements.forEach((element) => {
        const price = Number(element.getAttribute(attributeName));
        if (price > maxPrice) {
            element.style.display = 'none';
        }
    });
};

filterElementsByAttribute('data-price', 50);


const sortElementsByAttribute = (attributeName) => {
    const rating = document.querySelector('.rating');
    const elements = Array.from(rating.querySelectorAll(`[${attributeName}]`));
    elements.sort((a, b) => { 
        const ratingA = parseInt(a.getAttribute(attributeName));
        const ratingB = parseInt(b.getAttribute(attributeName));
        return ratingB - ratingA;
    });
    elements.forEach((element) => {
        rating.appendChild(element);
    });
};

sortElementsByAttribute('data-rating');