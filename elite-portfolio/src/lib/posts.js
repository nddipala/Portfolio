export const posts = [
  {
    slug: 'spring-kafka-resilience',
    title: 'Designing Resilient Microservices with Spring Boot & Kafka',
    date: '2025-08-10',
    excerpt: 'Patterns for retries, idempotency, outbox, and observability in high-throughput systems on AWS.',
    content: `# Resilient Microservices with Spring Boot & Kafka

When your system scales, failures become normal - not exceptional. This post shows how I structure Java services on Spring Boot with Kafka to handle retries, idempotency, delivery guarantees, and end-to-end observability.

## Architecture Overview
- **API Layer**: Spring Boot (WebFlux when backpressure matters)
- **Messaging**: Kafka topics per bounded context, DLQs for poison messages
- **Storage**: RDBMS (PostgreSQL) for strong consistency + Redis for hot paths
- **Infra**: Docker + Kubernetes, AWS MSK, Prometheus, ELK

## Idempotency & Exactly-Once(ish)
- Use an **Outbox Table** + CDC (Debezium) so DB writes and Kafka publishes are atomic at business level.
- Maintain **idempotency keys** per request to drop duplicates.
- Consumers implement **upsert** semantics with natural keys.

## Retries & Backoff
- **Producer**: bounded retries + exponential backoff; drop to DLQ after N attempts.
- **Consumer**: handle deserialization errors distinctly; keep poison messages out of the main flow.

## Observability
- **Metrics**: latency percentiles, consumer lag, DLQ rate.
- **Logs**: correlation IDs end-to-end (HTTP + Kafka + DB).
- **Tracing**: OpenTelemetry to see cross-service hops.

## Sample Code (Producer)
\`\`\`java
@Service
public class OrderPublisher {
  private final KafkaTemplate<String, OrderEvent> kafka;
  public void publish(OrderEvent evt){
    kafka.send("orders.v1", evt.getId(), evt)
      .addCallback(r -> {}, ex -> log.error("Publish failed", ex));
  }
}
\`\`\`

## Takeaways
Resilience is not a library - it is a set of habits: strong contracts, idempotency, DLQs, and relentless observability.`
  },
  {
    slug: 'react-performance-techniques',
    title: 'React Performance Techniques That Actually Move the Needle',
    date: '2025-08-05',
    excerpt: 'A practical checklist: memoization, virtualization, code-splitting, and measuring what matters.',
    content: `# React Performance Techniques That Actually Move the Needle

Most optimizations are wasted without measurement. Start with **Lighthouse** and **React Profiler** to find hot paths.

## Rendering Hygiene
- Prefer **pure components**; wrap expensive children in \`React.memo\`.
- Hoist constant arrays/objects; memoize callbacks with \`useCallback\`.
- Defer hidden UI with \`lazy()\` + \`Suspense\`.

## Data & Lists
- **Virtualize** long lists (e.g., react-window) to render only what is visible.
- Use **SWR/React Query** for cache + de-duped requests.
- Collapse chatty network calls; batch when possible.

## Bundles
- Code-split routes and heavy components.
- Analyze bundles with \`rollup-plugin-visualizer\`.

## Perceived Performance
- Add **skeletons**/**shimmers** and optimistic UI for key flows.

Measure + optimize + measure again.`
  },
  {
    slug: 'pose-estimation-coaching',
    title: 'Pose Estimation to Coaching: From Landmarks to Feedback',
    date: '2025-07-28',
    excerpt: 'Turning skeletal keypoints into actionable feedback for sports such as cricket stance.',
    content: `# Pose Estimation to Coaching

Raw keypoints are not feedback. To coach, translate geometry into language.

## Pipeline
1. **Landmarks**: MediaPipe/MoveNet gives 2D/3D joints.
2. **Features**: derive joint angles (knee, elbow, hip), velocities, and symmetry.
3. **Rules/Models**: rule-based thresholds or trained classifier for faults.
4. **Feedback**: human-readable coaching cues with severity.

## Example: Batting Stance
- **Head Stability**: variance threshold -> "Keep your head steady during the backlift."
- **Elbow Angle**: less than 60 degrees at impact -> "Open your front elbow to free the swing."
- **Hip-Knee Alignment**: drift -> "Square your hips before the downswing."

## UX Tips
- Overlay dots and lines, color-code faults, and auto-generate a clip with captions.

From joints to judgment to coaching - close the loop.`
  },
  {
    slug: 'cloud-cost-visibility',
    title: 'Cloud Cost Visibility with AWS Athena, S3, and Lambda',
    date: '2025-07-21',
    excerpt: 'Build a FinOps cost lens that detects anomalies and sends alerts.',
    content: `# Cloud Cost Visibility (Athena + S3 + Lambda)

## Why
Unseen spend grows. You need daily aggregation, anomaly detection, and alerting.

## Build
- **Data**: CUR to S3, partition by month/day.
- **Query**: Athena SQL for service/account tags.
- **Function**: Lambda scheduled daily to compile trends and anomaly deltas.
- **Notify**: SNS/Slack alerts with top drivers.

## Dashboard
Athena + QuickSight or a lightweight React dashboard.`
  },
  {
    slug: 'interview-ready-system-design',
    title: 'System Design: A Practical Template You Can Reuse',
    date: '2025-07-14',
    excerpt: 'A reusable checklist for 45-60 minute design rounds.',
    content: `# System Design Template

## 0. Clarify
Use cases, constraints, SLAs, read/write ratio, traffic shape.

## 1. High-Level
API, core components, data flows, back-of-envelope sizing.

## 2. Deep Dives
- Data model and sharding
- Caching and CQRS
- Async processing (Kafka or SQS)
- Storage choices (SQL or NoSQL)
- Consistency and failure modes

## 3. Observability & Ops
Dashboards, SLOs, rollouts, backfills.

This structure keeps you fast and complete.`
  }
]
