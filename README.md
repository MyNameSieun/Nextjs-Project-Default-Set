# 폴더구조

```
📂 app
│   📄 favicon.ico
│   🎨 globals.css
│   📄 layout.tsx
│   📄 page.tsx
│   📄 provider.tsx
│
├───📂 (🔓 auth)
│   └───📂 todo
│       📄 layout.tsx
│       ├───📂 my
│       │       📄 page.tsx
│       └───📂 new
│               📄 page.tsx
│
├───📂 (🔒 nonAuth)
│   ├───📂 home
│   │       📄 page.tsx
│   ├───📂 signin
│   │       📄 page.tsx
│   └───📂 signup
│           📄 page.tsx
│
├───📂 api
│   └───📂 auth
│       └───📂 [...nextauth]
│               📄 route.ts
│
├───📂 components
│   ├───📂 common
│   │       📄 SignInOutButton.tsx
│   └───📂 layouts
│           📄 Header.tsx
│
├───📂 fonts
│       🎶 GeistMonoVF.woff
│       🎶 GeistVF.woff
│
├───📂 hooks
│   └───📂 query
│           📄 keys.constant.ts
│           📄 useTodosMutation.ts
│           📄 useTodosQuery.ts
│
├───📂 services
│       📄 todos.ts
│
├───📂 store
│       📄 counterStore.ts
│
└───📂 types
        📄 todo-types.ts
```

<br>

# 설치한 라이브러리

- Client State 관리 : `Zustand`
- Server State 관리 : `React Query`
- 디자인(UI) : `Tailwind CSS`
- 인증인가 : `Next Auth`
- Server: `json-server`
