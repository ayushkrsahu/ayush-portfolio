import React, { useState } from 'react';
import { X, Briefcase, GraduationCap, Award, Download, CheckCircle2, MapPin, Mail, FileText, Eye } from 'lucide-react';
import { Experience, Certification, Education, UserProfile } from '../types';
import { downloadResumePDF } from '../utils/generateResumePDF';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  education,
  certifications
}) => {
  const [viewMode, setViewMode] = useState<'official-pdf' | 'interactive'>('official-pdf');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col text-slate-800 dark:text-slate-100">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 sticky top-0 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xs z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#4A7C9D] dark:text-sky-300 tracking-widest uppercase">Official Resume PDF</span>
              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-medium px-2 py-0.5 rounded-full border border-transparent dark:border-emerald-800/40">PDF Attached</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-[#3B6982] dark:text-sky-200 font-bold">{profile.name}</h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              <span className="flex items-center gap-1 text-[#4A7C9D] dark:text-sky-400 font-semibold"><MapPin className="w-3.5 h-3.5" /> {profile.location} ({profile.pswVisaInfo})</span>
              <span>•</span>
              <a href={`mailto:${profile.email}`} className="hover:underline flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {profile.email}</a>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* View Toggle */}
            <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
              <button
                onClick={() => setViewMode('official-pdf')}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'official-pdf'
                    ? 'bg-white dark:bg-slate-700 text-[#3B6982] dark:text-sky-200 shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-[#4A7C9D] dark:text-sky-300" />
                <span>1-Page PDF View</span>
              </button>
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'interactive'
                    ? 'bg-white dark:bg-slate-700 text-[#3B6982] dark:text-sky-200 shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-[#4A7C9D] dark:text-sky-300" />
                <span>Expanded Web View</span>
              </button>
            </div>

            {/* Primary Download Button */}
            <button
              onClick={() => downloadResumePDF()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3B6982] dark:bg-sky-600 hover:bg-[#2A4B5E] dark:hover:bg-sky-500 text-white transition-all text-xs font-semibold shadow-xs cursor-pointer active:scale-95"
              title="Download official PDF resume file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xl font-bold cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 space-y-6 flex-1 bg-slate-50/50 dark:bg-slate-950/60">
          {viewMode === 'official-pdf' ? (
            /* Official 1-Page Document Presentation */
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-xl shadow-md border border-slate-200/80 dark:border-slate-800 max-w-3xl mx-auto text-slate-800 dark:text-slate-200 font-sans leading-normal text-xs sm:text-sm space-y-5">
              {/* Header */}
              <div className="text-center space-y-1 pb-2 border-b border-slate-200 dark:border-slate-800">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 uppercase">AYUSH KUMAR SAHU</h1>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Data Engineer <span className="font-normal text-slate-500">|</span> 2+ Years of Experience <span className="font-normal text-slate-500">|</span> MSc Big Data Science (Distinction)
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
                  United Kingdom (Remote) | +44 7405813318 | ayushkusahuk@gmail.com | LinkedIn | GitHub | Portfolio
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Graduate visa valid until November 2027 · No sponsorship required
                </p>
              </div>

              {/* Profile */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-wider uppercase border-b border-slate-300 dark:border-slate-700 pb-0.5">PROFILE</h3>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                  Data engineer with 2+ years across a healthcare diagnostics marketplace and an SQL Server to AWS warehouse migration, plus an MSc in Big Data Science (Distinction). Builds CDC and ETL/ELT pipelines with AWS DMS, S3, Airflow, dbt and Python, owning data modelling, validation and clear documentation end to end.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-wider uppercase border-b border-slate-300 dark:border-slate-700 pb-0.5">EDUCATION</h3>
                <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                  <span className="font-bold text-slate-800 dark:text-slate-200">MSc Big Data Science (Distinction), Queen Mary University of London</span>
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">Sep 2024 to Sep 2025</span>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-wider uppercase border-b border-slate-300 dark:border-slate-700 pb-0.5">TECHNICAL SKILLS</h3>
                <div className="space-y-0.5 text-xs text-slate-700 dark:text-slate-300">
                  <p><strong className="text-slate-900 dark:text-slate-100">Languages & Processing:</strong> Python (pandas, PySpark, pyodbc, pyarrow), SQL, T-SQL, Spark SQL, ETL and ELT</p>
                  <p><strong className="text-slate-900 dark:text-slate-100">Change Data Capture:</strong> AWS DMS, LSN based CDC, incremental extraction, watermarking, idempotent loads</p>
                  <p><strong className="text-slate-900 dark:text-slate-100">Data Modelling:</strong> dimensional and star schemas, medallion architecture, SCD, surrogate keys, dbt, data quality</p>
                  <p><strong className="text-slate-900 dark:text-slate-100">Databases & Warehouses:</strong> Microsoft SQL Server, PostgreSQL, MySQL, Amazon RDS, Redshift, Snowflake</p>
                  <p><strong className="text-slate-900 dark:text-slate-100">Cloud & Orchestration:</strong> AWS (S3, DMS, EC2, IAM), Azure, Apache Airflow, Databricks, Docker, LocalStack, Git</p>
                  <p><strong className="text-slate-900 dark:text-slate-100">Streaming, AI & BI:</strong> Kafka, Spark Structured Streaming, Delta Lake, LangGraph, Azure OpenAI, Power BI</p>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-wider uppercase border-b border-slate-300 dark:border-slate-700 pb-0.5">EXPERIENCE</h3>
                
                {/* Exp 1 */}
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Data Engineer, ByteIQ Analytics, Remote</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">Jan 2026 to Present</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-slate-700 dark:text-slate-300 space-y-1 marker:text-slate-400">
                    <li>Designed and built the ingestion layer for a global US relocation services company's SQL Server to AWS warehouse migration (operational and reporting sources), helping shape the target architecture and proposing Airflow for orchestration.</li>
                    <li>Engineered a CDC pipeline on SQL Server with AWS DMS, running full load plus ongoing replication into an S3 bronze layer as partitioned Parquet, delivered with a least-privilege reader, runbook and security report.</li>
                    <li>Developed a Python CDC extractor with pyodbc and pyarrow that reads SQL Server change tables by LSN range via fn_cdc_get_all_changes, writing Parquet in the AWS DMS S3 folder layout.</li>
                    <li>Created a config-driven extraction framework where a YAML manifest maps each table to one of four strategies (rowversion, datetime, identity and snapshot hash), with per-table control state for resumable loads.</li>
                    <li>Automated loading with Apache Airflow across two DAGs and seven tasks, using an idempotent file-level control table and validation that fails the run on any row-count mismatch between staging and the control log.</li>
                    <li>Merged two disjoint source systems (53,860 rows across 24 tables) into a unified SQL Server warehouse with 18 dbt models, recommending hash-based surrogate keys after analysis showed no shared keys.</li>
                    <li>Reverse-engineered the client's legacy warehouse, mapping its hub-centred star schema (30 dimensions, 27 fact tables, 95 stored procedures), and authored a 20 section platform reference plus onboarding guide.</li>
                  </ul>
                </div>

                {/* Exp 2 */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Data Engineer, EVE Healthcare, Gurugram, India</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">Jan 2023 to Aug 2024</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-slate-700 dark:text-slate-300 space-y-1 marker:text-slate-400">
                    <li>Owned the data pipelines and analytics layer behind a Delhi NCR diagnostics marketplace spanning 3 cities and 25+ diagnostic tests, building Python and SQL ETL/ELT that standardises test catalogues, pricing and slot availability from partner centres.</li>
                    <li>Modelled the marketplace schema covering centres, services, pricing, panels and bookings across 7 service categories (MRI, CT, X-ray, ultrasound, blood tests, cardiology and neurology) and 3 empanelment types (CGHS, ECHS and corporate).</li>
                    <li>Orchestrated ingestion with Apache Airflow, designing DAGs with scheduling, monitoring and automated retries so pricing and slot availability stayed current across partner centres.</li>
                    <li>Built an AWS platform with S3 as the data lake and Amazon Redshift as the warehouse, giving product and business teams visibility into bookings, conversions, top tests and centre performance.</li>
                    <li>Implemented data-quality and validation checks behind a price-comparison experience advertising savings of up to 50%, supporting search, near-me discovery and same-day report delivery.</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-wider uppercase border-b border-slate-300 dark:border-slate-700 pb-0.5">PROJECTS</h3>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">End to End Aviation Data Pipeline</span>{' '}
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Databricks, PySpark, Delta Lake, Auto Loader, dbt</span>
                    </div>
                    <span className="text-[#3B6982] dark:text-sky-300 font-semibold text-[11px]">GitHub</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-slate-700 dark:text-slate-300 space-y-0.5 marker:text-slate-400">
                    <li>Built a Databricks lakehouse for flight, passenger and airport data with incremental Auto Loader ingestion, schema drift handling and Bronze, Silver and Gold layers.</li>
                    <li>Modelled a Gold star schema with fact_bookings and supporting dimensions, applying deduplication and SCD upserts for queries like airline revenue by departure city.</li>
                  </ul>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex justify-between items-baseline text-xs">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">Real Time Stock Market Pipeline</span>{' '}
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Kafka, Airflow, Snowflake, dbt, Docker, Power BI</span>
                    </div>
                    <span className="text-[#3B6982] dark:text-sky-300 font-semibold text-[11px]">GitHub</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-slate-700 dark:text-slate-300 space-y-0.5 marker:text-slate-400">
                    <li>Streamed Finnhub API events into Kafka, with Airflow DAGs landing raw JSON in MinIO and loading Snowflake through internal stages and COPY INTO.</li>
                    <li>Modelled dbt Silver and Gold layers for parsing, deduplication and KPI and volatility aggregation, feeding live Power BI DirectQuery dashboards from a Dockerised stack.</li>
                  </ul>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex justify-between items-baseline text-xs">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">BrandGuardian, AI Compliance Auditor</span>{' '}
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">LangGraph, Azure OpenAI, Azure Video Indexer, FastAPI</span>
                    </div>
                    <span className="text-[#3B6982] dark:text-sky-300 font-semibold text-[11px]">GitHub</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-slate-700 dark:text-slate-300 space-y-0.5 marker:text-slate-400">
                    <li>Built a multi-agent LangGraph workflow that ingests YouTube videos, extracts transcripts and on-screen text with Azure Video Indexer, and flags compliance issues with GPT-4o RAG behind a FastAPI endpoint.</li>
                  </ul>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-wider uppercase border-b border-slate-300 dark:border-slate-700 pb-0.5">CERTIFICATIONS</h3>
                <p className="text-xs text-slate-800 dark:text-slate-200">
                  Azure Administrator Associate (AZ-104) <span className="text-slate-400">|</span> Google Data Analytics Certificate <span className="text-slate-400">|</span> SQL Associate (DataCamp)
                </p>
              </div>
            </div>
          ) : (
            /* Interactive Web View */
            <div className="space-y-8 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800">
              {/* Executive Summary */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">Executive Summary</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{profile.bio}</p>
              </div>

              {/* Work Experience */}
              <div className="space-y-6">
                <h3 className="text-lg font-serif text-[#3B6982] dark:text-sky-200 font-semibold flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Briefcase className="w-5 h-5 text-[#4A7C9D] dark:text-sky-300" />
                  Work Experience
                </h3>

                <div className="space-y-8 relative pl-4 border-l-2 border-[#4A7C9D]/20 dark:border-sky-500/30">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative space-y-2 group">
                      <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-[#4A7C9D] dark:bg-sky-400 ring-4 ring-white dark:ring-slate-900" />

                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">{exp.role} <span className="font-normal text-slate-500 dark:text-slate-400">| {exp.company}</span></h4>
                          <div className="text-xs text-[#4A7C9D] dark:text-sky-400 font-medium">{exp.location}</div>
                        </div>
                        <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-1 list-disc pl-4 marker:text-[#4A7C9D] dark:marker:text-sky-400">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((t) => (
                          <span key={t} className="text-[10px] px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif text-[#3B6982] dark:text-sky-200 font-semibold flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                    <GraduationCap className="w-5 h-5 text-[#4A7C9D] dark:text-sky-300" />
                    Education
                  </h3>

                  <div className="space-y-3">
                    {education.map((edu, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{edu.institution}</div>
                        <div className="text-xs text-[#4A7C9D] dark:text-sky-300 font-semibold">
                          {edu.degree} {edu.grade && <span className="text-slate-600 dark:text-slate-300 font-normal">({edu.grade})</span>}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">{edu.period}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif text-[#3B6982] dark:text-sky-200 font-semibold flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                    <Award className="w-5 h-5 text-[#4A7C9D] dark:text-sky-300" />
                    Certifications ({certifications.length})
                  </h3>

                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {certifications.map((cert) => (
                      <div key={cert.name} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C9D] dark:text-sky-300 shrink-0" />
                        <span>{cert.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3 rounded-b-2xl">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-medium text-slate-700 dark:text-slate-300">{profile.name}</span>
            <span>•</span>
            <span>AYUSH_KUMAR_SAHU_RESUME.pdf</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadResumePDF()}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#3B6982] dark:bg-sky-600 hover:bg-[#2A4B5E] dark:hover:bg-sky-500 text-white transition-all text-xs font-semibold cursor-pointer active:scale-95 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

