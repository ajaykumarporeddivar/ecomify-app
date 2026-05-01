'use client'
import { cn } from '@/components/ui'
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  Badge, 
  Button, 
  Input, 
  Modal, 
  Avatar, 
  StatCard 
} from '@/components/ui'
import { 
  DEMO_USER, 
  MOCK_PRODUCTS 
} from '@/lib/data'
import { 
  Product 
} from '@/lib/types'
import { 
  ArrowRight, 
  Plus, 
  Search 
} from 'lucide-react'

const ProductsPage = () => {
  return (
    <div className={cn('flex flex-col', 'gap-4')}>
      <Card>
        <CardHeader>
          <CardTitle>
            Products
          </CardTitle>
          <Button variant="primary">
            New Product
          </Button>
        </CardHeader>
        <CardContent>
          <div className={cn('flex flex-col', 'gap-2')}>
            {MOCK_PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                className={cn('flex', 'items-center', 'gap-2', 'py-2', 'px-4', 'bg-white', 'border', 'border-zinc-200', 'rounded-lg', 'cursor-pointer', 'hover:bg-zinc-50')}
              >
                <span className={cn('text-zinc-900', 'font-bold')}>{product.name}</span>
                <Badge variant="gray">{product.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductsPage