import { useState } from "react";
import {
  TbCertificate,
  TbCode,
  TbBrain,
  TbDeviceMobile,
  TbCpu,
  TbRobot,
  TbMedal,
  TbExternalLink,
  TbChevronDown,
  TbChevronUp,
} from "react-icons/tb";
import { SiAndroid, SiKotlin, SiGit } from "react-icons/si";

const certificates = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/53XE4R86YZRN",
    icon: TbCode,
    bgColor: "rgba(59, 130, 246, 0.2)",
    iconColor: "#60a5fa",
    linkColor: "#60a5fa",
  },
  {
    id: 2,
    title: "Dicoding Academy Certificate",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/QLZ94NKQEP5D",
    icon: TbCertificate,
    bgColor: "rgba(139, 92, 246, 0.2)",
    iconColor: "#a78bfa",
    linkColor: "#818cf8",
  },
  {
    id: 3,
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/KEXL8W5NYZG2",
    icon: TbBrain,
    bgColor: "rgba(20, 184, 166, 0.2)",
    iconColor: "#2dd4bf",
    linkColor: "#2dd4bf",
  },
  {
    id: 4,
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/2VX3O7N1NZYQ",
    icon: SiGit,
    bgColor: "rgba(249, 115, 22, 0.2)",
    iconColor: "#fb923c",
    linkColor: "#f97316",
  },
  {
    id: 5,
    title: "Memulai Pemrograman dengan Kotlin",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/JLX12Y962Z72",
    icon: SiKotlin,
    bgColor: "rgba(168, 85, 247, 0.2)",
    iconColor: "#c084fc",
    linkColor: "#c084fc",
  },
  {
    id: 6,
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/1RXY196LKPVM",
    icon: SiAndroid,
    bgColor: "rgba(34, 197, 94, 0.2)",
    iconColor: "#4ade80",
    linkColor: "#4ade80",
  },
  {
    id: 7,
    title: "Belajar Fundamental Aplikasi Android",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/0LZ02WM2RX65",
    icon: SiAndroid,
    bgColor: "rgba(16, 185, 129, 0.2)",
    iconColor: "#34d399",
    linkColor: "#34d399",
  },
  {
    id: 8,
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/NVP7QYL2RZR0",
    icon: TbCertificate,
    bgColor: "rgba(99, 102, 241, 0.2)",
    iconColor: "#818cf8",
    linkColor: "#818cf8",
  },
  {
    id: 9,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/RVZKR4QJEPD5",
    icon: TbCpu,
    bgColor: "rgba(244, 63, 94, 0.2)",
    iconColor: "#fb7185",
    linkColor: "#fb7185",
  },
  {
    id: 10,
    title: "Belajar Penerapan Machine Learning untuk Android",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/JMZV3GD7NPN9",
    icon: TbRobot,
    bgColor: "rgba(6, 182, 212, 0.2)",
    iconColor: "#22d3ee",
    linkColor: "#22d3ee",
  },
  {
    id: 11,
    title: "Sertifikat apresiasi",
    issuer: "Himpunan Mahasiswa Informatika Universitas Syiah Kuala",
    link: "https://www.linkedin.com/in/teukuindrisandina/overlay/Certifications/260972615/treasury/?profileId=ACoAAENtmwYBspjwOVIoWKgXfELGrF765pWsDdM",
    icon: TbMedal,
    bgColor: "rgba(245, 158, 11, 0.2)",
    iconColor: "#fbbf24",
    linkColor: "#fbbf24",
  },
  {
    id: 12,
    title: "Belajar Pengembangan Aplikasi Android Intermediate",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/N9ZOM9410PG5",
    icon: SiAndroid,
    bgColor: "rgba(16, 185, 129, 0.25)",
    iconColor: "#34d399",
    linkColor: "#34d399",
  },
];

function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 5);

  return (
    <section className="content-section section-dark" id="certificates">
      <div className="section-heading">
        <span className="section-page-badge">CERTIFICATES</span>
        <h2>Certifications & achievements</h2>
      </div>

      <div className="certificates-list">
        {visibleCertificates.map((cert) => {
          const Icon = cert.icon;

          return (
            <article className="certificate-card" key={cert.id}>
              <div
                className="certificate-icon-box"
                style={{ backgroundColor: cert.bgColor, color: cert.iconColor }}
              >
                <Icon size={24} />
              </div>

              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-subtitle">{cert.issuer}</p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-link"
                    style={{ color: cert.linkColor }}
                  >
                    <span>Lihat sertifikat</span>
                    <TbExternalLink size={16} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {certificates.length > 5 && (
        <div className="certificates-toggle-container">
          <button
            type="button"
            className="certificates-toggle-btn"
            onClick={() => setShowAll(!showAll)}
          >
            <span>{showAll ? "Tampilkan Lebih Sedikit" : `Tampilkan Semua Sertifikat (${certificates.length})`}</span>
            {showAll ? <TbChevronUp size={18} /> : <TbChevronDown size={18} />}
          </button>
        </div>
      )}
    </section>
  );
}

export default Certificates;
