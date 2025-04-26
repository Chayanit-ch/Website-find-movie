document.addEventListener("DOMContentLoaded",function(){
    let count = localStorage.getItem('visitorCount') || 0;
    count++;

    localStorage.setItem('visitorCount', count);

    document.getElementById('visitorCount').innerText = count;
    UpdateTime()
    initSearchFunction()

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

function initSearchFunction() {
    const searchBox = document.querySelector('.searchbar');
    const searchInput = searchBox.querySelector('input[type="text"]');
    const searchButton = searchBox.querySelector('button');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.box1');

        products.forEach(product => {
            const title = product.querySelector('h1').textContent.toLowerCase();
            if (title.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
}