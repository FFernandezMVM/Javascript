/*Botoncitos*/ 
const video = document.querySelector('#main-video');
video.volume = 0.5;
const btnPlay = document.querySelector('#play-btn');
const btnRestart = document.querySelector('#restart-Btn');
const btnAdvance = document.querySelector('#advance-10');
const btnRetard = document.querySelector('#retard-10');
const btnSound = document.querySelector('#sound-btn');
const btnDown = document.querySelector('#down-sound');
const btnUp = document.querySelector('#up-sound');
const btnFullscreen = document.querySelector('#full-screen');
const barProgress = document.querySelector('#bar-progress');
const buttons = document.querySelectorAll('.capitulo-btn');



buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const skipTo = btn.getAttribute('data-time');

        video.currentTime = parseFloat(skipTo);

        video.play();

        if (btnPlay) btnPlay.innerHTML = "⏸️ Pause";
    });
});

btnPlay.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        btnPlay.innerHTML = "⏸️ Pause";
    } else {
        video.pause();
        btnPlay.innerHTML = "▶️ Play";
    }
});

btnSound.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        btnSound.innerHTML = "🔇 Mute";
    } else {
        video.muted = true;
        btnSound.innerHTML = "🔊 Sound ";
    }
});

btnRestart.addEventListener('click', () => {
    video.currentTime = 0; 
});

btnAdvance.addEventListener('click', () => {
    video.currentTime += 10;
});

btnRetard.addEventListener('click', () => {
    video.currentTime -= 10;
});

btnDown.addEventListener('click', () => {
    video.volume -= 0.1;
});

btnUp.addEventListener('click', () => {
    video.volume += 0.1;
});

btnFullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
});


video.addEventListener('timeupdate', () => {
    if (video.duration) {
        const percentage = (video.currentTime / video.duration) * 100;
        barProgress.value = percentage;
    }
  
    sessionStorage.setItem('videoCurrentTime', video.currentTime);
});

window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('videoCurrentTime');
    if (savedTime) {
        video.currentTime = parseFloat(savedTime);
    }
});

barProgress.addEventListener('input', () => {
    const time = (barProgress.value * video.duration) / 100;
    video.currentTime = time;
});

const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeBtn) themeBtn.innerHTML = "☀️ Modo claro";
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let theme = 'light';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeBtn.innerHTML = "☀️ Modo Claro";
        } else {
            themeBtn.innerHTML = "🌙 Modo Oscuro";
        }
        localStorage.setItem('theme', theme);
    });
}

/*Formulario*/ 
const commentForm = document.querySelector('#coments-form');
const userNameInput = document.querySelector('#user-name');
const commentArea = document.querySelector('#coment-area');
const commentsList = document.querySelector('#coments-llist');
const nameError = document.querySelector('#name-error');

const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,15}$/;

userNameInput.addEventListener('input', () => {
    if (!nameRegex.test(userNameInput.value)) {
        userNameInput.style.border = "2px solid red";
        nameError.style.display = "none";
    }
});

window.addEventListener('load', () => {
    const savedComments = CommentStorage.getComments();
    savedComments.forEach(c => renderComment(c.name, c.text));
});

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = userNameInput.value;
    const text = commentArea.value.trim();

    if (nameRegex.test(name) && text !== ""){
        CommentStorage.saveComment(name, text);
        renderComment(name, text);
        commentForm.reset();
        userNameInput.style.border = "none";
    } else {
        alert("Hay un error en el formulario, revisalo.")
    }
});

function renderComment(name, text) {
    const div = document.createElement('div');
    div.classList.add('comment-item');
    div.style.borderBottom = "1px solid #444";
    div.style.padding = "10px";

    const strong = document.createElement('strong');
    strong.textContent = name + ": ";

    const p = document.createElement('p');
    p.textContent = text;
    p.style.display = "inline";

    div.appendChild(strong);
    div.appendChild(p);
    commentsList.appendChild(div);
}
/*pa la API*/
window.addEventListener('load', async () => {
    console.log("Pagina cargada");
    try {
    const weatherData = await WeatherAPI.getData();
if (weatherData) {
    renderWeather(weatherData);
}
    } catch (error) {
        console.error("Error al cargar", error);
    }
});


function renderWeather(data) {
    const mainContainer = document.querySelector('main');
    if (!mainContainer) return; 
    const weatherDiv = document.createElement('div');
    weatherDiv.id = 'weather-display';
    weatherDiv.style.border = "1px solid #555";
    weatherDiv.style.padding = "15px";
    weatherDiv.style.marginTop = "20px";
    weatherDiv.style.borderRadius = "8px";
    weatherDiv.style.textAlign = "center";


    const title = document.createElement('h3');
    title.textContent = `Tiempo en ${data.name}`;


    const iconImg = document.createElement('img');
    const iconCode = data.weather[0].icon;
    iconImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    iconImg.alt = "Icono del tiempo";

    const tempP = document.createElement('p');
    tempP.textContent = `${data.main.temp}°C`;
    tempP.style.fontSize = "1.5rem";

    const descP = document.createElement('p');
    descP.textContent = data.weather[0].description;
    descP.style.textTransform = "capitalize";

    weatherDiv.appendChild(title);
    weatherDiv.appendChild(iconImg);
    weatherDiv.appendChild(tempP);
    weatherDiv.appendChild(descP);
    mainContainer.appendChild(weatherDiv);
}