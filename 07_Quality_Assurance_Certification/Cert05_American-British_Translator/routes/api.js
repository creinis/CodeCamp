'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

    const translator = new Translator();

    app.route('/api/translate')
        .post((req, res) => {
            const { text, locale } = req.body;

            // Verificação dos campos obrigatórios
            if (!text || !locale) {
                return res.json({ error: 'Required field(s) missing' });
            }

            // Verificação se o texto está vazio
            if (text.trim() === '') {
                return res.json({ error: 'No text to translate' });
            }

            // Verificação do locale
            if (locale !== 'american-to-british' && locale !== 'british-to-american') {
                return res.json({ error: 'Invalid value for locale field' });
            }

            let translation;
            if (locale === 'american-to-british') {
                translation = translator.translateAmericanToBritish(text);
            } else {
                translation = translator.translateBritishToAmerican(text);
            }

            // Verificação se o texto necessita de tradução
            if (translation === text) {
                translation = 'Everything looks good to me!';
            }

            return res.json({ text, translation });
        });
};

