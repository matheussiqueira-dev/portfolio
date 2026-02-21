"use client";

import { resume } from "@/data/resume";
import { usePathname } from "next/navigation";
import { resumeEn } from "@/data/resume.en";

export default function ResumePDF() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const data = isEn ? resumeEn : resume;

  const handleDownloadPDF = () => {
    const element = document.getElementById("resume-pdf-content");
    if (!element) return;

    const opt = {
      margin: [0.4, 0.4, 0.4, 0.4] as [number, number, number, number],
      filename: `${data.name.replace(/\s+/g, "_")}_Resume.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        allowTaint: true,
      },
      jsPDF: {
        unit: "in" as const,
        format: "letter",
        orientation: "portrait" as const,
        compress: true,
      },
    };

    // Dynamic import to avoid SSR issues
    import("html2pdf.js").then((html2pdf) => {
      html2pdf.default().set(opt).from(element).save();
    });
  };

  return (
    <>
      <div
        id="resume-pdf-content"
        className="hidden"
        style={{
          width: "8.5in",
          minHeight: "11in",
          padding: "0.4in 0.5in",
          fontFamily: '"Calibri", "Arial", sans-serif',
          fontSize: "10pt",
          lineHeight: "1.3",
          color: "#000",
          backgroundColor: "#fff",
          boxSizing: "border-box",
        }}
      >
        {/* Header - Name and Title */}
        <div style={{ marginBottom: "0.2in" }}>
          <h1
            style={{
              fontSize: "20pt",
              fontWeight: "bold",
              margin: "0",
              padding: "0",
              color: "#000",
              letterSpacing: "0.5pt",
            }}
          >
            {data.name}
          </h1>
          <p
            style={{
              fontSize: "9pt",
              margin: "0.08in 0 0 0",
              padding: "0",
              color: "#444",
              fontWeight: "500",
              letterSpacing: "-0.5pt",
            }}
          >
            {isEn ? "Full Stack Developer | Data • AI • Software" : "Desenvolvedor Full Stack | Dados • IA • Software"}
          </p>
          <hr
            style={{
              border: "none",
              borderTop: "1pt solid #000",
              margin: "0.08in 0 0.08in 0",
              padding: "0",
            }}
          />
          <div
            style={{
              fontSize: "8.5pt",
              margin: "0.05in 0",
              padding: "0",
              color: "#333",
              lineHeight: "1.2",
            }}
          >
            <span>Recife, PE • Brasil | </span>
            <span>matheussiqueirahub@gmail.com | </span>
            <span>+55 (81) 99920-3683 |</span>
            <br />
            <span>linkedin.com/in/matheussiqueira-dev | github.com/matheussiqueira-dev</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div style={{ marginBottom: "0.15in" }}>
          <h2
            style={{
              fontSize: "11pt",
              fontWeight: "bold",
              margin: "0.12in 0 0.05in 0",
              color: "#000",
              borderBottom: "1.5pt solid #000",
              paddingBottom: "0.04in",
              textTransform: "uppercase",
              letterSpacing: "1pt",
            }}
          >
            {isEn ? "Professional Summary" : "Resumo Profissional"}
          </h2>
          <p style={{ fontSize: "9.5pt", margin: "0.06in 0 0 0", color: "#333", textAlign: "justify", lineHeight: "1.35" }}>
            {data.summary}
          </p>
        </div>

        {/* Core Skills */}
        <div style={{ marginBottom: "0.15in" }}>
          <h2
            style={{
              fontSize: "11pt",
              fontWeight: "bold",
              margin: "0.12in 0 0.05in 0",
              color: "#000",
              borderBottom: "1.5pt solid #000",
              paddingBottom: "0.04in",
              textTransform: "uppercase",
              letterSpacing: "1pt",
            }}
          >
            {isEn ? "Core Skills" : "Principais Competências"}
          </h2>
          <p style={{ fontSize: "9.5pt", margin: "0.06in 0 0 0", color: "#333", lineHeight: "1.35" }}>
            {data.coreSkills.join(" • ")}
          </p>
        </div>

        {/* Professional Experience */}
        <div style={{ marginBottom: "0.15in" }}>
          <h2
            style={{
              fontSize: "11pt",
              fontWeight: "bold",
              margin: "0.12in 0 0.05in 0",
              color: "#000",
              borderBottom: "1.5pt solid #000",
              paddingBottom: "0.04in",
              textTransform: "uppercase",
              letterSpacing: "1pt",
            }}
          >
            {isEn ? "Professional Experience" : "Experiência Profissional"}
          </h2>
          {data.experience.map((_item: typeof data.experience[0], idx: number) => (
            <div key={idx} style={{ marginBottom: "0.12in" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5in", marginBottom: "0.02in" }}>
                <h3
                  style={{
                    fontSize: "10pt",
                    fontWeight: "bold",
                    margin: "0",
                    padding: "0",
                    color: "#000",
                    flex: 1,
                  }}
                >
                  {_item.role}
                </h3>
                <span style={{ color: "#666", fontSize: "8.5pt", whiteSpace: "nowrap", fontWeight: "500" }}>
                  {_item.period}
                </span>
              </div>
              <div style={{ fontSize: "9.5pt", color: "#333", marginBottom: "0.04in", fontWeight: "500" }}>
                {_item.company}
                {_item.location && ` – ${_item.location}`}
              </div>
              <ul
                style={{
                  fontSize: "9.5pt",
                  color: "#333",
                  margin: "0.04in 0 0 0.2in",
                  padding: "0 0 0 0.15in",
                  listStyleType: "disc",
                  lineHeight: "1.3",
                }}
              >
                {_item.highlights.map((_highlight: string, hIdx: number) => (
                  <li key={hIdx} style={{ marginBottom: "0.02in" }}>
                    {_highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginBottom: "0.15in" }}>
          <h2
            style={{
              fontSize: "11pt",
              fontWeight: "bold",
              margin: "0.12in 0 0.05in 0",
              color: "#000",
              borderBottom: "1.5pt solid #000",
              paddingBottom: "0.04in",
              textTransform: "uppercase",
              letterSpacing: "1pt",
            }}
          >
            {isEn ? "Education" : "Formação Acadêmica"}
          </h2>
          {data.education.groups.map((_group: typeof data.education.groups[0], gIdx: number) => (
            <div key={gIdx} style={{ marginBottom: "0.1in" }}>
              <h3
                style={{
                  fontSize: "9pt",
                  fontWeight: "bold",
                  color: "#000",
                  margin: "0.04in 0 0.03in 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.5pt",
                }}
              >
                {_group.title}
              </h3>
              {_group.items.map((_item: typeof _group.items[0], iIdx: number) => (
                <div key={iIdx} style={{ fontSize: "9.5pt", color: "#333", marginBottom: "0.04in", lineHeight: "1.3" }}>
                  <div style={{ fontWeight: "600" }}>{_item.course}</div>
                  <div style={{ color: "#555" }}>
                    {_item.institution} • {_item.period}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: "0.15in" }}>
          <h2
            style={{
              fontSize: "11pt",
              fontWeight: "bold",
              margin: "0.12in 0 0.05in 0",
              color: "#000",
              borderBottom: "1.5pt solid #000",
              paddingBottom: "0.04in",
              textTransform: "uppercase",
              letterSpacing: "1pt",
            }}
          >
            {isEn ? "Certifications" : "Certificações"}
          </h2>
          <p style={{ fontSize: "9.5pt", margin: "0.06in 0 0 0", color: "#333", lineHeight: "1.35" }}>
            {data.certifications.join(" • ")}
          </p>
        </div>

        {/* Languages */}
        <div>
          <h2
            style={{
              fontSize: "11pt",
              fontWeight: "bold",
              margin: "0.12in 0 0.05in 0",
              color: "#000",
              borderBottom: "1.5pt solid #000",
              paddingBottom: "0.04in",
              textTransform: "uppercase",
              letterSpacing: "1pt",
            }}
          >
            {isEn ? "Languages" : "Idiomas"}
          </h2>
          <p style={{ fontSize: "9.5pt", margin: "0.06in 0 0 0", color: "#333", lineHeight: "1.35" }}>
            {data.languages.join(" • ")}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleDownloadPDF}
        className="btn-outline mt-4 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 print:hidden"
      >
        {isEn ? "Download Resume (PDF - ATS Format)" : "Baixar CV (PDF - Formato ATS)"}
      </button>
    </>
  );
}
