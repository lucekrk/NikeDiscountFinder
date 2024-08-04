
function getProductData(productElement) {
        const data = {};
        const priceWrapper = productElement.querySelector('.product-card__price-wrapper');
    
        data.title = productElement.querySelector('.product-card__title')?.textContent.trim() || '';
        data.subtitle = productElement.querySelector('.product-card__subtitle')?.textContent.trim() || '';
        data.link = productElement.querySelector('.product-card__link-overlay')?.getAttribute('href') || '';
    
        if (priceWrapper) {
            const priceText = priceWrapper.textContent.trim();
        const priceMatch = priceText.match(/(\d+,\d+ zł)/g);
        if (priceMatch && priceMatch.length >= 2) {
            data['price-before'] = priceMatch[1];
            data['price-after'] = priceMatch[0];
        } else {
            data['price-before'] = priceText;
        }
        data.discount = priceWrapper.querySelector('.product-price__perc')?.textContent.trim() || '';
        }
    

    const imageElement = productElement.querySelector('.product-card__hero-image');
    data.imageUrl = imageElement?.getAttribute('src') || '';
    
        return data;
    }
    

    const productCards = document.querySelectorAll('.product-card');
    const discountedProducts = [];
    
    productCards.forEach(productCard => {
        const productData = getProductData(productCard);
        if (productData.discount) {
             discountedProducts.push(productData);
        }
    });
    
    if (discountedProducts.length > 0) {
        console.log('Znalezione produkty z rabatem:', JSON.stringify(discountedProducts, null, 2));
    } else {
        console.log('Nie znaleziono produktów z rabatem.');
    }