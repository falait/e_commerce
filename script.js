let items = [
    {
        name: "Talat T",
        price: 20,
        image: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61voA7kXnCL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679._SX._UX._SY._UY_.png'

    },
    {
        name: "Talat Hoodie",
        price: 50,
        image: 'https://isteam.wsimg.com/ip/dd8c79fb-26ac-4ad4-8202-a3b0c244a81d/ols/704_original/:/rs=w:600,h:600'
    },
    {
        name: "Talat Pants",
        price: 30,
        image: 'https://static-01.daraz.pk/original/860e1ce3ab4a6be4a0bb5fdf2f9276e3.jpg'
    },
    {
        name: "Talat Mug",
        price: 10,
        image: 'https://i.pinimg.com/736x/3d/91/d5/3d91d578f0dba36958c7c849c5ad17b8.jpg'
    }
]

let cart = []
let list = document.querySelector('ul');

items.forEach((item, i) => {
    list.innerHTML +=  `<li>
    <div>Name: ${item.name} </div>
    <div>Price: ${item.price} </div>
    <image src = "${item.image}" />
    <input type = "number" placeholder = "quantity" onchange= 'inputChange(${i}, "${item.name}", "${item.price}" )' />
    <button>Buy Item </button>
    
    </li>`
});

function inputChange (i, name, price) {
    console.log('I want to buy the',i, 'item named', name, 'that costs ', price)
    let listItem = document.querySelectorAll('li')[i]
    let input = listItem.querySelector('input')
    let button = listItem.querySelector('button')

    button.onclick = function () {
        cart.push ({
            quantity: input.value,
            name: name,
            price: price
        })

    }



    console.log(input.value)

}


function total (num1, num2){
    return num1 + num2
}

total(2,3)