let count = 1;
let name = document.querySelector(".name");
let surName = document.querySelector(".surname");
let age = document.querySelector(".age");
let button = document.querySelector(".btn");
let table = document.querySelector("table");

button.addEventListener("click",function(){
    if ((name.value ==null || name.value == "") || (surName.value ==null || surName.value == "") || (age.value == null || age.value == "")) {
        alert("Xanalar bos ola bilmez...");
        return;
    }
    if (!isNaN(name.value) || !isNaN(surName.value)) {
        alert("Ad veya soyad reqem ola bilmez!...");
        return;
    }
    if (isNaN(age.value)) {
        alert("Yas Herf ola bilmez...");
        return;
    }
    let newtr  = document.createElement("tr");
    let nameTd = document.createElement("td");
    nameTd.innerText = name.value;

    let surnameTd = document.createElement("td");
    surnameTd.innerText = surName.value;

    let ageTd = document.createElement("td");
    ageTd.innerText = age.value;
    
    newtr.append(nameTd,surnameTd,ageTd);
    table.appendChild(newtr)
})