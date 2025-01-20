// Получаем элементы
const betButton = document.getElementById('bet-button');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.modal-close');
const submitBetButton = document.getElementById('submit-bet');
const betMessage = document.getElementById('bet-message');

// Функция для открытия модального окна
function openModal() {
  modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
}

// Открываем модальное окно
betButton.onclick = openModal;

// Закрываем модальное окно
closeButton.onclick = closeModal;

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Обработка отправки ставки
submitBetButton.onclick = function() {
  const betAmount = document.getElementById('bet-amount').value;
  if (betAmount) {
    betMessage.style.display = 'block';
    setTimeout(function() {
      betMessage.style.display = 'none';
    }, 3000); // Сообщение исчезает через 3 секунды
    closeModal();
  } else {
    alert('Пожалуйста, введите сумму ставки.');
  }
}


