import React from 'react';
import { useForm } from "react-hook-form";
import { AuthLayout } from '@/common/layouts/auth-layout';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link'
import { useSigninMutation } from '@/services/authentication';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'
import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export function Login() {
  const { mutate: signInuser, isLoading, isError } = useSigninMutation({});
  const { toast } = useToast();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: undefined,
      password: undefined
    },
  });

  const onSubmit = async ({ email, password }: { email: string, password: string }) => {
    signInuser({
      email, password
    },
      {
        onSuccess: (response) => {
          console.log('successsss', response);
          const token = response?.data?.results?.token;
          console.log(token);
        },
        onError: (error: string) => {
          toast({
            variant: 'destructive',
            title: 'Error!',
            description: error,
          });
        }
      }
    );
  };


  return (
    <Card className='bg-white rounded-xl'>
      <div className='p-6'>
        <Form {...form} >
          <Text className='text-2xl font-medium	'>Welcome to Fincobox</Text>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="h-14"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder="Password"
                      className="h-14"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <p className='text-right font-semibold'><Link href="forgot-password"><span className='text-blue-600'>Forgot Password ?</span></Link></p>


            <Flex>
              <Button
                type="submit"
                className="authSubmitButton w-full p-6 rounded-md mt-4"
              >
                Login
              </Button>
            </Flex>

            <p className='text-center font-semibold'>Dont have an account? <Link href="signup"><span className='text-blue-600'>Signup now</span></Link></p>
          </form>
        </Form>
      </div>
    </Card>
  );
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
