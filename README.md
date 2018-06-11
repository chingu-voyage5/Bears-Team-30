# Bears-Team-30

## Feast (Order System App)

This Project aims to create a web app for an Ordering System.

### Development Stack

- React
- Apollo
- NodeJS
- GraphQL
- MongoDB

## Setup

- We use yarn as our package manager so intall yarn in you machine globally

#### Client

- `cd client` to change to the client directory
- Run `yarn` to install all dependencies under the client folder
- Run `yarn start` to run application

#### Server

- `cd server` to change to the server directory
- `touch server.config.js` to create a server config file
- Setup the config file (example below)
- Add `server.config.js` to `.gitignore`
- Run `yarn` to install all dependencies under the server folder
- Run `yarn start` to run GraphQL server
- Go to http://localhost:4000 to access GraphQL playground

##### Example `server.config.js`

```javascript
const uri = '<YOUR_URI_HERE>';

module.exports = {
  uri
};
```

## Contributing

#### For Main Contributors:

- Clone the project by running `git clone git@github.com:chingu-voyage5/Bears-Team-30.git`
- Do not modify the `master` branch directly only Merging can be done to the `master` branch.
- To began working on a feature, start by creating a new branch from `master` by doing `git checkout -b branch-name`
- Always rebase your branch to update it with the latest changes from the `master` using `git pull origin master --rebase`
- Once changes are committed, push changes by doing `git push origin branch-name`
- Create a pull request from Github. Each team member will do the code review whenever possible.

#### For Other Contributors

- Fork the repo
- Create a new branch from `master` by doing `git checkout -b branch-name`
- Once changes are committed, push changes by doing `git push remote-name branch-name`
- Create a pull request in the project repo not in the forked repo. Main Contributors will do the code review for the pull requests.
