
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const UserDetail = () => {
        const { id } = useParams();
        const user = usersData.find((u) => u.id === Number(id));
      
        if (!user) return <div>User not found</div>;
      
        return (
          <Card className="p-4 m-4">
            <CardContent>
              <h2 className="text-xl font-bold">User Details</h2>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </CardContent>
          </Card>
        );
      };