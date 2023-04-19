let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {
        brand: form.brand.value,
        transmission: form.transmission.value,
        purchase: form.purchase.value,
        driven: form.driven.value,
        description: form.description.value,
        price: form.price.value,
    };
    post_user_Data(obj);
    setTimeout(function () {
        console.log(obj);
    }, 1000); // delay for 1 second
});

async function post_user_Data(obj) {
    try {
        let postData = await fetch("http://localhost:8080/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        console.log(postData);
    } catch (error) {
        alert(error.message);
    }
}



