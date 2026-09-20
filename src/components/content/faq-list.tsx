import styles from "./faq-list.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({
  items
}: FaqListProps) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <details
          className={styles.item}
          key={item.question}
        >
          <summary
            className={
              styles.summary
            }
          >
            <span>
              {item.question}
            </span>

            <span
              className={styles.icon}
              aria-hidden="true"
            >
              +
            </span>
          </summary>

          <p
            className={
              styles.answer
            }
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
