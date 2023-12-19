export function getSourceLanguageFromCode(code) {
    switch (code) {
        case 'en': {
            return 'English';
        }
        case 'ja': {
            return 'Japanese';
        }
        case 'ko': {
            return 'Korean';
        }
        case 'tl': {
            return 'Tagalog';
        }
        case 'cn-chs': {
            return 'Chinese (Simplified)';
        }
        case 'cn-cht': {
            return 'Chinese (Traditional)'
        }
        default: {
            return '<Automatic>';
        }
    }
}

export function getTargetLanguageFromCode(code) {
    switch (code) {
        case 'en': {
            return 'English';
        }
        case 'ja': {
            return 'Japanese';
        }
        case 'ko': {
            return 'Korean';
        }
        case 'tl': {
            return 'Tagalog';
        }
        case 'cn-chs': {
            return 'Chinese (Simplified)';
        }
        case 'cn-cht': {
            return 'Chinese (Traditional)'
        }
    }
}