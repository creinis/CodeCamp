const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {

    // Função para tradução de texto de inglês americano para inglês britânico
    translateAmericanToBritish(text) {
        let translatedText = text;

        // Tradução de palavras exclusivas do inglês americano
        for (const word in americanOnly) {
            const regex = new RegExp('\\b' + word + '\\b', 'gi');
            translatedText = translatedText.replace(regex, '<span class="highlight">' + americanOnly[word] + '</span>');
        }

        // Tradução de palavras com grafia diferente entre inglês americano e britânico
        for (const word in americanToBritishSpelling) {
            const regex = new RegExp('\\b' + word + '\\b', 'gi');
            translatedText = translatedText.replace(regex, '<span class="highlight">' + americanToBritishSpelling[word] + '</span>');
        }

        // Tradução de títulos/honoríficos abreviados
        for (const title in americanToBritishTitles) {
            const regex = new RegExp('\\b' + title + '\\.\\b', 'gi');
            translatedText = translatedText.replace(regex, '<span class="highlight">' + americanToBritishTitles[title] + '</span>');
        }

        // Tradução de palavras exclusivas do inglês britânico
        for (const word in britishOnly) {
            const regex = new RegExp('\\b' + britishOnly[word] + '\\b', 'gi');
            translatedText = translatedText.replace(regex, '<span class="highlight">' + word + '</span>');
        }

        return translatedText;
    }

    // Função para tradução de texto de inglês britânico para inglês americano
    translateBritishToAmerican(text) {
        let translatedText = text;

        // Tradução de palavras exclusivas do inglês britânico
        for (const word in britishOnly) {
            const regex = new RegExp('\\b' + word + '\\b', 'gi');
            translatedText = translatedText.replace(regex, '<span class="highlight">' + britishOnly[word] + '</span>');
        }

        // Tradução de palavras com grafia diferente entre inglês britânico e americano
        for (const word in americanToBritishSpelling) {
            const regex = new RegExp('\\b' + americanToBritishSpelling[word] + '\\b', 'gi');
            translatedText = translatedText.replace(regex, '<span class="highlight">' + word + '</span>');
        }

        // Tradução de títulos/honoríficos abreviados
        for (const title in americanToBritishTitles) {
            const regex = new RegExp('\\b' + americanToBritishTitles[title] + '\\b', 'gi');
            translatedText = translatedText.replace(regex, '<span class="highlight">' + title + '</span>');
        }

        // Tradução de palavras exclusivas do inglês americano
        for (const word in americanOnly) {
            const regex = new RegExp('\\b' + americanOnly[word] + '\\b', 'gi');
            translatedText = translatedText.replace(regex, '<span class="highlight">' + word + '</span>');
        }

        return translatedText;
    }
}

module.exports = Translator;
