import {RequestModel} from "./data.js";

/**
 * @param {File} file
 * @param {function(string, string[])} onLoad
 * @return {RequestModel}
 */
export function getDataFromJson(file, onLoad) {
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (evt) {
        let object = JSON.parse(evt.target.result);
        let purpose;
        if (object['purpose']) {
            purpose = object['purpose'];
        }

        let list;
        if (object['list']) {
            list = object['list']
        }

        if (onLoad) {
            onLoad(purpose, list);
        }
    }
}

/**
 *
 * @param {string} purpose
 * @param {string[]} list
 */
export function getJsonFromData(purpose, list) {
    let result = '';
    if (purpose) {
        result += `"purpose": "${purpose}"`;
    }
    if (list) {
        if (result.length > 0) {
            result += ",";
        }
        result += "list: ["
        result += list.map(d => `"${d}"`).join(",");
        result += "]";
    }
    return `{${result}}`;
}

/**
 *
 * @param {string} purpose
 * @param {string[]} list
 */
export function getXmlFromData(purpose, list) {
    let result = '';
    if (purpose) {
        result += `<purpose>${purpose}</purpose>`;
    }
    if (list) {
        if (result.length > 0) {
            result += "\n";
        }
        result += "<list>\n"
        result += list.map(d => `<item>${d}</item>`).join("\n");
        result += "</list>\n";
    }
    return `<main>\n${result}</main>`;
}

/**
 *
 * @param {string[]} list
 */
export function getCsvFromData(list) {
    let result = '';

    if (list) {
        result += 'list\n'
        result += list.join("\n");
    }
    return `${result}`;
}

/**
 * @param {File} file
 * @param {function(string, string[])} onLoad
 * @return {RequestModel}
 */
export function getDataFromXML(file, onLoad) {
    /**
     *
     * @param {Document | Element} doc
     * @param {string} tag
     */
    const getOneElementByTagIfExist = function (doc, tag) {
        const elements = doc.getElementsByTagName(tag);
        if (elements && elements.length > 0) {
            return elements[0];
        }
    };
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (evt) {
        const xmlStr = evt.target.result;
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlStr, "application/xml");

        const mainElement = getOneElementByTagIfExist(doc, 'main');

        let purpose;
        let list;

        if (mainElement) {
            const purposeElement = getOneElementByTagIfExist(mainElement, 'purpose');
            if (purposeElement) {
                purpose = purposeElement.getInnerHTML();
            }
            const listElement = getOneElementByTagIfExist(mainElement, 'list');
            if (listElement) {
                list = []
                const itemElements = listElement.getElementsByTagName('item');
                for (let itemElement of itemElements) {
                    list.push(itemElement.getInnerHTML());
                }
            }
        }

        onLoad(purpose, list);
    }
}

/**
 * @param {File} file
 * @param {function(string, string[])} onLoad
 * @return {RequestModel}
 */
export function getDataFromCsv(file, onLoad) {
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (evt) {
        let csvStr = evt.target.result;
        let rows = csvStr.split('\n');
        if (rows[0] === 'list') {
            onLoad('', rows.slice(1, rows.length - 1));
        }
    }
}

/**
 *
 * @param {{input_lang_code: string, translated: string[]}} data
 * @return {string}
 */
export function getJsonFromTranslated(data) {
    let result = '';
    if (data.input_lang_code) {
        result += `"input_lang_code": "${data.input_lang_code}"`;
    }
    if (data.translated) {
        if (result.length > 0) {
            result += ",";
        }
        result += `"translated" : [`
        result += data.translated.map(d => `"${d}"`).join(",");
        result += "]";
    }
    return `{${result}}`;
}

/**
 *
 * @param {{input_lang_code: string, translated: string[]}} data
 * @return {string}
 */
export function getXmlFromTranslated(data) {
    let result = '';
    if (data.input_lang_code) {
        result += `<inputLangCode>${data.input_lang_code}</inputLangCode>`;
    }
    if (data.translated) {
        if (result.length > 0) {
            result += "\n";
        }
        result += "<translated>\n"
        result += data.translated.map(d => `<item>${d}</item>`).join("\n");
        result += "</translated>\n";
    }
    return `<main>\n${result}</main>`;
}

/**
 *
 * @param {{input_lang_code: string, translated: string[]}} data
 * @return {string}
 */
export function getCsvFromTranslated(data) {
    let result = '';

    if (data.translated) {
        result += 'translated\n'
        result += data.translated.join("\n");
    }
    return `${result}`;
}