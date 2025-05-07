const elements = {
    incrementBtn: document.getElementById('btn-increment'),
    decrementBtn: document.getElementById('btn-decrement'),
    resetBtn: document.getElementById('btn-reset'),
    powerDisplay: document.getElementById('click-power'),
    countDisplay: document.getElementById('click-count'),
    upgradePlusOne: document.getElementById('upgrade-plus-one'),
    upgradePlusTen: document.getElementById('upgrade-plus-ten'),
    multiplierUpgrade: document.getElementById('upgrade-multiplier')
};

let clickCount = 0;
let clickPower = 1;

let alerted10 = false;
let alerted20 = false;

function updateClickDisplay() {
    elements.countDisplay.textContent = `Кликов: ${clickCount}`;

    if (clickCount >= 20) {
        elements.countDisplay.className = 'highlight-level-2';
        if (!alerted20) {
            alert('Поздравляю вы накликали 20 раз!');
            alerted20 = true;
        }
    } else if (clickCount >= 10) {
        elements.countDisplay.className = 'highlight-level-1';
        if (!alerted10) {
            alert('Поздравляю вы накликали 10 раз!');
            alerted10 = true;
        }
    } else {
        elements.countDisplay.className = '';
    }
}

elements.incrementBtn.addEventListener('click', () => {
    clickCount += clickPower;
    updateClickDisplay();
});

elements.decrementBtn.addEventListener('click', () => {
    if (clickCount > 0) clickCount--;
    updateClickDisplay();
});

elements.resetBtn.addEventListener('click', () => {
    clickCount = 0;
    clickPower = 1;
    alerted10 = false;
    alerted20 = false;
    updateClickDisplay();
    elements.powerDisplay.textContent = 'Клик = 1';
});

elements.upgradePlusOne.addEventListener('click', () => {
    if (clickCount >= 10) {
        clickPower++;
        elements.powerDisplay.textContent = `Клик = ${clickPower}`;
        elements.countDisplay.textContent = `Кликов: ${clickCount -= 10}`
        updateClickDisplay()
    }
});

elements.upgradePlusTen.addEventListener('click', () => {
    if (clickCount >= 20) {
        clickPower += 10;
        elements.powerDisplay.textContent = `Клик = ${clickPower}`;
        elements.countDisplay.textContent = `Кликов: ${clickCount -= 20}`
        updateClickDisplay()
    }
});

elements.multiplierUpgrade.addEventListener('click', () => {
    if (clickCount >= 50) {
        clickCount *= 2;
        elements.countDisplay.textContent = `Кликов: ${clickCount}`
        updateClickDisplay()
    }
    // clickCount *= 2;
    // updateClickDisplay();
});
