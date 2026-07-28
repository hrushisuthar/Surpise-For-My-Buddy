/*==================================================
                SCRIPT.JS
                 PART 1
        LOADER + PASSWORD SYSTEM
==================================================*/
/*=========================================================
    PART 1 - PREMIUM PASSWORD SYSTEM V2
=========================================================*/
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 2000);
});
const PASSWORD = "1104"; // <-- Change to your password

const passwordInput = document.getElementById("passwordInput");
passwordInput.focus();
const unlockBtn = document.getElementById("unlockBtn");
const passwordError = document.getElementById("passwordError");
const passwordScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("website");
const bgMusic = document.getElementById("bgMusic");
window.addEventListener("load", () => {
    initializeEffects();
});

let wrongAttempts = 0;

const hints = [ 
    "💡 Hint 1 : It's a very special date ❤️",
    "💡 Hint 2 : Format is DDMM",
    "💡 Hint 3 : 11 • 04 ❤️"
];

/* ================= Unlock ================= */

function unlockWebsite(){

    const entered = passwordInput.value.trim();

    if(entered === PASSWORD){

        showUnlockAnimation();

        return;

    }

    wrongAttempts++;

    showWrongPassword();

}

/* ================= Wrong Password ================= */

function showWrongPassword(){

    passwordError.style.display = "block";

    passwordError.classList.remove("shake");

    void passwordError.offsetWidth;

    passwordError.classList.add("shake");

    let hint;

    if(wrongAttempts === 1){

        hint = hints[0];

    }

    else if(wrongAttempts === 2){

        hint = hints[1];

    }

    else{

        hint = hints[2];

    }

    passwordError.innerHTML = `
        <div class="error-title">
            ❌ Wrong Password
        </div>

        <div class="error-hint">
            ${hint}
        </div>
    `;

}

/* ================= Unlock Animation ================= */

function showUnlockAnimation(){

    passwordError.style.display="none";

    unlockBtn.disabled = true;

    unlockBtn.innerHTML="❤️ Unlocking...";

    passwordScreen.classList.add("unlock-success");

    setTimeout(()=>{

        passwordScreen.style.opacity="0";

    },800);

    setTimeout(()=>{

        passwordScreen.style.display="none";

        mainContent.style.display="block";

        if(bgMusic){

            bgMusic.volume=.45;

            bgMusic.play().catch(()=>{});

        }

    },1300);

}

/* ================= Events ================= */

unlockBtn.addEventListener("click",unlockWebsite);

passwordInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        unlockWebsite();

    }

});

/* Focus Input */

window.addEventListener("load",()=>{

    passwordInput.focus();

});
/*==================================================
            PART 1 COMPLETE
==================================================*/

/*==================================================
                SCRIPT.JS
                 PART 2
 BACKGROUND EFFECTS + MUSIC + PARTICLES
==================================================*/

/*=========================================
        DOM REFERENCES
=========================================*/

const heartsContainer = document.getElementById("floatingHearts");
const petalsContainer = document.getElementById("petals");
const firefliesContainer = document.getElementById("fireflies");
const starsContainer = document.getElementById("stars");

/*=========================================
        RANDOM HELPERS
=========================================*/

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(random(min, max + 1));
}

/*=========================================
        START EFFECTS
=========================================*/

function initializeEffects() {

    createFloatingHearts();
    createRosePetals();
    createFireflies();
    createShootingStars();

}

/*=========================================
        HEARTS
=========================================*/

function createFloatingHearts() {

    if (!heartsContainer) return;

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = "❤";

        heart.style.left = random(0, 100) + "%";
        heart.style.animationDuration = random(8, 16) + "s";
        heart.style.animationDelay = random(0, 15) + "s";
        heart.style.opacity = random(.2, .8);
        heart.style.fontSize = random(12, 24) + "px";

        heartsContainer.appendChild(heart);

    }

}

/*=========================================
        PETALS
=========================================*/

function createRosePetals() {

    if (!petalsContainer) return;

    for (let i = 0; i < 24; i++) {

        const petal = document.createElement("span");

        petal.style.left = random(0, 100) + "%";
        petal.style.animationDuration = random(12, 24) + "s";
        petal.style.animationDelay = random(0, 20) + "s";
        petal.style.opacity = random(.35, .8);

        petalsContainer.appendChild(petal);

    }

}

/*=========================================
        FIREFLIES
=========================================*/

