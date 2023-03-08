import { useTranslation } from "next-i18next";

export default function Nav() {
  const { t } = useTranslation("common");

  return <nav>{t("foo")}</nav>;
}
