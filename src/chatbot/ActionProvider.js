class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.addUserName = "";
    this.addUserFlat = "";
    this.addUserEmail = "";
    this.handleFlat = this.handleFlat.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleTerms = this.handleTerms.bind(this);
  }

  handleUserMessage = () => {
    var lastMessage = "";
    this.setState((state) => {
      console.log("State is", state.messages, "Type", state.messages.type);

      lastMessage = state.messages[state.messages.length - 2].content;
      console.log("Last", lastMessage);

      switch (lastMessage) {
        case "name":
          this.handleFlat();
          break;
        case "flat":
          this.handleEmail();
          break;
        case "email":
          this.handleTerms();
      }

      return state;
    });
  };

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

  //Handle later answers
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

  //Intro
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
      widget: "askName",
    });

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, msg1, msg2, msg3],
    }));
  };

  //Name
  handleName = () => {
    const msg1 = this.createChatBotMessage("Great.", {
      delay: 1000,
      withAvatar: true,
    });

    const msg2 = this.createChatBotMessage(
      "Let’s get to know each other. What’s your name?",
      {
        delay: 2000,
        withAvatar: true,
        content: "name",
      }
    );

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, msg1, msg2],
    }));
  };

  //Flat
  handleFlat = () => {
    const msg1 = this.createChatBotMessage(
      `Thank you ${this.addUserName}. To better serve you I need a few more details about yourself and where you live.`,
      {
        delay: 1000,
        withAvatar: true,
      }
    );

    const msg2 = this.createChatBotMessage(
      "Could you tell me your flat number? All this information will be kept private and safe.",
      {
        delay: 2000,
        withAvatar: true,
        content: "flat",
      }
    );

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, msg1, msg2],
    }));
  };

  //Email
  handleEmail = () => {
    const msg1 = this.createChatBotMessage(
      "Great, thank you. What about your email address? I will use it to sign you in next time.",
      {
        delay: 1000,
        withAvatar: true,
        content: "email",
      }
    );
    this.addMessageToState(msg1);
  };

  //Terms & Conditions
  handleTerms = () => {
    const msg1 = this.createChatBotMessage("Thank you. We are almost done.", {
      delay: 1000,
      withAvatar: true,
    });

    const msg2 = this.createChatBotMessage(
      "Before I can setup your services I need you to read and agree with Terms & Conditions.",
      {
        delay: 2000,
        withAvatar: true,
        widget: "askTerms",
      }
    );

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, msg1, msg2],
    }));
  };

  //Done
  handleCompletion = () => {
    const msg1 = this.createChatBotMessage("All done!", {
      delay: 1000,
      withAvatar: true,
    });

    const msg2 = this.createChatBotMessage(
      "You can request my help anytime by typing `concierge`. I will tell you all the help I can provide. Give it a go!",
      {
        delay: 2000,
        withAvatar: true,
      }
    );

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, msg1, msg2],
    }));
  };

  //Concierge
  handleConcierge = () => {
    const msg1 = this.createChatBotMessage("All done!", {
      delay: 1000,
      withAvatar: true,
    });

    const msg2 = this.createChatBotMessage(
      "You can request my help anytime by typing `concierge`. I will tell you all the help I can provide. Give it a go!",
      {
        delay: 2000,
        withAvatar: true,
      }
    );

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, msg1, msg2],
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
