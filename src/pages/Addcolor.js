import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import { createColor } from "../features/color/colorSlice";

let userSchema = Yup.object().shape({
  title: Yup.string().required("Brand is Required"),
});

const AddColor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newColor = useSelector((state) => state.color);
  const { isSuccess, isError, isLoding, createcolor } = newColor;

  useEffect(() => {
    if (isSuccess && createcolor) {
      toast.success("Color Added Successfully!");
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
      dispatch(createColor(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/list-color");
      }, 3000);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Color</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="title"
            label="Enter Color Title"
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
           Add Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddColor;
