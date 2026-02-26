// Example page component demonstrating Deployment Nodes System
// Use at: app/[locale]/deployment-nodes/page.tsx

import { Metadata } from "next"
import DeploymentNodesList from "@/system/projects/DeploymentNodesList"

export const metadata: Metadata = {
  title: "Deployment Nodes",
  description: "Explore my projects with detailed architecture, challenges and metrics",
}

export default function DeploymentNodesPage() {
  return (
    <main>
      <DeploymentNodesList />
    </main>
  )
}
