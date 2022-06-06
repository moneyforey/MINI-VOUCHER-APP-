

function User(name,email,address,wallet){
    this.name = name;
    this.email = email;
    this.address = address;
    this.wallet = wallet;
}

function addAmount(){
    event.preventDefault();
   
   
    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let address = document.getElementById("address").value;

    let wallet = document.getElementById("amount").value;

    let user = new User(name,email,address,wallet)

    console.log(user);

    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("amount").value = "";

}