function createFireflies() {

    if (!firefliesContainer) return;

    for (let i = 0; i < 18; i++) {

        const fly = document.createElement("div");

        fly.className = "firefly";

        fly.style.left = random(0, 100) + "%";
        fly.style.top = random(0, 100) + "%";

        fly.style.animationDuration =
            `${random(8,18)}s, ${random(1.5,3)}s`;

        fly.style.animationDelay =
            `${random(0,10)}s, ${random(0,2)}s`;

        firefliesContainer.appendChild(fly);

    }

}

/*=========================================
        SHOOTING STARS
=========================================*/

function createShootingStars() {

    if (!starsContainer) return;

    for (let i = 0; i < 3; i++) {

        const star = document.createElement("div");

        star.className = "shooting-star";

        star.style.top = random(5, 40) + "%";
        star.style.left = random(40, 95) + "%";

        star.style.animationDelay =
            random(0, 8) + "s";

        star.style.animationDuration =
            random(4, 8) + "s";

        starsContainer.appendChild(star);

    }

}

/*=========================================
        MUSIC FADE-IN
=========================================*/

function fadeMusicIn() {

    if (!bgMusic) return;

    bgMusic.volume = 0;

    const fade = setInterval(() => {

        if (bgMusic.volume < 0.35) {

            bgMusic.volume += 0.02;

        } else {

            bgMusic.volume = 0.35;
            clearInterval(fade);

        }

    }, 150);

}


/*==================================================
            PART 2 COMPLETE
==================================================*/

/*==================================================
                SCRIPT.JS
                 PART 3
     SCROLL ANIMATIONS + CURSOR GLOW
==================================================*/

/*=========================================
            DOM REFERENCES
=========================================*/

const cursorGlow = document.getElementById("cursorGlow");

const sections = document.querySelectorAll("section");

const revealElements = document.querySelectorAll(`
.hero-content,
.timeline-item,
.gallery-card,
.reason-card,
.envelope-container,
.video-box,
.counter-box,
.gift-container,
.final-content,
.moonQuote
`);

/*=========================================
        CURSOR GLOW FOLLOW
=========================================*/

if (cursorGlow) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    function animateCursorGlow() {

        glowX += (mouseX - glowX) * 0.15;
        glowY += (mouseY - glowY) * 0.15;

        cursorGlow.style.left = glowX + "px";
        cursorGlow.style.top = glowY + "px";

        requestAnimationFrame(animateCursorGlow);

    }

    animateCursorGlow();

}

/*=========================================
        CURSOR HOVER EFFECT
=========================================*/

const hoverTargets = document.querySelectorAll(`
button,
.gallery-card,
.timeline-content,
.reason-card,
input,
.envelope,
#giftBox
`);

hoverTargets.forEach(item => {

    item.addEventListener("mouseenter", () => {

        if (!cursorGlow) return;

        cursorGlow.style.width = "60px";
        cursorGlow.style.height = "60px";
        cursorGlow.style.opacity = ".9";

    });

    item.addEventListener("mouseleave", () => {

        if (!cursorGlow) return;

        cursorGlow.style.width = "30px";
        cursorGlow.style.height = "30px";
        cursorGlow.style.opacity = ".6";

    });

});

/*=========================================
        REVEAL ANIMATION
=========================================*/

revealElements.forEach(el => {

    el.classList.add("fade");

});

const revealObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

},

{
    threshold:0.15
}

);

revealElements.forEach(el => {

    revealObserver.observe(el);

});

/*=========================================
        ACTIVE SECTION
=========================================*/

const sectionObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            document.body.setAttribute(
                "data-section",
                entry.target.id
            );

        }

    });

},

{
    threshold:.45
}

);

sections.forEach(section=>{

    sectionObserver.observe(section);

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",(e)=>{

        const target=document.querySelector(
            link.getAttribute("href")
        );

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",
            block:"start"

        });

    });

});

/*=========================================
        SCROLL PROGRESS
=========================================*/

window.addEventListener("scroll",()=>{

    const scrollTop=window.scrollY;

    const pageHeight=
        document.documentElement.scrollHeight-
        window.innerHeight;

    const progress=
        (scrollTop/pageHeight)*100;

    document.documentElement.style.setProperty(
        "--scroll-progress",
        progress+"%"
    );

});

/*=========================================
        PARALLAX MOON
=========================================*/

const moon=document.getElementById("moon");

window.addEventListener("scroll",()=>{

    if(!moon) return;

    const offset=window.scrollY*0.15;

    moon.style.transform=
        `translateY(${offset}px)`;

});

