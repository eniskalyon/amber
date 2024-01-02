import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


export interface EmailContentProps {
  
  fields: {
    senderName: string;
    telephone: string;
    accidentDate: string;
    personalInjury: boolean;
    creditHire: boolean;
    senderEmail: string;
  };
}

export function EmailContent(props: EmailContentProps) {
  const { fields } = props;

  return (
    <Html lang="en">
      <Head />
      <Preview>New Accident Report Received via Website</Preview>
    <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
               New Accident Report
              </Heading>
              <Text>Name: {fields.senderName}</Text>
              <Hr />
              <Text>Telephone: {fields.telephone}</Text>
              <Hr />
              <Text>Accident Date: {fields.accidentDate}</Text>
              <Hr />
              <Text>Personal Injury: {fields.personalInjury}</Text>
              <Hr />
              <Text>Credit Hire: {fields.creditHire}</Text>
              <Hr />
              <Text>Email: {fields.senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
