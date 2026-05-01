'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/components/ui';
import {
  STATS,
  MOCK_PRODUCTS,
  RECENT_ACTIVITY,
  DEMO,
  CHART_DATA,
  SPARKLINE_DATA,
  formatDate,
  formatCurrency,
} from '@/lib/data';
import StatCard from '@/components/StatCard';
import Card from '@/components/ui/Card';
import CardHeader from '@/components/CardHeader';
import CardTitle from '@/components/ui/CardTitle';
import CardContent from '@/components/ui/CardContent';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/ui/Avatar';
import Table from '@/components/ui/Table';
import Button from '@/components/ui/Button';
import BarChart from '@/components/charts/BarChart';
import Sparkline from '@/components/charts/Sparkline';
import AppHeader from '@/components/layout/AppHeader';

export default function DashboardPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => setToastMsg(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleToastClick = () => {
    setToastMsg('Action performed successfully!');
  };

  return (
    <>
      <AppHeader
        title="Dashboard"
        subtitle={`Good morning, ${DEMO_USER.name}`}
        actions={
          <Button size="sm" onClick={handleToastClick}>
            + New Product
          </Button>
        }
      />

      <div className="grid grid-cols-4 gap-4 mb-6">
        {STATS.map((stat, index) => (
          <StatCard key={index} title={stat.title}>
            <Sparkline data={SPARKLINE_DATA} />
            <div className="text-2xl font-bold">{formatCurrency(stat.value)}</div>
          </StatCard>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>[Domain] Overview</CardTitle>
            <div className="text-zinc-400">Last 12 weeks</div>
          </CardHeader>
          <CardContent>
            <BarChart data={CHART_DATA.weekly} labels={CHART_DATA.labels} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              {RECENT_ACTIVITY.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0">
                  <Avatar src={activity.avatar} />
                  <div className="text-zinc-600">{activity.action}</div>
                  <div className="text-zinc-400">{formatDate(activity.createdAt)}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>All Products</CardTitle>
          <div className="flex items-center gap-2">
            <input type="search" placeholder="Search products" className="w-full py-2 pl-10 border border-zinc-200 rounded-md" />
            <Button size="sm">Export</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table
            columns={[
              'Name',
              'Description',
              'Price',
              'Status',
              'Actions',
            ]}
            rows={MOCK_PRODUCTS.map((product) => ({
              name: product.name,
              description: product.description,
              price: formatCurrency(product.price),
              status: (
                <Badge variant={product.status === 'active' ? 'success' : 'error'}>
                  {product.status}
                </Badge>
              ),
              actions: (
                <Button size="sm" onClick={() => handleRowClick(product)}>
                  View
                </Button>
              ),
            }))}
          />
        </CardContent>
        <div className="p-4 border-t border-zinc-50">
          Showing 1-10 of 20 results
        </div>
      </Card>

      <div className="flex gap-4 mb-6">
        <Button size="sm" onClick={handleToastClick}>
          New Contract
        </Button>
        <Button size="sm" onClick={handleToastClick}>
          Send Invoice
        </Button>
        <Button size="sm" onClick={handleToastClick}>
          Run Report
        </Button>
      </div>

      {toastMsg && (
        <div className="fixed bottom-4 right-4 bg-zinc-900 text-white p-4 rounded-lg text-sm">
          {toastMsg}
        </div>
      )}
    </>
  );
}