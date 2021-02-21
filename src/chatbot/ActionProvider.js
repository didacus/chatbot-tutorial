class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage(
      `Hi there. I am here to help you with all the important matters related to your flat 
    and building.`,
      {
        delay: 2000,
        withAvatar: true,
        widget: "options",
      }
    );
    this.addMessageToState(message);
  };

  // handleJavascriptQuiz = () => {
  //   const message = this.createChatBotMessage(
  //     "Fantastic. Here is your quiz. Good luck!",
  //     {
  //       widget: "javascriptQuiz",
  //     }
  //   );

  //   this.addMessageToState(message);
  // };

  handleLater = () => {
    const message = this.createChatBotMessage(
      "No problem. Say hello if 👋 you need me.",
      {
        delay: 1000,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleIntroduction = () => {
    const msg1 = this.createChatBotMessage("Sure thing.", {
      delay: 1000,
      withAvatar: true,
    });

    const msg2 = this.createChatBotMessage(
      "I can help you with your parcels, manage your regular visitors, give you updates about building maintenance and even help you get to know your neighbours..",
      {
        delay: 2000,
        withAvatar: true,
      }
    );

    const msg3 = this.createChatBotMessage("Interested?", {
      delay: 3000,
      withAvatar: true,
    });

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, msg1, msg2, msg3],
    }));
  };

  // Function to send a message
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
