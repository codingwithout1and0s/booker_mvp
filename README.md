# Booker

Make sure to change your `npm` shell to git's bash before running these commands
```
npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
```

## Frontend
Make sure to be in the `/frontend` directory before running these commands

To start the webpack server in development mode
```
npm run start
```

To build the server
```
npm run build
```

## Backend
Make sure to be in the `/backend` directory before running these commands

To start the backend server
```
npm run start
```

To build the current frontend
```
npm run build:ui
```

To push to Heroku (Read [this first](#initializing-your-heroku-app))
```
npm run deploy
```

⚠ This isn't reccomended when you have many changes on the server, it's best to make two seperate commits ⚠
To build the frontend, commit, and push to Heroku
```
npm run deploy:full
```

To check your code style
```
npm run lint
```
and to fix all your errors automatically
```
npm run lint --fix
```

## Initializing your Heroku app
If you haven't already, [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), and make a Heroku account

### Logging in to Heroku
```
heroku login
```

### Creating a heroku app.

This will add a `heroku` remote to your git remotes, which you can push to.
```
heroku create <name>
```

### Real-time logs
This will allow you to see any errors which may occur upon and after deployment
```
heroku logs -t
```

### Environment Variables
To set Environment variables in heroku,
```
heroku config:set <KEY>=<Value>
```
Example:
```
heroku config:set DATABASE_URI="mongodb+srv://username:password@cluster.id.mongodb.net/database?retryWrites=true"
```
Keep in mind that any `&` inside the command will cause it to break. 
For `&w=majority` in the `DATABASE_URI` the workaround is to set it by default upon connecting via mongoose
