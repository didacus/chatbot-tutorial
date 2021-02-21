class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);

    if (message) {
      const lowercase = message.toLowerCase();

      if (
        lowercase.includes("hello") ||
        lowercase.includes("hi") ||
        lowercase.includes("help")
      ) {
        this.actionProvider.greet();
      }

      if (lowercase.includes("yes")) {
        this.actionProvider.handleJavascriptQuiz();
      }
    }
  }
}

export default MessageParser;
