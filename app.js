document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelector('.grid-div');
    const timeLeft = document.querySelector('#time-left');
    const result = document.querySelector('#result')
    const startBtn = document.querySelector('#button')
    const carsLeft = document.querySelector('.cars-left')
    const carsRight = document.querySelector('.cars-right')
    const logsLeft = document.querySelector('.log-left')
    const logsRight = document.querySelector('.log-right')
    const width = 9
    let currentIndex = 76
    let timerId

    // make frog
    squares[currentIndex].classList.add('frog')

    // move frog
    function moveFrog(e) {
        squares[currentIndex].classList.remove('frog')
        switch(e.keyCode) {
            case 37:
                if (currentIndex % width !== 0) currentIndex-=1
                break
            case 38:
                if(currentIndex - width >=0) currentIndex -=width
                break
            case 39:
                if(currentIndex % width < width - 1) currentIndex +=1
                break
            case 40:
                if(currentIndex + width < width * width) currentIndex += width
                break
        }
        squares[currentIndex].classList.add('frog')
        lose()
        win()
    }

    function autoMoveCars() {
        carsLeft.forEach(carsLeft => {
            moveCarLeft(carLeft)
        });
        carsRight.forEach(carsRight => {
            moveCarRigth(carRight)
        });
    }

    function moveCarLeft(carLeft) {
        switch(true){
            case carLeft.classList.contains('c1'):
                carLeft.classList.remove('c1')
                carLeft.classList.add('c2')
                break
            case carLeft.classList.contains('c2'):
                carLeft.classList.remove('c2')
                carLeft.classList.add('c3')
                break
            case carLeft.classList.contains('c3'):
                carLeft.classList.remove('c3')
                carLeft.classList.add('c1')
                break
        }
    }

})