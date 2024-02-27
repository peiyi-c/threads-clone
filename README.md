# threads-clone

This project is created solely for my practice purposes.

## Live link

[View Demo](https://threads-clone-silk-five.vercel.app/)

## Screenshots

<details>
<summary>Profile Page</summary>

![Profile](https://github.com/peiyi-c/threads-clone/assets/73789013/bc22e4a5-97d0-4470-b9af-403ae5e61cad)

</details>

<details>
<summary>Search Page </summary>

![Search](https://github.com/peiyi-c/threads-clone/assets/73789013/9d4b342d-6ea4-4b48-a104-6531c580e9ef)

</details>

## Built with

- HTML
- CSS
- React, React Router
- zustand
- Chakra UI, Chakra UI Icons
- Firebase
- React Firebase Hooks
- Swiper.js

## File structure

<details>
<summary>Click to open</summary>

```
├── node_modules
├── public
│     └── favicon.ico
├── src
│   ├── assets
│   │     ├── logo.bg.png
│   │     └── logos.jsx
│   ├── components
│   │     ├── AuthForm
│   │     │    └──...jsx
│   │     ├── FeedPosts
│   │     │    └──...jsx
│   │     ├── Footer
│   │     │    └──...jsx
│   │     ├── Header
│   │     │    └──...jsx
│   │     ├── Navigation
│   │     │    └──...jsx
│   │     ├── Profile
│   │     │    └──...jsx
│   │     └── SearchForm
│   │          └──...jsx
│   ├── contexts
│   │     └── contentContext.jsx
│   ├── firebase
│   │     └── firebase.js
│   ├── hooks
│   │     ├── useColors.jsx
│   │     ├── ...
│   │     └── useSignupWithEmailAndPassword.jsx
│   ├── layouts
│   │     └── GeneralLayout.jsx
│   ├── pages
│   │     ├── ActivityPage
│   │     │    └──ActivityPage.jsx
│   │     ├── AuthPage
│   │     │    └──AuthPage.jsx
│   │     ├── HomePage
│   │     │    └──HomePage.jsx
│   │     ├── NotFoundPage
│   │     │    └──NotFoundPage.jsx
│   │     ├── PostPage
│   │     │    └──PostPage.jsx
│   │     ├── ProfilePage
│   │     │    └──ProfilePage.jsx
│   │     └── SearchPage
│   │          └──SearchPage.jsx
│   ├── routes
│   │     ├── PrivateRoutes.jsx
│   │     └── PublicRoutes.jsx
│   ├── store
│   │     ├── authStore.js
│   │     ├── threadStore.jsx
│   │     └── userProfileStore.jsx
│   ├── themes
│   │     ├── _alert.jsx
│   │     ├── ...
│   │     └── theme.jsx
│   ├── utils
│   │     └── ...js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── vercel.json
...
└── README.md

```

</details>

## Function descriptions & progrgess

**LOGIN / SIGNUP PAGE**

- [x] user can login with email and password
- [x] user can login with email and password

**HOME PAGE**

- [x] user can logout
- [x] user can view his own and his followings' threads.
- [x] user can like visible threads.
- [x] user can reply visible threads.
- [x] user can repost visible threads posted by others.
- [x] user can quote visible threads posted by others.
- [x] user can follow other users.
- [ ] user can mute her/his followings.
- [ ] user can hide viewable threads.

**SEARCH PAGE**

- [x] user can search for other users.

**CREATE PAGE (no route)**

- [x] user can create new threads.

**ACTIVITY PAGE**

- user can view notifications
  - [ ] all: who followed you, whom you just followed, who like your post/comment, who post his/her first thread
  - [ ] requests: follow requests
  - [ ] replies: replies to users’ threads
  - [ ] mentions: threads or comments, mentioning user’s name
  - [ ] quotes: threads that quote user’s threads
  - [ ] verified: verified users that user follows.

**PROFILE PAGE**

- [x] user can view his own profile page
  - [x] view display name, username, profile picture, bio description
  - edit profile
    - [x] user can edit her/his own profile.
  - [x] view user’s own threads (including quotes)
  - [x] view user’s replies to other threads/comments
  - [x] view user’s reposts of other users’ threads
- [x] user can view other’s profile page
  - [x] view display name, username, profile picture, bio description
  - [x] follow profile user (button)
  - mention profile user (button)
    - [ ] user can mention other users.
  - [x] view profile user’s threads (including quotes)
  - [x] view profile user’s replies to other threads/comments
  - [x] view profile user’s reposts of other users’ threads
