'use client';

import { useState } from 'react';
import { Modal, Badge, Button, Avatar } from '@/components/ui';

export function EntityDetailModal({ item, open, onClose, title }: { item: Record<string, unknown> | null; open: boolean; onClose: () => void; title: string }) {
  if (!item) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-4">
        <h2 className={cn('text-lg', 'font-bold', 'text-zinc-900', 'tracking-tight')}>{title}</h2>
        <Badge
          className={cn('bg-zinc-200', 'text-zinc-600', 'p-1', 'rounded-md', 'mb-2')}
        >
          {item.status}
        </Badge>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(item).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <span className={cn('text-zinc-600', 'block', 'mb-2')}>{key}</span>
              <span className={cn('text-zinc-900', 'block')}>{value}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <Button
            type="button"
            onClick={onClose}
            className={cn('bg-emerald-600', 'text-white', 'hover:bg-emerald-700', 'py-2', 'px-4', 'rounded-lg')}
          >
            Approve
          </Button>
          <Button
            type="button"
            onClick={onClose}
            className={cn('bg-zinc-100', 'text-zinc-600', 'hover:bg-zinc-200', 'py-2', 'px-4', 'rounded-lg')}
          >
            Archive
          </Button>
          <Button
            type="button"
            onClick={onClose}
            className={cn('bg-red-600', 'text-white', 'hover:bg-red-700', 'py-2', 'px-4', 'rounded-lg')}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export function ConfirmModal({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmLabel = 'Confirm',
  variant = 'info',
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  variant?: 'danger' | 'info';
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-4">
        <h2 className={cn('text-lg', 'font-bold', 'text-zinc-900', 'tracking-tight')}>{title}</h2>
        <p className={cn('text-zinc-600', 'block', 'mb-2')}>{message}</p>
        <div className="flex justify-between mt-4">
          <Button
            type="button"
            onClick={onClose}
            className={cn('bg-zinc-100', 'text-zinc-600', 'hover:bg-zinc-200', 'py-2', 'px-4', 'rounded-lg')}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
            className={
              variant === 'danger'
                ? cn('bg-red-600', 'text-white', 'hover:bg-red-700', 'py-2', 'px-4', 'rounded-lg')
                : cn('bg-zinc-900', 'text-white', 'hover:bg-zinc-700', 'py-2', 'px-4', 'rounded-lg')
            }
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export function CommandPalette({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: Array<{ label: string; href: string; icon?: React.ReactNode; description?: string }>;
}) {
  const [search, setSearch] = useState('');
  const filteredItems = items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className={cn('w-full', 'p-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
        />
        <ul>
          {filteredItems.map((item) => (
            <li key={item.href} className="flex items-center py-2">
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <a href={item.href} className={cn('text-zinc-900', 'block')}>
                {item.label}
              </a>
              {item.description && <span className={cn('text-zinc-600', 'block', 'ml-2')}>{item.description}</span>}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}