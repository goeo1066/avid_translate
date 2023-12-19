# Prompting Translator
- GPT 프롬프트로 간단한 다중 번역기 구현
- 언어는 1:1로 지정
  - 시작언어가 지정되지 않을 경우 자동으로 유추하지만, 그대로 힌트로 지정하는 게 좋을듯
  - 도착언어는 필수로 지정
- 번역 목적과 번역 내용을 기입해서 번역함
  - 번역 목적은 Optional

## 서버
- 스프링 기반 서버
- 내부적으로 OpenAI API 호출
- OPENAI_API_KEY가 환경변수로 등록되어 있어야 함
  - 아니면 application.properties에 직접 기입해도 됨
### 구동
```shell
cd server
./gradlew bootrun
```

## 클라이언트
- SvelteKit 기반 앱
- Flowbite Svelte로 대부분 구성
### 구동
```shell
cd client
pnpm install # 처음 구동시
pnpm run dev
```
웹 브라우저에서 접속: http://localhost:5173/app/translate