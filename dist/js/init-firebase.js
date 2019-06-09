// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvQwSb2flGB-Fch6DjSKW-bK2paAbdXMM",
    authDomain: "myportfolio-bcc38.firebaseapp.com",
    databaseURL: "https://myportfolio-bcc38.firebaseio.com",
    projectId: "myportfolio-bcc38",
    storageBucket: "myportfolio-bcc38.appspot.com",
    messagingSenderId: "889941337284",
    appId: "1:889941337284:web:c82320fe618d7a3c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
let messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get Value
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();

}

// Function to get form value
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save the message to firebase
function saveMessage(name, company, email, phone, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}