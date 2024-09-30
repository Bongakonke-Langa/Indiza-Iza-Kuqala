import React, { useState } from 'react';
import Layout from './Layout.tsx'; // Changed to default import
import Input from './components/ui/Input.tsx';
import Button from './components/ui/Button.tsx'; 
import Card from './components/ui/cards.tsx'; // Changed to default import
import CardContent from './components/ui/cards.tsx'; // Changed to default import
import CardHeader from './components/ui/cards.tsx'; // Changed to default import
import CardTitle from './components/ui/cards.tsx'; // Changed to default import
import { Calendar, MapPin } from 'lucide-react';

const Home = () => {
    interface CardProps {
        className?: string;
        title: string;
        content: string;
        children?: React.ReactNode; // Add this line
    }

    const [departDate, setDepartDate] = useState('');
    const [toValue, setToValue] = useState('');

    const handleSearch = () => {
        // Implement search logic here
    };

    return (
        <Layout>
          <div className="space-y-12">
            <section className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-sky-900">Welcome to Indiza Iza Kuqala</h1>
              <p className="text-xl text-sky-700">Experience the joy of flying with South Africa's premier airline</p>
            </section>
            <Card className="w-full max-w-2xl mx-auto" title="Book Your Flight" content="Fill in the details below to search for flights.">
              <CardHeader title="Book Your Flight" content="Details about booking your flight.">
                <CardTitle>Book Your Flight</CardTitle>
              </CardHeader>
              <CardContent title="Book Your Flight" content="Fill in the details below to search for flights.">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="from" className="text-sm font-medium">From</label>
                      <div className="relative">
                        <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <Input 
                          id="from" 
                          placeholder="Departure City" 
                          value="" // Add a value here
                          onChange={(e) => {}} // Add an onChange handler here
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="to" className="text-sm font-medium">To</label>
                      <div className="relative">
                        <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <Input id="to" placeholder="Arrival City" value={toValue} onChange={(e) => setToValue(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="depart" className="text-sm font-medium">Depart</label>
                      <div className="relative">
                        <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <Input id="depart" type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="return" className="text-sm font-medium">Return</label>
                      <div className="relative">
                        <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <Input id="return" type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <Button label="Search Flights" onClick={handleSearch} /> {/* Removed children prop */}
                </form>
              </CardContent>
            </Card>
          </div>
        </Layout>
      );
};

export default Home;
