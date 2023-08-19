
import { toast } from "react-toastify";
import { deleteBlog, fetchBlog, postBlog, updateBlog } from "../../helper/axios";
import { setShowModal } from "../../system/systemSlice";
import { setBlogList } from "./blogSlice";

export const getBlogAction = () => async (dispatch) => {

    const { status, blogs } = await fetchBlog();

    status === "success" && dispatch(setBlogList(blogs));
};

export const postBlogAction = (obj) => async (dispatch) => {


    const respPromise = postBlog(obj);
    toast.promise(respPromise, {
        pending: "Please wait....",
    });

    const { status, message } = await respPromise;
    toast[status](message);

    status === "success" && dispatch(getBlogAction());
}

export const deleteBlogAction = (_id) => async (dispatch) => {
    const { status, message } = await deleteBlog(_id);
    toast[status](message);

    if (status === "success") {
        dispatch(getBlogAction());
    }
};

export const updateBlogAction = (data) => async (dispatch) => {
    console.log(data, "update Action")
    const respPromise = updateBlog(data);
    toast.promise(respPromise, {
        pending: "Please wait....",
    });

    const { status, message } = await respPromise;
    console.log(status, message)
    toast[status](message);

    if (status === "success") {
        dispatch(getBlogAction());

    }
};
