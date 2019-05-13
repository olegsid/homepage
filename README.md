# Homepage

Learning CI & CD project by following Bsa19 [tutorial](https://binary-studio-academy.github.io/stage-2/lectures/how-developers-work/)

## Deploy process

The project can be deployed to AWS only by committing to develop and master branch. Pull request triggers build on **travis-ci.org** but do not deploy to AWS bucket

_Links to_:

- [Travis integration](https://travis-ci.org/olegsid/homepage)

- [Develop instance](http://oleg.shevchuk.com-develop.s3-website.eu-central-1.amazonaws.com)

- [Production instance](http://oleg.shevchuk.com-production.s3-website.eu-central-1.amazonaws.com)

## Development process

Run `npm i` to install all deps

Commandlist:

- `npm start` - runs devepment build watcher
  
- `npm build` - makes producntion build
  