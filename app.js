/*var character = 'maria';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
}); */
/////////////////////////////////////////// for classes
var Payment = /** @class */ (function () {
    function Payment(recipient, // modifiers must always before clients,details,amount 
    details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " is owed php").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
//////////////////////////////////////////////////////
var Invoiced = /** @class */ (function () {
    function Invoiced(client, // modifiers must always before clients,details,amount 
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoiced.prototype.format = function () {
        return "".concat(this.client, " bayad na php").concat(this.amount, " para sa ").concat(this.details);
    };
    return Invoiced;
}());
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
////////////////////////////////////////////
var docOne;
var docTwo;
/*docOne = new Invoiced ('mcod', 'repair',900);
docTwo = new Payment ('codix', 'webdesign', 509);


let docs: HasFormatters[]=[];
docs.push(docOne);
docs.push(docTwo);

console.log(docs); */
/*
const invone = new Invoiced ('Bryce','working na sya', 390 )
const invtwo = new Payment ('Blaise','work work', 402 );

let invoices: Invoiced[]=[];
invoices.push(invone);
//invoices.push(invtwo);

invoices.forEach(inv =>{console.log(inv.client,inv.amount, inv.format());});

console.log(invoices); */
//const anchor= document.querySelector('a')!;
var form = document.querySelector('.new-item-form');
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoiced(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc
    /*type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber */
    );
});
