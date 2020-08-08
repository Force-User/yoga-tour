const headerBtn = document.querySelector(".header-content__button");
headerBtn.addEventListener('click', showForm);
const mainForm = document.querySelector('.main-form');
mainForm.addEventListener('click', hideForm);









function showForm() {
    document.querySelector('.main-form').style.display = "flex";
}

function hideForm() {
    document.querySelector('.main-form').style.display = 'none';
}