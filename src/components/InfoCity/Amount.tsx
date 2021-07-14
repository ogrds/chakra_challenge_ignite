import { Text } from "@chakra-ui/react";

interface AmountProps {
  value: number;
  content: string;
}

export function Amount({ value, content }: AmountProps) {
  return (
    <div>
      <Text fontSize="3xl" fontWeight="600" mt="2" textColor="highlight.100">
        {value}
      </Text>
      <Text fontWeight="600" mt="2" textColor="light.text">
        {content}
      </Text>
    </div>
  );
}
