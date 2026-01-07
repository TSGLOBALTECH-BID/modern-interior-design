'use client';
import { EnquiryForm } from "@/components/enquiry-form";
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
// Dynamically import the Map components with SSR disabled
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => {
    const { MapContainer } = mod;
    return function DynamicMapContainer(props: any) {
      return <MapContainer {...props} />;
    };
  }),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100" />
  }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

// Create a custom marker icon
const createIcon = () => {
  if (typeof window !== 'undefined') {
    const L = require('leaflet');
    return L.icon({
      iconUrl: '/images/marker-icon.png',
      shadowUrl: '/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  }
  return null;
};

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [MapReady, setMapReady] = useState(false);
  const [icon, setIcon] = useState<any>(null);
  useEffect(() => {
    setIsMounted(true);
    setIcon(createIcon());
  }, []);

  useEffect(() => {
    // Only run on client side
    setIsMounted(true);
    setMapReady(true);
  }, []);

  if (!isMounted || !icon) {
    return (
      <div className="min-h-screen bg-white">
        {/* Add a loading state or skeleton here */}
        <div className="h-[400px] bg-gray-100 flex items-center justify-center">
          Loading map...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-300 mb-8">
              We'd love to hear from you. Reach out to us for any questions or to schedule a consultation for your next interior design project.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#contact-form"
                className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Send a Message
              </a>
              <a
                href="#map"
                className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Locate on Map
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <div className="py-16 bg-gray-50" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border h-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                <p className="text-gray-600">Have questions or want to discuss your project? Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              
              <div className="px-16">
                <EnquiryForm showMessage={true} />
              </div>
            </div>

            {/* Contact Information */}
            <div className="h-full flex flex-col">
              <div className="bg-white p-8 rounded-xl shadow-sm border h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  <h2 className="text-2xl font-bold">Our Office</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">Visit Us</h3>
                        <p className="text-gray-600">123 Design Street, New Delhi, India 110001</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">Email Us</h3>
                        <a href="mailto:info@whiteoakinterior.com" className="text-primary hover:underline">info@whiteoakinterior.com</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">Call Us</h3>
                        <a href="tel:+91783XXX3462" className="text-primary hover:underline">+91 783 XXX 3462</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours Section */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div className="w-full">
                      <h3 className="font-medium text-gray-900 mb-3">Working Hours</h3>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        {[
                          'Monday: 9:00 AM - 6:00 PM',
                          'Tuesday: 9:00 AM - 6:00 PM',
                          'Wednesday: 9:00 AM - 6:00 PM',
                          'Thursday: 9:00 AM - 6:00 PM',
                          'Friday: 9:00 AM - 6:00 PM',
                          'Saturday: 10:00 AM - 4:00 PM',
                          'Sunday: Closed'
                        ].map((time, index) => (
                          <div key={index} className="flex justify-between items-center py-1 px-2 hover:bg-gray-100 rounded">
                            <span className="text-gray-700 font-medium">{time.split(':')[0]}:</span>
                            <span className="text-gray-600">{time.split(':').slice(1).join(':').trim()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16" id="map">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Location</h2>
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ height: '500px' }}>
            {isMounted && MapReady && (
              <MapContainer
                center={[28.6139, 77.2090]}
                zoom={15}
                style={{ height: '100%', width: '100%' }}
                zoomControl={true}
                className="z-10"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={[28.6139, 77.2090]}
                  icon={icon}
                >
                  <Popup>
                    <div className="text-sm font-medium">White Oak Interior Design</div>
                    <div className="text-xs text-gray-600">123 Design Street, New Delhi</div>
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
