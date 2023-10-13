import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Button } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export function Header() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
      Utks
            <Group ml="xl" gap={0} visibleFrom="sm">
              <Button mr="xl" className={"text-white"}>Login</Button>
              <Button className={"text-white"}>Register</Button>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Button className={"text-white"}>Home</Button>
        <Button className={"text-white"}>Blog</Button>
      </AppShell.Navbar>

      <AppShell.Main><Outlet/ ></AppShell.Main>
    </AppShell>
  );
}
