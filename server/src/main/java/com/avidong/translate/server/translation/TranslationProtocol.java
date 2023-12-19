package com.avidong.translate.server.translation;

public interface TranslationProtocol {
    TranslationResponse requestTranslation(TranslationRequest request);
}
