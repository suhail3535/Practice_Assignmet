let form = document.querySelector("form");
let AllData = JSON.parse(localStorage.getItem("student")) || [];

const newdate = new Date().toISOString().split("T")[0];
document.getElementById("Datestart").setAttribute("min", newdate);
const newdate2 = new Date().toISOString().split("T")[0];
document.getElementById("Dateend").setAttribute("min", newdate2);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let obj = {
        uniqueid: form.uniqueid.value,
        name: form.name.value,
        textarea: form.textarea.value,
        designation: document.querySelector('input[name="designation"]:checked')
            .value,
        Datestart: form.Datestart.value,
        Dateend: form.Dateend.value,
        select: form.select.value,
    };
    // console.log(obj)
    if (
        obj.name == "" ||
        obj.uniqueid == "" ||
        obj.textarea == "" ||
        obj.student == "" ||
        obj.employee == "" ||
        obj.select == ""
    ) {
        alert("please fill all the details");
    } else {
        AllData.push(obj);
    }
    localStorage.setItem("student", JSON.stringify(AllData));
    form.reset();
});

console.log(AllData);
