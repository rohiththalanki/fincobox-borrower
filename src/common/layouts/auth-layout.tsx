import type { ReactElement } from 'react';

interface Props {
  children: React.ReactNode;
}

export function AuthLayout(props: Props): ReactElement {
  const { children } = props;

  return (
    <div className="flex h-screen w-screen flex-col justify-center items-center">
      <div className="pt-8">
        Auth Layout
      </div>

      <div className="flex-grow flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
}
