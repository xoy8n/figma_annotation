import * as React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  // 버튼 크기 매핑
  const sizeMap = {
    sm: 'sm',
    md: 'default',
    lg: 'lg',
    icon: 'icon'
  };
  
  // 버튼 변형 매핑
  const variantMap = {
    primary: 'default',
    secondary: 'secondary',
    destructive: 'destructive',
    outline: 'outline',
    ghost: 'ghost',
    link: 'link'
  };

  // 너비 클래스
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <ShadcnButton
      variant={variantMap[variant] as any}
      size={sizeMap[size] as any}
      className={cn(widthClass, className)}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}; 