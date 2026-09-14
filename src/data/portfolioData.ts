import { Project, SkillItem, Experience, Certification, Education, DashboardItem, BlogPost, UserProfile } from '../types';

export const initialProfile: UserProfile = {
  name: 'Ayush Kumar Sahu',
  role: 'Data Engineer & Analyst',
  location: 'United Kingdom',
  pswVisaInfo: 'PSW Visa till Nov 2027',
  tagline: 'Architecting robust data pipelines, CDC ingestion engines, and scalable analytics infrastructure.',
  bio: 'Data engineer with 2+ years across a healthcare diagnostics marketplace and an SQL Server to AWS warehouse migration, plus an MSc in Big Data Science (Distinction) from Queen Mary University of London. Builds CDC and ETL/ELT pipelines with AWS DMS, S3, Airflow, dbt and Python, owning data modelling, validation and clear documentation end to end. Proficient across the modern data stack including Azure, Databricks, Snowflake and Kafka, with a proven track record of automating complex workflows, enforcing data normalisation, optimising SQL performance, and deploying robust ETL/ELT pipelines in hybrid cloud environments.',
  linkedinUrl: 'https://www.linkedin.com/in/ayush-ku-sahu/',
  githubUrl: 'https://github.com/ayushkrsahu?tab=repositories',
  email: 'ayushkusahuk@gmail.com'
};

export const skillsData: SkillItem[] = [
  {
    id: 'languages-query',
    title: 'Languages & Query Engines',
    shortDesc: 'Advanced SQL, Python data engineering, T-SQL stored procedures, and PySpark distributed transformations.',
    fullDesc: 'Proficient in Python (Pandas, SQLAlchemy, PySpark, pyodbc, pyarrow), Advanced SQL, T-SQL, Spark SQL, Scala, and Bash scripting for end-to-end data processing.',
    iconName: 'cleansing',
    tools: ['Python', 'SQL (Advanced)', 'PySpark', 'T-SQL', 'Spark SQL', 'pyodbc', 'pyarrow', 'Bash']
  },
  {
    id: 'cloud-warehousing',
    title: 'Cloud & Data Warehousing',
    shortDesc: 'Multi-cloud data lakes, Delta Lake Medallion Architecture, and enterprise cloud warehouses.',
    fullDesc: 'Building scalable cloud infrastructure across AWS (S3, Redshift, RDS, EC2), Azure, Databricks, Snowflake, Delta Lake, and LocalStack.',
    iconName: 'warehouse',
    tools: ['AWS', 'Azure', 'Databricks', 'Snowflake', 'Amazon S3', 'Amazon Redshift', 'Delta Lake', 'LocalStack']
  },
  {
    id: 'pipelines-cdc',
    title: 'Pipelines & CDC Ingestion',
    shortDesc: 'LSN-based Change Data Capture, Airflow DAG orchestration, and streaming event pipelines.',
    fullDesc: 'Designing real-time & batch pipelines with AWS DMS, Apache Airflow, Apache Kafka, dbt, Spark Structured Streaming, LSN-based CDC, and idempotent loading strategies.',
    iconName: 'pipeline',
    tools: ['Apache Airflow', 'AWS DMS', 'Apache Kafka', 'dbt', 'LSN-based CDC', 'Spark Streaming', 'Idempotent ELT']
  },
  {
    id: 'modelling-analytics',
    title: 'Data Modelling & BI',
    shortDesc: 'Kimball dimensional star schemas, Medallion layer design, and interactive Power BI executive reporting.',
    fullDesc: 'Dimensional Modeling, Star & Snowflake Schemas, Medallion Architecture, Power BI dashboarding, DAX measures, Power Query M, and data normalization.',
    iconName: 'visualization',
    tools: ['Dimensional Modeling', 'Star Schemas', 'Medallion Architecture', 'Power BI', 'DAX', 'Power Query M', 'Data Normalization']
  },
  {
    id: 'ai-llmops',
    title: 'AI Engineering & LLMOps',
    shortDesc: 'Multimodal AI agents, LangGraph orchestration, RAG vector search, and LangSmith observability.',
    fullDesc: 'Building production AI workflows with LangGraph, Azure OpenAI, RAG architecture, Azure AI Search, LangSmith evaluation, and FastAPI REST microservices.',
    iconName: 'ai',
    tools: ['LangGraph', 'Azure OpenAI', 'RAG', 'Azure AI Search', 'FastAPI', 'LangSmith']
  },
  {
    id: 'devops-infrastructure',
    title: 'DevOps & Infrastructure',
    shortDesc: 'Docker containerization, Terraform IaC, GitHub Actions CI/CD, and network protocols.',
    fullDesc: 'Managing cloud infrastructure as code using Terraform, containerizing data workers with Docker, configuring CI/CD automation, and enforcing TCP/IP network security.',
    iconName: 'infrastructure',
    tools: ['Docker', 'Terraform', 'CI/CD', 'Git', 'Linux', 'TCP/IP Networking', 'Agile/Scrum']
  }
];