/*=========================================
        HERO BUTTON
=========================================*/

const journeyBtn=document.getElementById("journeyBtn");

if(journeyBtn){

    journeyBtn.addEventListener("click",()=>{

        const journey=document.getElementById("journey");

        if(journey){

            journey.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}

/*==================================================
            PART 3 COMPLETE
==================================================*/

/*==================================================
                SCRIPT.JS
                 PART 4
      GALLERY LIGHTBOX + IMAGE VIEWER
==================================================*/

/*=========================================
            DOM REFERENCES
=========================================*/

const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

const galleryImages = [
    ...document.querySelectorAll(".gallery-card img")
];

let currentImageIndex = 0;

/*=========================================
        OPEN VIEWER
=========================================*/

function openImageViewer(index) {

    if (
        !imageViewer ||
        !viewerImage ||
        galleryImages.length === 0
    ) return;

    currentImageIndex = index;

    viewerImage.src = galleryImages[index].src;
    viewerImage.alt = galleryImages[index].alt || "";

    imageViewer.classList.add("active");

    document.body.style.overflow = "hidden";

}

/*=========================================
        CLOSE VIEWER
=========================================*/

function closeImageViewer() {

    if (!imageViewer) return;

    imageViewer.classList.remove("active");

    document.body.style.overflow = "";

}

/*=========================================
        NEXT IMAGE
=========================================*/

function nextImage() {

    if (galleryImages.length === 0) return;

    currentImageIndex++;

    if (currentImageIndex >= galleryImages.length) {

        currentImageIndex = 0;

    }

    viewerImage.src =
        galleryImages[currentImageIndex].src;

    viewerImage.alt =
        galleryImages[currentImageIndex].alt || "";

}

/*=========================================
        PREVIOUS IMAGE
=========================================*/

function previousImage() {

    if (galleryImages.length === 0) return;

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            galleryImages.length - 1;

    }

    viewerImage.src =
        galleryImages[currentImageIndex].src;

    viewerImage.alt =
        galleryImages[currentImageIndex].alt || "";

}

/*=========================================
        CLICK EVENTS
=========================================*/

galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        openImageViewer(index);

    });

});

if (closeViewer) {

    closeViewer.addEventListener(
        "click",
        closeImageViewer
    );

}

/*=========================================
        CLICK OUTSIDE IMAGE
=========================================*/

if (imageViewer) {

    imageViewer.addEventListener("click", (e) => {

        if (e.target === imageViewer) {

            closeImageViewer();

        }

    });

}

/*=========================================
        KEYBOARD
=========================================*/

document.addEventListener("keydown", (e) => {

    if (
        !imageViewer ||
        !imageViewer.classList.contains("active")
    ) return;

    switch (e.key) {

        case "Escape":

            closeImageViewer();

            break;

        case "ArrowRight":

            nextImage();

            break;

        case "ArrowLeft":

            previousImage();

            break;

    }

});

/*=========================================
        TOUCH SWIPE
=========================================*/

let touchStartX = 0;
let touchEndX = 0;

if (imageViewer) {

    imageViewer.addEventListener("touchstart", (e) => {

        touchStartX = e.changedTouches[0].clientX;

    });

    imageViewer.addEventListener("touchend", (e) => {

        touchEndX = e.changedTouches[0].clientX;

        const distance = touchStartX - touchEndX;

        if (Math.abs(distance) < 60) return;

        if (distance > 0) {

            nextImage();

        } else {

            previousImage();

        }

    });

}

/*=========================================
        IMAGE PRELOAD
=========================================*/

galleryImages.forEach((img) => {

    const preload = new Image();

    preload.src = img.src;

});

/*==================================================
            PART 4 COMPLETE
==================================================*/

/*==================================================
                SCRIPT.JS
                 PART 5
     ENVELOPE + LOVE LETTER + TYPEWRITER
==================================================*/
/*=========================================================
    PART 5 - PREMIUM ENVELOPE V2
=========================================================*/

const envelope = document.getElementById("envelope");
const typingLetter = document.getElementById("typingLetter");

const letterText = `Dear Princess ❤️,

Happy Girlfriend's Day.

I know life isn't always perfect,
but every moment with you becomes
my favourite memory.

You're my peace,
my smile,
my comfort,
and the most beautiful chapter
of my life.

Thank you for staying,
for understanding me,
and for making my ordinary days
feel extraordinary.

No matter where life takes us,
I'll always pray for your happiness.

You deserve every smile in this world.

❤️ Forever Yours.`;

