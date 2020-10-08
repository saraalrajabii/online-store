
//remove button
var removeCartItemButtons = document.getElementsByClassName('remove')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
//quantity-input
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
//addToCart button
var addToCartButtons = document.getElementsByClassName('btn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
   document.getElementsByClassName('button')[0].addEventListener('click', buynawClicked)



// buy now button
function buynawClicked() {
    alert('Thanks for your orders. You will receive your orders after four days')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
}



function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

//quntitiy
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
}

// add item in the cart
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('img')[0].src; 
    console.log(title,price,imageSrc)
    addItemToCart(title, price, imageSrc)
}


function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
   cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
   var cartItemNames = cartItems.getElementsByClassName("item-title")
    for (var i = 0; i < cartItemNames.length; i++) {
       if (cartItemNames[i].innerText == title) {
        alert('This item is already added to the cart')
          return
            }
    }
    var cartRowContents = `
                     <div class="cart column item">
                        <img class="item1" src="${imageSrc}" style="width:70px;height:70px">
                        <span class="item-title">${title}</span>
                    </div>
                        <span class="item-price">${price}</span>
                        <div class="cart column quntity">
                        <input class="cart-quantity-input" placeholder="Quqntity" type="number" value="1" >
                        <input class="cart-size-input" type="number"placeholder="size" value="37">
                        <button class="remove" type="button">Remove</button>
                    </div>  `
   cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove')[0].addEventListener('click', removeCartItem)
   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}





function signup(){
    var array=[]
   var userName = document.getElementById("UserName").value ; 
   document.getElementById("UserName").innerHTML =userName ;
   var Email = document.getElementById("Email").value ;
   document.getElementById("Email").innerHTML = Email;
   var password = document.getElementById("PW").value ;
   document.getElementById("PW").innerHTML =password ;
   for (var i=0;i<userName.length;i++){
       array.push(userName);
   }
    alret("Congratulations, you have an account Tacones");
}



