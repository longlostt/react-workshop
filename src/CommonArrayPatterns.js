//COMMON ARRAY PATTERNS FOR UPDATING ARRAYS IN STATE
const shoppingCart = [
    { id: 1, product: 'Jacket', price: 1 },
    { id: 2, product: 'Socks', price: 3 },
    { id: 3, product: 'T-shirt', price: 2 },
];

//ADDING TO AN ARRAY
[...shoppingCart, { id: 4, product: 'Hat', price: 5 }];

//REMOVING FROM AN ARRAY
shoppingCart.filter(item => item.id !== 2);

//UPDATING ALL ITEMS IN AN ARRAY
shoppingCart.map(item => {
    return { 
        ...item, 
        price: item.price * 2 
    };
});

// MODYFYING A SINGLE ITEM IN AN ARRAY
shoppingCart.map(item => {
    if(item.id === 3) {
        return { 
            ...item, 
            price: item.price * 2 
        };
    }
    return item;
});

// SORTING AN ARRAY
const sorted = [...shoppingCart].sort((a, b) => a.price - b.price);