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

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Conteúdo da carta
    const letterContent = `
    No dia do nosso primeiro encontro, eu tinha aula na faculdade, então decidi ir arrumada para só ir te encontrar depois. 
    Eu nunca tive tanta certeza de que roupa usar. Quando eu vi o vestido preto no guarda-roupa, soube exatamente que ia usar ele. 
    Queria te fazer tremer quando me visse e te deixar pensando: "Meu Deus, ela é mais bonita pessoalmente."

    Quando subi aquelas escadas do cinema para te encontrar e te vi, pensei: "Meu Deus, ele é mais bonito pessoalmente" e comecei a tremer de nervosismo. 
    Isso é tão engraçado, porque o que eu queria causar em você, você causou em mim. Quando bati os olhos nos seus, a única coisa que eu queria era te beijar (e eu o fiz). 
    Voltei para a faculdade e só conseguia pensar que estava muito ferrada. Tinha medo de me apaixonar (já estava apaixonada), tinha muito medo de amar. 
    Mas deixa eu te contar um segredo... Eu já sabia que você seria meu.

    Você tirou de mim todo o medo de amar. Colocou todo o seu carinho e confiança em mim e, mesmo que eu ainda sinta que não mereço tudo isso, vou fazer de tudo para merecer, 
    porque a única coisa que eu quero é continuar sendo amada por você. Prometo te ser fiel, leal, parceira, sua mulher para a vida inteira. Prometo te amar. 
    Prometo cuidar de você na saúde e na doença. Prometo te dar filhos lindos. Prometo o melhor sexo todas as noites. Prometo ser unicamente sua, de corpo e alma. 
    E não quero só te prometer. Quero provar isso todos os dias.

    Obrigada por ser tão compreensivo, por ser tão paciente comigo. Por ser um homem com H maiúsculo, lindo, inteligente, gentil, cuidadoso, romântico, caprichoso, lindo, atencioso... 
    Já falei lindo?

    Você me faz genuinamente feliz, trouxe sentido à minha vida. Sua presença ilumina os meus dias, e seu sorriso aquece o meu coração. Você é o homem mais incrível que já conheci, 
    com um coração enorme e uma alma gentil. Cada momento ao seu lado é uma benção, e eu sou eternamente grata por ter você em minha vida. A forma como você me olha, me toca e me ama 
    me faz sentir a mulher mais especial do mundo. Você é único, Ricardo, um verdadeiro presente que a vida me deu.

    Eu te amo, Ricardo!

    Do seu amor,
    Isadora.
    `;

    // Adiciona o conteúdo ao PDF
    doc.text(letterContent, 10, 10);
    
    // Salva o PDF com o nome "Carta_para_Ricardo.pdf"
    doc.save('Carta_para_Ricardo.pdf');
}
