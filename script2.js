const form = document.querySelector("form");
const fullName= document.getElementById("name");
const mess= document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Message: ${ mess.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "joadamu@gmail.com",
        Password : "353D486A279DB38FAC3D3AEDD1D746158B4E",
        To : 'joadamu@gmail.com',
        From : "joadamu@gmail.com",
        Subject : mess.value,
        Body : bodyMessage
    }).then(

      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Succes !",
                text: "Mesaj trimis cu succes!",
                icon: "Succes"
              });
      }

    }


    );
}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

    
});