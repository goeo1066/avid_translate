package com.avidong.translate.server.config;

import com.avidong.translate.server.translation.OpenAIGPT3_5Translator;
import com.avidong.translate.server.translation.TranslationProtocol;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.security.InvalidParameterException;

@Getter
@Configuration
public class OpenAIConfiguration {
    private final String openaiApiKey;

    public OpenAIConfiguration(
            @Value("${openai.apikey:}") String openaiApiKey
    ) {
        if (openaiApiKey == null || openaiApiKey.trim().isEmpty()) {
            throw new InvalidParameterException();
        }
        this.openaiApiKey = openaiApiKey;
    }

    @Bean(name = "openai_gpt-3.5")
    public TranslationProtocol translationProtocol() {
        return new OpenAIGPT3_5Translator(this);
    }
}
