'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';

import { classes } from '@/utils/index';

const checkboxVariants = cva(
  'peer h-4 w-4 rounded border border-gray-300 bg-white ring-offset-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
);

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={classes(checkboxVariants(), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className="flex items-center justify-center text-blue-500"
    >
      <CheckIcon />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
