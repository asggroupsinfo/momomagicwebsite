import dynamic from 'next/dynamic';
import { Loading } from '@/components/ui/Loading';

export const lazyLoadComponent = (
  importFunc: () => Promise<any>,
  options?: {
    loading?: React.ComponentType;
    ssr?: boolean;
  }
) => {
  return dynamic(importFunc, {
    loading: options?.loading || (() => <Loading size="md" text="Loading..." />),
    ssr: options?.ssr ?? true,
  });
};

export const lazyLoadWithoutSSR = (importFunc: () => Promise<any>) => {
  return dynamic(importFunc, {
    ssr: false,
    loading: () => <Loading size="md" text="Loading..." />,
  });
};
