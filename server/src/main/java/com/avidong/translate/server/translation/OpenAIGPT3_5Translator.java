package com.avidong.translate.server.translation;

import com.avidong.translate.server.config.OpenAIConfiguration;
import com.avidong.translate.server.enums.LanguageCode;
import com.avidong.translate.server.model.OpenAICompletionMessage;
import com.avidong.translate.server.model.OpenAICompletionRequest;
import com.avidong.translate.server.model.OpenAICompletionResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Slf4j
public class OpenAIGPT3_5Translator implements TranslationProtocol {
    private final ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
            .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1)) // set to unlimited memory size
            .build();
    private final WebClient webClientBase = WebClient.builder()
            .baseUrl("https://api.openai.com")
            .exchangeStrategies(exchangeStrategies)
            .build();

    private final OpenAIConfiguration openAIConfiguration;

    @Override
    public TranslationResponse requestTranslation(TranslationRequest request) {
        try {
            final String endpoint = "/v1/chat/completions";
            List<String> apiKey = Collections.singletonList(String.format("Bearer %s", openAIConfiguration.getOpenaiApiKey()));

            String reqBody = makeBodyValue(request);
            log.info(reqBody);

            ResponseEntity<OpenAICompletionResponse> response = webClientBase.post()
                    .uri(uriBuilder -> uriBuilder.path(endpoint)
                            .build())
                    .headers(httpHeaders -> {
                                httpHeaders.put("Authorization", apiKey);
                                httpHeaders.put("Content-Type", Collections.singletonList("application/json"));
                            }
                    )
                    .bodyValue(reqBody)
                    .exchangeToMono(clientResponse -> clientResponse.toEntity(OpenAICompletionResponse.class)).block();
            log.info("{}", response);
            if (response != null && response.getStatusCode().value() == 200) {
                OpenAICompletionResponse resBody = response.getBody();
                log.info("{}", resBody);
                if (resBody == null || resBody.choices() == null) {
                    return null;
                }

                if (!resBody.choices().isEmpty()) {
                    OpenAICompletionResponse.Choice choice = resBody.choices().get(0);
                    return TranslationResponse.fromJson(choice.message().content());
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return null;
    }

    /**
     * seed candidates:
     * - 12345
     * - 54321
     *
     * @param translationRequest
     * @return
     */
    private String makeBodyValue(TranslationRequest translationRequest) throws JsonProcessingException {
        var messages = Arrays.asList(createSystemMessage(translationRequest), createUserMessage(translationRequest));
        OpenAICompletionRequest openAICompletionRequest = OpenAICompletionRequest.ofDefault(messages);
        return openAICompletionRequest.toJson();
    }

    private OpenAICompletionMessage createSystemMessage(TranslationRequest translationRequest) {
        LanguageCode targetLanguageCode = LanguageCode.fromCode639_1(translationRequest.targetLangCode().languageCode());
        if (targetLanguageCode == null) {
            throw new UnsupportedOperationException("Language Code: " + translationRequest.targetLangCode().languageCode());
        }

        StringBuilder builder = new StringBuilder();
        builder.append("You are an excellent Multilingual designed to output JSON. ");
        builder.append("translate to \"");
        builder.append(targetLanguageCode.getIsoLanguageNames().get(0));
        builder.append("(");
        builder.append(targetLanguageCode.getCode639_1());
        builder.append(")\" ");
        builder.append("in format: {\"input_lang_code\": \"<code_of_ISO639-1>\", \"translated\": [\"<translated>\"]}. the input format is {\"original\": [\"<sentence>\"]}");

        if (translationRequest.sourceLangCode() != null && translationRequest.sourceLangCode().languageCode() != null && !translationRequest.sourceLangCode().languageCode().trim().isEmpty()) {
            LanguageCode sourceLanguageCode = LanguageCode.fromCode639_1(translationRequest.sourceLangCode().languageCode());
            builder.append(" the user says the input language is \"");
            builder.append(sourceLanguageCode.getIsoLanguageNames().get(0));
            builder.append("(");
            builder.append(sourceLanguageCode.getCode639_1());
            builder.append(")\".");
        }

        if (translationRequest.translatePurpose() != null && !translationRequest.translatePurpose().isEmpty()) {
            builder.append(" consider the purpose of translation: \"");
            builder.append(translationRequest.translatePurpose());
            builder.append("\"");
        }
        return new OpenAICompletionMessage("system", builder.toString());
    }

    private OpenAICompletionMessage createUserMessage(TranslationRequest translationRequest) {
        String sentencesJson = translationRequest.sourceSentences().stream()
                .map(s -> "\"" + s + "\"")
                .collect(Collectors.joining(","));
        String messages = String.format("{\"original\": [%s]}", sentencesJson);
        return new OpenAICompletionMessage("user", messages);
    }
}
