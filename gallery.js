const allImages = [
    { name: '2021.05.24 Punx Picnic 9.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2021.12.11 Pizzza@Maze.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2022.02.27 Хрибогон @ Строежа.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2022.05.04 Азнепия @ Строежа.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2022.05.19 @ Безкрай.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2022.05.28 Рядка Порода @ Maze.jpg', category: 'concerts', title: 'Live in Sofia' },   
    { name: '2022.08.04 @BEAT.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2022.09.21 Superhiks @ BEAT.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2022.11.11 @ Maze.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2023.01.14 @ Черепите.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2023.04.08 oXo @ Maze.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2023.04.28 KotTakoa @ ThePit.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2023.06.10 ToyLetters @ Mixtape.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2023.08.27 БългарСка @ Grindhouse.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2023.09.29 FlyTheFlag @ ThePit.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2023.11.11 RaduRD @ Maze.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2023.12.08 ToyLetters @ Maze.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2024.01.13 НащеХора @ ThePit.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2024.02.08 ToyLetters @ ThinRedLine.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2024.05.31 CheeseHeads @ ThePit.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2024.10.18 RD @ ThePit.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2024.10.28 The Toasters @ ThePit.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2024.11.30 Adams.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2024.12.20 @ Pit.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2024.12.28 @ Shumen.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2025.02.25 @ Carve.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2025.04.26 @ Pit.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2025.10.25 Punky Blues.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2025.12.05 Зимен Дъжд, НаштеХора @ThePit.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: '2026.02.21 Toy Letters @ Carve.jpg', category: 'concerts', title: 'Live in Sofia' },
    { name: 'Kolyo.jpg', category: 'members', title: 'Member' },
    { name: 'Murphy.jpg', category: 'members', title: 'Member' },
    { name: 'Emo.jpg', category: 'members', title: 'Member' },
    { name: 'Niki.jpg', category: 'members', title: 'Member' },
    { name: 'Mitko.jpg', category: 'members', title: 'Member' },
    { name: 'Majorkata.jpg', category: 'members', title: 'Member' },
    { name: 'Asen.jpg', category: 'members', title: 'Member' },
    { name: 'Rado.jpg', category: 'members', title: 'Member' }   
];

let currentFilteredList = [];
let currentIndex = 0;
let currentCategory = 'concerts';
let currentYearFilter = 'all';

const grid = document.getElementById('galleryGrid');
const viewer = document.getElementById('fullSizeViewer');
const fullImg = document.getElementById('fullSizeImg');
const caption = document.getElementById('fullSizeCaption');
const yearContainer = document.getElementById('yearFilterContainer');

function formatName(fileName) {
    return fileName.replace(/\.[^/.]+$/, ""); 
}

// ГЛАВНА ФУНКЦИЯ ЗА ГЕНЕРИРАНЕ
function renderGallery() {
    grid.innerHTML = ''; 
    
    // Филтриране по категория
    let list = (currentCategory === 'all') ? [...allImages] : allImages.filter(img => img.category === currentCategory);
    
    // Филтриране по година (само ако сме в концерти)
    if (currentCategory === 'concerts' && currentYearFilter !== 'all') {
        list = list.filter(img => img.name.startsWith(currentYearFilter));
    }

    currentFilteredList = list;

    currentFilteredList.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'photo-item';
        const imagePath = `img/gallery/${img.name}`;
        const displayName = formatName(img.name);
        
        item.innerHTML = `
            <img src="${imagePath}" alt="${displayName}" loading="lazy">
            <div class="photo-caption">${displayName}</div>
        `;
        item.onclick = () => openFullSize(index);
        grid.appendChild(item);
    });
}

// ФИЛТЪР КАТЕГОРИИ
function filterGallery(category, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    currentCategory = category;
    currentYearFilter = 'all'; // Нулираме годината при смяна на категория

    if (category === 'concerts') {
        generateYearButtons();
        yearContainer.style.display = 'flex';
    } else {
        yearContainer.style.display = 'none';
    }

    renderGallery();
}

// ГЕНЕРИРАНЕ НА БУТОНИ ЗА ГОДИНИ
function generateYearButtons() {
    const years = [...new Set(allImages
        .filter(img => img.category === 'concerts')
        .map(img => img.name.substring(0, 4))
    )].sort((a, b) => b - a);

    yearContainer.innerHTML = `
        <button class="filter-btn ${currentYearFilter === 'all' ? 'active' : ''}" 
                onclick="filterByYear('all', this)">Всички</button>
    `;

    years.forEach(year => {
        if(!isNaN(year)) { // Проверка дали са цифри
            yearContainer.innerHTML += `
                <button class="filter-btn ${currentYearFilter === year ? 'active' : ''}" 
                        onclick="filterByYear('${year}', this)">${year}</button>
            `;
        }
    });
}

function filterByYear(year, btnElement) {
    document.querySelectorAll('#yearFilterContainer .filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    currentYearFilter = year;
    renderGallery();
}

// VIEWER ЛОГИКА
function openFullSize(index) {
    currentIndex = index;
    updateViewer();
    viewer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeFullSize() {
    viewer.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex >= currentFilteredList.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentFilteredList.length - 1;
    updateViewer();
}

function updateViewer() {
    const data = currentFilteredList[currentIndex];
    if (data) {
        fullImg.src = `img/gallery/${data.name}`;
        caption.innerText = formatName(data.name);
    }
}

// ЕВЕНТИ
document.getElementById('closeBtn').onclick = closeFullSize;
document.getElementById('prevBtn').onclick = (e) => { e.stopPropagation(); changeImage(-1); };
document.getElementById('nextBtn').onclick = (e) => { e.stopPropagation(); changeImage(1); };

viewer.onclick = (e) => { if (e.target === viewer) closeFullSize(); };

document.addEventListener('keydown', (e) => {
    if (viewer.style.display === 'flex') {
        if (e.key === "Escape") closeFullSize();
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "ArrowLeft") changeImage(-1);
    }
});

// SWIPE ЛОГИКА
let touchstartX = 0;
let touchendX = 0;

viewer.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
}, {passive: true});

viewer.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    const swipeDistance = touchendX - touchstartX;
    if (swipeDistance > 50) changeImage(-1);
    else if (swipeDistance < -50) changeImage(1);
}, {passive: true});

// ИНИЦИАЛИЗАЦИЯ
filterGallery('concerts', document.querySelector('.filter-btn.active'));