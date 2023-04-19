let newData = [];
let container = document.getElementById("container");
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        newData = data;
        console.log(data, "all data");
        displayData(data);
    });




function displayData(data) {
    data.forEach(function (ele) {
        container.innerHTML = null;
        let div = document.createElement("div");
        let category = document.createElement("h1");
        category.innerText = ele.category;
        let price = document.createElement("h1");
        price.innerText = ele.price;

        div.append(category,price);
        container.append(div);
    });
}

