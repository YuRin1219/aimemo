const url = '/get-ai-response';

async function getAIResponse(prompt) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        return data.aiResponse;
    } catch (error) {
        console.error('AI‚Ì‰“š‚ğæ“¾‚Å‚«‚Ü‚¹‚ñ‚Å‚µ‚½B', error);
        throw error;
    }
}

document.getElementById('memoText').addEventListener('input', function () {
    const memo = this.value;
    localStorage.setItem('memo', memo);
});

document.getElementById('saveButton').addEventListener('click', function () {
    const memoText = document.getElementById('memoText').value;
    localStorage.setItem('memo', memoText);
    alert('ƒƒ‚‚ª•Û‘¶‚³‚ê‚Ü‚µ‚½I');
});

document.getElementById('askButton').addEventListener('click', async function () {
    const prompt = document.getElementById('aiPrompt').value;
    try {
        const aiResponse = await getAIResponse(prompt);
        document.getElementById('aiResponse').innerText = aiResponse;
    } catch (error) {
        document.getElementById('aiResponse').innerText = 'AI‚Ì‰“š‚ğæ“¾‚Å‚«‚Ü‚¹‚ñ‚Å‚µ‚½B';
    }
});

function getMemo() {
    const memo = localStorage.getItem('memo');
    if (memo) {
        document.getElementById('memoText').value = memo;
    }
}

getMemo();