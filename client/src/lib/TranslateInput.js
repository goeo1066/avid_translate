export default class TranslateInput {
    constructor(value) {
        this._value = value;
    }


    /**
     *
     * @return {string | undefined}
     */
    get value() {
        return this._value;
    }
    /**
     *
     * @param {string | undefined} value
     */
    set value(value) {
        this._value = value;
    }
}