let envelopeOpened = false;
let typingStarted = false;

/* ---------- Open Envelope ---------- */

function openEnvelope() {

    if (envelopeOpened) return;

    envelopeOpened = true;

    /* Small click animation */
    envelope.animate([
        { transform: "scale(1)" },
        { transform: "scale(.97)" },
        { transform: "scale(1)" }
    ], {
        duration: 220,
        easing: "ease"
    });

    /* Open after click */
    setTimeout(() => {

        envelope.classList.add("open");

    }, 180);

    /* Start typing AFTER paper finishes moving */
    setTimeout(() => {

        startTyping();

    }, 1550);

}

/* ---------- Type Writer ---------- */

function startTyping() {

    if (typingStarted) return;

    typingStarted = true;

    typingLetter.innerHTML = "";

    typingLetter.classList.add("typing-cursor");

    let i = 0;

    function type() {

        if (i < letterText.length) {

            typingLetter.innerHTML += letterText.charAt(i);

            typingLetter.scrollTop =
                typingLetter.scrollHeight;

            i++;

            let speed = 15;

            const current = letterText.charAt(i);

            if (
                current === "." ||
                current === "," ||
                current === "\n"
            ) {
                speed = 200;
            }

            setTimeout(type, speed);

        }
        else {

            typingLetter.classList.remove("typing-cursor");

        }

    }

    type();

}

/* ---------- Click ---------- */

const openLetterBtn = document.getElementById("openLetter");

if (envelope) {
    envelope.addEventListener("click", openEnvelope);
}

if (openLetterBtn) {
    openLetterBtn.addEventListener("click", openEnvelope);
}
/*==================================================
            PART 5 COMPLETE
==================================================*/

/*==================================================
                SCRIPT.JS
                 PART 6
        GIFT BOX + CELEBRATION
==================================================*/
/*=========================================================
    PART 6 - PREMIUM GIFT BOX V2
=========================================================*/

const giftBox = document.querySelector(".gift-box");
const giftMessage = document.getElementById("giftMessage");

const giftPopupOverlay = document.getElementById("giftPopupOverlay");
const popupTypingText = document.getElementById("popupTypingText");
const closePopupBtn = document.getElementById("closePopupBtn");

let giftOpened = false;

const openGiftBtn=document.getElementById("openGiftBtn");

if(openGiftBtn){

    openGiftBtn.addEventListener("click",openGift);

}


/* ================= OPEN GIFT ================= */

function openGift() {

    if (giftOpened) return;

    giftOpened = true;

    giftBox.classList.add("open");
    
setTimeout(() => {

        showGiftPopup();

    }, 1500);

    /* Small vibration */

    giftBox.animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-6px)" },
        { transform: "translateY(0px)" }
    ], {
        duration: 300,
        easing: "ease-out"
    });

    /* Hearts */

    setTimeout(() => {

        createHeartBurst();

    },300);

    /* Sparkles */

    setTimeout(() => {

        createSparkles();

    },500);

    /* Confetti */

    setTimeout(() => {

        createConfetti();

    },700);

    /* Fireworks */

    setTimeout(() => {

        launchFireworks();

    },900);

    /* Message */

    setTimeout(() => {

        if(giftMessage){

            giftMessage.classList.add("show");

        }

    },1400);

}

/* ================= HEARTS ================= */

