class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message, typeof message);

    if (message) {
      const lowercase = message.toLowerCase();

      //Catch all
      if (lowercase) {
        this.actionProvider.handleUserMessage(message);
      }

      if (
        lowercase.includes("hello") ||
        lowercase.includes("hi") ||
        lowercase.includes("help")
      ) {
        this.actionProvider.greet();
      }

      if (lowercase.includes("concierge")) {
        this.actionProvider.handleConcierge();
      }
    }
  }
}

export default MessageParser;
