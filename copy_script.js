const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\delfi\\.gemini\\antigravity\\brain\\1c1001a8-310a-4010-beb9-1d58083ab3f6';
const destDir = path.join(process.cwd(), 'public', 'values');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = [
    ['garantia_value_1774523550323.png', 'garantia.png'],
    ['empatia_value_1774523564823.png', 'empatia.png'],
    ['fiabilidad_value_1774523582882.png', 'fiabilidad.png'],
    ['respuesta_value_1774523599952.png', 'respuesta.png'],
    ['resultados_value_1774523614889.png', 'resultados.png']
];

files.forEach(([src, dest]) => {
    try {
        fs.copyFileSync(path.join(srcDir, src), path.join(destDir, dest));
        console.log('Copied ' + dest);
    } catch (e) {
        console.error('Failed to copy ' + dest + ': ' + e.message);
    }
});
