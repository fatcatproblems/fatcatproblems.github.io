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
	{ name: 'Kolyo.jpg', category: 'members', title: 'Live in Sofia' },
	{ name: 'Murphy.jpg', category: 'members', title: 'Live in Sofia' },
	{ name: 'Emo.jpg', category: 'members', title: 'Live in Sofia' },
	{ name: 'Niki.jpg', category: 'members', title: 'Live in Sofia' },
	{ name: 'Mitko.jpg', category: 'members', title: 'Live in Sofia' },
	{ name: 'Majorkata.jpg', category: 'members', title: 'Live in Sofia' }	
];

let currentFilteredList = [];
let currentIndex = 0;

const grid = document.getElementById('galleryGrid');
const viewer = document.getElementById('fullSizeViewer');
const fullImg = document.getElementById('fullSizeImg');
const caption = document.getElementById('fullSizeCaption');

// Помощна функция за изчистване на името от разширението .jpg
function formatName(fileName) {
    return fileName.replace(/\.[^/.]+$/, ""); // Премахва всичко след последната точка
}

function renderGallery(filter = 'all') {
    grid.innerHTML = ''; 
    
    if (filter === 'all') {
        currentFilteredList = [...allImages];
    } else {
        currentFilteredList = allImages.filter(img => img.category === filter);
    }

    currentFilteredList.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'photo-item';
        
        const imagePath = `img/gallery/${img.name}`;
        const displayName = formatName(img.name); // Използваме името на файла за заглавие
        
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
    renderGallery(category);
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

function updateViewer() {
    const data = currentFilteredList[currentIndex];
    fullImg.src = `img/gallery/${data.name}`;
    caption.innerText = formatName(data.name); // Показваме името и в големия изглед
}

// ЕВЕНТИ
document.getElementById('closeBtn').onclick = closeFullSize;
document.getElementById('prevBtn').onclick = (e) => { e.stopPropagation(); changeImage(-1); };
document.getElementById('nextBtn').onclick = (e) => { e.stopPropagation(); changeImage(1); };

viewer.onclick = (e) => {
    if (e.target === viewer) closeFullSize();
};

document.addEventListener('keydown', (e) => {
    if (viewer.style.display === 'flex') {
        if (e.key === "Escape") closeFullSize();
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "ArrowLeft") changeImage(-1);
    }
});

// СТАРТИРАНЕ - Сега по подразбиране зарежда 'concerts'
renderGallery('concerts');