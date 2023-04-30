/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { getCoupans } from "../features/coupon/couponSlice";

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
    title: "Discount",
    dataIndex: "discount",
  },
  {
    title: "Expiry",
    dataIndex: "expiry",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const CouponList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoupans());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const couponState = useSelector((state) => state.coupon.coupons);
  const data1 = [];

  for (let i = 0; i < couponState.length; i++) {
    data1.push({
      key: i,
      name: couponState[i].name,
      discount: couponState[i].discount,
      expiry: new Date(couponState[i].expiry).toLocaleString(),
      action: (
        <>
          <Link to="/" className="fs-3 text-danger">
            <MdModeEditOutline />
          </Link>
          <Link to="/" className="ms-2 fs-3 text-danger">
            <MdOutlineDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Coupon</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default CouponList;
