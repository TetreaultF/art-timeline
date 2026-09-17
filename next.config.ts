import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/art-timeline",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;