import AddTask from "./components/Form/AddTask";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const App = () => {
  return (
    <section className="grid h-dvh place-items-center px-4">
      <Card className="max-w-lg gap-3 md:w-full">
        <CardHeader>
          <CardTitle>Task Manager</CardTitle>
          <CardDescription>
            Organize, track, and complete your daily tasks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddTask />
        </CardContent>
      </Card>
    </section>
  );
};

export default App;
