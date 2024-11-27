

interface HasFormatters{
    format():string;}
/////////////////////////////////////////// for classes
class Payment implements HasFormatters{
    constructor(
        readonly recipient: string, // modifiers must always before clients,details,amount 
        private details: string,
        public amount : number
    ){
       
    }

    format(){
        return `${this.recipient} is owed php${this.amount} for ${this.details}`;
    }
}
//////////////////////////////////////////////////////
class Invoiced implements HasFormatters{
    constructor(
        readonly client: string, // modifiers must always before clients,details,amount 
        private details: string,
        public amount : number
    ){
       
    }

    format(){
        return `${this.client} bayad na php${this.amount} para sa ${this.details}`;
    }
}

class ListTemplate {
    constructor (private container: HTMLUListElement){}
    render(item:HasFormatters,heading:string, pos: 'start'|'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');

        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if (pos ==='start'){
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }


    }
}

////////////////////////////////////////////
let docOne: HasFormatters;
let docTwo: HasFormatters;

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

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type =document.querySelector('#type') as HTMLSelectElement;
const tofrom =document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list =new ListTemplate (ul);

form.addEventListener('submit',(e:Event)=>{e.preventDefault();

let doc: HasFormatters;
if (type.value ==='invoice'){
    doc = new Invoiced(tofrom.value,details.value, amount.valueAsNumber)
}
    else{
    doc = new Payment(tofrom.value,details.value, amount.valueAsNumber)
    }

    list.render(doc,type.value,'end');
    console.log( doc
        /*type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber */
    )
});