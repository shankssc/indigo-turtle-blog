# indigo-turtle-blog

Hey guys, I am sure this must be very confusing and I understand. This is the first time we are doing this much (prettier, eslint, documentation, git fork and issue tracking) for a project, and as a result, it became quite complex.

However, the more we do these kind of things, we more we will feel used to it and be experienced in such toolings. Also, as we progress through this cycle's hack and onto the next cycle's hack, we can learn from the mistake we make from previous organizaiton (like we should not use eslint in short-term project when not many have experience with it, and with creating a documentation about structure ahead of time like this). So please bear with us :)


## The structure of this repository is divided into two directories (website/server)

### Website directory:
- package.json, .gitignore, tsconfig and other various config files.
- src directory
  - components directory (all of the react components will be stored here)
  - utils directory (all of the helper functions that are shared between components will be stored here)
  - App.tsx (App.tsx will load the components from the components directory)
  - index.tsx (this is our starting point in our website-code, index.tsx will call App.tsx)
- documentation directory
  - [api-endpoint.md](website/documentation/api-endpoint.md)

components directory will include all of the React components including the page components (ex: PostsPage) and other components everyone make for their page.

### Backend directory:
- T.B.D (shankssc is working on this)


## For help on Typescript, React & Git/Github

Typescript
- Please look through this forum for tutorials on typescript and for asking questions related to Typescript:
    [TS Resource Forum](https://discord.com/channels/1082086126954758174/1092821343600398457)

React
- T.B.D

Git/Github
- For now all we have is this message that describes the workflow: 
    [GIT/GITHUB Workflow Forum](https://discord.com/channels/1082086126954758174/1092556971804217365/1092556971804217365)
    
## Tech Stack
```
Frontend
    Platform: Firebase
    Language: Typescript
    Framework: React
    UI Style: Material UI
    Code Style: Prettier, Eslint
    Testing: N/A
    Paradigm: Functional
    Version Tracking: git, github
 
Backend
    Platform: Firebase
    Language: NodeJS
    Framework: ExpressJS
    Database: Firebase Realtime Database?
    Code Style: Prettier, Eslint
    Testing: ?
    Paradigm: Functional
    Version Tracking: git, github
```

