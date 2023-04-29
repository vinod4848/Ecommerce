import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import { createCoupon, resetState } from "../features/coupon/couponSlice";

let userSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  expiry: Yup.string().required("Expiry is Required"),
  discount: Yup.number().required("Discount is Required"),
});

const AddCoupon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newCoupon = useSelector((state) => state.coupon);
  const { isSuccess, isError, isLoding, createcoupon } = newCoupon;

  useEffect(() => {
    if (isSuccess && createcoupon) {
      toast.success("Coupon Added Successfully!");
    }
    if (isError) {
      toast.error("Somthing want wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, isLoding]);

  const formik = useFormik({
    initialValues: {
      name: "",
      expiry: "",
      discount: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      dispatch(createCoupon(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
        navigate("/admin/coupon-list");
      }, 3000);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Coupon</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            name="name"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            val={formik.values.name}
            label="Enter Coupon name"
            id="name"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <CustomInput
            type="date"
            name="expiry"
            onChange={formik.handleChange("expiry")}
            onBlur={formik.handleBlur("expiry")}
            val={formik.values.expiry}
            label="Enter Expiry Date"
            id="date"
          />
          <div className="error">
            {formik.touched.expiry && formik.errors.expiry}
          </div>
          <CustomInput
            type="number"
            name="discount"
            onChange={formik.handleChange("discount")}
            onBlur={formik.handleBlur("discount")}
            val={formik.values.discount}
            label="Enter Discount"
            id="discount"
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>
          <button
            className="btn btn-success border-0 rounde-3 my-5"
            type="submit"
          >
            Add Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
