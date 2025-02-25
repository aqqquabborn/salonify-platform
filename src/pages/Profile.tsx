import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { toast } = useToast();

  const handleEditProfile = () => {
    console.log("Edit profile clicked");
    toast({
      title: "Edit Profile",
      description: "Profile editing functionality coming soon!",
    });
  };

  return (
    <div className="container py-8">
      <h1 className="font-display text-4xl mb-8">My Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> John Doe</p>
              <p><span className="font-medium">Email:</span> john@example.com</p>
              <p><span className="font-medium">Phone:</span> +1 234 567 890</p>
              <Button className="w-full mt-4" onClick={handleEditProfile}>Edit Profile</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No orders yet</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Saved Addresses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No addresses saved</p>
            <Button className="w-full mt-4" onClick={() => toast({
              title: "Add Address",
              description: "Address adding functionality coming soon!",
            })}>Add Address</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;