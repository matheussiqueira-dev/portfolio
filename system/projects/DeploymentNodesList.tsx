"use client";

import { useLocale } from "next-intl";

import { deploymentNodesEn } from "@/data/deployment-nodes.en";
import { deploymentNodesPt } from "@/data/deployment-nodes.pt";
import type { DeploymentNode, ProjectDictionary } from "@/data/deployment.types";

import ProjectDeployment from "@/system/projects/ProjectDeployment.module";

import styles from "./DeploymentNodesList.module.css";

const deploymentDictionaryPt: ProjectDictionary = {
  stack: "Stack",
  architecture: "Arquitetura",
  challenges: "Desafios",
  metrics: "M\u00e9tricas",
  performance: "Performance",
  lighthouse: "Lighthouse",
  viewMore: "Ver detalhes",
  viewLess: "Fechar",
};

const deploymentDictionaryEn: ProjectDictionary = {
  stack: "Stack",
  architecture: "Architecture",
  challenges: "Challenges",
  metrics: "Metrics",
  performance: "Performance",
  lighthouse: "Lighthouse",
  viewMore: "View details",
  viewLess: "Close",
};

export default function DeploymentNodesList() {
  const locale = useLocale();
  const isPortuguese = locale === "pt-BR";

  const nodes: DeploymentNode[] = isPortuguese
    ? deploymentNodesPt
    : deploymentNodesEn;
  const dictionary = isPortuguese
    ? deploymentDictionaryPt
    : deploymentDictionaryEn;

  return (
    <section className={styles.deploymentSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {isPortuguese ? "N\u00f3s de Deployment" : "Deployment Nodes"}
        </h2>
        <p className={styles.subtitle}>
          {isPortuguese
            ? "Explore meus projetos em detalhe com arquitetura, desafios e m\u00e9tricas"
            : "Explore my projects in detail with architecture, challenges, and metrics"}
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
  );
}