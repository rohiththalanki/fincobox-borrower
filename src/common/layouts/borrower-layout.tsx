import { AppShell, Autocomplete, Burger, Flex, Group } from '@mantine/core';
import { ReactElement } from 'react';
import FincoboxLogo from "@/assets/logo/fincobox_logo.png"; // Adjust path as necessary
import Image from 'next/image';
import { useSigninMutation } from '@/services/authentication';
import ProfileAvatar from '@/components/atoms/profile_avatar';


interface Props {
  children: React.ReactNode;
}

export function BorrowerLayout(props: Props): ReactElement {
  const { children } = props;

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header className='p-4'>
        <Flex align={'center'} h={'100%'} justify={'space-between'}>
          <Image
            src={FincoboxLogo}  // This is the imported StaticImageData object
            alt="Fincobox"
          />
          <ProfileAvatar />
        </Flex>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell >
  );
}