const sendbutton = document.getElementById('sendbutton');

const validate = (e) => {
e.preventDefault();
const name= document.getElementById('firstname');
/* const name2 = document.getElementById('lastname');
const email1 = document.getElementById('email');
const phone1 = document.getElementById('phone');
console.log(firstname)
 */
if (firstname.value === "") {
    console.log("paso por adentro");
    alert("Por favor, escribe tu nombre de usuario.");
    firstname.focus();
    return false;
  }

  return true;
}

sendbutton.addEventListener('click', validate);
console.log("ejecuto script");

