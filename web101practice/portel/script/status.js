let AllData = JSON.parse(localStorage.getItem("student")) || [];
let tbody = document.querySelector("tbody");
function displayTable(data) {
    tbody.innerHTML = null;
    data.forEach(function (ele) {
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        id.innerText = ele.uniqueid;
        let name = document.createElement("td");
        name.innerText = ele.name;
        let status = document.createElement("td");
        status.innerText = ele.status;

        tr.append(
            id,
            name,


            
            Rejected,
            Acepted
        );
        tbody.append(tr);
    });
}

displayTable(AllData);
