package com.avidong.translate.server.model;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import java.util.List;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record OpenAICompletionResponse(
        String id,
        String object,
        Integer created,
        String model,
        String systemFingerprint,
        List<Choice> choices,
        Usage usage
) {

    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public record Choice(
            Integer index,
            OpenAICompletionMessage message,
            String finishReason
    ) {

    }

    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public record Usage(
            Integer promptTokes,
            Integer completionTokens,
            Integer totalTokens
    ) {
    }
}
