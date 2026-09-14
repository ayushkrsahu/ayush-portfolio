import jsPDF from 'jspdf';

export const downloadResumePDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const margin = 12; // 12mm
  const contentWidth = pageWidth - margin * 2; // 186mm
  let y = 14;

  // Helper for section headings with bottom border line
  const addSectionHeading = (title: string) => {
    y += 2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59); // Slate-800
    doc.text(title, margin, y);
    
    y += 1.5;
    doc.setDrawColor(203, 213, 225); // Slate-300
    doc.setLineWidth(0.3);
    doc.line(margin, y, margin + contentWidth, y);
    y += 4;
  };

  // 1. NAME & TITLE HEADER
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // Slate-900
  doc.text('AYUSH KUMAR SAHU', pageWidth / 2, y, { align: 'center' });

  y += 5.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85); // Slate-700
  doc.text('Data Engineer  |  2+ Years of Experience  |  MSc Big Data Science (Distinction)', pageWidth / 2, y, { align: 'center' });

  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105); // Slate-600
  doc.text('United Kingdom (Remote)  |  +44 7405813318  |  ayushkusahuk@gmail.com  |  LinkedIn  |  GitHub  |  Portfolio', pageWidth / 2, y, { align: 'center' });

  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('Graduate visa valid until November 2027  ·  No sponsorship required', pageWidth / 2, y, { align: 'center' });

  // 2. PROFILE SECTION
  addSectionHeading('PROFILE');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const profileLines = doc.splitTextToSize(
    'Data engineer with 2+ years across a healthcare diagnostics marketplace and an SQL Server to AWS warehouse migration, plus an MSc in Big Data Science (Distinction). Builds CDC and ETL/ELT pipelines with AWS DMS, S3, Airflow, dbt and Python, owning data modelling, validation and clear documentation end to end.',
    contentWidth
  );
  doc.text(profileLines, margin, y);
  y += profileLines.length * 3.8 + 1;

  // 3. EDUCATION SECTION
  addSectionHeading('EDUCATION');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('MSc Big Data Science (Distinction), Queen Mary University of London', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Sep 2024 to Sep 2025', margin + contentWidth, y, { align: 'right' });
  y += 5;

  // 4. TECHNICAL SKILLS SECTION
  addSectionHeading('TECHNICAL SKILLS');
  const skillCategories = [
    { label: 'Languages & Processing:', text: 'Python (pandas, PySpark, pyodbc, pyarrow), SQL, T-SQL, Spark SQL, ETL and ELT' },
    { label: 'Change Data Capture:', text: 'AWS DMS, LSN based CDC, incremental extraction, watermarking, idempotent loads' },
    { label: 'Data Modelling:', text: 'dimensional and star schemas, medallion architecture, SCD, surrogate keys, dbt, data quality' },
    { label: 'Databases & Warehouses:', text: 'Microsoft SQL Server, PostgreSQL, MySQL, Amazon RDS, Redshift, Snowflake' },
    { label: 'Cloud & Orchestration:', text: 'AWS (S3, DMS, EC2, IAM), Azure, Apache Airflow, Databricks, Docker, LocalStack, Git' },
    { label: 'Streaming, AI & BI:', text: 'Kafka, Spark Structured Streaming, Delta Lake, LangGraph, Azure OpenAI, Power BI' },
  ];

  skillCategories.forEach(sk => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text(sk.label, margin, y);
    const labelWidth = doc.getTextWidth(sk.label) + 2;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const textLines = doc.splitTextToSize(sk.text, contentWidth - labelWidth);
    doc.text(textLines, margin + labelWidth, y);
    y += Math.max(1, textLines.length) * 3.5;
  });
  y += 1;

  // 5. EXPERIENCE SECTION
  addSectionHeading('EXPERIENCE');

  // Experience 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Data Engineer, ByteIQ Analytics, Remote', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Jan 2026 to Present', margin + contentWidth, y, { align: 'right' });
  y += 3.8;

  const byteIqBullets = [
    'Designed and built the ingestion layer for a global US relocation services company\'s SQL Server to AWS warehouse migration (operational and reporting sources), helping shape the target architecture and proposing Airflow for orchestration.',
    'Engineered a CDC pipeline on SQL Server with AWS DMS, running full load plus ongoing replication into an S3 bronze layer as partitioned Parquet, delivered with a least-privilege reader, runbook and security report.',
    'Developed a Python CDC extractor with pyodbc and pyarrow that reads SQL Server change tables by LSN range via fn_cdc_get_all_changes, writing Parquet in the AWS DMS S3 folder layout.',
    'Created a config-driven extraction framework where a YAML manifest maps each table to one of four strategies (rowversion, datetime, identity and snapshot hash), with per-table control state for resumable loads.',
    'Automated loading with Apache Airflow across two DAGs and seven tasks, using an idempotent file-level control table and validation that fails the run on any row-count mismatch between staging and the control log.',
    'Merged two disjoint source systems (53,860 rows across 24 tables) into a unified SQL Server warehouse with 18 dbt models, recommending hash-based surrogate keys after analysis showed no shared keys.',
    'Reverse-engineered the client\'s legacy warehouse, mapping its hub-centred star schema (30 dimensions, 27 fact tables, 95 stored procedures), and authored a 20 section platform reference plus onboarding guide.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);

  byteIqBullets.forEach(b => {
    doc.text('•', margin + 1, y);
    const lines = doc.splitTextToSize(b, contentWidth - 5);
    doc.text(lines, margin + 4, y);
    y += lines.length * 3.4;
  });
  y += 2;

  // Experience 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Data Engineer, EVE Healthcare, Gurugram, India', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Jan 2023 to Aug 2024', margin + contentWidth, y, { align: 'right' });
  y += 3.8;

  const eveBullets = [
    'Owned the data pipelines and analytics layer behind a Delhi NCR diagnostics marketplace spanning 3 cities and 25+ diagnostic tests, building Python and SQL ETL/ELT that standardises test catalogues, pricing and slot availability from partner centres.',
    'Modelled the marketplace schema covering centres, services, pricing, panels and bookings across 7 service categories (MRI, CT, X-ray, ultrasound, blood tests, cardiology and neurology) and 3 empanelment types (CGHS, ECHS and corporate).',
    'Orchestrated ingestion with Apache Airflow, designing DAGs with scheduling, monitoring and automated retries so pricing and slot availability stayed current across partner centres.',
    'Built an AWS platform with S3 as the data lake and Amazon Redshift as the warehouse, giving product and business teams visibility into bookings, conversions, top tests and centre performance.',
    'Implemented data-quality and validation checks behind a price-comparison experience advertising savings of up to 50%, supporting search, near-me discovery and same-day report delivery.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);

  eveBullets.forEach(b => {
    doc.text('•', margin + 1, y);
    const lines = doc.splitTextToSize(b, contentWidth - 5);
    doc.text(lines, margin + 4, y);
    y += lines.length * 3.4;
  });
  y += 2;

  // 6. PROJECTS SECTION
  addSectionHeading('PROJECTS');

  const projects = [
    {
      title: 'End to End Aviation Data Pipeline',
      tech: 'Databricks, PySpark, Delta Lake, Auto Loader, dbt',
      link: 'GitHub',
      bullets: [
        'Built a Databricks lakehouse for flight, passenger and airport data with incremental Auto Loader ingestion, schema drift handling and Bronze, Silver and Gold layers.',
        'Modelled a Gold star schema with fact_bookings and supporting dimensions, applying deduplication and SCD upserts for queries like airline revenue by departure city.'
      ]
    },
    {
      title: 'Real Time Stock Market Pipeline',
      tech: 'Kafka, Airflow, Snowflake, dbt, Docker, Power BI',
      link: 'GitHub',
      bullets: [
        'Streamed Finnhub API events into Kafka, with Airflow DAGs landing raw JSON in MinIO and loading Snowflake through internal stages and COPY INTO.',
        'Modelled dbt Silver and Gold layers for parsing, deduplication and KPI and volatility aggregation, feeding live Power BI DirectQuery dashboards from a Dockerised stack.'
      ]
    },
    {
      title: 'BrandGuardian, AI Compliance Auditor',
      tech: 'LangGraph, Azure OpenAI, Azure Video Indexer, FastAPI',
      link: 'GitHub',
      bullets: [
        'Built a multi-agent LangGraph workflow that ingests YouTube videos, extracts transcripts and on-screen text with Azure Video Indexer, and flags compliance issues with GPT-4o RAG behind a FastAPI endpoint.'
      ]
    }
  ];

  projects.forEach(p => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(p.title, margin, y);
    const tWidth = doc.getTextWidth(p.title) + 2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(p.tech, margin + tWidth, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 64, 175); // Blue link
    doc.text(p.link, margin + contentWidth, y, { align: 'right' });
    y += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    p.bullets.forEach(b => {
      doc.text('•', margin + 1, y);
      const lines = doc.splitTextToSize(b, contentWidth - 5);
      doc.text(lines, margin + 4, y);
      y += lines.length * 3.4;
    });
    y += 1.5;
  });

  // 7. CERTIFICATIONS
  addSectionHeading('CERTIFICATIONS');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Azure Administrator Associate (AZ-104)   |   Google Data Analytics Certificate   |   SQL Associate (DataCamp)', margin, y);

  // Save PDF file
  doc.save('AYUSH_KUMAR_SAHU_RESUME.pdf');
};
