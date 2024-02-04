import 'dotenv/config';
import axios from "axios";

export async function blobGenerator(codeSnippet){
    let formData = new FormData();

    const buff = Buffer.from(codeSnippet, 'utf-8');
    console.log(buff);
    const blob = new Blob([buff], {type:'text/html'});
    console.log(blob);
    formData.append('file', blob,'file.txt');

    return formData;


}

export const uploadJSONtoIPFS = async (json) => {
  const resFile = await axios({
    method: "post",
    url: `https://dnoqehdhuatmityctgalhyaivm0dxrkr.lambda-url.us-east-2.on.aws/`,
    data: json,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let ipfsHash = `ipfs://${resFile.data.ipfs_hash}`;
  return ipfsHash;
};