import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import Avatar from "../components/Avatar/Avatar";
import Menu from "../components/Menu/Menu";

const config = {
  botName: "Johnny 5",
  initialMessages: [
    createChatBotMessage(
      `Hi there. I am here to help you with all the important matters related to your flat 
    and building.`,
      {
        widget: "options",
      }
    ),
  ],
  customComponents: {
    // Replaces the default bot avatar
    botAvatar: (props) => <Avatar {...props} />,
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => (
        <Options
          options={[
            {
              text: "Tell me more",
              handler: props.actionProvider.handleIntroduction,
              id: 1,
            },
            {
              text: "Not now",
              handler: props.actionProvider.handleLater,
              id: 2,
              secondary: true,
            },
          ]}
        />
      ),
    },
    {
      widgetName: "askName",
      widgetFunc: (props) => (
        <Options
          options={[
            {
              text: "Yes, I am",
              handler: props.actionProvider.handleName,
              id: 1,
            },
            {
              text: "Maybe later",
              handler: props.actionProvider.handleLater,
              id: 2,
              secondary: true,
            },
          ]}
        />
      ),
    },
    {
      widgetName: "askTerms",
      widgetFunc: (props) => (
        <Options
          options={[
            {
              text: "Accept T&C's",
              handler: props.actionProvider.handleCompletion,
              id: 1,
            },
            {
              text: "Maybe later",
              handler: props.actionProvider.handleLater,
              id: 2,
              secondary: true,
            },
          ]}
        />
      ),
    },
    {
      widgetName: "askConcierge",
      widgetFunc: (props) => (
        <Menu
          options={[
            {
              text: "Manage regular visitors",
              handler: props.actionProvider.handleCompletion,
              id: 1,
            },
            {
              text: "Activity log",
              handler: props.actionProvider.handleCompletion,
              id: 2,
            },
            {
              text: "Chat with a human",
              handler: props.actionProvider.handleCompletion,
              id: 3,
            },
            {
              text: "Account",
              handler: props.actionProvider.handleCompletion,
              id: 4,
            },
          ]}
        />
      ),
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Hi there. What can I do for you today?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
