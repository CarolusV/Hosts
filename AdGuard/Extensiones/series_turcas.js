// ==UserScript==
// @name         Series Turcas TV Simplificado (V5)
// @version      1.5
// @description  Hace la página de Series Turcas TV más fácil e intuitiva
// @author       CarolusV
// @match        https://fhd.seriesturcastv.to/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const customStyles = `
        .controls-container {
            margin: 20px 0;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .chapter-navigation {
            display: flex;
            justify-content: space-between;
            gap: 15px;
        }

        .nav-button {
            flex: 1;
            padding: 15px 30px;
            font-size: 18px;
            background: #00acc1;
            color: white !important;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none !important;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: all 0.3s;
        }

        .nav-button:hover:not(.disabled) {
            background: #008c9e;
        }

        .nav-button.disabled {
            background: #ccc;
            cursor: not-allowed;
            opacity: 0.7;
        }

        .chapter-select {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 2px solid #00acc1;
            border-radius: 8px;
            cursor: pointer;
            margin: 10px 0;
        }

        .video-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }

        .option-button {
            padding: 15px 20px;
            font-size: 18px;
            background: #00acc1;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            text-align: center;
            transition: all 0.3s;
        }

        .option-button.active {
            background: #008c9e;
            box-shadow: 0 0 0 3px #005f6b;
        }

        .option-button:hover {
            background: #008c9e;
        }

        .section-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #333;
        }
    `;

    // Agregar estilos
    const styleSheet = document.createElement("style");
    styleSheet.textContent = customStyles;
    document.head.appendChild(styleSheet);

    function initializeSimplifiedInterface() {
        // Obtener enlaces de navegación
        const prevLink = document.querySelector('.next-one');
        const nextLink = document.querySelector('.back-one');

        // Obtener las URLs de video originales
        const videoUrls = [];
        document.querySelectorAll('script').forEach(script => {
            const content = script.textContent;
            const match = content.match(/var copyText= \['<iframe[^>]*src="([^"]+)"/);
            if (match) {
                videoUrls.push(match[1]);
            }
        });

        // Crear contenedor de controles
        const controls = document.createElement('div');
        controls.className = 'controls-container';

        // Crear navegación entre capítulos
        const navigation = document.createElement('div');
        navigation.className = 'chapter-navigation';
        navigation.innerHTML = `
            <a href="${prevLink?.getAttribute('href') || '#'}" 
               class="nav-button ${!prevLink?.getAttribute('href') ? 'disabled' : ''}">
                <i class="fa fa-chevron-left"></i> Capítulo Anterior
            </a>
            <a href="${nextLink?.getAttribute('href') || '#'}" 
               class="nav-button ${!nextLink?.getAttribute('href') ? 'disabled' : ''}">
                Siguiente Capítulo <i class="fa fa-chevron-right"></i>
            </a>
        `;

        // Crear selector de capítulos
        const episodes = Array.from(document.querySelectorAll('#episodes a')).map(a => ({
            title: a.textContent.trim(),
            url: a.href
        }));

        const selectContainer = document.createElement('div');
        selectContainer.innerHTML = '<div class="section-title">Seleccionar Capítulo:</div>';
        
        const select = document.createElement('select');
        select.className = 'chapter-select';
        
        episodes.forEach(episode => {
            const option = document.createElement('option');
            option.value = episode.url;
            option.textContent = episode.title;
            option.selected = window.location.href === episode.url;
            select.appendChild(option);
        });

        select.onchange = (e) => {
            window.location.href = e.target.value;
        };

        selectContainer.appendChild(select);

        // Crear opciones de video
        const videoOptionsContainer = document.createElement('div');
        videoOptionsContainer.innerHTML = '<div class="section-title">Opciones de Video:</div>';
        
        const videoOptions = document.createElement('div');
        videoOptions.className = 'video-options';
        
        videoUrls.forEach((url, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = `Opción ${index + 1}${index === 0 ? ' (Recomendada)' : ''}`;
            button.onclick = () => {
                document.querySelector('#player').innerHTML = `
                    <iframe src="${url}" 
                            width="100%" 
                            height="100%" 
                            frameborder="0" 
                            scrolling="0" 
                            allowfullscreen="">
                    </iframe>
                `;
                videoOptions.querySelectorAll('.option-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            };
            videoOptions.appendChild(button);
        });

        videoOptionsContainer.appendChild(videoOptions);

        // Ensamblar los controles
        controls.appendChild(navigation);
        controls.appendChild(selectContainer);
        controls.appendChild(videoOptionsContainer);

        // Insertar los controles antes del título
        const title = document.querySelector('h1.title');
        title.parentNode.insertBefore(controls, title);

        // Activar primera opción de video automáticamente
        if (videoUrls.length > 0) {
            videoOptions.querySelector('.option-button').click();
        }

        // Ocultar elementos innecesarios
        ['#episodes', '#showall', '.player_nav > ul', '.widget:not(:first-child)', '.block-social'].forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => el.style.display = 'none');
        });
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSimplifiedInterface);
    } else {
        initializeSimplifiedInterface();
    }
})();
