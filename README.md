# TDL WinterSchool project 2

This project tests website: http://www.automationpractice.pl/

## How to install
Run command:
```
npm install
```

## How to run the tests
Run command:
```
npm run wdio
```
## Specific tags to pick (@cart, @cart_remove, @search, @checkout)

## Example 
```
npx wdio wdio.conf.js --cucumberOpts.tags=@cart
```

## How to view report
First run the tests and then run command:
```
npm run allure
```