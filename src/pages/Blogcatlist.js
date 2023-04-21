import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getblogCat } from "../features/blogCat/blogCatSlice";

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
    dispatch(getblogCat());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const blogCatState = useSelector((state) => state.blogCat.blogCats);
  const data1 = [];
  for (let i = 0; i < blogCatState.length; i++) {
    data1.push({
      key: i,
      title: blogCatState[i].title,
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
      <h3 className="mb-4 title">Blog Category List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Brandlist;
