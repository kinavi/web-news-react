# About web-news-react
A site for blogging or news. [Maket](https://www.figma.com/file/eSwSqNYr0bSGMhsk8ekBkPv7/News-Camp?node-id=1%3A2 )

# What does he have?
- Registration, authorization.
- Section for filling the site (cms).
- Filtering and Sorting.
- Navigation (menu).
- Draft. Convenient text editor.

# How it works? 
Ssr site. What allows you to load data before rendering. (The feature is currently disabled. Turns on on demand)
All data taken from mongoDB. Two collections of users and news are created. Tokens are stored in cookies.

# Need to do
The module is currently under development.

- [ ] Fix bugs CSS header
- [ ] Extend editor features
- [ ] Extend filter features
- [ ] Page layout 404
- [ ] Add alerts for cms forms
- [ ] Add button logout
- [ ] Configure adding pictures to draft (Editor)
- [ ] Add skeleton
- [ ] Change token lifetime
- [ ] Search for keywords on the news page
- [ ] Autotest
- [ ] JS refactoring
- [ ] CSS refactoring

# Installation

You must have installed [mongoDB](https://docs.mongodb.com/manual/administration/install-community/)

url - 'mongodb://localhost:27017/web-news-react' to connect (default).

server build - `npm run build:server`
client build - `npm run build:client`
client start - `npm start`

![Main](/images/main.png)
![Main](/images/main_scroll.png)
![Main](/images/cms.png)
![Main](/images/news.png)
