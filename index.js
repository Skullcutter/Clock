const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
    const now = new Date();


    // Second Hand
    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;


    // Minutes Hand
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegree}deg)`;


    // Hour Hand
    const hour = now.getMinutes();
    const hoursDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setDate, 1000);