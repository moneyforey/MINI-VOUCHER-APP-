let container = document.getElementById("voucher_list");

let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

async function getData(){
   
    
        let res = await fetch(url);

    let data = await res.json();

    // console.log(data);

    append(data[0].vouchers);
   

}


function append(data){
      

    data.forEach(el => {
        
        let div = document.createElement('div');
        div.setAttribute("class", "voucher");

        let name = document.createElement('p')
        name.innerText = el.name;

        let image = document.createElement('img');
        image.src = el.image;


        let price = document.createElement('h3');
        price.innerText = el.price;

        let btn = document.createElement('button');
        btn.innerText = "Buy";
        btn.setAttribute("class", "buy_voucher");
        btn.addEventListener('click', function(){
            buyVoucher(el);
        })

        div.append(image,name,price,btn);
        
        container.append(div);



    });
}

getData();

let amount = JSON.parse(localStorage.getItem("user"));
console.log(amount);
let sA = document.getElementById('wallet_balance');
function showAmount(){
    

    sA.innerText = amount.wallet;
}

showAmount();

let purchaseV = JSON.parse(localStorage.getItem("purchase")) || [];
function buyVoucher(el){
    if(amount.wallet< el.price){
        alert("Sorry! insufficient balance");

    }
    else{
        amount.wallet = amount.wallet - el.price;
        localStorage.setItem("user", JSON.stringify(amount));
        purchaseV.push(el);
        localStorage.setItem("purchase" ,JSON.stringify(purchaseV));
        sA.innerText = amount.wallet;
        alert("Hurray! purchase successful");
    }
}