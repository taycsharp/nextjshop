import classes from "./table.module.css";
import { useEffect, useState } from "react";
import { Search } from "@styled-icons/bootstrap";
import { useTranslation } from "react-i18next";

const FilterComponent = ({ filterText, onFilter, onClear, placeholder }) => {
  const { t } = useTranslation();
  const [data, setData] = useState("");

  function search() {
    onFilter(data);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onFilter(data);
    }
  }

  useEffect(() => {
    if (data.length === 0) {
      onClear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="d-flex">
      <input
        id="search"
        type="text"
        placeholder={t(`Filter By ${placeholder ? placeholder : "Name"}`)}
        aria-label="Search Input"
        className={classes.search_bar}
        value={data}
        onChange={(e) => setData(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {filterText && filterText.length > 0 ? (
        <button
          type="button"
          className={classes.search_bar_button}
          onClick={() => {
            setData("");
            onClear();
          }}
        >
          X
        </button>
      ) : (
        <button
          type="button"
          className={classes.search_bar_button}
          onClick={search}
        >
          <Search width={15} height={15} />
        </button>
      )}
    </div>
  );
};

export default FilterComponent;
