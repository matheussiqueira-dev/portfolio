import type { Locale } from '@/encom/core/i18n/i18n.types'

interface SettingsPageProps {
  params: Promise<{ locale: Locale }>
}

export const metadata = {
  title: 'Settings - ENCOM',
  description: 'System configuration and preferences',
}

export default async function SettingsPage({ params }: SettingsPageProps) {
  const { locale } = await params

  const settingsGroups = [
    {
      title: 'Display',
      items: [
        { label: 'Theme', value: 'Auto' },
        { label: 'Font Size', value: '14px' },
        { label: 'Animations', value: 'Enabled' },
      ],
    },
    {
      title: 'System',
      items: [
        { label: 'Language', value: locale === 'pt' ? 'Português' : 'English' },
        { label: 'Timezone', value: 'UTC-3' },
        { label: 'Auto-refresh', value: 'Enabled' },
      ],
    },
    {
      title: 'Security',
      items: [
        { label: 'Session Timeout', value: '30 minutes' },
        { label: 'Two-Factor Auth', value: 'Disabled' },
        { label: 'API Keys', value: 'Manage' },
      ],
    },
  ]

  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>

      <div className="settings-content">
        {settingsGroups.map((group) => (
          <div key={group.title} className="settings-group">
            <h2 className="settings-group-title">{group.title}</h2>

            <div className="settings-list">
              {group.items.map((item) => (
                <div key={item.label} className="settings-item">
                  <div className="settings-item-label">{item.label}</div>
                  <div className="settings-item-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