export const projectsData: Project[] = [
  {
    id: 'databricks-flight-pipeline',
    title: 'End-to-End Databricks Data Engineering Pipeline (Flight Data)',
    category: 'data-engineering',
    categoryLabel: 'Data Engineering',
    shortDescription: 'Architected a Medallion Architecture pipeline on Databricks to process large-scale flight data with PySpark, Auto Loader, and Delta Live Tables.',
    fullDescription: 'Designed and deployed a production-grade Medallion Architecture data pipeline on Azure Databricks. Ingested raw flight telemetry and booking streams using Auto Loader, performed batch and streaming cleansing in PySpark, and maintained Delta Lake bronze, silver, and gold analytical tables with Delta Live Tables.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    tags: ['Databricks', 'PySpark', 'Delta Live Tables', 'Delta Lake', 'Auto Loader', 'SQL'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-apachekafka-snowflake-activity-7402961976290869248-kDjR',
    metrics: [
      { label: 'Architecture', value: 'Medallion' },
      { label: 'Storage Engine', value: 'Delta Lake' },
      { label: 'Processing', value: 'PySpark' }
    ],
    keyFeatures: [
      'Auto Loader ingestion of semi-structured JSON flight telemetry into Bronze Delta tables',
      'PySpark streaming transformations enforcing data validation and null-imputation in Silver layer',
      'Gold dimensional models optimized for flight delay and route capacity analytics',
      'Delta Live Tables DAG with automated data quality expectations and pipeline monitoring'
    ],
    architecture: [
      'Raw Stream: Flight Telemetry & Booking Events',
      'Bronze Layer: Databricks Auto Loader -> Parquet / Delta Storage',
      'Silver Layer: PySpark Cleaning & Schema Normalization',
      'Gold Layer: Delta Live Tables Star Schema for BI Dashboards'
    ],
    sampleCode: {
      language: 'python',
      filename: 'dlt_flight_pipeline.py',
      code: `import dlt
from pyspark.sql.functions import col, current_timestamp, when

@dlt.table(
    comment="Raw flight data ingested via Auto Loader"
)
def flight_raw():
    return (
        spark.readStream.format("cloudFiles")
        .option("cloudFiles.format", "json")
        .load("/mnt/flight-landing/raw/")
    )

@dlt.table(
    comment="Cleaned silver flight telemetry with data quality assertions"
)
@dlt.expect_or_drop("valid_flight_id", "flight_id IS NOT NULL")
@dlt.expect("positive_distance", "distance > 0")
def flight_silver():
    return (
        dlt.read_stream("flight_raw")
        .select(
            col("flight_id"),
            col("carrier_code"),
            col("origin_airport"),
            col("dest_airport"),
            col("departure_delay_minutes").cast("int"),
            col("distance").cast("double")
        )
        .withColumn("ingested_at", current_timestamp())
    )`
    },
    hasInteractiveDemo: true,
    demoType: 'pipeline-dag'
  },
  {
    id: 'multimodal-ai-compliance-agent',
    title: 'Multimodal AI Compliance Agent (LLMOps)',
    category: 'ai-engineering',
    categoryLabel: 'AI & Engineering',
    shortDescription: 'Engineered a scalable AI compliance agent using LangGraph and Azure OpenAI with FastAPI backend and LangSmith observability.',
    fullDescription: 'Built an enterprise LLMOps compliance verification engine leveraging LangGraph state machine agents and Azure OpenAI embeddings. The agent parses regulatory documentation, checks transaction logs against policy standards, and provides auditable reasoning traces.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['LangGraph', 'Azure OpenAI', 'FastAPI', 'LangSmith', 'Docker', 'Python'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_aiengineering-langgraph-azureopenai-ugcPost-7433119063628750848-rvjm',
    metrics: [
      { label: 'Framework', value: 'LangGraph' },
      { label: 'LLM Model', value: 'Azure OpenAI' },
      { label: 'Observability', value: 'LangSmith' }
    ],
    keyFeatures: [
      'LangGraph multi-agent graph state routing for complex multi-step reasoning',
      'Azure OpenAI GPT-4o multimodal parsing of PDF guidelines and structured log payloads',
      'FastAPI REST server with async streaming token output',
      'LangSmith trace logging for evaluation, latency monitoring, and prompt engineering'
    ],
    architecture: [
      'Input: Policy PDFs & Transaction Payload',
      'LangGraph Agent: Document Parser Node -> Policy Matcher Node -> Compliance Evaluation Node',
      'Backend: FastAPI Service with CORS & Rate Limiting',
      'Observability: LangSmith Telemetry Dashboard'
    ],
    hasInteractiveDemo: false
  },
  {
    id: 'realtime-stock-pipeline',
    title: 'Real-Time Stock Market Data Pipeline',
    category: 'data-engineering',
    categoryLabel: 'Data Engineering',
    shortDescription: 'Designed a high-throughput streaming architecture using Apache Kafka, Airflow in Docker, loading into Snowflake.',
    fullDescription: 'Architected a low-latency financial streaming platform. Ingests high-frequency tick data into Apache Kafka, orchestrates stream windows with Apache Airflow running in Docker containers, and streams micro-batches into Snowflake for real-time portfolio analytics.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Apache Kafka', 'Snowflake', 'Airflow', 'Docker', 'Python', 'AWS'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-aws-postgresql-activity-7432220317009465344-8lbq',
    metrics: [
      { label: 'Streaming Tech', value: 'Apache Kafka' },
      { label: 'Warehouse', value: 'Snowflake' },
      { label: 'Orchestrator', value: 'Airflow' }
    ],
    keyFeatures: [
      'Multi-topic Kafka cluster for real-time market trade events and ticker quotes',
      'Dockerized Apache Airflow environment managing stream health check DAGs',
      'Snowpipe automated loading into Snowflake staging tables',
      'Materialized view aggregations computing 1-minute and 5-minute VWAP metrics'
    ],
    sampleCode: {
      language: 'sql',
      filename: 'snowflake_vwap_aggregation.sql',
      code: `-- Compute Volume-Weighted Average Price (VWAP) over 5-minute windows
SELECT 
    symbol,
    DATE_TRUNC('minute', trade_time) AS trade_minute,
    SUM(price * volume) / SUM(volume) AS vwap_price,
    SUM(volume) AS total_volume,
    MAX(price) AS high_price,
    MIN(price) AS low_price
FROM SNOWFLAKE_MARKET_DB.RAW.TICK_DATA
WHERE trade_time >= DATEADD('hour', -1, CURRENT_TIMESTAMP())
GROUP BY symbol, DATE_TRUNC('minute', trade_time)
ORDER BY trade_minute DESC, symbol;`
    },
    hasInteractiveDemo: true,
    demoType: 'sql-runner'
  },
  {
    id: 'azure-ai-rag',
    title: 'Azure AI & Retrieval-Augmented Generation (RAG)',
    category: 'ai-engineering',
    categoryLabel: 'AI & Engineering',
    shortDescription: 'Built enterprise vector retrieval system leveraging Azure AI Search, Azure OpenAI embeddings, and Python.',
    fullDescription: 'Implemented a high-performance RAG pipeline on Azure. Uses Azure Cognitive Search as a vector database, Azure OpenAI Ada-002 for semantic embedding creation, and custom hybrid search (vector + keyword) to deliver precise context retrieval.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    tags: ['Azure', 'Python', 'RAG', 'Azure OpenAI', 'Vector Search'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_azure-artificialintelligence-rag-ugcPost-7432723235227648000-z7t6',
    metrics: [
      { label: 'Search Type', value: 'Hybrid Vector' },
      { label: 'Cloud Provider', value: 'Azure AI' },
      { label: 'Tech Stack', value: 'Python' }
    ],
    keyFeatures: [
      'Azure AI Search hybrid querying combining cosine similarity vector search with BM25 full-text rank scoring',
      'Chunking and embedding optimization using Python and Azure OpenAI embeddings API',
      'Reranking module filtering low-confidence retrieved contexts prior to prompt augmentation',
      'Production-ready API endpoint for downstream applications'
    ]
  },
  {
    id: 'aws-de-devops',
    title: 'Data Engineering & DevOps on AWS',
    category: 'data-engineering',
    categoryLabel: 'Data Engineering',
    shortDescription: 'Production cloud infrastructure with Docker, CI/CD, Terraform, and AWS data services.',
    fullDescription: 'Constructed an automated AWS data infrastructure using Terraform Infrastructure as Code (IaC). Deployed Amazon S3 data lakes, RDS PostgreSQL instances, IAM least-privilege policies, and containerized Airflow workers via Docker and GitHub Actions CI/CD.',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1200&auto=format&fit=crop',
    tags: ['AWS', 'Docker', 'CI/CD', 'Terraform', 'PostgreSQL', 'Airflow'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-devops-aws-activity-7428611522131800064--ajn',
    metrics: [
      { label: 'Provisioning', value: 'Terraform IaC' },
      { label: 'Containers', value: 'Docker' },
      { label: 'CI/CD', value: 'GitHub Actions' }
    ],
    keyFeatures: [
      'Terraform modular scripts provisioning S3 buckets, VPC subnets, and RDS instances',
      'Docker Compose setup for local containerized development matching cloud environments',
      'GitHub Actions workflow performing automated linting, unit testing, and deployment',
      'IAM security policies ensuring encrypted S3 storage and secret management via AWS Secrets Manager'
    ]
  },
  {
    id: 'databricks-spark-de',
    title: 'Data Engineering with Databricks & Spark',
    category: 'data-engineering',
    categoryLabel: 'Data Engineering',
    shortDescription: 'Scalable ETL and analytics with Databricks and PySpark for complex analytical querying.',
    fullDescription: 'Developed optimized PySpark ETL scripts on Apache Spark Databricks clusters. Cleaned and aggregated multi-gigabyte datasets, applied window function partitionings, and established fast parquet storage formats.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Databricks', 'PySpark', 'Python', 'Spark SQL', 'ETL'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-databricks-spark-activity-7426599481413926912-GAwy',
    metrics: [
      { label: 'Engine', value: 'PySpark' },
      { label: 'Platform', value: 'Databricks' },
      { label: 'Language', value: 'Python' }
    ],
    keyFeatures: [
      'Distributed PySpark data frame transformations across multi-node Spark clusters',
      'Broadcasting dimension tables to eliminate shuffle overhead in large join operations',
      'Optimized Parquet partitioning strategies reducing query scan times'
    ]
  },
  {
    id: 'python-de-first-principles',
    title: 'Data Engineering First Principles in Python',
    category: 'data-engineering',
    categoryLabel: 'Data Engineering',
    shortDescription: 'Custom pipeline patterns built from scratch in Python, Pandas, and SQLAlchemy with error recovery.',
    fullDescription: 'Demonstrated first-principles data engineering concepts by implementing custom ETL pipelines from scratch. Built custom database connection pools with SQLAlchemy, schema validators with Pydantic, and idempotent file processing logic in Python.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Python', 'Pandas', 'SQLAlchemy', 'ETL', 'Data Quality'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-firstprinciples-python-activity-7430408372828454912-UhoQ',
    metrics: [
      { label: 'Focus', value: 'First Principles' },
      { label: 'Core Tech', value: 'Python & SQL' },
      { label: 'Architecture', value: 'Idempotent' }
    ],
    keyFeatures: [
      'Custom Python retry decorators handling database connection transient faults',
      'SQLAlchemy connection pooling and batch insertion optimization',
      'Idempotent state tracking ensuring pipeline re-executability without record duplication'
    ]
  },
  {
    id: 'vendor-performance-analytics',
    title: 'Vendor Performance Analytics',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics',
    shortDescription: 'Comprehensive vendor data analysis and SLA tracking in Power BI with DAX and SQL.',
    fullDescription: 'Designed an executive Vendor Performance tracking suite in Power BI. Integrated vendor delivery metrics, quality audit scores, and SLA compliance data from relational SQL databases to evaluate partner reliability.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Power BI', 'DAX', 'SQL', 'Vendor Analytics', 'SLA Tracking'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_vendor-data-analysis-i-recently-completed-activity-7396481664593362944-YkX5',
    metrics: [
      { label: 'Tool', value: 'Power BI' },
      { label: 'Calculation', value: 'DAX' },
      { label: 'Data Source', value: 'SQL Database' }
    ],
    keyFeatures: [
      'Custom DAX measures computing SLA on-time delivery percentages and defect rates',
      'Vendor scoring matrix categorizing suppliers by performance tiers',
      'Dynamic drill-through views detailing individual purchase order line items'
    ],
    hasInteractiveDemo: true,
    demoType: 'bi-dashboard'
  },
  {
    id: 'telecom-strategy-analytics',
    title: 'Telecom Strategy Analytics',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics',
    shortDescription: 'Telecom market strategy and subscriber churn analytics built using Power BI & Power Query.',
    fullDescription: 'Analyzed telecom subscriber churn patterns, average revenue per user (ARPU), and network usage intensity. Transformed unorganized customer records using Power Query M language into a robust star-schema data model in Power BI.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Power BI', 'Power Query', 'Data Analytics', 'Telecom Strategy'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-telecomstrategy-powerquery-activity-7398515931225812992-oFvI',
    metrics: [
      { label: 'Domain', value: 'Telecom BI' },
      { label: 'Transformation', value: 'Power Query' },
      { label: 'Focus', value: 'ARPU & Churn' }
    ],
    keyFeatures: [
      'Power Query M script cleaning customer demographic records and call detail logs',
      'Interactive subscriber segment breakdown by contract type and data consumption',
      'Churn predictive indicators highlighting high-risk customer cohorts'
    ]
  },
  {
    id: 'bi-dashboard-initial',
    title: 'Business Intelligence Dashboard',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics',
    shortDescription: 'Enterprise KPI and sales performance reporting dashboard built in Power BI with DAX.',
    fullDescription: 'Built an executive business intelligence reporting dashboard visualizing core business KPIs, gross profit margins, and monthly sales trends across geographic regions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tags: ['Power BI', 'DAX', 'Business Intelligence', 'Data Modeling'],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-powerbi-businessintelligence-activity-7400807941794365440-6KlT',
    metrics: [
      { label: 'Category', value: 'BI Analytics' },
      { label: 'Visualization', value: 'Power BI' },
      { label: 'Logic', value: 'DAX' }
    ],
    keyFeatures: [
      'Executive KPI card headers showcasing revenue, order volume, and YoY growth',
      'Cross-filtering interactive bar charts and regional heatmaps',
      'Optimized DAX data model ensuring sub-second visual rendering'
    ]
  },
  {
    id: 'ecommerce-inventory-analytics',
    title: 'E-Commerce Inventory Analytics',
    category: 'data-analytics',
    categoryLabel: 'GitHub Repository',
    shortDescription: 'Open-source inventory turnover and stockout analytics model in Python & SQL.',
    fullDescription: 'Created a public GitHub repository showcasing inventory management analytics. Calculates safety stock levels, reorder points, economic order quantity (EOQ), and identifies slow-moving inventory items using Python and SQL.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Python', 'Pandas', 'SQL', 'GitHub Repo', 'Inventory Optimization'],
    externalUrl: 'https://github.com/ayushkrsahu/E-Commerce-Inventory-Analytics',
    metrics: [
      { label: 'Type', value: 'GitHub Project' },
      { label: 'Languages', value: 'Python, SQL' },
      { label: 'Domain', value: 'E-Commerce' }
    ],
    keyFeatures: [
      'Calculates Reorder Point (ROP) and Safety Stock based on lead time volatility',
      'Categorizes inventory items into ABC inventory analysis tiers',
      'SQL queries detecting products at risk of stockout within 7 days'
    ]
  },
  {
    id: 'customer-shopping-analysis',
    title: 'Customer Shopping Analysis',
    category: 'data-analytics',
    categoryLabel: 'GitHub Repository',
    shortDescription: 'Exploratory data analysis (EDA) on customer purchasing behavior and retail trends.',
    fullDescription: 'Public repository containing Python exploratory data analysis on consumer shopping behavior datasets. Includes statistical distributions, correlation matrices, and customer spending segmentations.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop',
    tags: ['Python', 'EDA', 'Pandas', 'Seaborn', 'GitHub Repo'],
    externalUrl: 'https://github.com/ayushkrsahu/customer_shopping_anlyasis',
    metrics: [
      { label: 'Type', value: 'GitHub Project' },
      { label: 'Analysis', value: 'EDA' },
      { label: 'Tooling', value: 'Python / Seaborn' }
    ],
    keyFeatures: [
      'Comprehensive EDA notebook with statistical distributions and anomaly detection',
      'Demographic analysis mapping payment preferences by age and gender groups',
      'Data cleaning pipeline removing duplicate customer transactions'
    ]
  },
  {
    id: 'healthedge-ai',
    title: 'HealthEdgeAI',
    category: 'machine-learning',
    categoryLabel: 'GitHub Repository',
    shortDescription: 'Predictive healthcare telemetry models and machine learning pipeline in Python.',
    fullDescription: 'Machine learning healthcare analytics project in Python. Implements predictive classification models for diagnostic risk scoring based on patient vitals and laboratory test results.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Python', 'Machine Learning', 'Healthcare ML', 'Scikit-Learn', 'GitHub Repo'],
    externalUrl: 'https://github.com/ayushkrsahu/healthedgeai',
    metrics: [
      { label: 'Type', value: 'GitHub Project' },
      { label: 'Core Field', value: 'Healthcare AI' },
      { label: 'Stack', value: 'Python ML' }
    ],
    keyFeatures: [
      'Supervised ML classification pipeline trained on diagnostic patient data',
      'Feature importance analysis identifying top predictive clinical markers',
      'Model validation with cross-validation fold evaluation and ROC-AUC curves'
    ]
  }
];

