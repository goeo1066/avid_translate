export class RequestModel {
    /**
     *
     * @param {string} languageCodeFrom
     * @param {string} languageCodeTo
     * @param {string} purpose
     * @param {string[]} sentences
     */
    constructor(
        languageCodeFrom,
        languageCodeTo,
        purpose,
        sentences
    ) {
        this.languageCodeFrom = languageCodeFrom;
        this.languageCodeTo = languageCodeTo;
        this.purpose = purpose;
        this.sentences = sentences;
    }
}