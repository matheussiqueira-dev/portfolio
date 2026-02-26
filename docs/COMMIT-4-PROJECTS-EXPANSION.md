# COMMIT 4: Projects Data Model Expansion

**Objective**: Expand project data structure with architecture, challenges, and metrics; add 2 more sample projects (total 5→6)

**Status**: ✅ Phase complete

## Changes Made

### Enhanced Type Definitions
- `data/projects-card.types.ts` — Extended ProjectCard interface
  - New: `ProjectArchitecture` (system design + components)
  - New: `ProjectChallenge` (bilingual problem-solving)
  - New: `ProjectMetrics` (performance, usage, custom metrics)
  - New: `ProjectCard.status` (active | completed | archived)
  - New: `ProjectCard.duration` (start/end dates YYYY-MM)
  - Fixed: Type safety in `projectToCard()` mapper (no more `any`)

### Expanded Sample Projects
- `data/projects-card.ts` — Added 3 new projects (3 → 6 total)

### New Projects Added

#### 1. **SQL + Python Analytics Pipeline** (Project 4)
```
slug: sql-python-analytics-pipeline
stack: Python, PostgreSQL, Pandas, Airflow, Metabase, Docker
role: Data Engineer & Python Developer
featured: false
status: active
metrics: 45ms avg query time, 99.7% uptime, 10M+ daily records
architecture: 4-layer system (extraction → transformation → storage → visualization)
challenges: Real-time sync without load spikes, consistency across sources
```

Key Features:
- 10M+ records processed daily
- <5 minute data latency
- Automatic error recovery
- Schema validation & data quality checks

#### 2. **Data Analysis Dashboard** (Project 5)
```
slug: data-analyst-dashboard
stack: React, TypeScript, Recharts, Node.js, PostgreSQL
role: Full Stack Data Analyst
featured: false
status: active
metrics: FCP 1.2s, 45 users, 99.9% uptime, 120+ daily reports
architecture: React frontend → Node.js API → pre-calculated views
challenges: Performance with historical data, cache consistency
```

Key Features:
- 50+ different metrics
- Nested filtering for granular analysis
- Automatic report export (PDF)
- Responsive design for all devices

#### 3. **Touchless Gesture Web Interface** (Project 6)
```
slug: touchless-gesture-web-interface
stack: React, TypeScript, MediaPipe, WebGL, Canvas API
role: Full Stack Developer
featured: true
status: completed (Mar-Jun 2024)
metrics: 85ms detection latency, 98.5% accuracy, <40% CPU
architecture: MediaPipe detection → Web Workers → DOM action dispatcher
challenges: Reduce detection latency, enable no-code gesture customization
```

Key Features:
- 21-point hand detection
- Custom gesture mapping
- <100ms response latency
- Browser-only (no server needed)
- Real-world use: medical, industrial, public spaces

## Data Model Evolution

### Before (v1)
```typescript
interface ProjectCard {
  slug: string
  title: { pt, en }
  tagline: { pt, en }
  description: { pt, en }
  thumbnail: { pt, en }
  stack: string[]
  role: string
  links: { repo?, live?, demo?, caseStudy? }
  featured?: boolean
  order?: number
}
```

### After (v2 - Current)
```typescript
interface ProjectCard {
  // ... previous fields ...
  
  // NEW: Architecture Details
  architecture?: {
    pt: string         // How system is built
    en: string
    diagram?: string   // Optional architecture diagram
    components?: string[] // High-level components
  }
  
  // NEW: Challenges Solved
  challenges?: {
    pt: string
    en: string
  }[]
  
  // NEW: Performance Metrics
  metrics?: {
    performance?: string  // e.g. "45ms avg"
    users?: string        // e.g. "1.2K users"
    uptime?: string       // e.g. "99.9%"
    responseTime?: string // e.g. "<200ms"
    custom?: Record<string, string>
  }
  
  // NEW: Project Status
  status?: 'active' | 'completed' | 'archived'
  
  // NEW: Timeline
  duration?: {
    start: string  // YYYY-MM
    end: string    // YYYY-MM or "ongoing"
  }
}
```

