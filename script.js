
document.addEventListener('DOMContentLoaded', () => {
  abrirSeccion('perfil');
});

function abrirSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('activa'));
  const seccion = document.getElementById(id);
  if (seccion) {
    seccion.classList.add('activa');
  }
}

function cambiarColorFondo() {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}
