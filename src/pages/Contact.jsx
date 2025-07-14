import {
  Title,
  Card,
  Center,
  Stack,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <Center style={{ minHeight: "100vh" }}>
      <Card
        shadow="sm"
        padding="xl"
        radius="md"
        withBorder
        style={{
          minWidth: 350,
          maxWidth: 480,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Title order={2} mb="md">
          {t("contact")}
        </Title>
        <form>
          <Stack gap="sm">
            <TextInput
              label={t("yourName") || "Your Name"}
              placeholder={t("namePlaceholder") || "Enter your name"}
              required
            />
            <TextInput
              label={t("yourEmail") || "Your Email"}
              placeholder={t("emailPlaceholder") || "Enter your email"}
              required
            />
            <Textarea
              label={t("yourMessage") || "Your Message"}
              placeholder={t("messagePlaceholder") || "Type your message"}
              minRows={3}
              required
            />
            <Button type="submit" color="blue" fullWidth disabled>
              {t("send") || "Send"}
            </Button>
          </Stack>
        </form>
      </Card>
    </Center>
  );
}

export default Contact;
