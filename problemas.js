function createLeaf() {
    const leaf = document.createElement('div');
    leaf.textContent = '🍂';
    leaf.classList.add('leaf');
    document.body.appendChild(leaf);

    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.top = -20 + 'px'; // Start from above

    setTimeout(() => {
        leaf.remove();
    }, 6000);
}

function sprinkleFairyDust() {
    const numberOfLeaves = 3;
    for (let i = 0; i < numberOfLeaves; i++) {
        createLeaf();
    }
}

setInterval(sprinkleFairyDust, 500);

function createLeafy() {
    const leaf = document.createElement('div');
    leaf.textContent = '🍃';
    leaf.classList.add('leafy');
    document.body.appendChild(leaf);

    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.top = -20 + 'px'; // Start from above

    setTimeout(() => {
        leaf.remove();
    }, 6000);
}

function FallingLeaves() {
    const numberOfLeaves = 2;
    for (let i = 0; i < numberOfLeaves; i++) {
        createLeafy();
    }
}

setInterval(FallingLeaves, 500);
// End of Falling leaves

document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("back-button");
    if (backButton) {
        backButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }

    const solutionContainer = document.getElementById("solution-container");
    const solutionText = document.getElementById("solution-text");
    const problemButtonContainer = document.getElementById("problem-button-container");

    // Definición de soluciones a los problemas comunes
    const solutions = {
        "Hojas amarillas": "El amarillamiento puede indicar exceso o falta de riego, deficiencia de nutrientes (nitrógeno, hierro), o problemas de drenaje. Verifica la humedad del sustrato antes de regar, considera un fertilizante equilibrado y asegúrate de que la maceta tenga buen drenaje.",
        "Manchas en las hojas": "Las manchas pueden ser causadas por hongos, bacterias o quemaduras solares. Evita mojar las hojas al regar, mejora la circulación del aire y, si sospechas de un patógeno, usa un fungicida o bactericida específico tras identificar la causa.",
        "Hojas marchitas": "El marchitamiento rápido sugiere falta de agua, pero también podría ser por exceso de riego que daña las raíces. Verifica la humedad del sustrato. Si está seco, riega a fondo. Si está húmedo, revisa las raíces por pudrición. Otra causa puede ser estrés por calor o trasplante reciente.",
        "Puntas de las hojas marrones": "Las puntas marrones suelen indicar baja humedad ambiental, riego irregular o acumulación de sales minerales del agua del grifo o fertilizantes. Usa agua filtrada o de lluvia, aumenta la humedad con un humidificador o pulverizando, y asegúrate de un riego constante.",
        "Crecimiento alargado y débil": "Este 'etiolamiento' es casi siempre por falta de luz. Mueve la planta gradualmente a un lugar más luminoso. Considera luces de crecimiento si la luz natural es insuficiente.",
        "Polvo blanco en las hojas y tallos": "El mildiú polvoriento prospera en ambientes húmedos con poca circulación de aire. Mejora la ventilación, evita mojar las hojas y aplica un fungicida específico si es necesario. También puedes probar con una solución de bicarbonato de sodio y agua.",
        "Áfidos": "También llamados comúnmente pulgones, son pequeños insectos chupadores de savia que se multiplican rápido y provocan un retraso en el crecimiento de las plantas huéspedes debido a su parasitismo. Límpialos con un paño húmedo o un chorro de agua. Introduce depredadores naturales como mariquitas o usa un insecticida suave (jabón potásico, aceite de neem).",
        "Moscas/mosquitos": "Las moscas del sustrato (mosquitos de la humedad) indican un suelo constantemente húmedo. Deja que la capa superior se seque entre riegos. Considera usar trampas pegajosas amarillas o un insecticida específico para larvas en el suelo.",
        "Raíces blandas y marrones": "La pudrición de la raíz es grave. Saca la planta de la maceta, recorta las raíces dañadas con tijeras esterilizadas y trasplanta a un sustrato fresco con excelente drenaje. Reduce la frecuencia de riego.",
        "Crecimiento lento": "Investiga las necesidades específicas de tu planta en cuanto a luz, agua, temperatura y nutrientes. Un trasplante a una maceta ligeramente más grande con sustrato fresco puede ayudar si las raíces están apretadas. Considera una fertilización ligera en la temporada de crecimiento.",
        "Hojas rizadas": "Las hojas que se rizan pueden ser por falta o exceso de agua, corrientes de aire frío, calor extremo, o plagas chupadoras (ácaros, pulgones). Revisa las condiciones ambientales y la presencia de insectos.",
        "Sustancia pegajosa en las hojas": "Esta 'melaza' es un desecho de insectos chupadores como cochinillas, escamas o pulgones. Inspecciona la parte inferior de las hojas y los tallos. Limpia la sustancia pegajosa y aplica un insecticida adecuado (alcohol isopropílico diluido, jabón potásico, aceite de neem).",
        "Falta de floración": "Asegúrate de que la planta reciba suficiente luz (muchas plantas necesitan luz brillante para florecer). Usa un fertilizante rico en fósforo antes de la temporada de floración. Algunas plantas necesitan un período de descanso invernal con temperaturas más frescas y menos riego para florecer.",
        "Venas de las hojas amarillas": "El amarillamiento entre las venas (clorosis interveinal) puede indicar deficiencia de hierro o magnesio, a menudo debido a un pH del suelo demasiado alto. Usa un fertilizante quelado de hierro o sales de Epsom (sulfato de magnesio) y verifica el pH del suelo.",
        "Agujeros en las hojas": "Busca activamente las plagas (orugas, caracoles, babosas, escarabajos). Recolecta los que veas, usa barreras físicas (mallas, trampas de cerveza para caracoles) o un insecticida adecuado si la infestación es severa.",
        "Bordes de las hojas quemados": "Esto puede ser por exceso de fertilizante ('quemadura' por sales), agua de riego con alto contenido de minerales o fluoruro, o exposición repentina a luz solar directa después de estar en sombra.",
        "Caída repentina de hojas": "El estrés repentino por cambios bruscos de temperatura, luz, riego o trasplante puede causar la caída de hojas. También puede ser una reacción a corrientes de aire frío o a la falta de humedad en invierno con calefacción.",
        "Hojas pálidas o sin color": "Indica una posible falta de nutrientes generales, especialmente nitrógeno. Un fertilizante equilibrado puede ayudar. Asegúrate también de que la planta esté recibiendo suficiente luz.",
        "Telarañas finas en las hojas": "Estas son una señal de ácaros araña, pequeñas plagas que prosperan en ambientes secos. Aumenta la humedad, rocía la planta con agua y usa un acaricida si la infestación es importante.",
        "Bultos anormales en hojas o tallos": "Estos pueden ser agallas causadas por insectos, ácaros o enfermedades (hongos, bacterias). Aísla la planta para evitar la propagación. Elimina las partes muy afectadas. Investiga la causa específica para un tratamiento adecuado, que puede variar desde la poda hasta insecticidas o fungicidas sistémicos.",
        "Base del tallo blanda o ennegrecida": "Esto sugiere pudrición del tallo, a menudo causada por exceso de humedad y mala circulación del aire a nivel del suelo. Mejora la ventilación, reduce el riego y asegúrate de que la base del tallo no esté enterrada demasiado profundamente en el sustrato. En casos avanzados, puede ser difícil salvar la planta.",
        "Cristales blancos en el sustrato": "Estos depósitos son generalmente acumulaciones de sales minerales provenientes del agua de riego o de los fertilizantes. Riega a fondo ocasionalmente para ayudar a lixiviar estas sales. Considera usar agua de lluvia o destilada y reduce la frecuencia de fertilización.",
        "Hojas deformadas o retorcidas": "Esto puede ser causado por plagas chupadoras (pulgones, trips, ácaros), daño por herbicidas (si se han usado cerca), o incluso por un crecimiento muy rápido en condiciones ambientales inestables. Inspecciona cuidadosamente en busca de plagas y asegúrate de un entorno de crecimiento constante.",
        "Barrenadores (túneles en hojas)": "Los barrenadores son larvas de varios insectos que se alimentan dentro de las hojas o los tallos, dejando túneles visibles. Elimina y destruye las hojas o tallos afectados. Puedes intentar aplastar las larvas dentro de los túneles si son accesibles. Usa insecticidas sistémicos para prevenir ataques futuros, aplicándolos según las indicaciones del fabricante. Fomenta la presencia de enemigos naturales como avispas parasitoides.",
        "Olor desagradable en el sustrato": "Un olor a humedad, a podrido, indica un exceso de agua y posiblemente crecimiento de bacterias anaeróbicas u hongos. Deja que el sustrato se seque considerablemente antes de volver a regar y asegúrate de que la maceta tenga buen drenaje."
    };

    // Create and append buttons for each problem
    let currentRow = document.createElement('div'); // Initialize the first row
    currentRow.style.display = 'flex';
    currentRow.style.flexWrap = 'wrap'; // Enable wrapping
    currentRow.style.gap = '10px';
    currentRow.style.marginBottom = '15px';
    problemButtonContainer.appendChild(currentRow);

    for (const issueKey in solutions) {
        const button = document.createElement('button');
        button.textContent = issueKey; // Use the problem title as the button text
        button.classList.add('select-issue');
        button.setAttribute('data-issue', issueKey); // Set the data-issue to the problem title (key)
        currentRow.appendChild(button);
    }

    // Event listener for the dynamically created buttons
    problemButtonContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('select-issue')) {
            const issueKey = event.target.getAttribute("data-issue");
            solutionText.textContent = solutions[issueKey] || "No hay información disponible.";
            solutionContainer.style.display = "block";
        }
    });
});