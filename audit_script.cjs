const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'lib/blog-data.tsx');
const fileContent = fs.readFileSync(filePath, 'utf8');

// Regex to find blog post objects
// We assume they start with { and have an id, slug, etc.
// This is a rough parser because parsing TSX/JSX with regex is fragile, but sufficient for this specific structured file.

// Split by "id: " to rough chunks
const chunks = fileContent.split(/id:\s*"/).slice(1); // skip preamble

console.log("| ID | Slug | Word Count | FAQs | Author Bio |");
console.log("|---|---|---|---|---|");

chunks.forEach(chunk => {
    // 1. Get Slug
    const slugMatch = chunk.match(/slug:\s*"([^"]+)"/);
    if (!slugMatch) return;
    const slug = slugMatch[1];
    const idMatch = chunk.match(/^([^"]+)"/);
    const id = idMatch ? idMatch[1] : "?";

    // 2. Extract Content Block
    // We look for 'content: (' and the matching closing '),'
    // This is tricky with regex. Let's look for 'content:' and take everything until the next 'id:' or end of file, then clean it up?
    // A better way for this specific file structure:
    // The content is wrapped in `content: ( ... ),`

    // Let's find the start of content
    const contentStart = chunk.indexOf('content: (');
    if (contentStart === -1) return;

    // Find the end of content - simplistic approach: look for the "}," that closes the object
    // or look for the next "id:" of the next object in the original file context?
    // Since we split by "id:", the `chunk` contains the content until the end of the file or next id.
    // The previous split removed the "id:" of the *next* item, so this chunk ends roughly where the next item began.
    // We can assume the content block is the main bulk.

    let contentBlock = chunk.slice(contentStart);

    // 3. Strip JSX tags to get words
    // Remove <Components /> and <html>tags</html>
    const textOnly = contentBlock
        .replace(/<[^>]+>/g, ' ') // Strip tags
        .replace(/\{[^}]+\}/g, ' ') // Strip JS expressions like {/* comments */} or {variables}
        .replace(/\s+/g, ' ') // Collapse whitespace
        .trim();

    const wordCount = textOnly.split(' ').length;

    // 4. Check for FAQ
    const hasFAQ = contentBlock.includes('Frequently Asked Questions') ? "✅" : "❌";

    // 5. Check for Author
    // We look for 'author: ASHWANI_AUTHOR' or similar
    const hasAuthor = chunk.includes('author:') ? "✅" : "❌";

    // We can be more specific on Author
    const authorMatch = chunk.match(/author:\s*([A-Z_]+)/);
    const authorName = authorMatch ? authorMatch[1] : "Unknown";

    console.log(`| ${id} | ${slug} | ${wordCount} | ${hasFAQ} | ${hasAuthor} (${authorName}) |`);
});
