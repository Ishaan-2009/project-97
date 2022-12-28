function check() {
    multiplication_answer = document.getElementById("multiplication_answer").value;
    addition_answer = document.getElementById("addition_answer").value;
    division_answer = document.getElementById("division_answer").value;
    subtraction_answer = document.getElementById("subtraction_answer").value;
    
    if (multiplication_answer ==72) {
        document.getElementById("result1").innerHTML = "correct";
    } else {
        document.getElementById("result1").innerHTML = "incorrect";
    }

    if (addition_answer == 978) {
        document.getElementById("result2").innerHTML = "correct";
    } else {
        document.getElementById("result2").innerHTML = "incorrect";
    }

    if (division_answer == 12) {
        document.getElementById("result3").innerHTML = "correct";
    } else {
        document.getElementById("result3").innerHTML = "incorrect";
    }

    if (subtraction_answer == 137) {
        document.getElementById("result4").innerHTML = "correct";
    } else {
        document.getElementById("result4").innerHTML = "incorrect";
    }
}