/**
 * ==========================================================================
 * CYBERPUNK PORTFOLIO CORE ARCHITECTURE ENGINE
 * Developer: Abdiaziz Adan Sirat
 * Year Configuration: 2026
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initCustomCursor();
    initMatrixCanvas();
    initTypingEffect();
    initParallaxAndScroll();
    initIntersectionObservers();
    initKonamiCode();
});

/**
 * 1. SYSTEM INITIALIZATION & PRELOADER DESTRUCTION
 */
function initPreloader() {
    const loader = document.getElementById("loader-screen");
    // Ensure standard view initializes smoothly after load sequence concludes
    setTimeout(() => {
        if(loader) {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 600);
        }
    }, 2200); // Emulate network handshake / systems deployment delay
}

/**
 * 2. CUSTOM CURSOR INTERACTIVE ENGINE
 */
function initCustomCursor() {
    const cursor = document.querySelector(".custom-cursor");
    const dot = document.querySelector(".custom-cursor-dot");
    
    // Disable running mechanics for mobile touch systems naturally
    if (window.matchMedia("(max-width: 600px)").matches) return;

    window.addEventListener("mousemove", (e) => {
        // Center alignment offset mechanics
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
    });

    // Hover interactive scaling adjustments across active entities
    const interactiveTargets = document.querySelectorAll("a, button, input, textarea, .social-icon-btn");
    interactiveTargets.forEach(target => {
        target.addEventListener("mouseenter", () => {
            cursor.style.width = "50px";
            cursor.style.height = "50px";
            cursor.style.borderColor = "var(--purple)";
            cursor.style.backgroundColor = "rgba(189, 0, 255, 0.05)";
        });
        target.addEventListener("mouseleave", () => {
            cursor.style.width = "35px";
            cursor.style.height = "35px";
            cursor.style.borderColor = "var(--cyan)";
            cursor.style.backgroundColor = "transparent";
        });
    });
}

/**
 * 3. BACKGROUND MATRIX RAIN GENERATOR
 */
