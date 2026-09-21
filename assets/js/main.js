/**
 * Sarkari Tool - Main Interactive Logic (Search & Filtering)
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('toolSearch');
    const toolsGrid = document.getElementById('toolsGrid');
    const noResults = document.getElementById('noResults');

    if (!searchInput || !toolsGrid) return;

    // Fast filter on user input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        const cards = toolsGrid.querySelectorAll('.tool-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const name = (card.getAttribute('data-tool-name') || card.querySelector('h3')?.textContent || '').toLowerCase();
            const desc = (card.getAttribute('data-tool-desc') || card.querySelector('p')?.textContent || '').toLowerCase();
            const tags = (card.getAttribute('data-tool-tags') || '').toLowerCase();

            const isMatch = name.includes(query) || desc.includes(query) || tags.includes(query);

            if (isMatch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (noResults) {
            if (visibleCount === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        }
    });
});
