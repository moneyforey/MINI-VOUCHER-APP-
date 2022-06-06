let amount = JSON.parse(localStorage.getItem("user"));
console.log(amount);
let sA = document.getElementById('wallet_balance');
function showAmount(){
    

    sA.innerText = amount.wallet;
}

showAmount();

let voucher = JSON.parse(localStorage.getItem("purchase"));

let container = document.getElementById("purchased_vouchers");
      

    voucher.forEach(el => {
        
        let div = document.createElement('div');
        div.setAttribute("class", "voucher");

        let name = document.createElement('p')
        name.innerText = el.name;

        let image = document.createElement('img');
        image.src = el.image;


        let price = document.createElement('h3');
        price.innerText = el.price;

      
        

        div.append(image,name,price);
        
        container.append(div);



    });

