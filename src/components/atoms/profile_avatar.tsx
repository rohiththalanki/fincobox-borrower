import { useLogout } from '@/hooks/useLogout';
import { useProfile } from '@/hooks/useProfile';
import { Avatar } from '@mantine/core';
import { Menu, rem } from '@mantine/core';
import {
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';

export default function ProfileAvatar() {
  const { data } = useProfile();
  const logout = useLogout();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar name={data?.first_name || 'user'} color="initials" className='cursor-pointer' />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          View Profile
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
          onClick={logout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}