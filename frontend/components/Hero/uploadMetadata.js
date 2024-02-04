import axios from "axios";
import 'dotenv/config';

export  const uploadIPFSFormData = async (formData) => {
    
    const resFile = await axios({
      method: "POST",
      url: `${process.env.AWS_IPFS_LAMBDA_ENDPOINT}`,
      data:
        formData,
      headers: {
        "Content-Type": "multipart/form-data",

      }
    });
    return `https://gateway.pinata.cloud/ipfs/${resFile.data.ipfs_hash}`;
  };