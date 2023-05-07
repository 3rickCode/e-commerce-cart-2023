

function cart(db, printProducts) {
    let cart = []

    //Elementos del DOM
const productsDOM= document.querySelector('.products__container')
const notifyDOM= document.querySelector('.notify')
const cartDOM= document.querySelector('.cart__body')
const countDOM= document.querySelector('.cart__count--item')
const totalDOM= document.querySelector('.cart__total--item')
const checkoutDOM= document.querySelector('.btn--buy')

    //Funciones 
    function printCart() {
        console.log('Carrito:')
        console.log(cart)
        console.log('Items: ' + showItemsCount());
        console.log('Total: ' + showTotal());
    }
    function addToCart(id, qty = 1) {
        const itemFinded = cart.find(i => i.id === id)

        if (itemFinded) {
            itemFinded.qty += qty
        } else {
            cart.push({ id, qty })

        }

        printCart()
    }


    function removeFromCart(id, qty = 1) {
        const itemFinded = cart.find(i => i.id === id)
        const result = itemFinded.qty - qty
        if (result > 0) {

            itemFinded.qty -= qty
        } else {

            cart = cart.filter(i => i.id !== id)
        }
        printCart()
    }

    function deleteFromCart(id) {
        cart = cart.filter(i => i.id !== id)

        printCart()
    }

    function showItemsCount() {
        let suma = 0
        for (const item of cart) {
            suma += item.qty
        }
        return suma

    }
    function showTotal() {
        let total = 0
        for (const item of cart) {
            const productFinded = db.find(p => p.id === item.id)
            total += item.qty * productFinded.price
        }
        return total
    }
    function checkout() {
        for (const item of cart) {
            const productFinded = db.find(p => p.id === item.id)
            productFinded.quantity -= item.qty
        }
        cart = []
        printCart()
        printProducts()
        window.alert('Gracias por su compra')
    }

    //eventons 
    productsDOM.addEventListener('click',function (e) {
        if(e.target.closest('.add--to-cart')){
        const id= +e.target.closest('.add--to-cart').dataset.id
        addToCart(id)
        }
    })

}

export default cart