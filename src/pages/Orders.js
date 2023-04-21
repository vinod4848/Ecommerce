/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/auth/authSlice";
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
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const orderlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const orderState = useSelector((state) => state.auth.orders);
  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i,
      name: orderState[i].orderby.firstName,
      product: orderState[i].products.map((i, j) => {
        return (
          <p key={j}>{i.product.title}</p>
        )
      }),
      amount: orderState[i].paymentintent.amount,
      date: new Date(orderState[i].createdAt).toLocaleString(),
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
      <h3 className="mb-4 title">Orders</h3>
      <div>
        <Table style={{ width: "100%" }} columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default orderlist;
