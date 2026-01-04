import { EnquiryForm } from "@/components/enquiry-form";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions or want to discuss your project? Reach out to us and our team will get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:info@whiteoakinterior.com" className="text-foreground hover:underline">
                  info@whiteoakinterior.com
                </a>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <a href="tel:+91783XXX3462" className="text-foreground hover:underline">
                  +91 783 XXX 3462
                </a>
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">
                  123 Design Street<br />
                  New Delhi, 110001<br />
                  India
                </p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </main>
  );
}
