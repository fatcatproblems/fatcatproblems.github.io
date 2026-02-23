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
    
    // ЧЛЕНОВЕ С БИОГРАФИИ
    { name: 'Kolyo.jpg', category: 'members', title: 'Кольо', bio: 'Кольо е бас и глас в тази формация.' },
    { name: 'Murphy.jpg', category: 'members', title: 'Мърфи', bio: 'Мърфи се грижи за барабаните.' },
    { name: 'Emo.jpg', category: 'members', title: 'Емо', bio: 'Емо е с тромпета в брас секцията и бек вокали.' },
    { name: 'Niki.jpg', category: 'members', title: 'Ники', bio: 'Ники е със Саксофон изпълващ браса.' },
    { name: 'Mitko.jpg', category: 'members', title: 'Митко', bio: 'Митко се грижи за китарите.' },
    { name: 'Majorkata.jpg', category: 'members', title: 'Мажорката', bio: 'Жорето е с тромбона. Той е сърцето на агитката винаги готов за пого.' },
    { name: 'Asen.jpg', category: 'members', title: 'Асен', bio: 'Асен е нашият алкохолен техник, и моралната подкрепа.' },
    { name: 'Rado.jpg', category: 'members', title: 'Радо', bio: 'Радо е най-новото поълнение. Вокалните му умения скоро ще изпълват сцената все повече.' },
    
    { name: 'misc/image1.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image2.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image3.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image4.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image5.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image6.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image7.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image8.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image9.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image10.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image11.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image12.jpg', category: 'others', title: 'Member' },
    { name: 'misc/image13.jpg', category: 'others', title: 'Member' },
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

// НОВИ ЕЛЕМЕНТИ ЗА БИО
const bioSection = document.getElementById('memberBioSection');
const bioName = document.getElementById('bioName');
const bioText = document.getElementById('bioText');

function formatName(fileName) {
    return fileName.replace(/\.[^/.]+$/, "").split('/').pop(); 
}

function renderGallery() {
    grid.innerHTML = ''; 
    let list = (currentCategory === 'all') ? [...allImages] : allImages.filter(img => img.category === currentCategory);
    
    if (currentCategory === 'concerts' && currentYearFilter !== 'all') {
        list = list.filter(img => img.name.startsWith(currentYearFilter));
    }

    currentFilteredList = list;

    currentFilteredList.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'photo-item';
        const imagePath = `img/gallery/${img.name}`;
        const displayName = img.title !== 'Member' && img.title !== 'Live in Sofia' ? img.title : formatName(img.name);
        
        item.innerHTML = `
            <img src="${imagePath}" alt="${displayName}" loading="lazy">
            <div class="photo-caption">${displayName}</div>
        `;
        item.onclick = () => openFullSize(index);
        grid.appendChild(item);
    });
}

function filterGallery(category, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    currentCategory = category;
    currentYearFilter = 'all';

    if (category === 'concerts') {
        generateYearButtons();
        yearContainer.style.display = 'flex';
    } else {
        yearContainer.style.display = 'none';
    }
    renderGallery();
}

function generateYearButtons() {
    const years = [...new Set(allImages
        .filter(img => img.category === 'concerts')
        .map(img => img.name.substring(0, 4))
    )].sort((a, b) => b - a);

    yearContainer.innerHTML = `<button class="filter-btn ${currentYearFilter === 'all' ? 'active' : ''}" onclick="filterByYear('all', this)">Всички</button>`;

    years.forEach(year => {
        if(!isNaN(year)) {
            yearContainer.innerHTML += `<button class="filter-btn ${currentYearFilter === year ? 'active' : ''}" onclick="filterByYear('${year}', this)">${year}</button>`;
        }
    });
}

function filterByYear(year, btnElement) {
    document.querySelectorAll('#yearFilterContainer .filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    currentYearFilter = year;
    renderGallery();
}

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

// ОБНОВЕНА ФУНКЦИЯ ЗА ВИЗУАЛИЗАЦИЯ
function updateViewer() {
    const data = currentFilteredList[currentIndex];
    if (data) {
        fullImg.src = `img/gallery/${data.name}`;
        caption.innerText = data.title !== 'Member' && data.title !== 'Live in Sofia' ? data.title : formatName(data.name);
        
        // ЛОГИКА ЗА БИОГРАФИЯТА
        if (data.bio) {
            bioSection.style.display = 'block';
            bioName.innerText = data.title;
            bioText.innerText = data.bio;
        } else {
            bioSection.style.display = 'none';
        }
    }
}

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

let touchstartX = 0;
let touchendX = 0;
viewer.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; }, {passive: true});
viewer.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    const swipeDistance = touchendX - touchstartX;
    if (swipeDistance > 50) changeImage(-1);
    else if (swipeDistance < -50) changeImage(1);
}, {passive: true});

filterGallery('concerts', document.querySelector('.filter-btn.active'));