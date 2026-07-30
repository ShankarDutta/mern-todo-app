import { useEffect, useState } from "react";
import TaskCard from "./components/Card/TaskCard";
import AddTask from "./components/Forms/AddTask";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { getAllTask } from "./services/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getAllTask();

        if (res.success) {
          setTasks(res.tasks);
        }
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };
  return (
    <section className="grid h-dvh place-items-center px-4">
      <Card className="max-w-lg gap-3 md:w-full">
        <CardHeader>
          <CardTitle>Task Manager</CardTitle>
          <CardDescription>
            Organize, track, and complete your daily tasks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AddTask onTaskAdded={handleTaskAdded} />

          {tasks.map((task) => {
            return (
              <TaskCard
                key={task._id}
                info={task}
              />
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
};

export default App;
