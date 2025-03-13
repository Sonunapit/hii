let num1, num2, correctAnswer, startTime;
const operations = ["+", "-", "*"];

function startGame() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Please enter a valid number range.");
        return;
    }

    num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let operation = operations[Math.floor(Math.random() * operations.length)];

    correctAnswer = calculate(num1, num2, operation);

    document.getElementById("mathQuestion").innerText = `Solve: ${num1} ${operation} ${num2}`;
    document.getElementById("question").style.display = "block";
    document.getElementById("userAnswer").value = "";
    document.getElementById("result").innerText = "";

    startTime = new Date().getTime(); 
}

function calculate(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("userAnswer").value);
    let endTime = new Date().getTime();
    let timeTaken = ((endTime - startTime) / 1000).toFixed(2); 

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = `✅ Correct! Time Taken: ${timeTaken} seconds`;
    } else {
        document.getElementById("result").innerText = `❌ Wrong! Correct Answer: ${correctAnswer} | Time Taken: ${timeTaken} seconds`;
    }
}