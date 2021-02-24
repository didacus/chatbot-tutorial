import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import Avatar from "../components/Avatar/Avatar";
import Menu from "../components/Menu/Menu";
import Image from "../components/Image/Image";

import AccountIc from "../assets/ic-account.png";
import AcitivityIc from "../assets/ic-activity.png";
import ChatIc from "../assets/ic-chat.png";
import VisitorIc from "../assets/ic-visitor.png";

const config = {
  botName: "Johnny 5",
  initialMessages: [
    createChatBotMessage(
      `Hi there. I am here to help you with all the important matters related to your flat 
    and building.`,
      {
        widget: "askGreet",
      }
    ),
  ],
  customComponents: {
    // Replaces the default bot avatar
    botAvatar: (props) => <Avatar {...props} />,
  },
  widgets: [
    {
      widgetName: "askGreet",
      widgetFunc: (props) => (
        <>
          <Image image="https://media.giphy.com/media/hWpjRVzwSMy7QvM6Ee/giphy.gif" />
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
        </>
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
              text: "Regular visitors",
              handler: props.actionProvider.handleVisitor,
              icon: VisitorIc,
              id: 1,
            },
            {
              text: "Activity log",
              handler: props.actionProvider.handleCompletion,
              icon: AcitivityIc,
              id: 2,
            },
            {
              text: "Chat with a human",
              handler: props.actionProvider.handleCompletion,
              icon: ChatIc,
              id: 3,
            },
            {
              text: "Account",
              handler: props.actionProvider.handleCompletion,
              icon: AccountIc,
              id: 4,
            },
          ]}
        />
      ),
    },
    {
      widgetName: "askVisitors",
      widgetFunc: (props) => (
        <Options
          options={[
            {
              text: "Yes",
              handler: props.actionProvider.handleVisitorName,
              id: 1,
            },
            {
              text: "Maybe later",
              handler: props.actionProvider.handleVisitorName,
              id: 2,
              secondary: true,
            },
          ]}
        />
      ),
    },
    {
      widgetName: "askIOS",
      widgetFunc: (props) => (
        <Menu
          options={[
            {
              text: "Take a photo",
              handler: props.actionProvider.handlePreview,
              icon: VisitorIc,
              id: 1,
            },
            {
              text: "From the library",
              handler: props.actionProvider.handlePreview,
              icon: AcitivityIc,
              id: 2,
            },
          ]}
        />
      ),
    },
    {
      widgetName: "askPreview",
      widgetFunc: (props) => (
        <>
          <Image
            image={"https://media.giphy.com/media/Fh9jhYLDLo87u/giphy.gif"}
          />
          <Options
            options={[
              {
                text: "Yes, save it",
                handler: props.actionProvider.handleAnotherVisitor,
                id: 1,
              },
              {
                text: "No, retake",
                handler: props.actionProvider.handleAnotherVisitor,
                id: 2,
                secondary: true,
              },
            ]}
          />
        </>
      ),
    },
    {
      widgetName: "askAnotherVisitor",
      widgetFunc: (props) => (
        <>
          <Options
            options={[
              {
                text: "Yes, add another",
                handler: props.actionProvider.handleVisitorName,
                id: 1,
              },
              {
                text: "That's all for now",
                handler: props.actionProvider.handleDone,
                id: 2,
                secondary: true,
              },
            ]}
          />
        </>
      ),
    },
    {
      widgetName: "askDone",
      widgetFunc: (props) => (
        <Image
          image={"https://media.giphy.com/media/l0Iyl55kTeh71nTXy/giphy.gif"}
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
