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
  MOCK_USERS 
} from '@/lib/data'
import { 
  User 
} from '@/lib/types'
import { 
  ArrowRight, 
  Plus, 
  Search 
} from 'lucide-react'

const UsersPage = () => {
  const [filter, setFilter] = React.useState('')
  const [search, setSearch] = React.useState('')

  const filteredUsers = MOCK_USERS.filter((user) => 
    user.name.toLowerCase().includes(search.toLowerCase()) && 
    user.role.includes(filter)
  )

  return (
    <div className={cn('flex flex-col', 'gap-4')}>
      <Card>
        <CardHeader>
          <CardTitle>
            Users
          </CardTitle>
          <Button variant="primary">
            New User
          </Button>
        </CardHeader>
        <CardContent>
          <div className={cn('flex flex-col', 'gap-2')}>
            <Input 
              type="text" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              placeholder="Search users" 
              icon={<Search />}
            />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className={cn('py-2', 'pl-3', 'pr-10', 'text-base', 'text-zinc-600', 'bg-zinc-50', 'border', 'border-zinc-200', 'rounded-lg', 'focus:outline-none', 'focus:ring-zinc-900', 'focus:ring-1')}
            >
              <option value="">All roles</option>
              <option value="owner">Owner</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className={cn('flex flex-col', 'gap-2')}>
            {filteredUsers.map((user) => (
              <div 
                key={user.id} 
                className={cn('flex', 'items-center', 'gap-2', 'py-2', 'px-4', 'bg-white', 'border', 'border-zinc-200', 'rounded-lg', 'cursor-pointer', 'hover:bg-zinc-50')}
              >
                <Avatar src={user.avatar} />
                <div className={cn('flex flex-col')}>
                  <span className={cn('text-zinc-900', 'font-bold')}>{user.name}</span>
                  <span className={cn('text-zinc-600')}>{user.email}</span>
                </div>
                <Badge variant="gray">{user.role}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UsersPage