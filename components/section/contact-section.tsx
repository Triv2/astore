import { ContactForm } from "../contact-form";

interface ContactSectionProps {}

const ContactSection = () => {
  return (
      <div className="flex flex-col items-center justify-center w-auto h-screen gap-5 ">
        <h3 className="text-3xl font-bold p-10 rounded-md shadow-lg drop-shadow-lg dark:bg-gradient-to-b from-slate-700 via-slate-900 to-slate-700">Contact Us!</h3>
        <p className="p-10 rounded-md shadow-lg dark:bg-gradient-to-b from-slate-700 via-slate-900 to-slate-700">Ask us anything and we mean ANYTHING!</p>
        <ContactForm/>
      </div>
  );
}
export default ContactSection;