import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DataBase",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Lost Item Search Page"
        description="Upload the detials of any lost items that you want to find here"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
