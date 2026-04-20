// --- 1. Audio System: Sweet Music Box Synth ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let isPlaying = false;
let audioUnlocked = false;

// Happy Birthday Melody
// Format: [Frequency, Duration (beats)]
// Tempo: 100 BPM -> 1 beat = 0.6 seconds
const notes = {
    'C4': 261.63, 'D4': 293.66, 'E4': 329.63,
    'F4': 349.23, 'G4': 392.00, 'A4': 440.00,
    'Bb4': 466.16, 'C5': 523.25
};

const melody = [
    [notes.C4, 0.75], [notes.C4, 0.25], [notes.D4, 1], [notes.C4, 1], [notes.F4, 1], [notes.E4, 2],
    [notes.C4, 0.75], [notes.C4, 0.25], [notes.D4, 1], [notes.C4, 1], [notes.G4, 1], [notes.F4, 2],
    [notes.C4, 0.75], [notes.C4, 0.25], [notes.C5, 1], [notes.A4, 1], [notes.F4, 1], [notes.E4, 1], [notes.D4, 2],
    [notes.Bb4, 0.75], [notes.Bb4, 0.25], [notes.A4, 1], [notes.F4, 1], [notes.G4, 1], [notes.F4, 3]
];

function playTone(freq, time, duration) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    // Music Box Timbre: Sine wave
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    
    // Envelope for bell/music box sound
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.3, time + 0.05); // quick attack
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration + 1.0); // slow release ringing
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start(time);
    osc.stop(time + duration + 1.5); // Allow ring out
}

function playMelody() {
    if (isPlaying) return;
    isPlaying = true;
    
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    let startTime = audioCtx.currentTime + 0.2;
    const beatLen = 0.6; // 100 BPM
    
    let totalTime = 0;
    melody.forEach(([freq, beats]) => {
        const duration = beats * beatLen;
        playTone(freq, startTime, duration);
        startTime += duration;
        totalTime += duration;
    });
    
    // Loop
    setTimeout(() => {
        isPlaying = false;
        playMelody(); // loop forever while open
    }, (totalTime + 1.5) * 1000);
}

// --- 2. Screen Navigation ---
let currentScreen = 1;
const totalScreens = 4;

function goToScreen(targetIndex) {
    const currentEl = document.getElementById(`screen-${currentScreen}`);
    const targetEl = document.getElementById(`screen-${targetIndex}`);
    
    if (!currentEl || !targetEl) return;
    
    // Transition Out
    currentEl.classList.remove('active');
    currentEl.classList.add('exit-left');
    
    // Preparation
    targetEl.classList.add('enter-right');
    targetEl.classList.add('active'); // Needs active block to calculate clientHeight if needed
    
    // Small timeout to allow repaint for transition
    setTimeout(() => {
        targetEl.classList.remove('enter-right');
        currentEl.classList.remove('exit-left'); // clean up later
    }, 50);
    
    currentScreen = targetIndex;
    
    // Trigger specific screen effects
    if (currentScreen === 2) {
        generateHearts();
    } else if (currentScreen === 3) {
        startTypewriter();
    } else if (currentScreen === 4) {
        triggerFinale();
    }
}

// --- 3. Screen Effects ---

// Screen 2: Hearts
function generateHearts() {
    const container = document.getElementById('hearts-container');
    if(container.children.length > 0) return; // already generated
    
    const colors = ['#fce7f3', '#fbcfe8', '#f9a8d4', '#ffffff'];
    for(let i=0; i<15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-shape';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 4}s`;
        const size = 10 + Math.random() * 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(heart);
    }
}

// Screen 3: Typewriter
const textToType = "estoy agradecida de tenerte en mi vida, eres una de las personas mas hermosas que he conocido. Gracias por hacer mi vida más facil, y saber que nunca estaré sola.";
let typeWriterDone = false;

function startTypewriter() {
    if (typeWriterDone) return;
    const el = document.getElementById('typewriter-text');
    const btn = document.getElementById('btn-next-3');
    let i = 0;
    el.innerHTML = '';
    
    function type() {
        if (i < textToType.length) {
            el.innerHTML += textToType.charAt(i);
            i++;
            // slight random variation for human realism
            const speed = 40 + Math.random() * 30; 
            setTimeout(type, speed);
        } else {
            typeWriterDone = true;
            btn.classList.add('fade-in-visible');
        }
    }
    
    setTimeout(type, 800); // Wait for transition
}

// Screen 4: Finale Celebration
function triggerFinale() {
    const el = document.getElementById(`screen-4`);
    el.classList.add('animate-in');
    
    // Haptic Feedback for iPhone (if supported/allowed)
    if (navigator.vibrate) {
        // Happy, pulsing vibration
        navigator.vibrate([200, 100, 200, 100, 400]);
    }
    
    // Custom Confetti: soft romantic colors mixed with gold
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#f472b6', '#fbcfe8', '#ffffff', '#ffd700']
        });
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#f472b6', '#fbcfe8', '#ffffff', '#ffd700']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// --- 4. Event Listeners ---

document.getElementById('btn-open').addEventListener('click', () => {
    // Audio context requires user interaction to start
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    playMelody();
    goToScreen(2);
});

document.getElementById('btn-next-2').addEventListener('click', () => {
    goToScreen(3);
});

document.getElementById('btn-next-3').addEventListener('click', () => {
    goToScreen(4);
});

document.getElementById('btn-restart').addEventListener('click', () => {
    // Fade out everything and reload visually
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        location.reload();
    }, 1000);
});
