package com.avidong.translate.server.translation;

import com.avidong.translate.server.LanguageCountryCode;

import java.util.List;

public record TranslationRequest(
        LanguageCountryCode sourceLangCode,
        LanguageCountryCode targetLangCode,
        String translatePurpose,
        List<String> sourceSentences
) {


}
