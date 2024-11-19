
function getCurrentDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `Дата: ${day}.${month}.${year} Час: ${hours}:${minutes}:${seconds}`;
}


const balanceTimestamp = document.getElementById('balanceTimestamp');


const tooltip = document.createElement('span');
tooltip.className = 'tooltip';
balanceTimestamp.appendChild(tooltip);


balanceTimestamp.addEventListener('mouseover', function() {
    tooltip.textContent = getCurrentDateTime();
});


balanceTimestamp.addEventListener('mouseout', function() {
    tooltip.textContent = '';
});


document.getElementById('submit-button').addEventListener('click', function() {
    const inputAmount = document.getElementById('amount-input').value;
    alert('Введене значення для конвертації: ' + inputAmount);
});

// Обробник для другої кнопки
document.getElementById('submit-button2').addEventListener('click', function() {
    const inputAmount2 = document.getElementById('amount-input2').value;
    alert('Введене значення для переказу: ' + inputAmount2);
});

// Обробник для третьої кнопки
document.getElementById('submit-button-bottom').addEventListener('click', function() {
    const inputAmountBottom = document.getElementById('amount-input-bottom').value;
    alert('Введене значення для конвертації: ' + inputAmountBottom);
});

// Обробник для четвертої кнопки
document.getElementById('submit-button4').addEventListener('click', function() {
    const inputAmount3 = document.getElementById('amount-input3').value;
    alert('Введене значення для переказу: ' + inputAmount3);
});






document.getElementById('confirm-button').addEventListener('click', function() {
    alert('Підтвердження виконано!');
});


document.getElementById('cancel-button').addEventListener('click', function() {
    alert('Дія скасована.');
});
