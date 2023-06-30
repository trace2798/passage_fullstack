# Post iT made using Next.js 13.4 App Router: Passage for authentication, React & Tailwind css.

### This repo is for my submission for the 1Password X hashnode X hackathon which took place during June 1 - June 30, 2023

#### Hashnode article: [Share your milestones and memories with "Post iT"](https://shreyas-chaliha.hashnode.dev/share-your-milestones-and-memories-with-post-it) 

## Getting Started

### Either fork the repo or directly clone it

### Prerequisites

**Node version 16.8 or later  
**macOS, Windows (including WSL), and Linux are supported.

### To directly clone the repo

```shell
git clone https://github.com/trace2798/passage_fullstack.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_PASSAGE_APP_ID=
NEXT_PUBLIC_PASSAGE_API_KEY=
DATABASE_URL=
```
<b>Disclamer:</b> Recently, when I named my env file as .env.local I ran into some problems with prisma so if you face similar problem just name is as .env and do not forget to add it to your .gitignore. After adding .env to your gitignore and if the .env file is getting pushed with your commit then check this [link out]( https://stackoverflow.com/questions/74340379/gitignore-not-working-my-environment-variables-are-being-pushed-to-my-repo-whe)

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `build`         | To build your application                |
| `start`         | Starts a production  instance of the app |

 "postinstall": "prisma generate" is required if you want to deploy your site.

## For env value and functionality of this application I have wrote a very detailed article on [hashnode](https://shreyas-chaliha.hashnode.dev/share-your-milestones-and-memories-with-post-it)


Youtube Demo Link: [Post iT](https://www.youtube.com/watch?v=iXuKCdvHBLY)
