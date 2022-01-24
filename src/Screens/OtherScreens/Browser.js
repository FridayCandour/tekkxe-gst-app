import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { WebView } from 'react-native-webview';

function Browser({ style }) {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync("../../../assets/web.html"); 
    setResult(result);
  };
  return (
    <WebView    originWhitelist={['*']}
      source={{ html: '<h1><center>Hello world</center></h1>' }} />
      //source={{ uri: "../../assets/web.html" }} />
    // <View style={style}>
    //   <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
    //   <Text>{result && JSON.stringify(result)}</Text>
    // </View>
  );
}

export default Browser;


/*
import * as React from 'react';

export default function App() {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://expo.dev' }}
    />
  );
}





import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html: '<h1><center>Hello world</center></h1>' }}
    />
  );
}

*/ 