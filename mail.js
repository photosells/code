const firebaseConfig = {
    apiKey: "AIzaSyDNr7c5rNsA16Pv_-VFjx3CyBx0_8YK5E8",
    authDomain: "contactform-5bc79.firebaseapp.com",
    databaseURL: "https://contactform-5bc79-default-rtdb.firebaseio.com",
    projectId: "contactform-5bc79",
    storageBucket: "contactform-5bc79.appspot.com",
    messagingSenderId: "92310026877",
    appId: "1:92310026877:web:320bb2a8bbcdeaa6960f14"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var password = getElementVal("password");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var phone = getElementVal("phone");
    var company = getElementVal("company");
  
    saveMessages(password, emailid, msgContent, phone, company);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = ( password, emailid, msgContent, phone, company) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      password: password,
      emailid: emailid,
      msgContent: msgContent,
      phone: phone,
      company: company,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };