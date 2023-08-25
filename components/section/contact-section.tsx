import { ContactForm } from "../contact-form";

interface ContactSectionProps {}

const ContactSection = () => {
  return (
      <div className="flex flex-col items-center justify-center w-auto h-screen gap-5">
        <h3 className="text-3xl font-bold">Contact Us!</h3>
        <p>Ask us anything and we mean ANYTHING!</p>
        <ContactForm/>
      </div>
  );
}
export default ContactSection;