function createHeartBurst(){

    for(let i=0;i<35;i++){

        const heart=document.createElement("div");

        heart.className="heart-particle";

        heart.innerHTML="❤️";

        heart.style.left=(45+Math.random()*10)+"%";

        heart.style.top="55%";

        heart.style.position="fixed";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        heart.style.transition="3s linear";

        document.body.appendChild(heart);

        requestAnimationFrame(()=>{

            const x=(Math.random()-0.5)*500;

            const y=-300-Math.random()*250;

            heart.style.transform=
            `translate(${x}px,${y}px)
             rotate(${Math.random()*360}deg)
             scale(${0.8+Math.random()})`;

            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

}

/* ================= SPARKLES ================= */

function createSparkles(){

    for(let i=0;i<40;i++){

        const s=document.createElement("div");

        s.style.position="fixed";

        s.style.left="50%";

        s.style.top="50%";

        s.style.width="5px";

        s.style.height="5px";

        s.style.borderRadius="50%";

        s.style.background="white";

        s.style.boxShadow="0 0 10px white";

        s.style.pointerEvents="none";

        s.style.zIndex="9999";

        document.body.appendChild(s);

        requestAnimationFrame(()=>{

            const angle=Math.random()*360;

            const distance=180+Math.random()*180;

            const x=Math.cos(angle*Math.PI/180)*distance;

            const y=Math.sin(angle*Math.PI/180)*distance;

            s.style.transition="1.2s ease-out";

            s.style.transform=`translate(${x}px,${y}px)`;

            s.style.opacity="0";

        });

        setTimeout(()=>{

            s.remove();

        },1300);

    }

}

/* ================= CONFETTI ================= */

function createConfetti(){

    for(let i=0;i<70;i++){

        const c=document.createElement("div");

        c.style.position="fixed";

        c.style.width="8px";

        c.style.height="14px";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-20px";

        c.style.background=
        `hsl(${Math.random()*360},90%,60%)`;

        c.style.pointerEvents="none";

        c.style.zIndex="9999";

        c.style.transition="4s linear";

        document.body.appendChild(c);

        requestAnimationFrame(()=>{

            c.style.transform=
            `translateY(${window.innerHeight+100}px)
             rotate(${Math.random()*1080}deg)`;

        });

        setTimeout(()=>{

            c.remove();

        },4200);

    }

}


/*==================================================
            PART 6 COMPLETE
==================================================*/

/*==================================================
                SCRIPT.JS
                 PART 7
          LOVE COUNTER (LIVE)
==================================================*/

/*=========================================
            CONFIGURATION
=========================================*/

/*
    IMPORTANT:
    Change this to your real date.

    Format:
    Year, Month(0-11), Day, Hour, Minute
*/

const LOVE_START_DATE = new Date("2025-01-28T00:00:00");

/*=========================================
        DOM ELEMENTS
=========================================*/

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

/*=========================================
        UPDATE FUNCTION
=========================================*/

function updateLoveCounter() {

    const now = new Date();

    const diff = now - LOVE_START_DATE;

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));

    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));

    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);

    const seconds = totalSeconds % 60;

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}
/*=========================================
        UPDATE VALUE
=========================================*/

function updateCounterValue(element, value) {

    if (!element) return;

    const formatted =
        String(value).padStart(2, "0");

    if (element.textContent !== formatted) {

        element.animate(

            [

                {
                    transform: "translateY(10px)",
                    opacity: .4
                },

                {
                    transform: "translateY(0)",
                    opacity: 1
                }

            ],

            {

                duration: 350,

                easing: "ease-out"

            }

        );

        element.textContent = formatted;

    }

}

/*=========================================
        START
=========================================*/

updateLoveCounter();

setInterval(

    updateLoveCounter,

    1000

);

/*=========================================
        COUNTER GLOW
=========================================*/

document.querySelectorAll(".counter-box")
.forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.animate(

            [

                {

                    transform:"translateY(0)"

                },

                {

                    transform:"translateY(-8px)"

                },

                {

                    transform:"translateY(0)"

                }

            ],

            {

                duration:500

            }

        );

    });

});

/*==================================================
            PART 7 COMPLETE
==================================================*/

/*==================================================
                SCRIPT.JS
                 PART 8
      FIREWORKS + FINAL OPTIMIZATION
==================================================*/

/*=========================================
            FIREWORKS
=========================================*/

const fireworksCanvas = document.getElementById("fireworksCanvas");
const fwCtx = fireworksCanvas ? fireworksCanvas.getContext("2d") : null;

let fireworks = [];
let particles = [];
let animationId = null;

/*=========================================
        CANVAS SIZE
=========================================*/

function resizeFireworksCanvas() {

    if (!fireworksCanvas) return;

    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeFireworksCanvas);
resizeFireworksCanvas();

/*=========================================
        FIREWORK CLASS
=========================================*/

class Firework {

    constructor(x, y) {

        this.x = x;
        this.y = fireworksCanvas.height;

        this.targetX = x;
        this.targetY = y;

        this.speed = 5 + Math.random() * 3;

    }

    update() {

        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;

        this.x += dx * 0.08;
        this.y += dy * 0.08;

        if (Math.abs(dy) < 8) {

            this.explode();

            return false;

        }

        return true;

    }

    draw() {

        fwCtx.beginPath();
        fwCtx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        fwCtx.fillStyle = "#ffffff";
        fwCtx.fill();

    }

