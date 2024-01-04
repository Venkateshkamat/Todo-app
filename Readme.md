# Todo Application

This project is a simple todo Application with Nodejs & Express for backend and Reactjs for frontend, with MongoDB for a noSQL database.


## Table of Contents

- [About](#about)
- [Installing](#installing)
- [Usage](#usage)
- [Overview](#overview)
- [Contributors](#contributors)
- [Contributing](#contributing)

## About
The Todo application has the following features - 
- Anyone can create a todo
- Anyone can see their existing todo items
- Anyone can mark a todo done.

## Installing
First clone the repository on your local machine, by running the following command in your desired directory:
```sh
git clone https://github.com/Venkateshkamat/Todo-app.git
```

Then install [Node.js](http://nodejs.org/) and [MongoDB](https://www.mongodb.org/downloads). Then visit both the `backend/` and `frontend/` directories to run the following command to install dependencies:

```sh
npm i
```

## Usage

To run the backend, visit the parent directory, i.e `backend/`  and run:
```sh
node index.js
```
To run the frontend, visit the parent directory, i.e `frontend/`  and run:
```sh
npm run dev
```
## Overview

Change the connection link in the `backend/index.js`
```javascript
//add your connection link here
mongo.connect("mongodb+srv://username:password@cluster0.sj6zhoc.mongodb.net/app")
```
Visit the link for frontend that is mentioned after running `npm run dev`.

## Contributors

Pull requests are always welcome! Please base pull requests against the `master`

## Contributing

<a href="https://github.com/Venkateshkamat"><img src="https://github.com/Venkateshkamat.png" width="135px;" alt="Venkatesh Kamat"/><br /><b>Venkatesh Kamat</b></a>