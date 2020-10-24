## Shuttle Breaker Node

### Installation

1. git clone this repo
2. npm i

### ENV RC CONFIG

1. copy the `envrc.example` to `.envrc` ans write your appropriate settings
2. Install [DIRENV](https://direnv.net/docs/installation.html)
3. Run below to activate your env setting

- zsh

```zsh
eval "$(direnv hook zsh)"
direnv allow
```

- bash

```bash
eval "$(direnv hook bash)"
direnv allow
```

### Serve The App

```zsh
npx nodemon
```

### Database sequlize thingy (SQL)

1. fresh migrate

```zsh
npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
```

### Model & Seeder (example)

```zsh
npx sequelize-cli model:generate --name Role --attributes name:string
npx sequelize-cli seed:generate --name role
```

### Visualize ERD

```zsh
npm run erd
```
