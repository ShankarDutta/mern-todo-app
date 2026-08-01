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
import { toast } from "./components/ui/toast";
import { getAllTask } from "./services/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getAllTask();

        if (!res.success) {
          return toast.add({
            type: "error",
            description: res.message || "Failed to load tasks",
          });
        }

        setTasks(res.tasks);
      } catch (err) {
        toast.add({
          type: "error",
          description: "Unable to load tasks. Please try again.",
        });

        console.error("Failed to fetch tasks:", err);
      }
    };
    fetchTasks();
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleTaskDeleted = (id) => {
    setTasks((prev) => prev.filter((task) => task._id !== id));
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task._id === updatedTask._id ? updatedTask : task)),
    );
  };

  return (
    <section className="flex justify-center">
      <Card className="mt-52 max-w-lg gap-3 md:w-full">
        <CardHeader>
          <CardTitle>Task Manager</CardTitle>
          <CardDescription>
            Organize, track, and complete your daily tasks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AddTask onTaskAdded={handleTaskAdded} />

          {tasks.length < 1 ?
            <Card>
              <CardContent>
                <CardTitle>Add Your First Task</CardTitle>
              </CardContent>
            </Card>
          : tasks.map((task) => {
              return (
                <TaskCard
                  key={task._id}
                  info={task}
                  onTaskDeleted={handleTaskDeleted}
                  onTaskUpadted={handleTaskUpdated}
                />
              );
            })
          }
        </CardContent>
      </Card>
    </section>
  );
};

export default App;
