const tg = window.Telegram.WebApp;
tg.expand(); // Развернуть на весь экран

const tg_id = tg.initDataUnsafe.user.id;
const username = tg.initDataUnsafe.user.first_name;

// Загрузка данных игрока с сервера
async function loadPlayerData() {
    // Правильный вариант:
const response = await fetch(`https://fulminic-uropygial-katharyn.ngrok-free.dev/player/${tg_id}?username=${username}`);
    const data = await response.json();

    document.getElementById('username').innerText = data.username;
    document.getElementById('level').innerText = data.level;
    document.getElementById('rank').innerText = data.rank;
    document.getElementById('xp').innerText = data.xp;

    // Рассчитываем ширину полоски XP
    document.getElementById('xp-fill').style.width = (data.xp % 100) + '%';
}

function startTraining() {
    alert("Скоро: Первая тренировка слов!");
}

loadPlayerData();
