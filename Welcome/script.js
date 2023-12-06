const text = `"InfoSecTech" est une entreprise spécialisée dans le déploiement de solutions en réseaux, systèmes, sécurité et cybersécurité. Leur équipe d'experts propose des services personnalisés pour aider les clients à protéger leurs infrastructures informatiques contre les menaces de cybersécurité croissantes. Leurs services incluent l'évaluation des risques, la conception de réseaux sécurisés, la mise en place de pare-feu et de systèmes de détection d'intrusion, la gestion des vulnérabilités, la surveillance en temps réel et la réponse aux incidents. L'entreprise s'engage à fournir des solutions sur mesure, des conseils d'experts et un support continu pour aider les clients à renforcer leur posture de sécurité et à maintenir la continuité de leurs opérations dans un monde numérique en constante évolution.`;
    const element = document.getElementById('me');

    function textGenerator() {
        let index = 0;
        const interval = setInterval(function() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 15); // Le délai entre chaque caractère (en millisecondes)
    }

textGenerator();