export const dashboardsData: DashboardItem[] = [
  {
    id: 'main-powerbi-embedded',
    title: 'Featured Interactive Business Intelligence Dashboard',
    description: 'Fully interactive embedded Power BI reporting tool tracking key enterprise metrics, sales trends, and regional performance.',
    tools: ['Power BI', 'DAX', 'Data Modeling', 'Interactive Visuals'],
    liveUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
    linkedInUrl: 'https://www.linkedin.com/in/ayush-ku-sahu/',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9'
  },
  {
    id: 'bi-powerbi-live',
    title: 'Business Intelligence / Power BI Dashboard',
    description: 'Interactive data visualization and business insights tracking key operational metrics and financial trends.',
    tools: ['Power BI', 'DAX', 'Analytics'],
    liveUrl: 'https://lnkd.in/gNn-wDQZ',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalyst-businessintelligence-powerbi-activity-7421240683233091584-N9UP'
  },
  {
    id: 'sales-dashboard-live',
    title: 'Sales Dashboard',
    description: 'Interactive data visualization analyzing sales performance, revenue channels, and product line growth.',
    tools: ['Power BI', 'Data Modeling', 'DAX'],
    liveUrl: 'https://lnkd.in/eRQMhRqx',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_powerbi-dataanalytics-salesdashboard-activity-7414954730789064704-LpDQ'
  },
  {
    id: 'insurance-analysis-live',
    title: 'Insurance Analysis Dashboard',
    description: 'Data analytics platform inspecting claim volumes, premium distribution, and risk portfolio assessments.',
    tools: ['Power BI', 'SQL', 'Risk Analytics'],
    liveUrl: 'https://lnkd.in/eDH6rg43',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-businessintelligence-insuranceanalysis-activity-7412615371779690497-ZUBX'
  },
  {
    id: 'healthcare-innovation-live',
    title: 'Healthcare Innovation Dashboard',
    description: 'Diagnostic marketplace and healthcare innovation tracking system evaluating test volume trends and patient access.',
    tools: ['Power BI', 'DAX', 'Healthcare Analytics'],
    liveUrl: 'https://lnkd.in/e_4JJ6hB',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-healthcareinnovation-powerbi-activity-7409928613812363266-eUAE'
  }
];

