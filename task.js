document.addEventListener('DOMContentLoaded', function () {
    const modalMain = document.getElementById('modal_main');
    const modalSuccess = document.getElementById('modal_success');
    const modalCloseButtons = document.querySelectorAll('.modal__close');
    const showSuccessButton = document.querySelector('.show-success');

    // Открыть окно #modal_main при загрузке страницы
    modalMain.classList.add('modal_active');

    // Закрыть активное окно при нажатии на элементы с классом modal__close
    modalCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            modalMain.classList.remove('modal_active');
            modalSuccess.classList.remove('modal_active');
        });
    });

    // Показать окно #modal_success при нажатии на элемент с классом show-success
    showSuccessButton.addEventListener('click', function (e) {
        e.preventDefault();
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    });
});