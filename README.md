[[API 명세서↗️]](https://github.com/MyNameSieun/skuCampusAlarm-back)

<br>

# 폴더구조

```
📂 app
│   📄 favicon.ico
│   🎨 globals.css
│   📄 layout.tsx
│   📄 page.tsx
│   📄 providers.tsx
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
├───📂 actions
│       📄 todo-actions.ts
│
├───📂 api
│   └───📂 auth
│       └───📂 [...nextauth]
│               📄 route.ts
│
├───📂 components
│   📄 SessionEx.tsx
│   📄 TodoDetail.tsx
│   📄 ZustandEx.tsx
│   ├───📂 common
│   │       📄 SignInOutButton.tsx
│   ├───📂 layouts
│   │       📄 Header.tsx
│   └───📂 todo
│           📄 TodoForm.tsx
│           📄 TodoItem.tsx
│           📄 TodoList.tsx
│
├───📂 detail
│   └───📂 [todoId]
│           📄 page.tsx
│
├───📂 fonts
│       🎶 GeistMonoVF.woff
│       🎶 GeistVF.woff
│
├───📂 hooks
│   └───📂 query
│           📄 keys.constant.ts
│           📄 useSingleTodoQuery.ts
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
- 디자인(UI) : `Tailwind CSS`, `daisyUI`
- 인증인가 : `Next Auth`
- Server: `json-server`
