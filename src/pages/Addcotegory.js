import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import { createcategory } from "../features/productCategory/productCategorySilce";

let userSchema = Yup.object().shape({
  title: Yup.string().required("Category is Required"),
});
const AddCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newCategory = useSelector((state) => state.productCategory);
  console.log(newCategory);
  const { isSuccess, isError, isLoding, createCategory } = newCategory;

  useEffect(() => {
    if (isSuccess && createCategory) {
      toast.success("Product Category Added Successfully!");
    }
    if (isError) {
      toast.error("Somthing want wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isLoding, isError]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      dispatch(createcategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/list-category");
      }, 3000);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Category</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Category Title"
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
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
