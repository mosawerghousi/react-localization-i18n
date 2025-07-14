import {
  Title,
  Text,
  Card,
  Center,
  Stack,
  Avatar,
  Group,
  Divider,
} from "@mantine/core";
import { TextInput, Textarea, Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

function About() {
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
          maxWidth: 480,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Stack align="center" gap="md">
          <Title order={2} color="blue.7">
            {t("about")}
          </Title>
          <Text size="lg" c="dimmed">
            {t("aboutText")}
          </Text>
          <Divider
            my="sm"
            label={t("ourTeam") || "Our Team"}
            labelPosition="center"
          />
          <Group justify="center" gap="lg">
            <Stack align="center" gap={2}>
              <Avatar color="blue" radius="xl">
                A
              </Avatar>
              <Text size="sm">Ali</Text>
            </Stack>
            <Stack align="center" gap={2}>
              <Avatar color="teal" radius="xl">
                S
              </Avatar>
              <Text size="sm">Sara</Text>
            </Stack>
            <Stack align="center" gap={2}>
              <Avatar color="grape" radius="xl">
                M
              </Avatar>
              <Text size="sm">Mehdi</Text>
            </Stack>
          </Group>
          <Text mt="md" size="sm" c="dimmed">
            {t("aboutMore") ||
              "We are passionate about building beautiful, multilingual web experiences with Mantine and React."}
          </Text>
        </Stack>
      </Card>
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

export default About;
