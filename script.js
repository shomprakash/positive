const horoscopes = [
    "You will find happiness in the simplest of things today. Embrace it.",
    "An unexpected opportunity will come your way. Be ready to seize it.",
    "Someone close to you will bring joy and laughter into your life today.",
    "Your creativity will shine through in an unexpected way.",
    "A pleasant surprise awaits you. Keep your eyes open.",
    "Today is a great day to reconnect with an old friend.",
    "You will discover a hidden talent that you never knew you had.",
    "Something you lost will make its way back to you today.",
    "You will find clarity in a situation that has been confusing you.",
    "An interesting conversation will lead to a new perspective.",
    "You will accomplish something you've been putting off for a while.",
    "Today is the perfect day to try something new.",
    "You will receive a compliment that will brighten your day.",
    "A small act of kindness will come back to you in a big way.",
    "You will make someone smile today, and it will make you feel great.",
    "An old problem will finally be resolved in an unexpected way.",
    "You will feel a strong sense of connection with those around you.",
    "A new hobby or interest will capture your attention today.",
    "You will have a moment of inspiration that leads to a great idea.",
    "Today is a day to take a leap of faith.",
    "You will find peace in a moment of quiet reflection.",
    "An opportunity for growth will present itself to you today.",
    "You will receive good news that you've been waiting for.",
    "A chance encounter will leave a lasting impression on you.",
    "You will feel a deep sense of gratitude for the things you have.",
    "Today is a great day to start a new project.",
    "You will feel a surge of energy and motivation.",
    "Something you've been hoping for will come true today.",
    "You will have a moment of clarity that will guide you forward.",
    "A new adventure is on the horizon. Embrace it.",
];

function getRandomHoroscope() {
    const randomIndex = Math.floor(Math.random() * horoscopes.length);
    return horoscopes[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    const horoscopeElement = document.getElementById("horoscope");
    horoscopeElement.textContent = getRandomHoroscope();
});
