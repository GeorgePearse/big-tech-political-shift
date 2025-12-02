// Big Tech Political Shift Timeline Visualization

document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.getElementById('timeline');
    const timelinePoints = document.getElementById('timeline-points');
    const xAxis = document.getElementById('x-axis');
    const tooltip = document.getElementById('tooltip');
    const detailPanel = document.getElementById('detail-panel');
    const detailContent = document.getElementById('detail-content');
    const closePanel = document.getElementById('close-panel');

    // Create overlay for panel
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Calculate positions
    const startDate = timelineConfig.minDate;
    const endDate = timelineConfig.maxDate;
    const totalMs = endDate - startDate;

    // Get the number of people for Y positioning
    const totalPeople = timelineData.length;

    // Render year markers
    function renderYearMarkers() {
        const timelineEl = document.getElementById('timeline');

        for (let year = timelineConfig.startYear; year <= timelineConfig.endYear; year++) {
            const yearDate = new Date(`${year}-01-01`);
            const xPercent = ((yearDate - startDate) / totalMs) * 100;

            const marker = document.createElement('div');
            marker.className = 'year-marker';
            marker.style.left = `calc(60px + ${xPercent}% * (100% - 120px) / 100)`;

            const label = document.createElement('span');
            label.className = 'year-marker-label';
            label.textContent = year;
            marker.appendChild(label);

            timelineEl.appendChild(marker);
        }
    }

    // Render X axis labels
    function renderXAxis() {
        for (let year = timelineConfig.startYear; year <= timelineConfig.endYear; year += 2) {
            const label = document.createElement('div');
            label.className = 'x-axis-label';
            label.textContent = year;
            xAxis.appendChild(label);
        }
    }

    // Calculate X position from date
    function getXPosition(dateStr) {
        const date = new Date(dateStr);
        return ((date - startDate) / totalMs) * 100;
    }

    // Calculate Y position from rank (1 = top, higher = bottom)
    function getYPosition(rank) {
        // Leave some padding at top and bottom
        const paddingPercent = 10;
        const usableRange = 100 - (paddingPercent * 2);
        return paddingPercent + ((rank - 1) / (totalPeople - 1)) * usableRange;
    }

    // Render data points
    function renderDataPoints() {
        timelineData.forEach(person => {
            const point = document.createElement('div');
            point.className = `data-point ${person.type}`;
            point.dataset.id = person.id;

            const xPos = getXPosition(person.switchDate);
            const yPos = getYPosition(person.switchRank);

            point.style.left = `${xPos}%`;
            point.style.top = `${yPos}%`;
            point.innerHTML = person.emoji;

            // Add label
            const label = document.createElement('span');
            label.className = 'data-point-label';
            label.textContent = person.name.split(' ')[1] || person.name.split(' ')[0];
            point.appendChild(label);

            // Event listeners
            point.addEventListener('mouseenter', (e) => showTooltip(e, person));
            point.addEventListener('mouseleave', hideTooltip);
            point.addEventListener('click', () => showDetailPanel(person));

            timelinePoints.appendChild(point);
        });
    }

    // Show tooltip
    function showTooltip(event, person) {
        const rect = event.target.getBoundingClientRect();

        tooltip.querySelector('.tooltip-name').textContent = person.name;
        tooltip.querySelector('.tooltip-role').textContent = person.role;
        tooltip.querySelector('.tooltip-date').textContent = formatDate(person.switchDate);
        tooltip.querySelector('.tooltip-event').textContent = person.switchEvent;

        const linksHtml = person.articles.slice(0, 2).map(a =>
            `<a href="${a.url}" target="_blank">${a.source}</a>`
        ).join(' · ');
        tooltip.querySelector('.tooltip-links').innerHTML = linksHtml ? `Sources: ${linksHtml}` : '';

        // Position tooltip
        let left = rect.right + 10;
        let top = rect.top;

        // Check if tooltip would go off screen
        if (left + 320 > window.innerWidth) {
            left = rect.left - 330;
        }
        if (top + 200 > window.innerHeight) {
            top = window.innerHeight - 210;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.classList.add('visible');
    }

    // Hide tooltip
    function hideTooltip() {
        tooltip.classList.remove('visible');
    }

    // Show detail panel
    function showDetailPanel(person) {
        const articlesHtml = person.articles.map(a => `
            <a href="${a.url}" target="_blank" class="article-link">
                ${a.title}
                <span class="source">${a.source}</span>
            </a>
        `).join('');

        detailContent.innerHTML = `
            <h2>${person.emoji} ${person.name}</h2>
            <p class="role">${person.role}</p>
            <p class="switch-date">Switch Date: ${formatDate(person.switchDate)}</p>

            <h3>The Moment</h3>
            <p>${person.switchEvent}</p>

            <h3>Background</h3>
            <p>${person.bio}</p>

            <h3>Company</h3>
            <p>${person.company}</p>

            <h3>Key Sources</h3>
            ${articlesHtml}

            <h3>Profile</h3>
            <p><a href="https://github.com/GeorgePearse/big-tech-political-shift/blob/main/analysis/individuals/${person.id}.md" target="_blank">View full research profile →</a></p>
        `;

        detailPanel.classList.add('visible');
        overlay.classList.add('visible');
    }

    // Close detail panel
    function closeDetailPanel() {
        detailPanel.classList.remove('visible');
        overlay.classList.remove('visible');
    }

    closePanel.addEventListener('click', closeDetailPanel);
    overlay.addEventListener('click', closeDetailPanel);

    // Escape key closes panel
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDetailPanel();
        }
    });

    // Format date nicely
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Initialize
    renderYearMarkers();
    renderXAxis();
    renderDataPoints();
});
