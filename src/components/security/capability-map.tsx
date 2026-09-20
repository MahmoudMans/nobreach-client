import styles from "./capability-map.module.css";

export function CapabilityMap() {
  return (
    <div
      className={styles.shell}
      aria-label="No Breach capability ecosystem"
    >
      <div className={styles.header}>
        <span
          className={styles.indicator}
          aria-hidden="true"
        />
        capability architecture
      </div>

      <svg
        className={styles.map}
        viewBox="0 0 700 650"
        role="img"
        aria-labelledby="capability-map-title capability-map-description"
      >
        <title id="capability-map-title">
          No Breach capability ecosystem
        </title>

        <desc id="capability-map-description">
          Diagram connecting No Breach to web security,
          API security, infrastructure security, training,
          CR4CKOUT and AI security.
        </desc>

        <circle
          className={styles.orbit}
          cx="350"
          cy="325"
          r="250"
        />

        <circle
          className={styles.orbit}
          cx="350"
          cy="325"
          r="166"
        />

        <path
          className={styles.connector}
          d="M350 325 L350 94"
        />
        <path
          className={styles.connectorHot}
          d="M350 325 L563 198"
        />
        <path
          className={styles.connector}
          d="M350 325 L563 452"
        />
        <path
          className={styles.connectorHot}
          d="M350 325 L350 556"
        />
        <path
          className={styles.connector}
          d="M350 325 L137 452"
        />
        <path
          className={styles.connectorHot}
          d="M350 325 L137 198"
        />

        <circle
          className={styles.centerGlow}
          cx="350"
          cy="325"
          r="106"
        />

        <circle
          className={styles.centerOuter}
          cx="350"
          cy="325"
          r="82"
        />

        <text
          className={styles.centerTitle}
          x="350"
          y="318"
          textAnchor="middle"
        >
          NO BREACH
        </text>

        <text
          className={styles.centerMeta}
          x="350"
          y="342"
          textAnchor="middle"
        >
          SECURITY · EDUCATION · COMMUNITY
        </text>

        <g>
          <circle
            className={styles.node}
            cx="350"
            cy="94"
            r="54"
          />
          <circle
            className={styles.nodeCore}
            cx="350"
            cy="73"
            r="4"
          />
          <text
            className={styles.nodeLabel}
            x="350"
            y="94"
            textAnchor="middle"
          >
            WEB
          </text>
          <text
            className={styles.nodeMeta}
            x="350"
            y="111"
            textAnchor="middle"
          >
            APPLICATION
          </text>
        </g>

        <g>
          <circle
            className={styles.nodeAccent}
            cx="563"
            cy="198"
            r="54"
          />
          <circle
            className={styles.nodeCoreViolet}
            cx="563"
            cy="177"
            r="4"
          />
          <text
            className={styles.nodeLabel}
            x="563"
            y="198"
            textAnchor="middle"
          >
            API
          </text>
          <text
            className={styles.nodeMeta}
            x="563"
            y="215"
            textAnchor="middle"
          >
            ACCESS
          </text>
        </g>

        <g>
          <circle
            className={styles.node}
            cx="563"
            cy="452"
            r="54"
          />
          <circle
            className={styles.nodeCore}
            cx="563"
            cy="431"
            r="4"
          />
          <text
            className={styles.nodeLabel}
            x="563"
            y="452"
            textAnchor="middle"
          >
            INFRA
          </text>
          <text
            className={styles.nodeMeta}
            x="563"
            y="469"
            textAnchor="middle"
          >
            EXPOSURE
          </text>
        </g>

        <g>
          <circle
            className={styles.nodeAccent}
            cx="350"
            cy="556"
            r="54"
          />
          <circle
            className={styles.nodeCoreViolet}
            cx="350"
            cy="535"
            r="4"
          />
          <text
            className={styles.nodeLabel}
            x="350"
            y="556"
            textAnchor="middle"
          >
            TRAINING
          </text>
          <text
            className={styles.nodeMeta}
            x="350"
            y="573"
            textAnchor="middle"
          >
            PRACTICE
          </text>
        </g>

        <g>
          <circle
            className={styles.node}
            cx="137"
            cy="452"
            r="54"
          />
          <circle
            className={styles.nodeCore}
            cx="137"
            cy="431"
            r="4"
          />
          <text
            className={styles.nodeLabel}
            x="137"
            y="452"
            textAnchor="middle"
          >
            CR4CKOUT
          </text>
          <text
            className={styles.nodeMeta}
            x="137"
            y="469"
            textAnchor="middle"
          >
            COMMUNITY
          </text>
        </g>

        <g>
          <circle
            className={styles.nodeAccent}
            cx="137"
            cy="198"
            r="54"
          />
          <circle
            className={styles.nodeCoreViolet}
            cx="137"
            cy="177"
            r="4"
          />
          <text
            className={styles.nodeLabel}
            x="137"
            y="198"
            textAnchor="middle"
          >
            AI
          </text>
          <text
            className={styles.nodeMeta}
            x="137"
            y="215"
            textAnchor="middle"
          >
            SECURITY
          </text>
        </g>
      </svg>

      <div
        className={styles.legend}
        aria-hidden="true"
      >
        <span className={styles.legendItem}>
          <span className={styles.legendDot} />
          security
        </span>

        <span className={styles.legendItem}>
          <span className={styles.legendDotViolet} />
          ecosystem
        </span>
      </div>
    </div>
  );
}
