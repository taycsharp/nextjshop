import { PencilSquare, Trash, Files } from "@styled-icons/bootstrap";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useSWR from "swr";
import classes from "~/components/tableFilter/table.module.css";
import { cpf, deleteData, fetchData, updateData } from "~/lib/clientFunctions";
import usePaginationOptions from "~/components/Table/paginationOptions";

const DataTable = dynamic(() => import("react-data-table-component"));
const FilterComponent = dynamic(() => import("~/components/tableFilter"));
const GlobalModal = dynamic(() => import("~/components/Ui/Modal/modal"));
const Spinner = dynamic(() => import("~/components/Ui/Spinner"));
const ImageLoader = dynamic(() => import("~/components/Image"));
const Link = dynamic(() => import("next/link"));

const ProductList = () => {
  const url = `/api/product`;
  const { data, error, mutate } = useSWR(url, fetchData);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    if (data && data.product) {
      setProductList(data.product);
    }
  }, [data]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const { t } = useTranslation();

  const settings = useSelector((state) => state.settings);
  const currencySymbol = settings.settingsData.currency.symbol;

  const { session } = useSelector((state) => state.localSession);
  const [permissions, setPermissions] = useState({});
  useEffect(() => {
    setPermissions(cpf(session, "product"));
  }, [session]);

  const openModal = (id) => {
    setSelectedProduct(id);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteProduct = async () => {
    setIsOpen(false);
    await deleteData(`/api/product/delete/${selectedProduct}`)
      .then((data) =>
        data.success
          ? (toast.success(t("Product Deleted Successfully")), mutate())
          : toast.error(t("Something Went Wrong"))
      )
      .catch((err) => {
        console.log(err);
        toast.error(t("Something Went Wrong"));
      });
  };

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = productList.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  async function cloneDoc(id) {
    try {
      const resp = await updateData("/api/product", { id });
      resp.success
        ? (toast.success(resp.message), mutate())
        : toast.error(resp.message);
    } catch (err) {
      console.log(err.message);
    }
  }

  const columns = [
    {
      name: t("Product Id"),
      selector: (row) => row.productId,
    },
    {
      name: t("name"),
      selector: (row) => <span title={row.name}>{row.name}</span>,
      sortable: true,
    },
    {
      name: t("image"),
      selector: (row) => (
        <ImageLoader
          src={row.image[0]?.url}
          alt={row.name}
          width={80}
          height={80}
        />
      ),
    },
    {
      name: t("Product Type"),
      selector: (row) => row.type.toUpperCase(),
      sortable: true,
    },
    {
      name: t("price"),
      selector: (row) => currencySymbol + row.price,
      sortable: true,
    },
    {
      name: t("cost price"),
      selector: (row) => currencySymbol + row.costPrice,
      sortable: true,
    },
    {
      name: t("action"),
      selector: (row) => (
        <div>
          {permissions.delete && (
            <div className={classes.button} onClick={() => openModal(row._id)}>
              <Trash width={22} height={22} title={t("DELETE")} />
            </div>
          )}
          {permissions.edit && (
            <Link href={`/dashboard/product/${row.slug}`}>
              <div className={classes.button}>
                <PencilSquare width={22} height={22} title={t("EDIT")} />
              </div>
            </Link>
          )}
          {permissions.edit && (
            <div className={classes.button} onClick={() => cloneDoc(row._id)}>
              <Files width={22} height={22} title={t("CLONE")} />
            </div>
          )}
        </div>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "92px",
        fontSize: "15px",
      },
    },
    headCells: {
      style: {
        fontSize: "15px",
      },
    },
  };

  const paginationComponentOptions = usePaginationOptions();

  return (
    <>
      {error ? (
        <div className="text-center text-danger">{t("failed to load")}</div>
      ) : !data ? (
        <Spinner />
      ) : (
        <div>
          <h4 className="text-center pt-3 pb-6">{t("Products")}</h4>
          <div className={classes.container}>
            <DataTable
              columns={columns}
              data={filteredItems}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              persistTableHead
              customStyles={customStyles}
              paginationComponentOptions={paginationComponentOptions}
            />
            <GlobalModal
              isOpen={isOpen}
              handleCloseModal={closeModal}
              small={true}
            >
              <div className={classes.modal_icon}>
                <Trash width={90} height={90} />
                <p>{t("Are you sure, you want to delete?")}</p>
                <div>
                  <button
                    className={classes.danger_button}
                    onClick={() => deleteProduct()}
                  >
                    {t("Delete")}
                  </button>
                  <button
                    className={classes.success_button}
                    onClick={() => closeModal()}
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </div>
            </GlobalModal>
          </div>
        </div>
      )}
    </>
  );
};

ProductList.requireAuthAdmin = true;
ProductList.dashboard = true;

export default ProductList;
