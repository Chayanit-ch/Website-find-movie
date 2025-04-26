document.addEventListener("DOMContentLoaded",function(){
    let count = localStorage.getItem('visitorCount') || 0;
    count++;

    localStorage.setItem('visitorCount', count);

    document.getElementById('visitorCount').innerText = count;
    UpdateTime()

    document.getElementById('menu-icon').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('active');
    });
})

function UpdateTime(){
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    const now = new Date()

    const date = now.toLocaleDateString('th-TH', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });

    const time = now.toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    dateElement.textContent = date;
    timeElement.textContent = time;
}
setInterval(UpdateTime,1000)

