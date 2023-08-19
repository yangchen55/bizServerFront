import axios from "axios";
const rootUrl = process.env.REACT_APP_DOMAIN + "api/v1";
const blogAPI = rootUrl + "/blog";

const fetchProcessor = async ({ method, url, data, isPrivate }) => {
    try {

        // const jwtToken = token || sessionStorage.getItem("accessJWT");

        // const headers = isPrivate
        //     ? {
        //         Authorization: jwtToken,
        //     }
        //     : null;

        const res = await axios({
            method,
            url,
            data,

        });
        return res.data;

    } catch (error) {

        return {
            status: "error",
            message: error.message,
        };
    }
};

export const fetchBlog = async () => {
    const url = blogAPI;
    const obj = {
        method: "get",
        url,
        isPrivate: true,
    };
    return fetchProcessor(obj);
};

export const postBlog = async (data) => {
    const url = blogAPI;
    const obj = {
        method: "post",
        url,
        data,
        isPrivate: true,
    };
    return fetchProcessor(obj);
};


export const deleteBlog = async (_id) => {
    const url = blogAPI + "/" + _id;
    const obj = {
        method: "delete",
        url,
    };
    return fetchProcessor(obj);
};


export const updateBlog = async (data) => {
    const url = blogAPI;
    const obj = {
        method: "put",
        url,
        data,
        isPrivate: true,
    };
    return fetchProcessor(obj);
};