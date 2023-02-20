/*
  const onresult = async (e) => {
    console.log(e);
    const res = e.results;
    const r = res[res.length - 1];
    const tscr = r[0].transcript;
    if (!r.isFinal) {
      divinfo.textContent = tscr;
    } else {
      divinfo.textContent = tscr;
      recog.stop();
      divai.textContent = "thinking...";
      const res = await fetchChat(tscr);
      divai.textContent = res;
      await speech(res, false);
      recog = startRecog(onresult);
    }
  };
*/

export class SpeechRecognizer {
  constructor(lang = "ja") { // "en"
    this.lang = lang;
  }
  start(onresult) {
    this.recog = window.webkitSpeechRecognition ? new webkitSpeechRecognition() : new SpeechRecognition();
    this.recog.continuous = true;
    this.recog.lang = this.lang;
    this.recog.interimResults = true;
    this.recog.onresult = onresult;
    this.recog.start();
  };
  stop() {
    this.recog.stop();
    this.recog = null;
  }
}
