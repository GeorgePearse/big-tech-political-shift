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
            marker.style.left = `calc(80px + ${xPercent}% * (100% - 160px) / 100)`;

            const label = document.createElement('span');
            label.className = 'year-marker-label';
            label.textContent = year;
            marker.appendChild(label);

            timelineEl.appendChild(marker);
        }
    }

    // Render X axis labels
    function renderXAxis() {
        for (let year = timelineConfig.startYear; year <= timelineConfig.endYear; year++) {
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
    // Spread out evenly across the full height
    function getYPosition(rank) {
        // Use full range with minimal padding
        const paddingPercent = 5;
        const usableRange = 100 - (paddingPercent * 2);
        return paddingPercent + ((rank - 1) / (totalPeople - 1)) * usableRange;
    }

    // Render data points with photos
    function renderDataPoints() {
        timelineData.forEach(person => {
            const point = document.createElement('div');
            point.className = `data-point ${person.type} loading`;
            point.dataset.id = person.id;

            const xPos = getXPosition(person.switchDate);
            const yPos = getYPosition(person.switchRank);

            point.style.left = `${xPos}%`;
            point.style.top = `${yPos}%`;

            // Create image element
            const img = document.createElement('img');
            img.src = person.image;
            img.alt = person.name;
            img.loading = 'lazy';

            // Remove loading class when image loads
            img.onload = () => {
                point.classList.remove('loading');
            };

            // Fallback if image fails
            img.onerror = () => {
                point.classList.remove('loading');
                img.style.display = 'none';
                point.innerHTML = `<span style="font-size: 1.2rem;">${person.name.charAt(0)}</span>`;
            };

            point.appendChild(img);

            // Add label
            const label = document.createElement('span');
            label.className = 'data-point-label';
            label.textContent = person.name;
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
            `<a href="${a.url}" target="_blank" rel="noopener">${a.source}</a>`
        ).join(' · ');
        tooltip.querySelector('.tooltip-links').innerHTML = linksHtml ? `Sources: ${linksHtml}` : '';

        // Position tooltip
        let left = rect.right + 15;
        let top = rect.top - 20;

        // Check if tooltip would go off screen right
        if (left + 350 > window.innerWidth) {
            left = rect.left - 365;
        }

        // Check if tooltip would go off screen left
        if (left < 10) {
            left = 10;
        }

        // Check if tooltip would go off screen bottom
        if (top + 250 > window.innerHeight) {
            top = window.innerHeight - 260;
        }

        // Check if tooltip would go off screen top
        if (top < 10) {
            top = 10;
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
            <a href="${a.url}" target="_blank" rel="noopener" class="article-link">
                ${a.title}
                <span class="source">${a.source}</span>
            </a>
        `).join('');

        const typeLabel = person.type === 'ceo' ? 'CEO / Founder' : 'Investor / VC';
        const typeBadgeClass = person.type;

        detailContent.innerHTML = `
            <div class="detail-header">
                <img src="${person.image}" alt="${person.name}" class="detail-photo" onerror="this.style.display='none'">
                <div>
                    <h2>${person.name} <span class="type-badge ${typeBadgeClass}">${typeLabel}</span></h2>
                    <p class="role">${person.role}</p>
                </div>
            </div>

            <div class="switch-date">
                <strong>Switch Date:</strong> ${formatDate(person.switchDate)}
            </div>

            <h3>The Moment</h3>
            <p>${person.switchEvent}</p>

            <h3>Background</h3>
            <p>${person.bio}</p>

            <h3>Company</h3>
            <p>${person.company}</p>

            <h3>Key Sources</h3>
            ${articlesHtml}

            <h3>Full Profile</h3>
            <p><a href="https://github.com/GeorgePearse/big-tech-political-shift/blob/main/analysis/individuals/${person.id}.md" target="_blank" rel="noopener">View detailed research profile on GitHub →</a></p>
        `;

        detailPanel.classList.add('visible');
        overlay.classList.add('visible');
        hideTooltip();
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