## Usage Examples

### Accessing Architecture Details
```typescript
const project = projectsCardPt[3]; // SQL + Python Analytics

if (project.architecture) {
  console.log(project.architecture.pt);     // Description in Portuguese
  console.log(project.architecture.components); // ["Data Extraction", ...]
  // Render <img src={project.architecture.diagram} /> if exists
}
```

### Displaying Metrics
```typescript
const dashboard = projectsCardPt[4]; // Data Analysis Dashboard

if (dashboard.metrics) {
  return (
    <div>
      <p>Performance: {dashboard.metrics.performance}</p>
      <p>Users: {dashboard.metrics.users}</p>
      <p>Uptime: {dashboard.metrics.uptime}</p>
      {dashboard.metrics.custom && (
        <dl>
          {Object.entries(dashboard.metrics.custom).map(([key, value]) => (
            <div key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
```

### Showing Project Timeline
```typescript
const project = projectsCardPt[5]; // Touchless Gesture

if (project.duration) {
  const totalMonths = calculateMonths(project.duration.start, project.duration.end);
  return (
    <time>
      {project.duration.start} →{' '}
      {project.duration.end === 'ongoing' ? 'Em andamento' : project.duration.end}
      ({totalMonths} months)
    </time>
  );
}
```

### Project Status Badge
```typescript
const statusColors = {
  active: 'bg-green-500',
  completed: 'bg-blue-500',
  archived: 'bg-gray-500',
};

<span className={statusColors[project.status ?? 'completed']}>
  {project.status}
</span>
```

## Type Safety Improvements

### Before
```typescript
export function projectToCard(project: any): ProjectCard { ... }
// TypeScript couldn't check property access
```

### After
```typescript
export function projectToCard(project: Record<string, unknown>): ProjectCard { ... }
// Type-safe property access with fallbacks
```

## Bilingual Completeness Checklist

✅ 6 projects, all with complete PT/EN translations
✅ All titles, taglines, descriptions, full descriptions translated
✅ All architecture descriptions bilingual (new)
✅ All challenges bilingual (new)
✅ Metrics remain language-agnostic (intentional)
✅ All links intact and valid

## Project Overview

| Order | Slug | Title (PT) | Stack | Featured | Status |
|-------|------|-----------|-------|----------|--------|
| 1 | capa-da-invisibilidade | Capa da Invisibilidade | React, Canvas, Node.js | ✅ | completed |
| 2 | hand-gesture-recognition | Reconhecimento de Gestos | TensorFlow, React, Python | ✅ | completed |
| 3 | dashboard-vendas-power-bi | Dashboard Vendas Power BI | Power BI, DAX, SQL | ✅ | active |
| 4 | sql-python-analytics-pipeline | Analytics com SQL+Python | Python, PostgreSQL, Airflow | ❌ | active |
| 5 | data-analyst-dashboard | Dashboard Análise Dados | React, Node.js, PostgreSQL | ❌ | active |
| 6 | touchless-gesture-web | Gestos sem Contato | React, MediaPipe, WebGL | ✅ | completed |

## JSON Structure Validation

All 6 projects validated:
- ✅ Required fields present (slug, id, title, description, stack)
- ✅ Bilingual content complete
- ✅ Optional fields properly typed
- ✅ No undefined values
- ✅ Links are valid URLs or relative paths
- ✅ Order values 1-6, unique

## Next Steps (Commit 5)

Polish ProjectCard component for accessibility & keyboard navigation:
- Keyboard: Tab to focus, Enter/Space to expand, Escape to close
- ARIA: aria-expanded, aria-controls, aria-labelledby
- Reduced motion support via prefers-reduced-motion
- Focus visible styles for keyboard users
- Semantic HTML (use <button> not <div>)

Files affected:
- `/system/projects/ProjectCard.tsx` (polish existing)
- `/system/projects/ProjectCard.module.css` (add focus/motion styles)
- `/system/projects/ProjectCardDetails.tsx` (semantic updates)

Commit message: `feat(projects): enhance accessibility & keyboard navigation`
