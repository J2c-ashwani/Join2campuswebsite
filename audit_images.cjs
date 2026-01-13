const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib/blog-data.tsx');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    console.log("---------------------------------------------------");
    console.log("| Line | Country | Current Image URL |");
    console.log("|---|---|---|");

    let currentSlug = "";

    lines.forEach((line, index) => {
        const lineNum = index + 1;

        if (line.includes('slug: "')) {
            const match = line.match(/slug:\s*"([^"]+)"/);
            if (match) currentSlug = match[1];
        }

        if (line.includes('coverImage: "')) {
            const match = line.match(/coverImage:\s*"([^"]+)"/);
            const img = match ? match[1] : "N/A";

            // Filter for the broken ones reported by user
            const targetCountries = ["ireland", "netherlands", "poland", "hungary", "malta", "usa", "australia", "belgium", "portugal", "cyprus", "finland", "czech", "canada"];
            const isTarget = targetCountries.some(c => currentSlug.toLowerCase().includes(c));

            if (isTarget) {
                console.log(`| ${lineNum} | ${currentSlug} | ${img.substring(0, 30)}... |`);
            }
        }
    });

} catch (err) {
    console.error("Error reading file:", err);
}
