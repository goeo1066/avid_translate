import httpInstance, {assetsInstance} from '../http.js';

function createRequestObject(
    translatePurpose,
    sourceLangCode,
    sourceCountryCode,
    targetLangCode,
    targetCountryCode,
    sourceSentences
) {
    return {
        "sourceLangCode": {
            "languageCode": sourceLangCode,
            "countryCode": sourceCountryCode
        },
        "targetLangCode": {
            "languageCode": targetLangCode,
            "countryCode": targetCountryCode
        },
        "translatePurpose": translatePurpose,
        "sourceSentences": sourceSentences
    };
}

export async function _postRows(
    translatePurpose,
    sourceLangCode,
    sourceCountryCode,
    targetLangCode,
    targetCountryCode,
    sourceSentences
) {
    const reqObject = createRequestObject(translatePurpose, sourceLangCode, sourceCountryCode, targetLangCode, targetCountryCode, sourceSentences);
    console.log(JSON.stringify(reqObject));
    const response = await httpInstance.post('/api/v1/translate/rows', JSON.stringify(reqObject));
    if (response.status === 200) {
        return {
            input_lang_code: response.data['input_lang_code'],
            translated: response.data['translated']
        };
    }
}

export async function _getAssetAsText(url) {
    let response = await fetch(url);
    return await response.text();
}