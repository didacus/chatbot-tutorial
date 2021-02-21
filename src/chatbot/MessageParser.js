class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message, typeof message);

    if (message) {
      const lowercase = message.toLowerCase();

      if (lowercase) {
        this.actionProvider.handleNumber();
      }

      if (typeof lowercase == "number") {
        this.actionProvider.handleEmail();
      }

      if (lowercase.includes("@")) {
        this.actionProvider.handleTerms();
      }

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
