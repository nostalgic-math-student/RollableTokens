/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    env: {
    AWS_IPFS_LAMBDA_ENDPOINT:'https://dnoqehdhuatmityctgalhyaivm0dxrkr.lambda-url.us-east-2.on.aws/'

    }

};

module.exports = nextConfig;
