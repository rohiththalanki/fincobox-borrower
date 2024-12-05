import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { AuthLayout } from '@/common/layouts/auth-layout';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Card, Text } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForgotPasswordMutation } from '@/services/authentication/forgot-password';
import { z } from 'zod';

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export function ForgotPassword() {
  const { mutate: forgotPasswordAction, isLoading, isError } = useForgotPasswordMutation({});

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async ({ email }: { email: string }) => {
    forgotPasswordAction({
      email
    },
      {
        onSuccess: (response) => {
          console.log('successsss', response);
        },
        onError: (error: string) => {

        }
      }
    );
  };


  return (
    <Card className='bg-white rounded-xl'>
      <div className='p-6'>
        <Form {...form} >
          <Text className='text-2xl font-medium	'>Forgot Password</Text>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      className="h-14"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <Flex> */}
            <Button
              type="submit"
              isLoading={isLoading}
              className="authSubmitButton w-full p-6 rounded-md mt-4"
            >
              Submit
            </Button>
            {/* </Flex> */}
          </form>
        </Form>
      </div>
    </Card>
  );
}

ForgotPassword.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