export const experienceData: Experience[] = [
  {
    period: 'Jan 2026 – Present',
    role: 'Data Engineer',
    company: 'ByteIQ Analytics',
    location: 'Remote',
    description: [
      'Designed and built the ingestion layer for a global US relocation services company\'s SQL Server to AWS warehouse migration (operational and reporting sources), helping shape the target architecture and proposing Airflow for orchestration.',
      'Engineered a CDC pipeline on SQL Server with AWS DMS, running full load plus ongoing replication into an S3 bronze layer as partitioned Parquet, delivered with a least-privilege reader, runbook and security report.',
      'Developed a Python CDC extractor with pyodbc and pyarrow that reads SQL Server change tables by LSN range via fn_cdc_get_all_changes, writing Parquet in the AWS DMS S3 folder layout.',
      'Created a config-driven extraction framework where a YAML manifest maps each table to one of four strategies (rowversion, datetime, identity and snapshot hash), with per-table control state for resumable loads.',
      'Automated loading with Apache Airflow across two DAGs and seven tasks, using an idempotent file-level control table and validation that fails the run on any row-count mismatch between staging and the control log.',
      'Merged two disjoint source systems (53,860 rows across 24 tables) into a unified SQL Server warehouse with 18 dbt models, recommending hash-based surrogate keys after analysis showed no shared keys.',
      'Reverse-engineered the client\'s legacy warehouse, mapping its hub-centred star schema (30 dimensions, 27 fact tables, 95 stored procedures), and authored a 20 section platform reference plus onboarding guide.'
    ],
    technologies: ['Python', 'SQL Server', 'AWS DMS', 'Amazon S3', 'Apache Airflow', 'dbt', 'pyodbc', 'pyarrow', 'Parquet', 'T-SQL', 'YAML']
  },
  {
    period: 'Jan 2023 – Aug 2024',
    role: 'Data Engineer',
    company: 'EVE Healthcare',
    location: 'Gurugram, India',
    description: [
      'Owned the data pipelines and analytics layer behind a Delhi NCR diagnostics marketplace spanning 3 cities and 25+ diagnostic tests, building Python and SQL ETL/ELT that standardises test catalogues, pricing and slot availability from partner centres.',
      'Modelled the marketplace schema covering centres, services, pricing, panels and bookings across 7 service categories (MRI, CT, X-ray, ultrasound, blood tests, cardiology and neurology) and 3 empanelment types (CGHS, ECHS and corporate).',
      'Orchestrated ingestion with Apache Airflow, designing DAGs with scheduling, monitoring and automated retries so pricing and slot availability stayed current across partner centres.',
      'Built an AWS platform with S3 as the data lake and Amazon Redshift as the warehouse, giving product and business teams visibility into bookings, conversions, top tests and centre performance.',
      'Implemented data-quality and validation checks behind a price-comparison experience advertising savings of up to 50%, supporting search, near-me discovery and same-day report delivery.'
    ],
    technologies: ['Python', 'SQL', 'Apache Airflow', 'AWS S3', 'Amazon Redshift', 'PostgreSQL', 'ETL/ELT', 'Data Quality']
  }
];

