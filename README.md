# jimaku

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web application that uses the Web Speech API for real-time speech recognition, designed for use with augmented reality (AR) captioning displays.

## Demo

**https://code4fukui.github.io/jimaku/**

## Features

*   **Real-time Transcription**: Converts speech to text as you speak, including interim results.
*   **Language Support**: Recognizes both Japanese (`ja`) and English (`en`).
*   **AR-Ready Interface**: Features a high-contrast (white text on black) display suitable for overlays.
*   **Responsive Display**: Text size scales with the viewport width (`font-size: 2.5vw`).
*   **Fullscreen Mode**: Toggles a distraction-free, immersive view.

## Usage

1.  Open the [demo page](https://code4fukui.github.io/jimaku/).
2.  Select your desired language (`日本語` or `English`) from the dropdown menu.
3.  Click the `スタート` button to begin microphone input.
4.  As you speak, the recognized text will appear at the bottom of the screen.
5.  Click the `ストップ` button to end the recognition session.
6.  Click the `最大化` button to enter fullscreen mode. The button will hide automatically.

## Technology & Data Privacy

This application utilizes the **Web Speech API**, which is built into modern web browsers.

Please be aware that the browser's implementation of this API may send voice data to a cloud-based service for processing. Use this application with this understanding.

## License

MIT License — see [LICENSE](LICENSE).