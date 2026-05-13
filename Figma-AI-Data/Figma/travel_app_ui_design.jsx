import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function TravelApp() {
  const [page, setPage] = useState("home");

  return (
    <div className="w-[1080px] h-[2400px] bg-white text-gray-900 mx-auto overflow-hidden">
      {page === "home" && (
        <motion.div
          className="relative h-full w-full bg-cover bg-center flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/4/4c/Radhanagar_Beach_Andaman.jpg')`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white/50 rounded-xl p-8">
            <img
              src="https://proteanegov.in/wp-content/uploads/2022/04/Protean-logo.svg"
              alt="Protean EGov Technologies Limited"
              className="w-80 mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold text-sky-800 mb-4">
              Discover Paradise with Protean Travel
            </h1>
            <Button
              onClick={() => setPage("tour")}
              className="bg-amber-500 hover:bg-amber-600 text-white text-xl px-8 py-4 rounded-full"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}

      {page === "tour" && (
        <div className="flex flex-col h-full">
          <div className="h-1/2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/00/Elephant_Beach%2C_Andaman.jpg"
              alt="Andaman Tour Spot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4">Andaman Islands Adventure</h2>
            <p className="text-lg mb-2">🏝️ Explore turquoise waters and coral reefs.</p>
            <p className="text-lg mb-2">🚤 Water sports, island hopping, beach relaxation.</p>
            <p className="text-lg mb-2">🕒 Duration: 6 Days / 5 Nights</p>
            <p className="text-lg mb-6">💰 Starting from ₹45,000 per person</p>
            <Button onClick={() => setPage("itinerary")} className="bg-sky-600 hover:bg-sky-700 text-white">
              View Itinerary
            </Button>
          </div>
        </div>
      )}

      {page === "itinerary" && (
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">6 Days 5 Nights – Best Andaman Deal</h2>
          <div className="space-y-4 text-lg">
            <p><strong>Day 1:</strong> Arrival at Port Blair – Cellular Jail visit & Light Show.</p>
            <p><strong>Day 2:</strong> Ferry to Havelock Island – Radhanagar Beach.</p>
            <p><strong>Day 3:</strong> Elephant Beach – Snorkeling & Water Sports.</p>
            <p><strong>Day 4:</strong> Neil Island – Natural Bridge & Laxmanpur Beach.</p>
            <p><strong>Day 5:</strong> Return to Port Blair – Shopping & Local Cuisine.</p>
            <p><strong>Day 6:</strong> Departure – Drop at Airport.</p>
            <p><strong>Includes:</strong> Hotel stay, Breakfast & Dinner, Pick-up/Drop, Ferry transfers.</p>
            <p><strong>What to Carry:</strong> Sunscreen, beachwear, power bank, and ID proof.</p>
          </div>
          <Button onClick={() => setPage("checkout")} className="mt-6 bg-amber-500 hover:bg-amber-600 text-white">
            Proceed to Checkout
          </Button>
        </div>
      )}

      {page === "checkout" && (
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">Checkout</h2>
          <Tabs defaultValue="upi">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="upi">UPI</TabsTrigger>
              <TabsTrigger value="card">Cards</TabsTrigger>
              <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
              <TabsTrigger value="cash">Cash on Visit</TabsTrigger>
            </TabsList>

            <TabsContent value="upi">
              <Card><CardContent className="p-4"><Input placeholder="Enter UPI ID (e.g., name@upi)" /></CardContent></Card>
            </TabsContent>

            <TabsContent value="card">
              <Card><CardContent className="p-4 space-y-2">
                <Input placeholder="Card Number" />
                <Input placeholder="Expiry Date (MM/YY)" />
                <Input placeholder="CVV" />
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="netbanking">
              <Card><CardContent className="p-4">
                <p>Select your bank:</p>
                <select className="w-full border rounded p-2 mt-2">
                  <option>SBI</option>
                  <option>HDFC</option>
                  <option>ICICI</option>
                  <option>Axis</option>
                </select>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="cash">
              <Card><CardContent className="p-4">
                <p>Pay cash directly to our representative during pickup.</p>
              </CardContent></Card>
            </TabsContent>
          </Tabs>

          <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white text-xl">
            Pay
          </Button>
        </div>
      )}
    </div>
  );
}
