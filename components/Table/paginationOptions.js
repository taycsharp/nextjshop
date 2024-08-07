import { useTranslation } from "react-i18next";

const usePaginationOptions = () => {
  const { t } = useTranslation();

  return {
    rangeSeparatorText: t("of"),
    rowsPerPageText: t("rows per page"),
    noRowsPerPageText: t("no rows"),
    selectAllRowsItemText: t("All"),
  };
};

export default usePaginationOptions;
