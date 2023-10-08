import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    // from has to be a domain that you own (i.e. gmail, yahoo etc.)
    // configure the domain at https://resend.com/domains - add a dns record so resend knows you're authorized to send emails from that domain
    from: "mydomainemail@gmail.com",
    to: "someemail@gmail.com",
    subject: "some subject",
    // reqact component that represents the email template
    react: <WelcomeTemplate name="Customer Name" />,
  });

  return NextResponse.json({});
}
