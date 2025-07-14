import { useTranslation } from "react-i18next";
import { Link, Routes, Route } from "react-router-dom";
import { AppShell, Group, Button, SegmentedControl } from "@mantine/core";
import { useDirection } from "@mantine/core";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const { t, i18n } = useTranslation();
  const { setDirection } = useDirection(); // Mantine hook for RTL/LTR

  // Handle language switch
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // switch i18next language
    setDirection(lang === "fa" ? "rtl" : "ltr"); // update Mantine direction (RTL or LTR)
    document.documentElement.setAttribute("lang", lang); // update <html lang>
    document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr"); // update <html dir>
  };

  return (
    <AppShell padding="md" header={{ height: 60 }}>
      {/* Header with centered navigation and language switcher on right */}
      <AppShell.Header>
        <Group
          justify="center"
          align="center"
          style={{ height: "100%", width: "100%" }}
        >
          {/* Navigation links centered */}
          <Group>
            <Button component={Link} to="/" variant="subtle">
              {t("home")}
            </Button>
            <Button component={Link} to="/about" variant="subtle">
              {t("about")}
            </Button>
            <Button component={Link} to="/contact" variant="subtle">
              {t("contact")}
            </Button>
          </Group>
          {/* Language switcher on right */}
          <div style={{ position: "absolute", right: 24 }}>
            <SegmentedControl
              value={i18n.language}
              onChange={handleLanguageChange}
              data={[
                { label: "English", value: "en" },
                { label: "فارسی", value: "fa" },
              ]}
            />
          </div>
        </Group>
      </AppShell.Header>

      {/* Main content area for routed pages */}
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
