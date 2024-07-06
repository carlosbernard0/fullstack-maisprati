class Contact{
    constructor(name, type, numberCellphone, mail){
        this.name = name;
        this.type = type;
        this.numberCellphone = numberCellphone;
        this.mail = mail;
    }

    validateData(){
        for (const i in this) {
            if (this[i] === undefined || this[i] === ""){
                return false;
            }
        }
        return true
    }
}

// BACK-END
class Database{
    constructor(){
        const id = window.localStorage.getItem('id');

        if(id == null){
            localStorage.setItem('id',0);

        }
    }

    createContact(contact){
        const id = getNextId();
        window.localStorage.setItem(id, JSON.stringify(contact));
        window.localStorage.setItem('id', id);

    }


    getContacts(){
        const contacts = new Array();
        const id = localStorage.getItem('id');

        for (let i = 0; i <= id ; i++) {
            const contact = JSON.parse(localStorage.getItem(i));

            if(contact == null){
                continue;
            }

            contact.id = i;

            contacts.push(contact)
        }

        return contacts;
    }


    removeContact(id){
        localStorage.removeItem(id)
    }

    searchContacts(contact){
        let filteredContacts = Array()

        filteredContacts = this.getContacts

        if(contact.name !== ''){
            filteredContacts = filteredContacts.filter(c => c.name == contact.name )
        }
        if(contact.type !== ''){
            filteredContacts = filteredContacts.filter(c => c.type == contact.type )
        }
        if(contact.numberCellphone !== ''){
            filteredContacts = filteredContacts.filter(c => c.numberCellphone == contact.numberCellphone )
        }
        if(contact.mail !== ''){
            filteredContacts = filteredContacts.filter(c => c.mail == contact.mail )
        }

        return filteredContacts
    }
}

const database = new Database();

function getNextId(){
    const id = window.localStorage.getItem('id');
    return parseInt(id)+1;
}

// create
function registerContact(){
    const name = window.document.getElementById('name').value;
    const type = window.document.getElementById('contact-type').value;
    const numberCellphone = window.document.getElementById('number-cellphone').value;
    const mail = window.document.getElementById('mail').value;

    const contact = new Contact(name, type, numberCellphone, mail);

    if(contact.validateData){
        database.createContact(contact);
    }   
}

function  loadContacts(contacts = Array()){

    if(contacts.length == 0){
        contacts = database.getContacts()
    }

    const  listContacts = window.document.getElementById('listContacts')
    listContacts.innerHTML = ''

    contacts.forEach((t)=>{
        const row = listContacts.insertRow()

        row.insertCell(0).innerHTML = `${t.name}`;
        
        switch(t.type){
            case '1': t.type = 'Profissional';
            break;
            case '2': t.type = 'Pessoal';
                break;
        }
        row.insertCell(1).innerHTML = t.type;
        row.insertCell(2).innerHTML = t.numberCellphone;

        const btn = document.createElement('button');
        btn.className = 'btn btn-danger';
        btn.id = t.id
        btn.innerHTML = 'Delete'
        btn.onclick = () => {
            const id =t.id
            database.removeContact(id)
            window.location.reload()
        }
        
        row.insertCell(3).append(btn);
    })
}

// delete all
function removeContacts(){
    localStorage.clear();
}

// delete item
function removeItem(){
    const name = window.document.getElementById('name').value;

    for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage[i].getItem();
        
    }
}


function searchContact(){
    const name = window.document.getElementById('name').value;
    const type = window.document.getElementById('contact-type').value;
    const numberCellphone = window.document.getElementById('number-cellphone').value;
    const mail = window.document.getElementById('mail').value;

    const contact = new Contact(name, type, numberCellphone, mail);

    const contacts = database.searchContacts(contact)

    loadContacts()
}

document.addEventListener('DOMContentLoaded', () =>{
    if(document.body.contains(document.getElementById('listContacts'))){
        loadContacts()
    }
})