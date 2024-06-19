function checkAnswers() {
    const answer1 = document.getElementById('q1').value;
    const answer2 = document.getElementById('q2').value;
    const answer3 = document.getElementById('q3').value;

    const correct1 = "29 de dezembro";
    const correct2 = "preto";
    const correct3 = "cinema";

    if (answer1 === correct1 && answer2 === correct2 && answer3 === correct3) {
        document.getElementById('quiz').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
    } else {
        alert("Alguma resposta está incorreta. Tente novamente!");
    }
}
