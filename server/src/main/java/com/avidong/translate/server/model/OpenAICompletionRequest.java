package com.avidong.translate.server.model;

import com.avidong.translate.server.Constants;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import java.util.List;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@JsonInclude(JsonInclude.Include.NON_NULL)
public record OpenAICompletionRequest(
        Integer seed,
        String model,
        ResponseFormat responseFormat,
        List<OpenAICompletionMessage> messages
) {
    public static final ObjectWriter OBJECT_WRITER = Constants.OBJECT_MAPPER.writerFor(OpenAICompletionRequest.class);

    public static OpenAICompletionRequest ofDefault(String gptModel, List<OpenAICompletionMessage> messages) {
        ResponseFormat openAICompletionResponseFormat = new ResponseFormat(
                "json_object"
        );
        if (gptModel == null) {
            gptModel = "gpt-3.5-turbo";
        }
        return new OpenAICompletionRequest(
                54321,
                gptModel,
                null,
                messages
        );
    }

    public String toJson() throws JsonProcessingException {
        return OBJECT_WRITER.writeValueAsString(this);
    }


    public static ResponseFormat newResponseFormat(String type) {
        return new ResponseFormat(type);
    }


    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public record ResponseFormat(
            String type
    ) {
    }

}
