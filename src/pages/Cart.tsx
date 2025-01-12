import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const Cart = () => {
  return (
    <div className="container py-8">
      <h1 className="font-display text-4xl mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg" alt="Product" className="w-20 h-20 rounded-md" />
              <div>
                <h3 className="font-medium">Facial Treatment</h3>
                <p className="text-sm text-muted-foreground">Treatments</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold">$99.99</span>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6">
            <h3 className="font-display text-xl mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$99.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$99.99</span>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;