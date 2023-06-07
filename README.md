# Integrating Keplr to the frontend with Graz. This project is bootstraped with `npx create-react-app`
## This project is to test the integration of Keplr Wallet to the frontend using Graz (developed by StrangeLove)

***

## Installation
` npm install graz `
* Graz install the recommened dependencies like Cosmjs --> @cosmjs/stargate @keplr-wallet/cosmos  @cosmjs/cosmwasm-stargate @cosmjs/proto-signing

* Installing Cosmjs results into an error of polyfills 
  * To avoid this either use react-scripts@4.0.3 or follow this [link from stack overflow](https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5)
  * I'm using the fix from StackOverflow
  * `npm install --save-dev react-app-rewired crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url buffer process `
  * Create a ` config-overrides.js ` at the root of the project with the following:
   ``` 
   const webpack = require('webpack');

    module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    config.ignoreWarnings = [/Failed to parse source map/];
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
    return config;
    } 
    ```
    * Replace this 
     ```
        "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
    },
     ```
    * with this
    ```
        "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
    },
    ```

## Using graz

* The functionalities graz provides with are very well documented here at [Graz Docs ](https://graz.strange.love/docs/)
* Also check out this [tutorial](https://strange.love/blog/how-to-connect-your-frontend-to-cosmos-blockchain) from StrangeLove guys, which this project heavily follows.
