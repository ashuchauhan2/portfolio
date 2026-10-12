export default function ProjectDiagram({ kind }) {
  if (kind === "coursemix")
    return (
      <div className="project-sketch">
        <div className="sketch-label">
          <span>COURSEMIX</span>
          <span>LOGIC OVERVIEW</span>
        </div>
        <div className="course-flow">
          <div className="flow-inputs">
            <span>Academic record</span>
            <span>Prerequisites</span>
            <span>Degree requirements</span>
          </div>
          <div className="flow-connector" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="flow-engine">
            <span className="engine-mark" aria-hidden="true">
              ⌘
            </span>
            <strong>Planning logic</strong>
            <span>Evaluate requirements</span>
          </div>
          <div className="flow-output">
            <span className="mono">OUTPUT</span>
            <strong>A path to graduation</strong>
            <div className="pathway" aria-hidden="true">
              <i />
              <b />
              <i />
              <b />
              <i />
              <b />
              <i />
            </div>
          </div>
        </div>
        <div className="sketch-footer">
          <span>DATA → RULES → COURSE PATH</span>
          <span>01 / 03</span>
        </div>
      </div>
    );
  if (kind === "membership-tool")
    return (
      <div className="project-sketch">
        <div className="sketch-label">
          <span>GRAND NIAGARA</span>
          <span>WORKFLOW OVERVIEW</span>
        </div>
        <div className="membership-flow">
          <div className="paper-stack" aria-hidden="true">
            <div />
            <div />
            <div>
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <span className="workflow-arrow" aria-hidden="true">
            →
          </span>
          <div className="lookup-sketch">
            <div className="lookup-toolbar">
              <span />
              <span />
              <span />
            </div>
            <div className="lookup-search">
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" />
                <path d="m10 10 4 4" stroke="currentColor" />
              </svg>
              <span>Search membership records</span>
            </div>
            <div className="lookup-row">
              <i />
              <b />
              <span>Found</span>
            </div>
            <div className="lookup-row ghost">
              <i />
              <b />
            </div>
            <div className="lookup-row ghost">
              <i />
              <b />
            </div>
          </div>
        </div>
        <div className="sketch-footer">
          <span>PAPER RECORDS → SEARCHABLE DATA</span>
          <span>02 / 03</span>
        </div>
      </div>
    );
  return (
    <div className="project-sketch">
      <div className="sketch-label">
        <span>GYMROCKS</span>
        <span>PROGRESSION OVERVIEW</span>
      </div>
      <div className="gym-flow">
        <div className="gym-history">
          <span className="mono">WORKOUT HISTORY</span>
          <div className="chart-bars" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <span>Per-exercise trends</span>
        </div>
        <span className="workflow-arrow" aria-hidden="true">
          →
        </span>
        <div className="gym-recommendation">
          <span className="mono">NEXT SESSION</span>
          <strong>
            Progression
            <br />
            recommendation
          </strong>
          <div className="local-storage">
            <span aria-hidden="true">↳</span> Available offline
          </div>
        </div>
      </div>
      <div className="sketch-footer">
        <span>HISTORY → PROGRESSION → TRAINING</span>
        <span>03 / 03</span>
      </div>
    </div>
  );
}
