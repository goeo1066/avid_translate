package com.avidong.translate.server.translation;

import com.avidong.translate.server.Constants;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectReader;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import java.util.List;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@JsonInclude(JsonInclude.Include.NON_NULL)
public record TranslationResponse(
        String inputLangCode,
        List<String> translated
) {
    public static final ObjectReader OBJECT_READER = Constants.OBJECT_MAPPER.readerFor(TranslationResponse.class);

    public static TranslationResponse fromJson(String json) throws JsonProcessingException {
        return OBJECT_READER.readValue(json);
    }
}
