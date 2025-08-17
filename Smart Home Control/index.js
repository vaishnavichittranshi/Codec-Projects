        const darkModeToggle = document.getElementById('dark-mode-toggle');
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }

        const tempSlider = document.getElementById('temp-slider');
        const targetTemp = document.getElementById('target-temp');
        tempSlider.addEventListener('input', () => {
            targetTemp.textContent = tempSlider.value;
        });

        const allLightsToggle = document.getElementById('all-lights-toggle');
        const lightSwitches = document.querySelectorAll('.card:nth-child(1) .toggle-btn input');
        allLightsToggle.addEventListener('change', () => {
            lightSwitches.forEach(switchEl => {
                switchEl.checked = allLightsToggle.checked;
            });
        });

        function updateTime() {
            const now = new Date();
            const options = { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            };
            document.getElementById('last-updated').textContent = 
                `Today at ${now.toLocaleTimeString('en-US', options)}`;
        }

        updateTime();
        setInterval(updateTime, 60000);

        setInterval(() => {
            const randomChange = Math.random() > 0.7;
            if (randomChange) {
                const randomLight = Math.floor(Math.random() * lightSwitches.length);
                lightSwitches[randomLight].checked = !lightSwitches[randomLight].checked;
            }
        }, 5000);