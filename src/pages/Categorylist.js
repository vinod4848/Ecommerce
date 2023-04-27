/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../features/productCategory/productCategorySilce";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md"
import { MdOutlineDelete } from "react-icons/md"

const columns = [
  {
    title: "SN",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "title",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const productCategoryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const productCategoryState = useSelector((state) => state.productCategory.prodcategories);
  const data1 = [];
  for (let i = 0; i < productCategoryState.length; i++) {
    data1.push({
      key: i,
      title: productCategoryState[i].title,
      action: (
        <>
          <Link to="/" className="fs-3 text-danger">
            <MdModeEditOutline />
          </Link>
          <Link to="/" className="ms-2 fs-3 text-danger">
            <MdOutlineDelete />
          </Link>
        </>

      )

    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Product Categorys</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default productCategoryList;
