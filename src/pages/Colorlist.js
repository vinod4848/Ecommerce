/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColors } from "../features/color/colorSlice";
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
const colorList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getColors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const colorState = useSelector((state) => state.color.colors);
  console.log(colorState);
  const data1 = [];
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i,
      title: colorState[i].title,
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
      <h3 className="mb-4 title">Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default colorList;
