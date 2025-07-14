import {
  Title,
  Text,
  Card,
  Center,
  Stack,
  Button,
  Image,
  Group,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  return (
    <Center style={{ minHeight: "100vh", flexDirection: "column" }}>
      <Card
        shadow="md"
        padding="xl"
        radius="md"
        withBorder
        style={{
          minWidth: 350,
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Stack align="center" gap="md">
          <Image
            src="/vite.svg"
            alt="Logo"
            width={80}
            height={80}
            radius="md"
            mb={8}
          />
          <Title order={2} color="blue.7">
            {t("welcome")}
          </Title>
          <Text size="lg" c="dimmed">
            {t("homeText")}
          </Text>
          <Text mt="md">
            {t("exploreMore") ||
              "Explore our features, learn more about us, and enjoy your stay!"}
          </Text>
          <Group mt="md" justify="center">
            <Button component={Link} to="/about" color="blue" variant="light">
              {t("about")}
            </Button>
          </Group>
        </Stack>
      </Card>
      <Card
        shadow="sm"
        padding="xl"
        radius="md"
        withBorder
        style={{
          minWidth: 350,
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
          marginBottom: 32,
        }}
      >
        <Title order={3} mb="md">
          {t("contact") || "Contact"}
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

export default Home;
