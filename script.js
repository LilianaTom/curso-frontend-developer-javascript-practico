const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartConytainer = document.querySelector('#shoppingCartConytainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);
shoppingCart.addEventListener('click',toggleCartAside);

function toggleDesktopMenu(){
    const isAsideMenuClosed = shoppingCartConytainer.classList.contains('inactive');   
    
    if(!isAsideMenuClosed){
        shoppingCartConytainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideMenuClosed = shoppingCartConytainer.classList.contains('inactive');   
    
    if(!isAsideMenuClosed){
        shoppingCartConytainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');   
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shoppingCartConytainer.classList.toggle('inactive');    
}

const productList=[];
productList.push({
    name: 'Bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 320,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computador',
    price: 420,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
function renderProduct(arr){
    for(const product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const  productImg = document.createElement('img');
        productImg.setAttribute('src',product.imagen);
        
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText ='$'+product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProduct(productList);
