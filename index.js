function styledisplay() {
    document.getElementById("home").style.color="#fff48e";
    document.getElementById("abouts").style.color="#fff";
    document.getElementById("service").style.color="#fff";
    document.getElementById("teams").style.color="#fff";
    document.getElementById("review").style.color="#fff";
    document.getElementById("books").style.color="#fff";
    document.getElementById("feat").style.color="#fff";
}
function aboutdisplay() {
      document.getElementById("abouts").style.color="#fff48e";
      document.getElementById("home").style.color="#fff";
      document.getElementById("service").style.color="#fff";
      document.getElementById("teams").style.color="#fff";
      document.getElementById("review").style.color="#fff";
      document.getElementById("books").style.color="#fff";
      document.getElementById("feat").style.color="#fff";
}
function servicedisplay() {
    document.getElementById("service").style.color="#fff48e";
    document.getElementById("home").style.color="#fff";
    document.getElementById("abouts").style.color="#fff";
    document.getElementById("teams").style.color="#fff";
    document.getElementById("review").style.color="#fff";
    document.getElementById("books").style.color="#fff";
    document.getElementById("feat").style.color="#fff";
}
function teamsdisplay() {
    document.getElementById("teams").style.color="#fff48e";
    document.getElementById("home").style.color="#fff";
    document.getElementById("abouts").style.color="#fff";
    document.getElementById("service").style.color="#fff";
    document.getElementById("review").style.color="#fff";
    document.getElementById("books").style.color="#fff";
    document.getElementById("feat").style.color="#fff";
}
function reviewdisplay() {
    document.getElementById("review").style.color="#fff48e";
    document.getElementById("home").style.color="#fff";
    document.getElementById("abouts").style.color="#fff";
    document.getElementById("service").style.color="#fff";
    document.getElementById("teams").style.color="#fff";
    document.getElementById("books").style.color="#fff";
    document.getElementById("feat").style.color="#fff";
}
function bookdisplay() {
    document.getElementById("books").style.color="#fff48e";
    document.getElementById("home").style.color="#fff";
    document.getElementById("abouts").style.color="#fff";
    document.getElementById("service").style.color="#fff";
    document.getElementById("teams").style.color="#fff";
    document.getElementById("review").style.color="#fff";
    document.getElementById("feat").style.color="#fff";
}
function featuredisplay() {
    document.getElementById("feat").style.color="#fff48e";
    document.getElementById("home").style.color="#fff";
    document.getElementById("abouts").style.color="#fff";
    document.getElementById("service").style.color="#fff";
    document.getElementById("teams").style.color="#fff";
    document.getElementById("review").style.color="#fff";
    document.getElementById("books").style.color="#fff";
}
matchMedia("(max-width: 995px)").matches;
function menubtn() {
    document.getElementById("myDiv").style.display="flex"
    document.getElementById("menu").style.display="none"
    document.getElementById("cancel").style.display="flex"

}
function cancelbtn() {
    document.getElementById("myDiv").style.display="none"
    document.getElementById("menu").style.display="flex"
    document.getElementById("cancel").style.display="none"
}

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br>  Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chibuzor.john.2018@gmail.com",
        Password : "14371953AE172D54D0299E733D91FE657326",
        To : 'chibuzor.john.2018@gmail.com',
        From : "chibuzor.john.2018@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
      }
    );
}



// function checkInputs() {
//     const items = document.querySelectorAll(".item");

//     for (const item of items) {
//         if (item.value == "") {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }

//         item.addEventListener("keyup", () => {
//             if (item.value != "") {
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             }
//             else {
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }
// }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // checkInputs();

    sendEmail();
    form.reset();
    return false;
});