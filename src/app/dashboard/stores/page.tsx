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
  MOCK_STORES 
} from '@/lib/data'
import { 
  Store 
} from '@/lib/types'
import { 
  ArrowRight, 
  Plus, 
  Search 
} from 'lucide-react'

const StoresPage = () => {
  return (
    <div className={cn('flex flex-col', 'gap-4')}>
      <Card>
        <CardHeader>
          <CardTitle>
            Stores
          </CardTitle>
          <Button variant="primary">
            New Store
          </Button>
        </CardHeader>
        <CardContent>
          <div className={cn('flex flex-col', 'gap-2')}>
            {MOCK_STORES.map((store) => (
              <div 
                key={store.id} 
                className={cn('flex', 'items-center', 'gap-2', 'py-2', 'px-4', 'bg-white', 'border', 'border-zinc-200', 'rounded-lg', 'cursor-pointer', 'hover:bg-zinc-50')}
              >
                <span className={cn('text-zinc-900', 'font-bold')}>{store.name}</span>
                <Badge variant="gray">{store.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default StoresPage