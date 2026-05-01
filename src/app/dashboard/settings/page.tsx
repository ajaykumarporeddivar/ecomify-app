'use client';

import { useState } from 'react';
import { DEMO_USER } from '@/lib/data';
import { Card, Button, Input, Badge } from '@/components/ui';
import { AppHeader } from '@/components/layout';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(DEMO_USER.name);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [role, setRole] = useState(DEMO_USER.role);
  const [saved, setSaved] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <div className="flex-1 overflow-y-auto">
        <ul className="flex space-x-4 mb-4">
          <li>
            <button
              className={cn(
                activeTab === 'profile' ? 'bg-zinc-900 text-white' : 'text-zinc-600',
                'px-4 py-2 rounded-lg'
              )}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              className={cn(
                activeTab === 'notifications' ? 'bg-zinc-900 text-white' : 'text-zinc-600',
                'px-4 py-2 rounded-lg'
              )}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </button>
          </li>
          <li>
            <button
              className={cn(
                activeTab === 'appearance' ? 'bg-zinc-900 text-white' : 'text-zinc-600',
                'px-4 py-2 rounded-lg'
              )}
              onClick={() => setActiveTab('appearance')}
            >
              Appearance
            </button>
          </li>
        </ul>
        {activeTab === 'profile' && (
          <Card className="mb-4">
            <h2 className="font-bold text-zinc-900 tracking-tight mb-2">Profile</h2>
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4"
            />
            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Input
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mb-4"
            />
            <Button
              className="bg-zinc-900 text-white hover:bg-zinc-700 px-4 py-2 rounded-lg"
              onClick={handleSave}
            >
              Save
            </Button>
            {saved && <Badge className="ml-4">Saved!</Badge>}
          </Card>
        )}
        {activeTab === 'notifications' && (
          <Card className="mb-4">
            <h2 className="font-bold text-zinc-900 tracking-tight mb-2">Notifications</h2>
            <div className="flex items-center mb-4">
              <Input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="mr-2"
              />
              <span>Email notifications</span>
            </div>
            <div className="flex items-center mb-4">
              <Input
                type="checkbox"
                checked={pushNotifications}
                onChange={(e) => setPushNotifications(e.target.checked)}
                className="mr-2"
              />
              <span>Push notifications</span>
            </div>
            <div className="flex items-center mb-4">
              <Input
                type="checkbox"
                checked={weeklyDigest}
                onChange={(e) => setWeeklyDigest(e.target.checked)}
                className="mr-2"
              />
              <span>Weekly digest</span>
            </div>
          </Card>
        )}
        {activeTab === 'appearance' && (
          <Card className="mb-4">
            <h2 className="font-bold text-zinc-900 tracking-tight mb-2">Appearance</h2>
            <div className="flex space-x-4 mb-4">
              <button
                className={cn(
                  theme === 'light' ? 'bg-zinc-900 text-white' : 'text-zinc-600',
                  'px-4 py-2 rounded-lg'
                )}
                onClick={() => setTheme('light')}
              >
                Light
              </button>
              <button
                className={cn(
                  theme === 'dark' ? 'bg-zinc-900 text-white' : 'text-zinc-600',
                  'px-4 py-2 rounded-lg'
                )}
                onClick={() => setTheme('dark')}
              >
                Dark
              </button>
              <button
                className={cn(
                  theme === 'system' ? 'bg-zinc-900 text-white' : 'text-zinc-600',
                  'px-4 py-2 rounded-lg'
                )}
                onClick={() => setTheme('system')}
              >
                System
              </button>
            </div>
            <div className="flex space-x-4 mb-4">
              <button
                className={cn(
                  language === 'en' ? 'bg-zinc-900 text-white' : 'text-zinc-600',
                  'px-4 py-2 rounded-lg'
                )}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
              <button
                className={cn(
                  language === 'fr' ? 'bg-zinc-900 text-white' : 'text-zinc-600',
                  'px-4 py-2 rounded-lg'
                )}
                onClick={() => setLanguage('fr')}
              >
                French
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}