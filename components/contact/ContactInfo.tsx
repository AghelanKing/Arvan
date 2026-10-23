import { auth } from "@/auth";
import ContactForm from "./ContactForm";
import Information from "./Information";

async function ContactInfo() {
  const session = await auth();
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      <Information />
      <ContactForm userId={session?.user?.id} />
    </section>
  );
}

export default ContactInfo;
