"use client"

import { useLocale } from "next-intl"
import ProjectDeployment from "@/system/projects/ProjectDeployment.module"
import { deploymentNodesPt } from "@/data/deployment-nodes.pt"
import { deploymentNodesEn } from "@/data/deployment-nodes.en"
import { deploymentDictionaryPt } from "@/messages/deployment.pt"
import { deploymentDictionaryEn } from "@/messages/deployment.en"
import type { DeploymentNode } from "@/data/deployment.types"
import styles from "./DeploymentNodesList.module.css"

export default function DeploymentNodesList() {
  const locale = useLocale()
  const isPortuguese = locale === "pt"

  const nodes: DeploymentNode[] = isPortuguese ? deploymentNodesPt : deploymentNodesEn
  const dictionary = isPortuguese ? deploymentDictionaryPt : deploymentDictionaryEn

  return (
    <section className={styles.deploymentSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {isPortuguese ? "Nós de Deployment" : "Deployment Nodes"}
        </h2>
        <p className={styles.subtitle}>
          {isPortuguese
            ? "Explore meus projetos em detalhe com arquitetura, desafios e métricas"
            : "Explore my projects in detail with architecture, challenges and metrics"}
        </p>
      </div>

      <div className={styles.nodesList}>
        {nodes.map((node) => (
          <ProjectDeployment
            key={node.slug}
            project={node}
            locale={isPortuguese ? "pt-BR" : "en"}
            dictionary={dictionary}
          />
        ))}
      </div>
    </section>
  )
}
