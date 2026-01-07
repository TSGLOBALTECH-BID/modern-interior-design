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
                href="tel:+91783XXX3462"
                className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info & Map Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-6">Our Office</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        123 Design Street<br />
                        New Delhi, 110001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <a
                        href="mailto:info@whiteoakinterior.com"
                        className="text-gray-600 hover:text-gray-900 hover:underline"
                      >
                        info@whiteoakinterior.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <a
                        href="tel:+91783XXX3462"
                        className="text-gray-600 hover:text-gray-900 hover:underline"
                      >
                        +91 783 XXX 3462
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="h-full w-full">
                {isMounted && MapReady && (
                  <MapContainer
                    center={[28.6139, 77.2090]}
                    zoom={15}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
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
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or want to discuss your project? Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
