import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
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
const Brandlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const brandState = useSelector((state) => state.brand.brands);
  console.log(brandState);
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i,
      title: brandState[i].title,
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
  console.log(data1);
  return (
    <div>
      <h3 className="mb-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Brandlist;
