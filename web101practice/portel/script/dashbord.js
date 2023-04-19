let AllData = JSON.parse(localStorage.getItem("student")) || [];
let tbody = document.querySelector("tbody");
function displayTable(data) {
    tbody.innerHTML = null;
    data.forEach(function (ele,index) {
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        id.innerText = ele.uniqueid;
        let name = document.createElement("td");
        name.innerText = ele.name;
        let reason = document.createElement("td");
        reason.innerText = ele.textarea;
        let designation = document.createElement("td");
        designation.innerText = ele.designation;
        let Datestart = document.createElement("td");
        Datestart.innerText = ele.Datestart;
        let Dateend = document.createElement("td");
        Dateend.innerText = ele.Dateend;

        let select = document.createElement("td");
        select.innerText = ele.select;
        let Rejected = document.createElement("button");
        Rejected.innerText = "Rejected";
        Rejected.style.backgroundColor = "red";
        Rejected.addEventListener("click", function() {
            deleteData(AllData,index);
        })

        let Acepted = document.createElement("button");
        Acepted.innerText = "Accepted";
        Acepted.style.backgroundColor = "green";
        

        tr.append(
            id,
            name,
            reason,
            designation,
            Datestart,
            Dateend,
            select,
            Rejected,
            Acepted
        );
        tbody.append(tr);
    });
}

displayTable(AllData);

function addData(key, value) {
    let newData = JSON.parse(localStorage.getItem(key)) || [];
    newData.push(value);
    localStorage.setItem(key, JSON.stringify(newData));
}

function deleteData(data, index) {
    data.splice(index, 1);

    localStorage.setItem("student", JSON.stringify(data));

    displayTable(data);
}

let filter = document.getElementById("filter")
filter.addEventListener("change", function () {
if (filter.value == "" || filter.value == "select") {
    displayTable(AllData);
} else {
    let filtervalue = AllData.filter(function (ele) {
        return ele.designation === filter.value;
    });
    displayTable(filtervalue);
}

})

function search() {
    let data = document.querySelector("input").value
    console.log(data)
    let newdata = AllData.filter(function (ele) {
        return ele.name.toLowerCase().includes(data.toLocaleLowerCase())
    })
    displayTable(newdata)
}