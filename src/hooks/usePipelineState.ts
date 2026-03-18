import { useState } from "react";

export interface PipelineState {
  m0Result: { preMatched: any[]; toProcess: any[]; masterCatalogs: Record<string, any[]> } | null;
  m1Result: { headers: string[]; rows: any[]; riskLevel: string } | null;
  m2Result: { triaged: any[] } | null;
  m3Result: { resolved: any[]; aliases: any[] } | null;
  m4Result: { results: any[]; hospitalName: string; masterCatalogs: any; masterDNAs: any } | null;
  m5Result: { enriched: any[] } | null;
}

const EMPTY: PipelineState = {
  m0Result: null,
  m1Result: null,
  m2Result: null,
  m3Result: null,
  m4Result: null,
  m5Result: null,
};

export function usePipelineState() {
  const [state, setState] = useState<PipelineState>(EMPTY);

  function setM0(data: PipelineState["m0Result"]) { setState(s => ({ ...s, m0Result: data })); }
  function setM1(data: PipelineState["m1Result"]) { setState(s => ({ ...s, m1Result: data })); }
  function setM2(data: PipelineState["m2Result"]) { setState(s => ({ ...s, m2Result: data })); }
  function setM3(data: PipelineState["m3Result"]) { setState(s => ({ ...s, m3Result: data })); }
  function setM4(data: PipelineState["m4Result"]) { setState(s => ({ ...s, m4Result: data })); }
  function setM5(data: PipelineState["m5Result"]) { setState(s => ({ ...s, m5Result: data })); }
  function reset() { setState(EMPTY); }

  return { state, setM0, setM1, setM2, setM3, setM4, setM5, reset };
}
