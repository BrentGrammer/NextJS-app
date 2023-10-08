import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome</Preview>
      <Tailwind>
        <Body style={body}>
          {/* Container centers the content */}
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://google.com">Google</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
const body: CSSProperties = {
  background: "#fff",
};
const heading: CSSProperties = {
  fontSize: 32,
};

export default WelcomeTemplate;
