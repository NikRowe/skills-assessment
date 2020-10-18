const CONTACTS = [
    {
        id: 0,
        name: "Christian",
        status: "🟢",
        email: "christian@yahoo.com",
        phone: "323-555-1234",
        address: "244 W. Main, Spokane, WA 99201"
    },
    {
        id: 1,
        name: "Rich",
        status: "🟢",
        email: "rich@tripod.com",
        phone: "323-555-1234",
        address: "1600 Pennsylvania Av NW, Washington, DC 20500"
    },
    {
        id: 2,
        name: "Scott",
        status: "🟢",
        email: "scott@mailinator.com",
        phone: "323-555-1234",
        address: "244 W. Main, Spokane, WA 99201"
    },
    {
        id: 3,
        name: "Danny",
        status: "🟢",
        email: "danny@hotmail.com",
        phone: "323-555-1234",
        address: "244 W. Main, Spokane, WA 99201"
    },
    {
        id: 4,
        name: "Taka",
        status: "🔴 ",
        email: "taka@myspace.com",
        phone: "323-555-1234",
        address: "244 W. Main, Spokane, WA 99201"
    },
    {
        id: 5,
        name: "Tim",
        status: '🟡',
        email: "tim@netscape.com",
        phone: "323-555-1234",
        address: "244 W. Main, Spokane, WA 99201"
    },
    {
        id: 6,
        name: "Patrick",
        status: "🟢",
        email: "patrick@live.com",
        phone: "323-555-1234",
        address: "244 W. Main, Spokane, WA 99201"
    },
    {
        id: 7,
        name: "Jacques",
        status: "🟡",
        email: "jacques@aol.com",
        phone: "323-555-1234",
        address: "244 W. Main, Spokane, WA 99201"
    }
];


const contactsList = document.querySelector('.contacts')
const infoSelector = document.querySelector('#infoSelector')
let contactInfo


contactsList.innerHTML = CONTACTS.map(contact => {
    return `
            <div class="contact">
                <div class="status contactItem">
                    <p>${contact.status}</p>
                </div>
                <div class="name contactItem">
                    <p class="nameP">${contact.name}</p>
                </div>
                <div class="info contactItem">
                    <p>${contact.email}</p>
                </div> 
                <div class="contactItem popUP">
                    <p class="infoP email">${contact.email}</p>
                    <p class="infoP phone">${contact.phone}</p>
                    <p class="infoP address">${contact.address}</p>
                </div>
            </div>`
}).join('')

function updateInfo(e) {
    contactsList.innerHTML = CONTACTS.map(contact => {
        infoSelector.value === 'email'
            ? contactInfo = contact.email
            : contactInfo = contact.phone

        return `
                <div class="contact">
                    <div class="status contactItem">
                        <p>${contact.status}</p>
                    </div>
                    <div class="name contactItem">
                        <p class="nameP">${contact.name}</p>
                    </div>
                    <div class="info contactItem">
                        <p>${contactInfo}</p>
                    </div> 
                    <div class="contactItem popUP">
                        <p class="infoP email">${contact.email}</p>
                        <p class="infoP phone">${contact.phone}</p>
                        <p class="infoP address">${contact.address}</p>
                    </div>
                </div>`
    }).join('')
}

infoSelector.addEventListener('change', updateInfo)