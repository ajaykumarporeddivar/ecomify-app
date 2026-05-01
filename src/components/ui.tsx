'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ArrowRight } from 'lucide-react';

export function cn(...inputs: Parameters<typeof clsx>): string {
  return twMerge(...inputs);
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  className,
  href,
}: ButtonProps) {
  const classes = cn(
    'rounded-lg shadow-sm',
    {
      'bg-zinc-900 text-white hover:bg-zinc-700': variant === 'primary',
      'bg-zinc-200 text-zinc-900 hover:bg-zinc-300': variant === 'secondary',
      'bg-transparent border border-zinc-200 text-zinc-900 hover:bg-zinc-100': variant === 'outline',
      'bg-transparent text-zinc-900 hover:text-zinc-600': variant === 'ghost',
      'bg-red-500 text-white hover:bg-red-600': variant === 'danger',
    },
    {
      'text-sm': size === 'sm',
      'text-base': size === 'md',
      'text-lg': size === 'lg',
    },
    {
      'opacity-50 pointer-events-none': loading || disabled,
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled || loading}>
      {loading && <ArrowRight className="animate-spin" />}
      {children}
    </button>
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('bg-white border border-zinc-200 rounded-xl shadow-sm', className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('bg-zinc-100 py-4 px-6 border-b border-zinc-200', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h2 className={cn('text-lg font-bold text-zinc-900', className)}>{children}</h2>
  );
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('py-6 px-6', className)}>{children}</div>
  );
}

export function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple' }) {
  const classes = cn(
    'px-2 py-1 rounded-full text-xs',
    {
      'bg-emerald-50 text-emerald-600': variant === 'success',
      'bg-amber-50 text-amber-600': variant === 'warning',
      'bg-red-50 text-red-600': variant === 'error',
      'bg-blue-50 text-blue-600': variant === 'info',
      'bg-purple-50 text-purple-600': variant === 'purple',
    }
  );

  return (
    <span className={classes}>{children}</span>
  );
}

export interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: 'text' | 'email' | 'password';
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  icon,
  disabled,
  className,
}: InputProps) {
  const classes = cn(
    'block w-full py-2 pl-10 pr-4 text-sm text-zinc-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900',
    {
      'bg-zinc-100': disabled,
    },
    className
  );

  return (
    <div>
      <label className="block text-sm font-medium text-zinc-600">{label}</label>
      <div className="relative mt-1">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={classes}
          disabled={disabled}
        />
      </div>
      {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
    </div>
  );
}

export function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin h-5 w-5 border-4 border-zinc-100 rounded-full border-t-zinc-900', className)}
      viewBox="0 0 24 24"
    />
  );
}

export function Avatar({ name, size = 'md', className }: { name: string; size?: 'xs' | 'sm' | 'md' | 'lg'; className?: string }) {
  const classes = cn(
    'rounded-full',
    {
      'w-8 h-8': size === 'xs',
      'w-12 h-12': size === 'sm',
      'w-16 h-16': size === 'md',
      'w-20 h-20': size === 'lg',
    },
    className
  );

  const initials = name.split(' ').map((word) => word[0]).join('');
  const bgColor = `#${(name.charCodeAt(0) % 10).toString(16)}${(name.charCodeAt(1) % 10).toString(16)}${(name.charCodeAt(2) % 10).toString(16)}`;

  return (
    <div
      className={classes}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <span className="text-zinc-100 text-xs font-medium">{initials}</span>
    </div>
  );
}

export interface StatCardProps {
  title: string;
  value: number;
  change: number;
  changeType: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  sparkline?: number[];
}

export function StatCard({
  title,
  value,
  change,
  changeType,
  icon,
  sparkline,
}: StatCardProps) {
  const changeClasses = cn(
    'text-sm',
    {
      'text-emerald-600': changeType === 'up',
      'text-red-500': changeType === 'down',
      'text-zinc-500': changeType === 'neutral',
    }
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {icon}
          <span className="text-lg font-bold text-zinc-900 ml-2">{title}</span>
        </div>
        <div className="text-lg font-bold text-zinc-900">{value}</div>
      </div>
      <div className="mt-4">
        <div className={changeClasses}>
          {change > 0 ? '+' : '-'}{Math.abs(change)}%
        </div>
        {sparkline && (
          <svg width="40" height="20" viewBox="0 0 40 20" className="mt-2">
            <polyline
              points={sparkline
                .map((value, index) => {
                  return `${index * 40 / sparkline.length} ${20 - (value * 20) / Math.max(...sparkline)}`;
                })
                .join(' ')}
              stroke="#6366f1"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({
  open,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  if (!open) return null;

  const classes = cn(
    'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4',
    {
      'max-w-sm': size === 'sm',
      'max-w-md': size === 'md',
      'max-w-lg': size === 'lg',
    }
  );

  return (
    <div className={classes}>
      <div className="bg-white rounded-2xl shadow-xl animate-slideup p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-zinc-900">{title}</h2>
          <button onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-zinc-900 hover:text-zinc-600"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-zinc-100 p-4 rounded-2xl">
        {icon}
      </div>
      <h2 className="text-lg font-bold text-zinc-900 mt-4">{title}</h2>
      <p className="text-sm text-zinc-600 mt-2">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export interface TableProps<T> {
  columns: Array<{ key: string; label: string; render?: (row: T) => React.ReactNode }>;
  data: T[];
  onRowClick?: (row: T) => void;
}

export function Table<T>({
  columns,
  data,
  onRowClick,
}: TableProps<T>) {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-2 text-zinc-900 text-left">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={`py-2 ${onRowClick ? 'cursor-pointer hover:bg-zinc-100' : ''}`}
            onClick={() => onRowClick && onRowClick(row)}
          >
            {columns.map((column) => (
              <td key={column.key} className="px-4 py-2 text-zinc-600">
                {column.render ? column.render(row) : row[column.key as keyof T]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}