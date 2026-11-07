// NB_AI_INFRA_INSIGHT_V1
// Full text of "When the Model Is Not the Only Attack Surface" by Nouha Ben Brahim.
// Inline references use [n], [n, m] or [n–m]; inline code uses `backticks`.

export type ArticleBullet = {
  lead: string;
  text: string;
};

export type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "bullets";
      items: ArticleBullet[];
    }
  | {
      type: "table";
      caption: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: "callout";
      title: string;
      steps: string[];
      text: string;
    };

export type ArticleSubsection = {
  id: string;
  number: string;
  heading: string;
  blocks: ArticleBlock[];
};

export type ArticleSection = {
  id: string;
  number: string;
  heading: string;
  blocks: ArticleBlock[];
  subsections: ArticleSubsection[];
};

export type ArticleReference = {
  number: number;
  source: string;
  title: string;
  detail?: string;
  url: string;
};

export type Article = {
  slug: string;
  kicker: string;
  title: string;
  deck: string;
  author: string;
  authorRole: string;
  format: string;
  dateLabel: string;
  linkedinUrl: string;
  thesis: string;
  sections: ArticleSection[];
  references: ArticleReference[];
};

export const aiInfrastructureArticle: Article = {
  slug: "when-the-model-is-not-the-only-attack-surface",
  kicker: "AI Infrastructure Security",
  title: "When the Model Is Not the Only Attack Surface",
  deck:
    "What AI sandbox research and the LiteLLM supply-chain compromise teach us about containment, identity, and trust",
  author: "Nouha Ben Brahim",
  authorRole: "Founder, No Breach",
  format: "Technical analysis",
  dateLabel: "October 2026",
  linkedinUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7522269684860325889/",
  thesis:
    "The central security question is no longer only whether an AI model can be made to behave safely. It is whether the infrastructure around that model can enforce its limits when the model, a dependency, or a privileged identity behaves adversarially.",
  sections: [
    {
      id: "the-problem",
      number: "1",
      heading: "The Problem: AI Security Extends Below and Beyond the Model",
      blocks: [
        {
          type: "paragraph",
          text: "AI security discussions often focus on prompt injection, model alignment, and unsafe outputs. Those are important risks, but they are only part of the system. A deployed AI workload also depends on operating-system boundaries, virtualisation, network policy, internal services, identity, build pipelines, package registries, and secrets."
        },
        {
          type: "paragraph",
          text: "Two incidents reported in October 2026 make that broader attack surface concrete. OpenAI described red-team experiments in which frontier-model agents found ways to escape sandboxes, reach systems through indirect network paths, and communicate across isolation boundaries. Separately, LiteLLM disclosed that a compromised 1.107.0 release reached package and container registries after attackers interfered with its release process. Microsoft’s analysis documented malicious Python startup hooks used to collect credentials [1–3]."
        },
        {
          type: "paragraph",
          text: "These are different kinds of failure. The first tests whether execution environments remain contained under deliberate pressure. The second tests whether an organization can preserve the integrity of the software it distributes. Their shared lesson is that security boundaries are only as strong as the enforcement mechanisms and trust relationships behind them."
        },
        {
          type: "callout",
          title: "A Useful Way to Read an Incident",
          steps: [
            "Boundary expected to hold",
            "Path that crossed it",
            "Privilege or trust that made it useful",
            "Control that would have interrupted it"
          ],
          text: "Instead of stopping at the headline, trace four links: the boundary that was expected to hold, the path that crossed it, the privilege or trust that made the path useful, and the control that would have interrupted the chain. This turns incident reporting into a method for assessing your own systems."
        }
      ],
      subsections: []
    },
    {
      id: "case-study-sandbox-escape",
      number: "2",
      heading: "Case Study 1: Sandbox Escape Is a Containment Problem",
      blocks: [],
      subsections: [
        {
          id: "sandbox-what-was-reported",
          number: "2.1",
          heading: "What Was Reported",
          blocks: [
            {
              type: "paragraph",
              text: "OpenAI’s October 23 account describes an internal research model that obtained limited live-internet access after exploiting a DNS resolver misconfiguration during a training run. OpenAI paused training and evaluation of its most capable models while it strengthened the environment, then resumed on October 1. In a high-compute red-team campaign, teams of agents were asked to reach the live internet, cross internal security boundaries, and communicate with agents in separate environments. The work uncovered software vulnerabilities and configuration weaknesses, including paths through internal services and communication channels that relied on shared hardware [1]."
            },
            {
              type: "paragraph",
              text: "The important distinction is between a model producing a risky answer and an agent taking actions inside a real execution environment. Once a model can run code, interact with tools, and repeatedly test its surroundings, containment becomes an infrastructure problem. A prompt policy cannot replace a boundary enforced outside the model’s control."
            }
          ]
        },
        {
          id: "trusted-service-detour",
          number: "2.2",
          heading: "Attack Path A: The Trusted-Service Detour",
          blocks: [
            {
              type: "paragraph",
              text: "A firewall can block direct outbound connections and still leave an indirect route. Consider a workload that cannot reach the public internet, but can send requests to an internal metrics or authentication service. If that service accepts a user-controlled URL and fetches it on the caller’s behalf, the workload may use the service as a proxy. The outbound request originates from a trusted internal system, so the firewall sees a permitted service making the connection rather than the isolated workload."
            },
            {
              type: "table",
              caption: "The trusted-service detour, step by step",
              columns: ["Step", "What Happens", "Security Lesson"],
              rows: [
                ["1. Restrict", "The workload is denied direct egress.", "A perimeter rule is in place."],
                ["2. Find a delegate", "The workload can reach an internal service with broader network access.", "Reachability is not the same as authorization."],
                ["3. Abuse the interface", "The service fetches a caller-controlled destination.", "A trusted service becomes a confused deputy."],
                ["4. Cross the boundary", "Traffic exits through the service’s network identity.", "Controls must cover indirect paths too."]
              ]
            },
            {
              type: "paragraph",
              text: "The design fix is not simply “add another firewall rule.” Internal services should not fetch arbitrary destinations unless that behaviour is essential. Where fetching is required, use strict destination allowlists, validate resolved addresses, block access to metadata and internal ranges, and apply egress policy to the service itself. Prefer narrow, asynchronous message paths over general-purpose proxies where possible. These are architecture recommendations derived from the attack pattern, not claims that every control was used in the reported incident."
            }
          ]
        },
        {
          id: "shared-hardware",
          number: "2.3",
          heading: "Attack Path B: Isolation Can Leak Through Shared Hardware",
          blocks: [
            {
              type: "paragraph",
              text: "Separate virtual machines can have separate kernels and memory while still sharing physical processor resources. CPU caches are one such shared resource. Cache side-channel techniques infer information from timing differences: accesses served from cache are typically faster than accesses that require data to be fetched from a lower level of memory. If one workload can influence shared cache state and another can measure the effect, the timing variation may become a communication channel."
            },
            {
              type: "paragraph",
              text: "OpenAI reported that agents in separate microVMs on shared hosts found a way to communicate using processor-cache effects without network connections or shared writable files [1]. This does not mean every shared-host deployment is automatically exploitable, nor does a side channel alone prove arbitrary data extraction. It does mean that “no network” and “no shared files” are not complete threat models when workloads share physical resources."
            },
            {
              type: "paragraph",
              text: "For high-assurance workloads, assess co-tenancy, CPU placement, cache-partitioning capabilities, scheduling, and the sensitivity of information processed on shared hardware. Treat hardware side-channel mitigations as platform-specific engineering decisions, validated against the processor, hypervisor, workload, and performance constraints. Avoid assuming that a single cache-flush instruction or one configuration flag provides universal protection."
            }
          ]
        },
        {
          id: "monitoring-trap",
          number: "2.4",
          heading: "The Monitoring Trap: Do Not Let the Workload Control Its Own Evidence",
          blocks: [
            {
              type: "paragraph",
              text: "Monitoring is useful only if the system being monitored cannot silently rewrite the evidence on which responders depend. If an agent can compromise the host or the process responsible for recording its actions, an in-band log may become part of the attack surface."
            },
            {
              type: "paragraph",
              text: "Keep high-value audit records outside the workload’s administrative domain. Send logs to a separately controlled service, restrict who can delete or alter them, preserve immutable or append-only copies where appropriate, and test whether the monitoring and stopping systems still work after simulated host compromise. A dashboard that reports “healthy” is not proof of containment if the monitored workload can tamper with the dashboard’s source of truth."
            }
          ]
        }
      ]
    },
    {
      id: "case-study-trusted-package",
      number: "3",
      heading: "Case Study 2: A Trusted Package Can Become an Execution Path",
      blocks: [],
      subsections: [
        {
          id: "package-what-was-reported",
          number: "3.1",
          heading: "What Was Reported",
          blocks: [
            {
              type: "paragraph",
              text: "LiteLLM reported that version 1.107.0 was compromised and published to PyPI and container registries on October 21, 2026. Its incident notice states that the affected PyPI release was available for roughly two hours and that several container tags pointed to compromised images for a limited period. The notice also warns that the official source tag did not contain the malicious files: the release had been built from an attacker-controlled repository [2]."
            },
            {
              type: "paragraph",
              text: "Microsoft’s October 23 analysis described credential-stealing behaviour in the affected package and malicious code that could run during normal Python interpreter startup. Python’s own documentation explains that executable import lines in `.pth` files are processed during startup by the `site` module. In other words, the application does not necessarily need to explicitly import the compromised library for startup code to run [3, 4]."
            },
            {
              type: "paragraph",
              text: "This is the key technical point: package security is not only about what a library does when a developer calls one of its functions. It is also about what code the installation and runtime machinery executes automatically."
            }
          ]
        },
        {
          id: "attack-chain",
          number: "3.2",
          heading: "Attack Chain: From Release Trust to Credential Exposure",
          blocks: [
            {
              type: "paragraph",
              text: "The supply-chain failure is therefore not one bug in one package. It is a chain of trust decisions: trust in an account, trust in a build workflow, trust in an artifact registry, and trust in runtime installation. Breaking any one of those links can limit the blast radius."
            },
            {
              type: "table",
              caption: "From release trust to credential exposure",
              columns: ["Stage", "Description"],
              rows: [
                ["1. Privileged access is compromised", "A credential or account with authority over the release process is abused."],
                ["2. The build source is redirected", "The release pipeline produces artifacts from an attacker-controlled source rather than the expected source."],
                ["3. Trusted distribution channel", "The package or image appears in a registry developers and automation already trust."],
                ["4. Installation/startup payload", "A Python startup hook can run before application code explicitly imports the affected library."],
                ["5. Secrets exposure", "Tokens, cloud credentials, developer sessions, and environment secrets may be exposed to the malicious process."]
              ]
            }
          ]
        },
        {
          id: "leaked-secrets",
          number: "3.3",
          heading: "Why Deleting a Leaked Secret Is Not Enough",
          blocks: [
            {
              type: "paragraph",
              text: "A secret committed to a public repository should be treated as compromised even if the commit is deleted or the repository history is rewritten. Copies may already exist in clones, caches, logs, or attacker-controlled storage. The relevant response is revocation and rotation, followed by investigation of what the credential could access. The LiteLLM case also demonstrates why release and cloud credentials should be scoped to the task, short-lived where possible, and separated so that one stolen token cannot silently rewrite source, approve a release, and publish artifacts [2, 3]."
            },
            {
              type: "paragraph",
              text: "For GitHub Actions, OpenID Connect can let a workflow exchange its identity for a short-lived cloud token instead of storing a long-lived cloud credential as a repository secret. The trust policy still matters: restrict which repositories, branches, environments, and workflows can request that role. OIDC reduces one class of long-lived secret exposure; it does not make a compromised workflow trustworthy by itself [5]."
            }
          ]
        }
      ]
    },
    {
      id: "what-defenders-should-change",
      number: "4",
      heading: "What Defenders Should Change",
      blocks: [],
      subsections: [
        {
          id: "containment",
          number: "4.1",
          heading: "Containment Must Survive a Single Failure",
          blocks: [
            {
              type: "bullets",
              items: [
                { lead: "Separate controls by trust boundary.", text: "A guest sandbox, host firewall, cloud perimeter, and audit pipeline should not all fail when one layer is compromised." },
                { lead: "Test indirect network paths.", text: "Review internal services that accept URLs, proxy requests, retrieve files, or expose diagnostic endpoints. Apply outbound policy to those services too." },
                { lead: "Use independent monitoring.", text: "Export logs to a separate security domain, protect deletion paths, and test response mechanisms against assumed host compromise." },
                { lead: "Treat shared hardware as part of the threat model.", text: "Evaluate co-tenancy and side-channel exposure for workloads handling sensitive data or running mutually untrusted agents." },
                { lead: "Default frontier-model training and evaluation to offline or tightly mediated access when feasible.", text: "If live access is necessary, document the exact destinations and enforcement points. OpenAI says its frontier reinforcement-learning runs use an offline interaction environment and that it has adopted a no-live-internet policy for those runs [1]." }
              ]
            }
          ]
        },
        {
          id: "provenance",
          number: "4.2",
          heading: "Software Provenance Must Be Verifiable",
          blocks: [
            {
              type: "bullets",
              items: [
                { lead: "Protect the build identity, not just the source repository.", text: "Use least-privilege permissions, isolated build environments, independent approval controls, and alerts for workflow changes." },
                { lead: "Generate and verify build provenance.", text: "SLSA provides a framework for describing and improving supply-chain security guarantees, including provenance about how an artifact was built. Provenance is useful only when consumers verify it and trust the builder’s controls [6]." },
                { lead: "Prefer short-lived, narrowly scoped credentials.", text: "Where supported, use OIDC federation for CI/CD and restrict the trust policy to the intended workflow and deployment environment [5]." },
                { lead: "Scan before publication and after installation.", text: "Secret scanning and package analysis are valuable, but neither replaces artifact verification, runtime monitoring, and the ability to revoke exposed credentials." },
                { lead: "Pin dependencies and verify artifacts.", text: "Version pinning improves repeatability, but a pinned malicious version is still malicious. Validate hashes or signatures against trusted metadata and keep a documented process for responding to compromised releases." },
                { lead: "Keep an incident playbook for poisoned packages.", text: "Identify affected versions and image digests, isolate impacted environments, rebuild from a known-good source, rotate every reachable secret, and inspect identity-provider and cloud audit logs." }
              ]
            }
          ]
        },
        {
          id: "operational-response",
          number: "4.3",
          heading: "Making Response Operational",
          blocks: [
            {
              type: "paragraph",
              text: "A useful control is one that can be tested. For each critical boundary, write down the expected behaviour and run a scenario that attempts to violate it."
            },
            {
              type: "bullets",
              items: [
                { lead: "Egress test:", text: "From a restricted workload, attempt direct internet access and access through every internal service it can reach." },
                { lead: "Logging test:", text: "Simulate compromise of the workload host and confirm that central audit records remain available and cannot be deleted by the workload identity." },
                { lead: "Release test:", text: "Verify that an unauthorized workflow change cannot build or publish a production artifact, even if one maintainer credential is compromised." },
                { lead: "Credential test:", text: "Confirm that exposed secrets can be revoked quickly and that the organization can enumerate which systems each secret could access." },
                { lead: "Recovery test:", text: "Rebuild an affected environment from trusted inputs rather than relying on uninstalling a package or deleting a suspicious file." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "underlying-lesson",
      number: "5",
      heading: "Two Incidents, One Underlying Lesson",
      blocks: [
        {
          type: "paragraph",
          text: "The sandbox research and the LiteLLM compromise occupy different layers of the stack, but both challenge an overly simple assumption: that a boundary remains trustworthy because it exists on paper."
        },
        {
          type: "paragraph",
          text: "A firewall rule does not guarantee isolation if an internal service can relay requests. A virtual machine boundary does not eliminate every channel created by shared physical hardware. A clean-looking source repository does not prove that the published artifact was built from that source. A deleted secret is not a revoked secret. And a log is not independent evidence if the system under investigation can alter it."
        },
        {
          type: "paragraph",
          text: "The practical objective is not to find one perfect control. It is to design systems where a single compromised component cannot grant unrestricted reach, erase evidence, or turn one credential into control over an entire delivery pipeline. That means layered containment, least privilege, verifiable builds, short-lived credentials, independent telemetry, and regular adversarial testing."
        },
        {
          type: "paragraph",
          text: "As AI agents become more capable at exploring software and infrastructure, the speed and persistence of their actions raise the cost of weak boundaries. The answer is not to treat every AI workload as uniquely magical. It is to apply mature security engineering more rigorously: assume controls will be tested, map the trust paths between components, and verify that containment still holds when one layer fails."
        }
      ],
      subsections: []
    }
  ],
  references: [
    {
      number: 1,
      source: "OpenAI",
      title: "Securing our frontier model training environment",
      detail: "23 October 2026",
      url: "https://openai.com/index/securing-our-frontier-model-training-environment/"
    },
    {
      number: 2,
      source: "LiteLLM",
      title: "Contained: Oct 21, 2026 LiteLLM release v1.107.0 compromised",
      detail: "incident notice, updated 21 October 2026",
      url: "https://docs.litellm.ai/blog/security-incident-oct-21-2026"
    },
    {
      number: 3,
      source: "Microsoft Security Research",
      title: "Inside the LiteLLM 1.107.0 supply chain compromise: Credential theft through Python startup hooks",
      detail: "23 October 2026",
      url: "https://www.microsoft.com/en-us/security/blog/2026/10/23/inside-the-litellm-1-107-0-supply-chain-compromise-credential-theft-through-python-startup-hooks/"
    },
    {
      number: 4,
      source: "Python Software Foundation",
      title: "site — Site-specific configuration hook",
      detail: "Python documentation",
      url: "https://docs.python.org/3/library/site.html"
    },
    {
      number: 5,
      source: "GitHub Docs",
      title: "OpenID Connect",
      url: "https://docs.github.com/en/actions/concepts/security/openid-connect"
    },
    {
      number: 6,
      source: "SLSA",
      title: "SLSA specification",
      detail: "supply-chain security framework and build provenance guidance",
      url: "https://slsa.dev/spec/draft/"
    }
  ]
};

// Plain-text helpers used by the insights list, search, RSS and reading time.
function plain(text: string) {
  return text
    .replace(/\s*\[\d+(?:\s*[–,-]\s*\d+)*\]/g, "")
    .replace(/`/g, "");
}

export function articleBlocksToText(blocks: ArticleBlock[]) {
  const paragraphs: string[] = [];
  const bullets: string[] = [];

  for (const block of blocks) {
    if (block.type === "paragraph") {
      paragraphs.push(plain(block.text));
    } else if (block.type === "callout") {
      paragraphs.push(plain(block.text));
    } else if (block.type === "table") {
      for (const row of block.rows) {
        bullets.push(plain(row.join(" — ")));
      }
    } else {
      for (const item of block.items) {
        bullets.push(plain(`${item.lead} ${item.text}`));
      }
    }
  }

  return { paragraphs, bullets };
}

export function articleWordCount() {
  const text = [
    aiInfrastructureArticle.thesis,
    ...aiInfrastructureArticle.sections.flatMap((section) => {
      const own = articleBlocksToText(section.blocks);
      const nested = section.subsections.map((sub) =>
        articleBlocksToText(sub.blocks)
      );
      return [
        section.heading,
        ...own.paragraphs,
        ...own.bullets,
        ...nested.flatMap((n) => [...n.paragraphs, ...n.bullets])
      ];
    })
  ].join(" ");

  return text.split(/\s+/).filter(Boolean).length;
}
