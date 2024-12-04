import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "../hooks/use-user";

export default function HomePage() {
  const { user, logout } = useUser();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.username}!</CardTitle>
          <CardDescription>You are successfully logged in</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
