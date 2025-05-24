import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const config: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
};

export default withPayload(config);
