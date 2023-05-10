import theme from './components/theme.js';
import loader from './components/loader.js';   
import showMenu from './components/showMenu.js';
import showCart from './components/showCart.js';
import products from './components/products.js';
import getProducts from './helpers/getProducts.js';
import cart from './components/cart.js';

/* Theme */
theme()

/* Ocultar loader */
loader()

/* Mostrar menu */
showMenu()


/* Mostrar cart */
showCart()

/* End UI Elements */

/* productos  */
const {db, printProducts} =products(await getProducts())

/* carrito */
cart(db,printProducts)
