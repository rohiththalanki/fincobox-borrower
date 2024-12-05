import React from 'react';
import { BorrowerLayout } from '@/common/layouts/borrower-layout';

import { useProfile } from '@/hooks/useProfile';
import { Button, Card, Container, Flex, Group, Space, Title } from '@mantine/core';

export function Overview() {
  const { data } = useProfile();

  return (
    <Container fluid style={{ maxWidth: '80%', margin: 'auto' }}>
      <Flex align={'center'} style={{ padding: '100px' }}>
        <Title order={2}>
          {`Hi, ${data?.first_name ? data?.first_name : 'User'}!`}
        </Title>
      </Flex>
      <Card
        shadow="sm"
        padding="xxl"
      >
        <Card.Section>
          <Flex justify={'space-between'} w={'100%'} p={'30px'} >
            <Flex
              direction='column'
              gap="md"
            >
              <Title order={4}>KYC Status</Title>
              <p >Please update your KYC now</p>
            </Flex>
            <Flex dir='vertical' align={'center'}>
              <Button>Start KYC</Button>
            </Flex>
          </Flex>
        </Card.Section>
      </Card>
    </Container>
  );
}

Overview.getLayout = function getLayout(page: React.ReactElement) {
  return <BorrowerLayout>{page}</BorrowerLayout>;
};
