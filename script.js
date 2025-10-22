function updateForm() {
    const formula = document.getElementById("formula").value;
    const inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";

    switch (formula) {
        case "speed":
            inputsDiv.innerHTML = `
                <label for="distance">Jarak (meter):</label>
                <input type="number" id="distance">

                <label for="time">Waktu (detik):</label>
                <input type="number" id="time">
            `;
            break;
        case "force":
            inputsDiv.innerHTML = `
                <label for="mass">Massa (kg):</label>
                <input type="number" id="mass">

                <label for="acceleration">Percepatan (m/s²):</label>
                <input type="number" id="acceleration">
            `;
            break;
        case "kinetic":
            inputsDiv.innerHTML = `
                <label for="massKinetic">Massa (kg):</label>
                <input type="number" id="massKinetic">

                <label for="velocity">Kecepatan (m/s):</label>
                <input type="number" id="velocity">
            `;
            break;
    }
}

function calculate() {
    const formula = document.getElementById("formula").value;
    let resultText = "";

    if (formula === "speed") {
        const s = parseFloat(document.getElementById("distance").value);
        const t = parseFloat(document.getElementById("time").value);
        if (t === 0) {
            resultText = "Waktu tidak boleh nol.";
        } else {
            const v = s / t;
            resultText = `Kecepatan: ${v.toFixed(2)} m/s`;
        }
    }

    else if (formula === "force") {
        const m = parseFloat(document.getElementById("mass").value);
        const a = parseFloat(document.getElementById("acceleration").value);
        const F = m * a;
        resultText = `Gaya: ${F.toFixed(2)} N`;
    }

    else if (formula === "kinetic") {
        const m = parseFloat(document.getElementById("massKinetic").value);
        const v = parseFloat(document.getElementById("velocity").value);
        const Ek = 0.5 * m * v * v;
        resultText = `Energi Kinetik: ${Ek.toFixed(2)} joule`;
    }

    document.getElementById("result").innerText = resultText;
}

// Tampilkan form pertama kali
updateForm();
