import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Text,
} from "@react-email/components";

interface Props {
  messageFromWeb: string;
  phone: string;
  clientEmail: string;
}

export const EmailTemplate = ({
  messageFromWeb,
  clientEmail,
  phone,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Body style={{ backgroundColor: "#f3f3f3", fontFamily: "sans-serif" }}>
      <Container style={{ padding: "20px", backgroundColor: "#fff" }}>
        <Text>Hi Demakay,</Text>
        <Text>
          This message was sent from the contact form on the website. Please
          respond to the sender&apos;s email address @ {clientEmail}
        </Text>
        <Text>
          Thanks for sharing your thoughts. We appreciate your feedback!
        </Text>
        <b>Message: {messageFromWeb}</b>
        <b>Phone: {phone}</b>
      </Container>
      <Button href="https://demakayconsulting.ca" style={{ color: "#706afc" }}>
        Visit your website
      </Button>
    </Body>
  </Html>
);
