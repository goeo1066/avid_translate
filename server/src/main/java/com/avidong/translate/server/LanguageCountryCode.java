package com.avidong.translate.server;


public record LanguageCountryCode(
        /*
          ISO 639-1
          e.g. "en"
         */
        String languageCode,
        /*
          ISO 3166-1 Alpha-2
          e.g. "US"
         */
        String countryCode
) {

}
