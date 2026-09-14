import React, { useState } from 'react';
import { Play, CheckCircle2, Clock, AlertCircle, RefreshCw, Server, ArrowRight, Activity, Terminal } from 'lucide-react';

interface DAGNode {
  id: string;
  name: string;
  type: 'extract' | 'transform' | 'validate' | 'load';
  status: 'success' | 'running' | 'queued';
  duration: string;
  records: string;
}

export const InteractivePipelineDAG: React.FC = () => {
  const [nodes, setNodes] = useState<DAGNode[]>([
    { id: '1', name: 'kafka_orders_extract', type: 'extract', status: 'success', duration: '1.2s', records: '1,420,500' },
    { id: '2', name: 'pyspark_dedup_flatten', type: 'transform', status: 'success', duration: '4.8s', records: '1,418,200' },
    { id: '3', name: 'great_expectations_checks', type: 'validate', status: 'success', duration: '2.1s', records: '0 Errors' },
    { id: '4', name: 'dbt_silver_marts_merge', type: 'transform', status: 'success', duration: '8.4s', records: '12 Marts' },
    { id: '5', name: 'snowflake_gold_publish', type: 'load', status: 'success', duration: '3.1s', records: 'Ready' }
  ]);

  const [isTriggering, setIsTriggering] = useState<boolean>(false);
  const [activeLog, setActiveLog] = useState<string>('DAG: ecommerce_streaming_lakehouse_v2 | Run ID: manual__2026-08-05T13:30:00 | Status: SUCCESS');

  const handleTriggerDAG = () => {
    setIsTriggering(true);
    setActiveLog('[INFO] Triggering DAG run ID: manual__' + Date.now());

    // Reset status to running
    setNodes((prev) =>
      prev.map((n, i) => ({
        ...n,
        status: i === 0 ? 'running' : 'queued'
      }))
    );

    setTimeout(() => {
      setNodes((prev) =>
        prev.map((n, i) => ({
          ...n,
          status: i <= 2 ? 'success' : i === 3 ? 'running' : 'queued'
        }))
      );
      setActiveLog('[INFO] Executing task 3/5: dbt_silver_marts_merge ... 1.4M events processed.');
    }, 1200);

    setTimeout(() => {
      setNodes((prev) => prev.map((n) => ({ ...n, status: 'success' })));
      setIsTriggering(false);
      setActiveLog('[SUCCESS] All 5 tasks completed in 19.6 seconds. Snowflake target tables updated!');
    }, 2400);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-base font-medium text-white flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            Airflow & dbt Pipeline DAG Visualizer
          </h3>
          <p className="text-xs text-slate-400">Real-Time Streaming Lakehouse DAG (Kafka → PySpark → Snowflake)</p>
        </div>

        <button
          onClick={handleTriggerDAG}
          disabled={isTriggering}
          className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#4A7C9D] hover:bg-[#3B6982] text-white text-xs font-medium transition-colors cursor-pointer active:scale-95 disabled:opacity-50"
        >
          {isTriggering ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          <span>{isTriggering ? 'Running Pipeline...' : 'Trigger DAG Run'}</span>
        </button>
      </div>

      {/* Interactive DAG Nodes Graph */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-[700px] justify-between py-2">
          {nodes.map((node, index) => (
            <React.Fragment key={node.id}>
              {/* DAG Node Card */}
              <div className="flex-1 bg-slate-900 p-3 rounded-lg border border-slate-800 shadow-xs space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {node.type}
                  </span>
                  {node.status === 'success' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  {node.status === 'running' && <RefreshCw className="w-3.5 h-3.5 text-sky-400 animate-spin" />}
                  {node.status === 'queued' && <Clock className="w-3.5 h-3.5 text-slate-500" />}
                </div>

                <div className="text-xs font-medium text-slate-200 font-mono truncate" title={node.name}>
                  {node.name}
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/60 font-mono">
                  <span>{node.duration}</span>
                  <span className="text-emerald-400">{node.records}</span>
                </div>
              </div>

              {/* Connecting Arrow */}
              {index < nodes.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Console Log Bar */}
      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs flex items-center gap-2 text-slate-300">
        <Terminal className="w-4 h-4 text-[#4A7C9D] flex-shrink-0" />
        <span className="truncate text-slate-400">{activeLog}</span>
      </div>
    </div>
  );
};
