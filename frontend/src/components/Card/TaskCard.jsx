import { Card, CardContent, CardTitle } from "../ui/card";

const TaskCard = ({ info }) => {
  return (
    <Card>
      <CardContent className="">
        <CardTitle>{info.text}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
