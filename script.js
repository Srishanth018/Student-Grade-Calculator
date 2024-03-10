let calculate = () => {
    let english = document.querySelector("#english").value;
    let chemistry = document.querySelector("#chemistry").value;
    let sanskrit = document.querySelector("#sanskrit").value;
    let maths = document.querySelector("#maths").value;
    let physics = document.querySelector("#physics").value;
    let grade = "";

    let total = parseFloat(english) + parseFloat(chemistry) + parseFloat(sanskrit) +
        parseFloat(maths) + parseFloat(physics);

    let percentage = (total / 500) * 100;
    if (percentage <= 100 && percentage >= 90) {
        grade = "A";
    }
    else if (percentage < 90 && percentage >= 80) {
        grade = "B";
    }
    else if (percentage < 80 && percentage >= 70) {
        grade = "C";
    }
    else if (percentage < 70 && percentage >= 50) {
        grade = "D";
    }
    else if (percentage < 50 && percentage >= 30) {
        grade = "E";
    }
    else if (percentage < 30 && percentage >= 0){
        grade = "F";
    }

    if (english == "" || chemistry == "" || sanskrit == "" 
        || maths == "" || physics == "") {
        document.querySelector("#output").innerHTML = "Enter all the values!";
    }
    else {
        if (percentage >= 30) {
            document.querySelector("#output").innerHTML = ` Your total marks are ${total} out of 500 
            and your percentage is ${percentage}%. <br> 
            Your grade is ${grade}.<br> <b>Result</b>: Pass. `;
        } else {
            document.querySelector("#output").innerHTML = ` Your total marks are ${total} out of 500 
            and your percentage is ${percentage}%. <br> 
            Your grade is ${grade}.<br> <b>Result</b>: Fail. `;
        }
    }
};