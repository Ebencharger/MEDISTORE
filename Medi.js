document.getElementById('form').style.display = "none";
let inps = document.querySelectorAll('input');
let buts = document.querySelectorAll('button');
let butds = document.querySelectorAll('butd');
let value, qt;
let minname;
let clik = false;
let sho = false;
let type = false;
let para, price, amount;
amount = 0;
let dg;
let conf = [];
let newd = []
let drugs = [{ name: "Paracetamol", qt: 0, price: 100 }, { name: "Bco", qt: 0, price: 200 }, { name: "Septrin", qt: 0, price: 100 }, { name: "Tetra", qt: 0, price: 400 }, { name: "Chloroquine", qt: 0, price: 50 }, { name: "Chloramphelico", qt: 0, price: 300 }, { name: "Vitamin C Yellow", qt: 0, price: 100 }, { name: "Vitamin C White", qt: 0, price: 120 }, { name: "Flagyl", qt: 0, price: 50 }, { name: "Calcium B3", qt: 0, price: 1200 }, { name: "Amocylin", qt: 0, price: 300 }];

function show() {
    sho = false;
    document.getElementById('table').innerHTML = '';
    document.getElementById('table').innerHTML = `<th id="sn">S/N</><th id="drugname">NAME</><th>QUANTITY</> <th>PRICE</> <th id="act">ACTION</>`
    amount = 0;
    document.getElementById('sum').innerHTML = "#" + amount;
    for (let b = 0; b < newd.length; b++) {
        document.getElementById('table').innerHTML += `<td id="sn">${b + 1}</td><td>${newd[b].value}</td> <td>${newd[b].qt} * #${newd[b].price / newd[b].qt}</td><td>#${newd[b].price}</td><td class="butt" id="butd"><button id="but" onclick="del(${b})">Delete</button></td>`;
    }
    for (let j = 0; j < newd.length; j++) {
        amount = amount + newd[j].price;
        document.getElementById('sum').innerHTML = "#" + amount
        console.log(`${j} ${amount}`);
    }
}
show();
for (let l = 0; l < buts.length; l++) {
    buts[l].addEventListener('click', add)
}
for (let j = 0; j < inps.length; j++) {
    inps[j].addEventListener('input', getdetail)
}
function getdetail(a) {
    type = true;
    if (a.target.id == "name") {
        value = a.target.value
    }
    else if (a.target.id == "qt") {
        if (document.getElementById('name').value == "") {
            document.getElementById('name').value = "PLEASE TYPE SOMETHING HERE!";
        }
        else {
            qt = a.target.value
            a = typeof (qt);
            console.log(a);
        }
    }
}
function del(a) {
    newd.splice(a, 1)
    show();
}

function add(a) {
    clik = true;
    if (a.target.id == "add") {
        if (document.getElementById('name').value != "" && document.getElementById('qt').value == "") {
            document.getElementById('qt').value = "PLEASE TYPE SOMETHING HERE!";
        }
        else if (document.getElementById('name').value == "" && document.getElementById('qt').value == "") {
            document.getElementById('qt').value = "PLEASE TYPE SOMETHING HERE!";
            document.getElementById('name').value = "PLEASE TYPE SOMETHING HERE!";
        }
        else {
            drugs.find(function (min, i) {

                if (value == min.name || value == min.name.toLowerCase()) {
                    console.log(i);
                    document.getElementById('name').value = ""
                    document.getElementById('qt').value = ""
                    value = min.name;
                    price = Number(min.price * qt);
                    newd.push({ value, qt, price });
                    show();
                }
                else if (i == drugs.length && (value != min.name || value != min.name.toLowerCase())) {
                    document.getElementById('name').value = "No such Drug"
                    show();
                }
            })
        }
    }
    else if (a.target.id == "plus") {
        document.getElementById('form').style.display = "inherit";
    }

}
function receipt(params) {
    let b = (prompt("Customer Name?")).toString();
    document.getElementById('form').style.display = "none";
    document.getElementById('date').innerHTML = "";
    document.getElementById('date').innerHTML = Date();
    document.getElementById('act').style.display = "none";
    document.getElementById('plus').style.display = "none";
    document.getElementById('gen').style.display = "none";
    document.getElementById('table').style.marginLeft = "17%"
    document.getElementById('date').style.display = "flex"
    document.getElementById('costname').innerHTML = `<p style="text-decoration:underline">Customer's Name: ${b}</p>`
    let butds = document.querySelectorAll('#butd')
    console.log(butds);
    for (let i = 0; i < butds.length; i++) {

        butds[i].style.display = 'none'
        console.log(butds[i].id);

    }

    window.print();
    window.location = "Medi.html"
}
















