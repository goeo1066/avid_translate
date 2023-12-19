package com.avidong.translate.server.translation;

import com.avidong.translate.server.LanguageCountryCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
@Slf4j
@RequestMapping("/api/v1/translate")
public class TranslationController {
    private final TranslationProtocol translationProtocol;

    public TranslationController(
            @Qualifier("openai_gpt-3.5") TranslationProtocol translationProtocol
    ) {
        this.translationProtocol = translationProtocol;
    }


    @PostMapping("/rows")
    public TranslationResponse translateRows(
            @RequestBody TranslationRequest translationRequest
    ) {
        return translationProtocol.requestTranslation(translationRequest);
    }
}
