---> yarn <--- yarn add babel-cli babel-core babel-preset-env 

---> устарел <--- babel-preset-stage-0 --dev 

npm install --save-dev @babel/core @babel/node

npm install --save-dev @babel/core @babel/cli @babel/preset-env

---> устарел (вроде, хватает env) <--- npm install --save @babel/polyfill ///устарел, или нет https://babeljs.io/docs/en/usage

npm install webpack webpack-cli --save-dev

npm install ignore-styles --save

npx webpack

npm install --save-dev @babel/preset-react 

npm install -D babel-loader @babel/core @babel/preset-env webpack  -  https://webpack.js.org/loaders/babel-loader/

-----------
https://medium.com/nuances-of-programming/%D0%BA%D0%B0%D0%BA-%D1%81-%D0%BD%D1%83%D0%BB%D1%8F-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BD%D0%B0-react-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-webpack-4-%D0%B8-babel-172c256d228

npm install react react-dom --save

npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

npm install css-loader style-loader --save-dev

npm install html-webpack-plugin --save-dev

npm install webpack-dev-server --save-dev


npm install --save redux
npm install --save react-redux

npm install react-router-dom --save

npm install redux-thunk --save

npm install uuid

npm install react-icons --save
---------------
npm install babel-cli babel-loader babel-preset-env babel-preset-react --save


npm install --save-dev jest


npm install react-bootstrap bootstrap

npm install image-webpack-loader --save-dev
npm install file-loader --save-dev

adobe xh

npm install serve-favicon
install express multer
-----
old 
"start": "webpack-dev-server --mode development --open --hot",


  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]



npm install -g strongloop

$ cd my-app
$ slc start

$ slc ctl ls

$ slc ctl stop my-app

$ slc ctl restart my-app

$ slc ctl soft-restart my-app

$ slc ctl remove my-app