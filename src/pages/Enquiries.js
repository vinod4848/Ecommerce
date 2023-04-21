import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllenqs } from "../features/enquiries/enquiriesSilce";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md"

const columns = [
  {
    title: "SN",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "phone",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const Brandlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllenqs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const enquirieState = useSelector((state) => state.enquirie.enquiries);
  console.log(enquirieState);
  const data1 = [];
  for (let i = 0; i < enquirieState.length; i++) {
    data1.push({
      key: i,
      name: enquirieState[i].name,
      email: enquirieState[i].email,
      phone: enquirieState[i].phone,
      date: new Date(enquirieState[i].createdAt).toLocaleString(),
      status: (
        <>
          <select className="form-control form-select" id="">
            <option value="">Set Status</option>
          </select>
        </>
      ),
      action: (
        <>
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
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Brandlist;
