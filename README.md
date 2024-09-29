# 폴더구조

```
📂 app
│  ├── 📄 favicon.ico
│  ├── 🎨 globals.css
│  ├── 📄 layout.tsx
│  ├── 📄 page.tsx
│  ├── 📄 provider.tsx
│
├─ 📂 (🔒 auth)
│  └─ 📂 todo
│      ├── 📄 layout.tsx
│      │
│      ├─ 📂 my
│      │   └── 📄 page.tsx
│      │
│      └─ 📂 new
│          └── 📄 page.tsx
│
├─ 📂 (🔓 nonAuth)
│  ├─ 📂 home
│  │   └── 📄 page.tsx
│  │
│  ├─ 📂 signin
│  │   └── 📄 page.tsx
│  │
│  └─ 📂 signup
│      └── 📄 page.tsx
│
├─ 📂 api
│  └─ 📂 auth
│      └─ 📂 [...nextauth]
│          └── 📄 route.ts
│
├─ 📂 components
│  └─ 📂 layouts
│      ├── 📄 Header.tsx
│      │
│      └─ 📂 common
│          └── 📄 SignInOutButton.tsx
│
└─ 📂 fonts
    ├── 🎶 GeistMonoVF.woff
    └── 🎶 GeistVF.woff
```

<br>

# 설치한 라이브러리

- Client State 관리 : `Zustand`
- Server State 관리 : `React Query`
- 디자인(UI) : `Next UI`, `Tailwind CSS`
- 인증인가 : `Next Auth`
