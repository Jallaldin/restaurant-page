import dinerImage from './images/diner.png'

export default function ContactPage() {

    const content = document.querySelector('.content');

    const contact = document.createElement('div');
    contact.classList.add('contact-page');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactImage = document.createElement('img');
    contactImage.classList.add('contact-image');
    contactImage.src = dinerImage;
    contactImage.alt = 'Diner Image';

    contactContainer.appendChild(contactImage);


    const contactTitleDiv = document.createElement('div');
    contactTitleDiv.classList.add('contact-title-div');

    const contactTitle = document.createElement('h1');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = 'Contact Us';

    contactTitleDiv.appendChild(contactTitle);
    contactContainer.appendChild(contactTitleDiv);

    contactContainer.append(
    createInfoContainer(null, 'We would love to hear from you! Please reach out to us with any questions, comments, or feedback.', 'testing@test.com', '123-456-7890'),
    createInfoContainer('Location', 'Find us here:', null, null, '223 Baker Street, London, UK'),
    createInfoContainer('Opening Hours:', null, null, null, null, opening_hours),
    )
    contact.appendChild(contactContainer);
    content.appendChild(contact);

}

const opening_hours = {
    Monday: '10am - 6pm',
    Tuesday: '10am - 6pm',
    Wednesday: '10am - 3pm',
    Thursday: '10am - 6pm',
    Friday: '10am - 9pm',
    Saturday: '10am - 9pm',
    Sunday: '12pm - 9pm'
};

function createInfoContainer(title, text, email, phone, address, opening_hours) {
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const details = document.createElement('div');
    details.classList.add('info-details');
    

    // Title
    if (title) {
        const infoTitle = document.createElement('h2');
        infoTitle.classList.add('info-title');
        infoTitle.textContent = title;
        infoContainer.appendChild(infoTitle);
    }

    // Text
    if (text) {
        const infoText = document.createElement('p');
        infoText.classList.add('info-text');
        infoText.textContent = text;
        infoContainer.appendChild(infoText);
    }

    // Email
    if (email) {
        const infoEmail = document.createElement('p');
        infoEmail.classList.add('info-email');
        infoEmail.textContent = `Email: ${email}`;
        details.appendChild(infoEmail);
    }

    // Phone
    if (phone) {
        const infoPhone = document.createElement('p');
        infoPhone.classList.add('info-phone');
        infoPhone.textContent = `Phone: ${phone}`;
        details.appendChild(infoPhone);
    }

    // Address
    if (address) {
        const infoAddress = document.createElement('p');
        infoAddress.classList.add('info-address');
        infoAddress.textContent = `Address: ${address}`;
        infoContainer.appendChild(infoAddress);
    }

    // Opening Hours
    if (opening_hours) {
        const infoHours = document.createElement('div');
        infoHours.classList.add('info-hours');

        for (const [day, hours] of Object.entries(opening_hours)) {
            const dayHours = document.createElement('p');
            dayHours.textContent = `${day}: ${hours}`;
            infoHours.appendChild(dayHours);
        }

        infoContainer.appendChild(infoHours);
    }
    infoContainer.appendChild(details);
    return infoContainer;
}