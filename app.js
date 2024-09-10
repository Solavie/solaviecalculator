function calculerRails() {
    const landscapeSize = parseFloat(document.getElementById('landscapeSize').value);
    const portraitSize = parseFloat(document.getElementById('portraitSize').value);
    const numPanneaux = parseFloat(document.getElementById('numPanneaux').value);

    if (isNaN(landscapeSize) || isNaN(portraitSize) || isNaN(numPanneaux)) {
        alert("Veuillez entrer des valeurs valides pour les tailles de panneau et le nombre de panneaux.");
        return;
    }

    // Calculer en utilisant les tailles spécifiques pour paysage et portrait
    const resultLandscape = Math.ceil(((numPanneaux * landscapeSize) / 2) * 6);
    const resultPortrait = Math.ceil(((numPanneaux * portraitSize) / 2) * 6);

    document.getElementById('resultLandscape').innerText = `Placement paysage = ${resultLandscape} rails`;
    document.getElementById('resultPortrait').innerText = `Placement portrait = ${resultPortrait} rails`;
}


function calculerCrochets() {
    const numRails = parseFloat(document.getElementById('numRails').value);
    if (isNaN(numRails)) {
        alert("Veuillez entrer un nombre valide de rails.");
        return;
    }
    const resultCrochets = Math.ceil(((7 / 6) * (numRails*6)));
    document.getElementById('resultCrochets').innerText = `Crochets nécessaires = ${resultCrochets} crochets`;
}

function calculerClames() {
    const numLignes = parseInt(document.getElementById('numLignes').value);
    const panneauxParLigne = document.getElementById('panneauxParLigne').value.split(',').map(Number);

    if (panneauxParLigne.length !== numLignes) {
        alert("Le nombre de lignes ne correspond pas au nombre de valeurs pour les panneaux par ligne.");
        return;
    }

    const clamesFin = 4 * numLignes;
    const clamesMilieu = panneauxParLigne.reduce((total, panneaux) => total + 2 * (panneaux - 1), 0);

    document.getElementById('resultClamesFin').innerText = `Clames de fin = ${clamesFin}`;
    document.getElementById('resultClamesMilieu').innerText = `Clames de milieu = ${clamesMilieu}`;
}

function calculerMinPanneaux() {
    const mppVoltageBas = parseFloat(document.getElementById('mppVoltageBas').value);
    const panneauVmp = parseFloat(document.getElementById('panneauVmp').value);

    if (isNaN(mppVoltageBas) || isNaN(panneauVmp)) {
        alert("Veuillez entrer des valeurs valides pour le MPP Voltage bas et le Vmp du panneau.");
        return;
    }

    const minPanneaux = Math.ceil(mppVoltageBas / panneauVmp);
    document.getElementById('resultMinPanneaux').innerText = `Nombre minimum de panneaux = ${minPanneaux}`;
}

function calculerMaxPanneaux() {
    const maxInputVoltage = parseFloat(document.getElementById('maxInputVoltage').value);
    const panneauVoc = parseFloat(document.getElementById('panneauVoc').value);

    if (isNaN(maxInputVoltage) || isNaN(panneauVoc)) {
        alert("Veuillez entrer des valeurs valides pour le Max input voltage et le Voc du panneau.");
        return;
    }

    const maxPanneaux = Math.floor(maxInputVoltage / (panneauVoc*1.1));
    document.getElementById('resultMaxPanneaux').innerText = `Nombre maximum de panneaux = ${maxPanneaux}`;
}

function verifierMaxPanneaux() {
    const maxStringSize = parseFloat(document.getElementById('maxStringSize').value);
    const checkPanneauVmp = parseFloat(document.getElementById('checkPanneauVmp').value);

    if (isNaN(maxStringSize) || isNaN(checkPanneauVmp)) {
        alert("Veuillez entrer des valeurs valides pour le Max string size et le Vmp du panneau.");
        return;
    }

    const maxStringVoltage = Math.floor(maxStringSize * (checkPanneauVmp));
    document.getElementById('resultCheckPanneaux').innerText = `Voltage maximum du string = ${maxStringVoltage} V`;
}
