import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import { createbrand } from "../features/brand/brandSlice";

let userSchema = Yup.object().shape({
  title: Yup.string().required("Brand is Required"),
});

const AddBrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newbrand = useSelector((state) => state.brand);
  const { isSuccess, isError, isLoding, createBrand } = newbrand;

  useEffect(() => {
    if (isSuccess && createBrand) {
      toast.success("Brand Added Successfully!");
    }
    if (isError) {
      toast.error("Somthing want wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, isLoding]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      dispatch(createbrand(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/list-brand");
      }, 3000);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Brand</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounde-3 my-5"
            type="submit"
          >
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
