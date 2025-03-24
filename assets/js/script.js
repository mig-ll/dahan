// - - - - - - - - - - - - - - - - - - - - - - - - - - - GLOBALS
const transitionTime = 220;

document.addEventListener("DOMContentLoaded", () => {
  // LOADER
  const loaderE = document.getElementById('loader');
  loaderE.classList.add('out');
  setTimeout(() => {
    loaderE.classList.add('hidden');
  }, transitionTime);

  // openDialog('#dialogInfo');
  closeDialog();

  // Altura navegador
});




let wH = 0;
console.log('wH = '+wH);
function setWH() {
  wH = window.innerHeight;
}
setWH(wH);
console.log('wH = '+wH);



window.onscroll = function () {
  // shrinkMenu();
  // auto-detect active menu button
  watchMenu();
};


/* SRHRINK MENU
function shrinkMenu() {
  const menu = document.getElementById("header");
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    menu.classList.add("shrink");
  } else {
    menu.classList.remove("shrink");
  }
}
*/


// set active menu button
function setMenu(section) {
  let menuBtns = document.querySelectorAll('.btn-menu-txt');
  menuBtns.forEach(mBtn => {
    mBtn.classList.remove('active');
  })
  document.getElementById('m-' + section).classList.add('active');
}

// auto-detect active menu button
function watchMenu() {
  let wTop = window.scrollY;
  let nosotrosBtn = document.getElementById('m-nosotros');
  let nosotrosTop = document.getElementById('nosotros-anchor').offsetTop;

  let usTop = nosotrosTop - wTop;
  // console.log( 'usTop = ' + usTop );

  if ( usTop <= 0 && !nosotrosBtn.classList.contains('active') ) {
    // console.log('NO');
    setMenu('nosotros');
  }
}

function validateForm() {
  const formulario = document.getElementById("contactForm");
  const botonEnviar = document.getElementById("enviar");

  formulario.addEventListener("input", () => {
    // Habilita el botón solo si el formulario es válido
    botonEnviar.disabled = !formulario.checkValidity();
  });
}

function openDialog(id) {
  let dialog = document.querySelector(id);
  dialog.showModal();
  dialog.classList.add('open');
  document.body.style.paddingRight = (window.innerWidth - document.documentElement.clientWidth) + "px";
  document.body.classList.add('dialogOpen');
  setTimeout(function () {
    dialog.classList.add('shown');
  }, transitionTime)
}
function closeDialog() {
  let dialogOpen = document.querySelector('dialog');
  dialogOpen.classList.remove('shown');
  setTimeout(function () {
    dialogOpen.classList.remove('open');
    document.body.classList.remove('dialogOpen');
    document.body.style.paddingRight = 0;
    setTimeout(function () {
      dialogOpen.close();
    }, transitionTime)
  }, transitionTime)
}


document.getElementById("enviar").onclick = () => {
  sendData();
}

function sendData() {
  const loaderPage = document.getElementById('loader-page');
  loaderPage.classList.remove('hidden--loader');
  const botonEnviar = document.getElementById("enviar");

  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var company = document.getElementById("company").value;
  var phone = document.getElementById("phone").value;
  var mail = document.getElementById("mail").value;
  var message = document.getElementById("message").value;

  console.log(name, lastname, company, phone, mail, message);

  // Eliminar cuando se descomente la peticion
  document.getElementById("contactForm").reset();
  botonEnviar.disabled = true;
  setTimeout(function () {
    loaderPage.classList.toggle('hidden--loader')
  }, 1000)


  // Descomentar cuando se agregue la funcionalidad
  // fetch("https://jsonplaceholder.typicode.com/todos", {
  //   method: "GET",
  //   body: JSON.stringify({
  //     name: name,
  //     lastname: lastname,
  //     company: company,
  //     phone: phone,
  //     mail: mail,
  //     message: message
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8"
  //   }
  // }).then(res => {
  //   loaderPage.classList.toggle('hidden--loader')
  //   console.log(res);
  //   document.getElementById("contactForm").reset();
  //   botonEnviar.disabled = true;
  //
  //   Notiflix.Report.success(
  //       '¡Registro exitoso!',
  //       'Se envió correctamente la información.',
  //       'Aceptar',
  //   );
  // }).catch(err => {
  //   loaderPage.classList.toggle('hidden--loader')
  //   botonEnviar.disabled = true;
  //   console.log(err);
  //   Notiflix.Report.failure(
  //       '¡Algo salió mal!',
  //       'Favor de intentar más tarde.',
  //       'Aceptar',
  //   );
  // });
}

validateForm();