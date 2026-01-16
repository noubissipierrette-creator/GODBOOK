import { API_PATHS } from `./apiPaths`;
import axiosInstance from `./axiosInstance`;

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    //Append image file to form data
    formData.append('image', imageFile);

    try{
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData,{
            headers: {
                'content-Type':'multipart/form-data', // Set header for file upload
            },
        });
        return response.Data; //Return response data
    } catch (error) {
        console.errer('Eroor uploading the image', error);
        throw error; // Recthrow error for handling
    }
};

export default uploadImage;