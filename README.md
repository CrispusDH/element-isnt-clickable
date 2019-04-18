## Purpose

Check case when `scrollIntoView` works not the same as `click`

## How to run

#### Preconditions

1. Install dependencies `npm i` in the root folder
2. Install dependencies in `/e2e-ui` folder `npm i`
3. Start test App in the root folder `npm run start`

#### Steps to reproduce

- go to in the `e2e-ui` folder
- run command `npm run test:click` for reproducing and issue with `Element is not clickable...`
- run command `npm run test:scrollIntoView` for checking passed test

#### Further comments

1. You could take a look at `localhost:3000` when this situation can happen. I understand that it isn't common UI.
2. In this special case `scrollIntoView` command will help to avoid error.
3. I faced this issue also on my work project but this Demo App clearly shows the case.