export const educationData: Education[] = [
  {
    institution: 'Queen Mary University of London',
    degree: 'M.Sc. Big Data Science',
    grade: 'Distinction',
    period: '2024 – 2025'
  },
  {
    institution: 'SRM IST Chennai',
    degree: 'B.Tech Electronics & Communication',
    period: '2019 – 2023'
  }
];

export const certificationsData: Certification[] = [
  { name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)' },
  { name: 'Azure Data Engineering (Grow Data Skills)' },
  { name: 'Google Data Analytics (Coursera)' },
  { name: 'SQL Associate (DataCamp)' },
  { name: 'Anthropic Claude Code in Action' },
  { name: 'AI & Machine Learning (upGrad Campus)' },
  { name: 'Data Science & ML Course (Coding Ninjas)' },
  { name: 'Python Foundation & Data Structures (CareerLabs)' },
  { name: 'Power BI Data Analytics (Codebasics)' },
  { name: 'Google Cloud & AWS Networking (Coursera)' },
  { name: 'RHCSA, RHCE, AWS & Docker (COSS)' },
  { name: 'Introduction to Python (Coding Ninjas)' }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'cdc-lsn-extraction',
    title: 'Building High-Throughput LSN-Based Change Data Capture (CDC) Pipelines',
    date: 'Jan 2026',
    readTime: '7 min read',
    category: 'Data Engineering',
    summary: 'Detailed architectural breakdown of extracting SQL Server change tables by LSN range into S3 Bronze Parquet files.',
    content: `When replicating mission-critical transactional databases like SQL Server to cloud warehouses, reliance on simple \`updated_at\` timestamps often misses hard deletes and leads to lock contention.

### Why LSN-Based CDC?
Log Sequence Numbers (LSNs) are monotonically increasing identifiers assigned to every record in the database transaction log. By querying change tables via \`fn_cdc_get_all_changes\`, we achieve exact-once CDC extraction.

### Python Extractor Architecture
\`\`\`python
import pyodbc
import pyarrow as pa
import pyarrow.parquet as pq

# Extract records for a specific LSN window
def extract_lsn_range(cursor, from_lsn, to_lsn, table_name):
    query = f"""
    SELECT * FROM cdc.fn_cdc_get_all_changes_{table_name}(
        {from_lsn}, {to_lsn}, 'all'
    )
    """
    cursor.execute(query)
    columns = [column[0] for column in cursor.description]
    rows = cursor.fetchall()
    
    # Convert pyodbc rows to PyArrow Table for efficient Parquet writing
    arrow_table = pa.Table.from_batches([
        pa.RecordBatch.from_arrays(
            [pa.array([row[i] for row in rows]) for i in range(len(columns))],
            names=columns
        )
    ])
    
    # Write to partitioned S3 folder layout
    pq.write_table(arrow_table, f"s3://bronze/{table_name}/part_{from_lsn}.parquet")
\`\`\`

### Idempotency & Validation
Using an Airflow file-level control table ensures that if any extraction run fails midway, the next execution reads the last committed LSN from the control log and resumes without row-count mismatch!`
  },
  {
    id: 'dbt-medallion-warehouse',
    title: 'Merging Disjoint Source Systems into a Unified dbt Warehouse',
    date: 'Dec 2025',
    readTime: '6 min read',
    category: 'Data Engineering & Modeling',
    summary: 'How we unified 53,860 rows across 24 tables into 18 dbt star-schema models using hash-based surrogate keys.',
    content: `During enterprise migrations, you frequently encounter disjoint source systems without shared primary keys.

### The Challenge
We merged two operational systems across 24 tables. Initial audit revealed zero overlapping natural keys between systems, preventing straightforward SQL \`JOIN\` conditions.

### Hash-Based Surrogate Keys
Instead of auto-incrementing integers, we generated MD5/SHA256 surrogate keys using dbt utils:

\`\`\`sql
-- dbt model: dim_relocation_client.sql
SELECT
    {{ dbt_utils.generate_surrogate_key(['system_id', 'client_natural_id']) }} AS client_sk,
    system_id,
    client_natural_id,
    client_name,
    email,
    created_at
FROM {{ ref('stg_operational_clients') }}
\`\`\`

This pattern guarantees unique surrogate key generation across disparate systems while enabling scalable star-schema dimension building.`
  }
];