    explode() {

        for (let i = 0; i < 70; i++) {

            particles.push(new Particle(
                this.x,
                this.y
            ));

        }

    }

}

/*=========================================
        PARTICLE
=========================================*/

class Particle {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.life = 100;

        this.color = `hsl(${Math.random()*360},100%,65%)`;

    }

    update() {

        this.life--;

        this.x += this.vx;
        this.y += this.vy;

        this.vy += 0.05;

        this.vx *= 0.99;

        return this.life > 0;

    }

    draw() {

        fwCtx.globalAlpha = this.life / 100;

        fwCtx.beginPath();

        fwCtx.arc(this.x, this.y, 2, 0, Math.PI * 2);

        fwCtx.fillStyle = this.color;

        fwCtx.fill();

        fwCtx.globalAlpha = 1;

    }

}

/*=========================================
        LOOP
=========================================*/

function fireworkLoop() {

    if (!fwCtx) return;

    fwCtx.clearRect(
        0,
        0,
        fireworksCanvas.width,
        fireworksCanvas.height
    );

    fireworks = fireworks.filter(firework => {

        firework.draw();

        return firework.update();

    });

    particles = particles.filter(particle => {

        particle.draw();

        return particle.update();

    });

    animationId = requestAnimationFrame(
        fireworkLoop
    );

}

/*=========================================
        PUBLIC FUNCTION
=========================================*/

function launchFireworks() {

    if (!fwCtx) return;

    for (let i = 0; i < 6; i++) {

        setTimeout(() => {

            fireworks.push(

                new Firework(

                    Math.random() * fireworksCanvas.width,

                    Math.random() * (
                        fireworksCanvas.height * 0.45
                    ) + 60

                )

            );

        }, i * 350);

    }

}

/*=========================================
        START LOOP
=========================================*/

if (fwCtx) {

    fireworkLoop();

}

/*=========================================
        PAGE VISIBILITY
=========================================*/

document.addEventListener(

    "visibilitychange",

    () => {

        if (document.hidden) {

            if (animationId) {

                cancelAnimationFrame(animationId);

            }

            if (bgMusic) {

                bgMusic.pause();

            }

        } else {

            if (fwCtx) {

                fireworkLoop();

            }

            if (bgMusic) {

                bgMusic.play().catch(() => {});

            }

        }

    }

);

/*=========================================
        MOBILE TOUCH
=========================================*/

window.addEventListener(

    "touchstart",

    () => {

        if (
            bgMusic &&
            bgMusic.paused
        ) {

            bgMusic.play().catch(() => {});

        }

    },

    {
        passive:true,
        once:true
    }

);

/*=========================================
        AUTO FIREWORKS
=========================================*/

setTimeout(() => {

    launchFireworks();

}, 3500);

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(`
❤️========================================❤️

        Happy Girlfriend's Day ❤️

      Made with Love by Hrushi

❤️========================================❤️
`);

/* ===========================================
   GIFT POPUP
=========================================== */

const popupMessage = `Dear Princess ❤️,

I Hope This Little Surprise brought a Smile to Your Face.

No Matter Where Life Takes us,
I will always Wish the Best for You.

Happy Girlfriend's Day ❤️`;

function typePopupMessage() {

    popupTypingText.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < popupMessage.length) {

            popupTypingText.innerHTML += popupMessage.charAt(i);

            i++;

            let speed = 55 + Math.random() * 35;

            const current = popupMessage.charAt(i);

            if (
                current === "." ||
                current === "," ||
                current === "\n"
            ) {
                speed = 350;
            }

            setTimeout(typing, speed);
        }
    }

    typing();
}

function showGiftPopup(){

    giftPopupOverlay.classList.add("show");

    typePopupMessage();

    if(typeof createHeart==="function"){

        const heartInterval=setInterval(()=>{

            createHeart();

        },250);

        giftPopupOverlay.dataset.hearts=heartInterval;

    }

}

function hideGiftPopup(){

    giftPopupOverlay.classList.remove("show");

    document.body.style.overflow = "";

    clearInterval(giftPopupOverlay.dataset.hearts);

    setTimeout(() => {

        popupTypingText.innerHTML = "";

    },400);

}

closePopupBtn.addEventListener("click", hideGiftPopup);

giftPopupOverlay.addEventListener("click", function(e){

    if(e.target===giftPopupOverlay){

        hideGiftPopup();

    }

});

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        hideGiftPopup();

    }

});
/*==================================================
            END OF SCRIPT.JS
==================================================*/

