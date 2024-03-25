let countdown;
let title = '';

function startCountdown() {
    title = document.getElementById('titleInput').value;
    const dateInput = document.getElementById('dateInput').value;
    const targetDate = new Date(dateInput).getTime();

    if (isNaN(targetDate)) {
        alert('Please enter a valid date and time.');
        return;
    }

    updateCountdown(targetDate);

    countdown = setInterval(() => {
        updateCountdown(targetDate);
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdown);
}

function resetCountdown() {
    clearInterval(countdown);
    document.getElementById('timer').textContent = '';
}

function updateCountdown(targetDate) {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        document.getElementById('timer').textContent = 'Countdown complete!';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownDisplay = `${title} in - ${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.getElementById('timer').textContent = countdownDisplay;
}
