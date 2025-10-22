// Game State
let credits = 1000;
let bet = 10;
let isSpinning = false;

const SYMBOLS = ["🍒", "7️⃣", "💎", "⭐", "🍋", "🔔", "🍇"];

const PAYOUTS = {
    "💎💎💎": 50,
    "7️⃣7️⃣7️⃣": 30,
    "⭐⭐⭐": 20,
    "🔔🔔🔔": 15,
    "🍒🍒🍒": 10,
    "🍇🍇🍇": 10,
    "🍋🍋🍋": 5,
};

// DOM Elements
const creditsElement = document.getElementById('credits');
const betValueElement = document.getElementById('betValue');
const betAmountElement = document.getElementById('betAmount');
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinBtn = document.getElementById('spinBtn');
const increaseBetBtn = document.getElementById('increaseBet');
const decreaseBetBtn = document.getElementById('decreaseBet');
const addCreditsBtn = document.getElementById('addCreditsBtn');
const winDisplay = document.getElementById('winDisplay');
const toastContainer = document.getElementById('toastContainer');

// Toast Notification System
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slide-in 0.3s ease-out reverse';
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    }, 3000);
}

// Update Display Functions
function updateDisplay() {
    creditsElement.textContent = credits;
    betValueElement.textContent = bet;
    betAmountElement.textContent = bet;
    
    decreaseBetBtn.disabled = isSpinning || bet <= 10;
    increaseBetBtn.disabled = isSpinning || bet >= 100;
    spinBtn.disabled = isSpinning || credits < bet;
}

function showWin(amount) {
    winDisplay.innerHTML = `<div class="win-text">+${amount} CRÉDITOS!</div>`;
    setTimeout(() => {
        winDisplay.innerHTML = '';
    }, 3000);
}

// Get Random Symbol
function getRandomSymbol() {
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

// Spin Animation
function animateReel(reel, finalSymbol, duration) {
    return new Promise((resolve) => {
        reel.classList.add('spinning');
        
        const interval = setInterval(() => {
            reel.textContent = getRandomSymbol();
        }, 100);
        
        setTimeout(() => {
            clearInterval(interval);
            reel.classList.remove('spinning');
            reel.textContent = finalSymbol;
            resolve();
        }, duration);
    });
}

// Main Spin Function
async function spin() {
    if (isSpinning) return;
    
    if (credits < bet) {
        showToast('Créditos insuficientes!', 'error');
        return;
    }
    
    isSpinning = true;
    credits -= bet;
    winDisplay.innerHTML = '';
    updateDisplay();
    
    // Update button text
    spinBtn.textContent = '🎰 GIRANDO...';
    
    // Generate final symbols
    const finalSymbols = [
        getRandomSymbol(),
        getRandomSymbol(),
        getRandomSymbol()
    ];
    
    // Animate reels with different durations
    await Promise.all([
        animateReel(reel1, finalSymbols[0], 1500),
        animateReel(reel2, finalSymbols[1], 1800),
        animateReel(reel3, finalSymbols[2], 2100)
    ]);
    
    // Check for wins
    const combination = finalSymbols.join('');
    const payout = PAYOUTS[combination];
    
    if (payout) {
        const winAmount = payout * bet;
        credits += winAmount;
        
        // Add winning animation
        reel1.classList.add('winning');
        reel2.classList.add('winning');
        reel3.classList.add('winning');
        
        setTimeout(() => {
            reel1.classList.remove('winning');
            reel2.classList.remove('winning');
            reel3.classList.remove('winning');
        }, 500);
        
        showWin(winAmount);
        showToast(`🎉 VOCÊ GANHOU ${winAmount} CRÉDITOS! 🎉`, 'success');
    } else {
        showToast('Tente novamente!', 'info');
    }
    
    isSpinning = false;
    spinBtn.textContent = `🎮 GIRAR (${bet} créditos)`;
    updateDisplay();
}

// Bet Adjustment Functions
function increaseBet() {
    if (bet < 100) {
        bet += 10;
        updateDisplay();
    }
}

function decreaseBet() {
    if (bet > 10) {
        bet -= 10;
        updateDisplay();
    }
}

function addCredits() {
    credits += 500;
    showToast('500 créditos adicionados!', 'success');
    updateDisplay();
}

// Event Listeners
spinBtn.addEventListener('click', spin);
increaseBetBtn.addEventListener('click', increaseBet);
decreaseBetBtn.addEventListener('click', decreaseBet);
addCreditsBtn.addEventListener('click', addCredits);

// Keyboard Support
document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        spin();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        increaseBet();
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        decreaseBet();
    }
});

// Initialize
updateDisplay();

// Welcome Message
setTimeout(() => {
    showToast('🎰 Bem-vindo ao Cassino Slot! Boa sorte! 🍀', 'success');
}, 500);