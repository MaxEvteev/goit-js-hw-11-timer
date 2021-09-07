class CountdownTimer {
    constructor({selector, targetDate}) {
        this.targetDate = targetDate;
        this.days = document.querySelector(`${selector} span[data-value="days"]`);
        this.hours = document.querySelector(`${selector} span[data-value="hours"]`);
        this.mins = document.querySelector(`${selector} span[data-value="mins"]`);
        this.secs = document.querySelector(`${selector} span[data-value="secs"]`);
    };

    start(){
        const timerid = setInterval(() => {
            const differenceTime = this.targetDate - Date.now();
            if (differenceTime > 0) {
                this.days.textContent = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
                this.hours.textContent = Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.mins.textContent = Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60));
                this.secs.textContent = Math.floor((differenceTime % (1000 * 60)) / 1000);
            } else {
                this.days.textContent = "00";
                this.hours.textContent = "00";
                this.mins.textContent = "00";
                this.secs.textContent = "00";
                clearInterval(timerid)
            }
            
        }, 1000);
            
    };
};

const newTimer1 = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('sep 09, 2021'),
});
const newTimer2 = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('sep 10, 2021'),
});
newTimer1.start()
newTimer2.start()
