import styles from "./attack-graph.module.css";

export function AttackGraph() {
  return (
    <div className={styles.shell} aria-label="Abstract application attack surface diagram">
      <div className={styles.status}>
        <span className={styles.statusDot} aria-hidden="true" />
        attack surface / mapped
      </div>

      <svg
        className={styles.graph}
        viewBox="0 0 560 520"
        role="img"
        aria-labelledby="attack-graph-title"
      >
        <title id="attack-graph-title">
          Abstract diagram showing connected application, API, identity and data systems
        </title>

        <path className={styles.connection} d="M280 82 L144 192" />
        <path className={styles.connectionHot} d="M280 82 L416 192" />
        <path className={styles.connection} d="M144 192 L205 322" />
        <path className={styles.connectionHot} d="M416 192 L355 322" />
        <path className={styles.connection} d="M205 322 L280 430" />
        <path className={styles.connectionHot} d="M355 322 L280 430" />
        <path className={styles.connection} d="M144 192 L416 192" />
        <path className={styles.connection} d="M205 322 L355 322" />

        <g>
          <circle className={styles.nodeOuterHot} cx="280" cy="82" r="38" />
          <circle className={styles.nodeCore} cx="280" cy="82" r="5" />
          <text className={styles.label} x="280" y="74" textAnchor="middle">
            APP
          </text>
          <text className={styles.subLabel} x="280" y="99" textAnchor="middle">
            PUBLIC
          </text>
        </g>

        <g>
          <circle className={styles.nodeOuter} cx="144" cy="192" r="36" />
          <circle className={styles.nodeCore} cx="144" cy="192" r="4.5" />
          <text className={styles.label} x="144" y="184" textAnchor="middle">
            API
          </text>
          <text className={styles.subLabel} x="144" y="208" textAnchor="middle">
            REST
          </text>
        </g>

        <g>
          <circle className={styles.nodeOuterHot} cx="416" cy="192" r="36" />
          <circle className={styles.nodeCoreViolet} cx="416" cy="192" r="4.5" />
          <text className={styles.label} x="416" y="184" textAnchor="middle">
            AUTH
          </text>
          <text className={styles.subLabel} x="416" y="208" textAnchor="middle">
            IDENTITY
          </text>
        </g>

        <g>
          <circle className={styles.nodeOuter} cx="205" cy="322" r="36" />
          <circle className={styles.nodeCore} cx="205" cy="322" r="4.5" />
          <text className={styles.label} x="205" y="314" textAnchor="middle">
            USER
          </text>
          <text className={styles.subLabel} x="205" y="338" textAnchor="middle">
            SESSION
          </text>
        </g>

        <g>
          <circle className={styles.nodeOuter} cx="355" cy="322" r="36" />
          <circle className={styles.nodeCoreViolet} cx="355" cy="322" r="4.5" />
          <text className={styles.label} x="355" y="314" textAnchor="middle">
            ROLE
          </text>
          <text className={styles.subLabel} x="355" y="338" textAnchor="middle">
            ACCESS
          </text>
        </g>

        <g>
          <circle className={styles.nodeOuterHot} cx="280" cy="430" r="38" />
          <circle className={styles.nodeCore} cx="280" cy="430" r="5" />
          <text className={styles.label} x="280" y="422" textAnchor="middle">
            DATA
          </text>
          <text className={styles.subLabel} x="280" y="446" textAnchor="middle">
            TRUST
          </text>
        </g>
      </svg>

      <div className={styles.legend}>NB / OFFENSIVE SECURITY</div>
    </div>
  );
}
