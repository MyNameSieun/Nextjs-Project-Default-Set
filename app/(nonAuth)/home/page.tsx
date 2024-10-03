import SessionEx from "@/app/components/SessionEx";
import TodoForm from "@/app/components/todo/TodoForm";
import TodoList from "@/app/components/todo/TodoList";
import ZustandEx from "@/app/components/ZustandEx";

const HomePage = async () => {
  return (
    <main>
      <section>
        <h1>Test</h1>
        <ZustandEx />
        <SessionEx />
      </section>
      <TodoForm />
      <TodoList title="inProgress" />
      <TodoList title="isDone" />
    </main>
  );
};

export default HomePage;