function initMatrixCanvas() {
    const canvas = document.getElementById("cyber-canvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters derived from binary pools and structural syntax strings
    const matrixChars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ<>//[][]::{{}}++--";
    const charArr = matrixChars.split("");
    
    const fontSize = 14;
    const columns = width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        // Trace canvas fading execution path to capture falling luminescence
        ctx.fillStyle = "rgba(3, 3, 12, 0.06)";
        // Dynamic evaluation parameter check if easter egg matrix variant state matches overrides
        if(document.body.classList.contains("matrix-mode")) {
            ctx.fillStyle = "rgba(1, 8, 2, 0.06)";
        }
        ctx.fillRect(0, 0, width, height);

        // Map character selection arrays onto render planes
        ctx.fillStyle = document.body.classList.contains("matrix-mode") ? "#00ff46" : "#00f0ff";
        ctx.font = `${fontSize}px 'Orbitron', monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = charArr[Math.floor(Math.random() * charArr.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    let matrixInterval = setInterval(drawMatrix, 33);

    // Dynamic resize matrix realignment checks
    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        const newColumns = width / fontSize;
        while(drops.length < newColumns) drops.push(1);
    });
}

/**
 * 4. TERMINAL TEXT TYPING SIMULATOR
 */
function initTypingEffect() {
    const typingSpan = document.getElementById("typing-text");
    const phrases = [
        "Hello, I'm Zizo",
        "IT Bachelor",
        "Web Developer",
        "Cybersecurity Enthusiast",
        "Tech Lover"
    ];
    
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeLoop() {
        const currentPhrase = phrases[phraseIdx];
        
        if (!isDeleting) {
            typingSpan.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
            typingSpeed = 120 - Math.random() * 40; // Emulate variable human typing frequency
            
            if (charIdx === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 2000; // Delay frame configuration at terminal word end
            }
        } else {
            typingSpan.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
            typingSpeed = 50;
            
            if (charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                typingSpeed = 500; // System processing latency buffer before next deployment cycle
            }
        }
        setTimeout(typeLoop, typingSpeed);
    }
    
    if(typingSpan) setTimeout(typeLoop, 2500);
}

/**
 * 5. PARALLAX NODES & CORE SCROLL SYSTEMS
 */
function initParallaxAndScroll() {
    const backToTop = document.getElementById("back-to-top");
    const progressIndicator = document.getElementById("scroll-progress");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Click trigger tracking back to root layer
    if(backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    window.addEventListener("scroll", () => {
        const totalScroll = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Progress percentage calculation
        if (scrollHeight > 0) {
            const scrollPercent = (totalScroll / scrollHeight) * 100;
            progressIndicator.style.width = `${scrollPercent}%`;
        }

        // Display/Hide parameters validation for Back-To-Top trigger
        if (totalScroll > 500) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

        // Active Navigation Tracking Mechanics
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (totalScroll >= sectionTop - 160) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // Mouse movement driven displacement tracker (Mouse Parallax)
    window.addEventListener("mousemove", (e) => {
        const icons = document.querySelectorAll(".floating-icon");
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        icons.forEach(icon => {
            const speed = parseInt(icon.getAttribute("data-speed") || "2");
            const xOffset = mouseX * speed * 40;
            const yOffset = mouseY * speed * 40;
            icon.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

/**
 * 6. INTERSECTION OBSERVER MANAGEMENT SUITE (SCROLL REVEALS & LIVE METRICS)
 */
function initIntersectionObservers() {
    // Fade & Slide Content Layer Reveal Engine
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Numerical Increment Metrics Counter Tracker Animation Block
    const counterElements = document.querySelectorAll(".counter-number");
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute("data-target") || "0");
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(counter => counterObserver.observe(counter));

    // Progress Bar Loading Engine Check
    const skillsCard = document.querySelector(".skills-card");
    if(skillsCard) {
        const skillsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll(".progress-bar-fill");
                    fills.forEach(fill => {
                        const widthValue = fill.style.getPropertyValue("--target-width");
                        fill.style.width = widthValue;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        skillsObserver.observe(skillsCard);
    }
}

function animateCounter(element, target) {
    let current = 0;
    const duration = 1500; // Absolute runtime duration metric configured in milliseconds
    const stepTime = Math.abs(Math.floor(duration / target));
    
    if (target === 0) return;
    
    const timer = setInterval(() => {
        current++;
        element.textContent = current;
        if (current >= target) {
            clearInterval(timer);
        }
    }, stepTime);
}

/**
 * 7. HIDDEN EASTER EGG METHOD: KONAMI CODE SEQUENCER (HACKER MODE ACTIVE)
 */
function initKonamiCode() {
    // Standard inputs configuration mapping structure
    const konamiSequence = [
        "ArrowUp", "ArrowUp", 
        "ArrowDown", "ArrowDown", 
        "ArrowLeft", "ArrowRight", 
        "ArrowLeft", "ArrowRight", 
        "b", "a"
    ];
    let userTrackIndex = 0;

    window.addEventListener("keydown", (e) => {
        const expectedKey = konamiSequence[userTrackIndex];
        
        // Handle normalize capitalization configuration rules for safety
        if (e.key.toLowerCase() === expectedKey.toLowerCase()) {
            userTrackIndex++;
            if (userTrackIndex === konamiSequence.length) {
                activateHackerMode();
                userTrackIndex = 0; // Clear index tracks
            }
        } else {
            userTrackIndex = 0; // Reset array progression trace completely on fault input sequence
        }
    });

    function activateHackerMode() {
        document.body.classList.toggle("matrix-mode");
        
        // Generate System Console Hack Alert
        const systemNotification = document.createElement("div");
        systemNotification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: #00ff46;
            color: #000;
            padding: 15px 25px;
            font-family: 'Orbitron', monospace;
            font-size: 0.85rem;
            font-weight: 900;
            border-radius: 4px;
            box-shadow: 0 0 20px rgba(0, 255, 70, 0.6);
            z-index: 100000;
            letter-spacing: 1px;
            animation: textGlitch 0.3s infinite;
        `;
        systemNotification.textContent = "✔ OVERRIDE SUCCESSFUL: HACKER_MODE ACTIVATED.";
        document.body.appendChild(systemNotification);
        
        setTimeout(() => {
            systemNotification.remove();
        }, 4000);
    }
}
document.getElementById('cyber-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Blocks standard browser page reload mechanics
    
    const form = e.target;
    const buttonText = document.getElementById('submit-btn-text');
    const buttonIcon = document.getElementById('submit-btn-icon');
    const statusDiv = document.getElementById('form-status');
    
    // UI Update: Transition button to loading status
    buttonText.textContent = "TRANSMITTING...";
    buttonIcon.className = "fa-solid fa-spinner fa-spin"; // Spin the paper plane icon
    
    const data = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success Matrix Animation Trigger
            statusDiv.style.display = "block";
            statusDiv.style.color = "var(--cyan)";
            statusDiv.innerHTML = `<span class="neon-text-cyan">// SYSTEM_SUCCESS:</span> MESSAGE_DELIVERED_TO_ZIZO`;
            form.reset(); // Erase input fields automatically
        } else {
            throw new Error();
        }
    } catch (error) {
        // Fallback Error Mechanics
        statusDiv.style.display = "block";
        statusDiv.style.color = "var(--purple)";
        statusDiv.innerHTML = `<span class="neon-text-purple">// SYSTEM_ERROR:</span> TRANSMISSION_FAILED. TRY_AGAIN`;
    } finally {
        // Reset the button visual framework to default state
        buttonText.textContent = "SEND MESSAGE";
        buttonIcon.className = "fa-solid fa-paper-plane";
    }
});