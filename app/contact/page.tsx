import PageWrapper from "@/components/Container/PageWrapper";
import React from "react";
import ContactUs from "./contactUsForm";

export default function page() {
  return (
    <PageWrapper>
      <div className="">
        <header className="bg-primary text-white text-center rounded-tr-[80px]">
          <h1 className="text-4xl font-bold mt-16 py-10">Contact Us</h1>
        </header>
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="mt-4 custom-paragraph2 mx-auto">
            We are here to help you. Reach out to us via any of the following
            methods.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
            <div className="p-4 shadow-2xl rounded-lg bg-inherit hover:bg-primary transition-colors border ">
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className="custom-paragraph mt-2">+254 741 312 721</p>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-inherit hover:bg-primary transition-colors border ">
              <h3 className="text-xl font-bold">Email Us</h3>
              <p className="custom-paragraph mt-2">info@budoboyshigh.io</p>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-inherit hover:bg-primary transition-colors border ">
              <h3 className="text-xl font-bold">Visit Us</h3>
              <p className="custom-paragraph mt-2">
                Budalangi, Busia County, Western Kenya
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 px-4">
          {/* Contact Form */}
          <ContactUs />
        </section>
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8">
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
              <h3 className="text-xl font-bold">
                What are your operating hours?
              </h3>
              <p className="mt-2 custom-paragraph2">
                We operate from 8 AM to 5 PM, Monday to Friday.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">
                How can I book an appointment?
              </h3>
              <p className="mt-2 custom-paragraph2">
                You can book an appointment by calling our office.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90  mt-4">
              <h3 className="text-xl font-bold">
                Do you offer admit new students?
              </h3>
              <p className="mt-2 custom-paragraph2">
                Yes, we welcome new students to be part of our Journey.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90  mt-4">
              <h3 className="text-xl font-bold">Do you offer tenders?</h3>
              <p className="mt-2 custom-paragraph2">
                Yes, we offer open tenders and soon we will be posting them on
                our website.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
