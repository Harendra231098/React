# Redux Toolkit
-Install @reactjs/toolkit and react-redux
-Build our store
-connect our store to our app
-create a Slice(cart slice)
-dispactch(action)
-Selector


# Testing
-Unit Testing-Test your components in isolation(testing unit of ur application)
-Integrating Testing-testing integration of components(multiple components are involved and talking to each other)
-End to End Testing-Testing the application as soon as user lands on website to the user left the website

React testing library built on the top of dom testing library

Jest is delightful javascript framework

npm install --save-dev @testing-library/react ---React testing library
npm install --save-dev jest                  ----install jest
npm install --save-dev babel-jest @babel/core @babel/preset-env   ----install babel dependencies

---configure babel
    module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };


---configure parcel config to disable inbuilt babel transpiler in babel----->parcel/javascript/babel  documentation path  
create  .parcelrc: 

{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}


npx jest --init   --->
Jest configuration
npm install --save-dev jest-environment-jsdom         -----  install jsdom library
npm install --save-dev @babel/preset-react            -----  install babel preset react


include  @babel/preset-react in in babel config

babel preset helping our testing library to convert jsx code to normal html code

npm i -D @testing-library/jest-dom


__ (two times underscore) is called dunder method

** Describe
Assume there are 20 test cases-5 test case are contact ,5 are test cases About  and so on.. 
Grouping all these testcases in single block and block is called Describe

**You can write 'test' as 'it' also

**we can use regex also eg:to find card on header component ---screen.getByText(/Cart/)

**fireEvent which import from "@testing-library/react" help to fire an events in browsers eg:onclick,onChange etc;

***dummy fetch funtion exactly like fetchAPI in browser
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

**jest --watch helps to track the changes in test enironvment like HMR in pracel 

**when ever u using fetch or state variable wrap component render in act() funtion which return promise
