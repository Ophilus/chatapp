import React from 'react';
import { View, Platform, KeyboardAvoidingView} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

// import Firestore
const firebase = require('firebase');
require('firebase/firestore');


export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCLPfmMXOuAP7f0SHD3fz6MY7AXBESQGm0",
        authDomain: "chatapp-4434b.firebaseapp.com",
        projectId: "chatapp-4434b",
        storageBucket: "chatapp-4434b.appspot.com",
        messagingSenderId: "192183344563",
        appId: "1:192183344563:web:cf6dcc84103f8e32e13fc6",
        measurementId: "G-ZDVSBVRK91"
      });
    }
    this.referenceChatMessages = firebase.firestore().collection("messages");
    
  }
  

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'This is a system message',
          createdAt: new Date(),
          system: true,
         },
      ],
    })
  }

  

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#072759'
          }
        }}
      />
    )
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    let name = this.props.route.params.name;

    this.props.navigation.setOptions({ title: name });
    let { bgColor } = this.props.route.params;
    return (
      <View style={{ flex: 1}}>
      <GiftedChat
        renderBubble={this.renderBubble.bind(this)}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{_id: 1,}}
        />
        { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null} 
        </View>
    )
  }
}