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

    // move the car to thte right
        function moveCarRight(carRight) {
        switch(true){
            case carRight.classList.contains('c1'):
                carRight.classList.remove('c1')
                carRight.classList.add('c2')
                break
            case carRight.classList.contains('c2'):
                carRight.classList.remove('c2')
                carRight.classList.add('c3')
                break
            case carRight.classList.contains('c3'):
                carRight.classList.remove('c3')
                carRight.classList.add('c1')
                break
        }
    }

    function autoMoveLogs() {
        logsLeft.forEach(logLeft => moveLogLeft(logLeft))
        logsRight.forEach(logRight => moveLogRight(logRight))
    }

    function moveLogLeft() {
        switch(true) {
            case logLeft.classList.contains('l1'):
                logLeft.classList.remove('l1')
                logLeft.classList.add('l2')
                break
            case logLeft.classList.contains('l2'):
                logLeft.classList.remove('l2')
                logLeft.classList.add('l3')
                break
            case logLeft.classList.contains('l3'):
                logLeft.classList.remove('l3')
                logLeft.classList.add('l4')
                break
            case logLeft.classList.contains('l4'):
                logLeft.classList.remove('l4')
                logLeft.classList.add('l5')
                break
            case logLeft.classList.contains('l5'):
                logLeft.classList.remove('l5')
                logLeft.classList.add('l1')
                break
        }
    }

    function moveLogRight(logRight) {
        switch(true) {
            case logRight.classList.contains('l1') :
                logRight.classList.remove('l1')
                logRight.classList.add('l5')
                break
            case logRight.classList.contains('l2') :
                logRight.classList.remove('l2')
                logRight.classList.add('l1')
                break
            case logRight.classList.contains('l3') :
                logRight.classList.remove('l3')
                logRight.classList.add('l2')
                break
            case logRight.classList.contains('l4') :
                logRight.classList.remove('l4')
                logRight.classList.add('l3')
                break
            case logRight.classList.contains('l5') :
                logRight.classList.remove('l5')
                logRight.classList.add('l4')
                break
        }
    }

    //winning frogger
    function win(){
        if (squares[4].classList.contains('frog')){
            result.innerHTML = 'YOU WON'
            squares[currentIndex].classList.remove('frog')
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFrog)
        }
    }

    // losing frogger
    function lose() {
        if ((currentTime === 0) || (squares[currentIndex].classList.contains('c1')) || (squares[currentIndex].classList.contains('l5')) || (squares[currentIndex].classList.contains('l4'))) {
            result.innerHTML = 'YOU LOSE'
            squares[currentIndex].classList.remove('frog')
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFrog)
        }
    }
})