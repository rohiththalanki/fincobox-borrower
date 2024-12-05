import type { ReactElement } from 'react';
import LTCapLogo from '@/assets/images/lt_capPoint.svg';
import Image from 'next/image'
import { Box } from '@mantine/core';


interface Props {
  children: React.ReactNode;
}

export function AuthLayout(props: Props): ReactElement {
  const { children } = props;

  return (
    <div className='md:flex h-screen w-screen'>
      <div className='flex flex-col flex-1 px-8 md:px-20 py-8'>
        <img
          className="max-w-60"
          src="https://app.fincobox.com/image/fincobox_sgn.png"
        />
        <div className="text-2xl md:text-5xl font-bold pt-10">
          Unlock growth capital for your business now
        </div>
        <div className="md:pt-10 py-8 md:py-0 space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src={LTCapLogo}
              alt="Picture of the author"
              width={50}
            />
            <div className="text-lg flex-1">
              Get access to working capital within 24 hours by converting your
              account receivables into sales.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={LTCapLogo}
              alt="Picture of the author"
              width={50}
            />
            <div className="text-lg flex-1">
              Get up to 100% financing of your invoices with easy repayment options.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={LTCapLogo}
              alt="Picture of the author"
              width={50}
            />
            <div className="text-lg flex-1">
              Experience an end-to-end paperless process with quick disbursals of funds.
            </div>
          </div>
        </div>
      </div>
      <div>
        <Box w="592px" className='authBackground h-full'>
          <Box w="80%" className='m-auto py-20'>
            {children}
          </Box>
        </Box>
      </div>
    </div>
  );
}
