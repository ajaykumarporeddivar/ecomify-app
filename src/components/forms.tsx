'use client';

import { useState } from 'react';
import { Button, Input, Badge } from '@/components/ui';
import { User, Store, Product } from '@/lib/types';
import { cn } from '@/components/ui';

export function CreateEntityForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!description) newErrors.description = 'Description is required';
    if (!price) newErrors.price = 'Price is required';
    if (!category) newErrors.category = 'Category is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      // Here you can call a hypothetical API to create a new entity
      console.log('Entity created successfully!');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setDescription('');
    setPrice('');
    setCategory('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className={cn('flex', 'flex-col', 'items-center', 'justify-center', 'p-4', 'bg-white', 'border', 'border-zinc-200', 'rounded-xl', 'shadow-sm')}>
      <h2 className={cn('text-lg', 'font-bold', 'text-zinc-900', 'tracking-tight')}>Create Entity</h2>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        error={errors.name}
        className={cn('w-full', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        error={errors.email}
        className={cn('w-full', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
      />
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        error={errors.description}
        className={cn('w-full', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
      />
      <Input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        error={errors.price}
        className={cn('w-full', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
      />
      <Input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        error={errors.category}
        className={cn('w-full', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
      />
      <Button type="submit" className={cn('bg-zinc-900', 'text-white', 'hover:bg-zinc-700', 'mt-4', 'py-2', 'px-4', 'rounded-lg')}>
        Create Entity
      </Button>
      <Button type="button" onClick={handleReset} className={cn('bg-zinc-100', 'text-zinc-600', 'hover:bg-zinc-200', 'mt-2', 'py-2', 'px-4', 'rounded-lg')}>
        Reset
      </Button>
      {submitted && (
        <div className={cn('bg-emerald-50', 'border', 'border-emerald-200', 'p-2', 'mt-4', 'text-emerald-600', 'rounded-md')}>
          <span>
            <Badge className={cn('bg-emerald-200', 'text-emerald-600', 'p-1', 'rounded-md', 'mr-2')}>Entity created successfully!</Badge>
          </span>
        </div>
      )}
    </form>
  );
}

export type FilterState = { search: string; status: string; dateRange: string; sortBy: string; sortDir: 'asc' | 'desc' };

export function SearchAndFilter({ onChange }: { onChange: (filters: FilterState) => void }) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState('asc');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onChange({ search: e.target.value, status, dateRange, sortBy, sortDir });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    onChange({ search, status: e.target.value, dateRange, sortBy, sortDir });
  };

  const handleDateRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(e.target.value);
    onChange({ search, status, dateRange: e.target.value, sortBy, sortDir });
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    onChange({ search, status, dateRange, sortBy: e.target.value, sortDir });
  };

  const handleSortDirChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortDir(e.target.value);
    onChange({ search, status, dateRange, sortBy, sortDir: e.target.value });
  };

  const handleClearFilters = () => {
    setSearch('');
    setStatus('');
    setDateRange('');
    setSortBy('');
    setSortDir('asc');
    onChange({ search: '', status: '', dateRange: '', sortBy: '', sortDir: 'asc' });
  };

  return (
    <div className={cn('flex', 'flex-col', 'items-center', 'justify-center', 'p-4', 'bg-white', 'border', 'border-zinc-200', 'rounded-xl', 'shadow-sm')}>
      <h2 className={cn('text-lg', 'font-bold', 'text-zinc-900', 'tracking-tight')}>Search and Filter</h2>
      <div className={cn('flex', 'items-center', 'justify-center', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}>
        <input
          type="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search"
          className={cn('w-full', 'p-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
        />
        <Button
          type="button"
          onClick={handleClearFilters}
          className={cn('bg-zinc-100', 'text-zinc-600', 'hover:bg-zinc-200', 'mt-2', 'py-2', 'px-4', 'rounded-lg')}
        >
          Clear filters
        </Button>
      </div>
      <div className={cn('flex', 'flex-col', 'items-center', 'justify-center', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}>
        <label className={cn('block', 'text-zinc-600', 'mb-2')}>Status</label>
        <select
          value={status}
          onChange={handleStatusChange}
          className={cn('w-full', 'p-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className={cn('flex', 'flex-col', 'items-center', 'justify-center', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}>
        <label className={cn('block', 'text-zinc-600', 'mb-2')}>Date Range</label>
        <input
          type="date"
          value={dateRange}
          onChange={handleDateRangeChange}
          className={cn('w-full', 'p-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
        />
      </div>
      <div className={cn('flex', 'flex-col', 'items-center', 'justify-center', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}>
        <label className={cn('block', 'text-zinc-600', 'mb-2')}>Sort By</label>
        <select
          value={sortBy}
          onChange={handleSortByChange}
          className={cn('w-full', 'p-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
        >
          <option value="">Default</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
      </div>
      <div className={cn('flex', 'flex-col', 'items-center', 'justify-center', 'p-2', 'mt-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}>
        <label className={cn('block', 'text-zinc-600', 'mb-2')}>Sort Direction</label>
        <select
          value={sortDir}
          onChange={handleSortDirChange}
          className={cn('w-full', 'p-2', 'bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}

export function ExportButton({ data }: { data: any[] }) {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const csv = data.map((row) => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.csv';
    link.click();
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  return (
    <div>
      <Button type="button" onClick={handleExport} className={cn('bg-zinc-100', 'text-zinc-600', 'hover:bg-zinc-200', 'mt-2', 'py-2', 'px-4', 'rounded-lg')}>
        Export to CSV
      </Button>
      {exported && (
        <div className={cn('bg-emerald-50', 'border', 'border-emerald-200', 'p-2', 'mt-4', 'text-emerald-600', 'rounded-md')}>
          <span>
            <Badge className={cn('bg-emerald-200', 'text-emerald-600', 'p-1', 'rounded-md', 'mr-2')}>Exported!</Badge>
          </span>
        </div>
      )}
    </div>
  );
}