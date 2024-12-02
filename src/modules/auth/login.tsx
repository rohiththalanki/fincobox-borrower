import React from 'react';
import { AuthLayout } from '@/common/layouts/auth-layout';

export function Login() {
  return (
    <div>Welcome to Fincobox Borrower Dashboard</div>
  );
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
