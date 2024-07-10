document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const encryptedText = btoa(inputText);
        showOutput(encryptedText);
    }
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        try {
            const decryptedText = atob(inputText);
            showOutput(decryptedText);
        } catch (e) {
            alert('Error: texto no válido para desencriptar');
        }
    }
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

document.getElementById('togglePunctuationButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const toggledText = togglePunctuation(inputText);
        showOutput(toggledText);
    }
});

function showOutput(text) {
    document.getElementById('messageContainer').style.display = 'none';
    document.getElementById('outputTextContainer').style.display = 'flex';
    document.getElementById('outputText').innerText = text;
}

function togglePunctuation(text) {
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    if (punctuationRegex.test(text)) {
        return text.replace(punctuationRegex, '');
    } else {
        return text + '.';
    }
}