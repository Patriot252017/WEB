function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
    const date = now.toLocaleDateString('ru-RU', options);
    const time = now.toLocaleTimeString('ru-RU');
    document.getElementById('datetime').textContent = `${date} ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();