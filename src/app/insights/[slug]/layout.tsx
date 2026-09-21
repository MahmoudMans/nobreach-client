import type {
  ReactNode
} from "react";


export default async function InsightDetailLayout({
  children,
  params
}: {
  children:
    ReactNode;

  params:
    Promise<{
      slug:
        string;
    }>;
}) {
  const {
    slug
  } =
    await params;


  return (
    <div
      data-insight-article={
        slug
      }
    >
      {
        children
      }
    </div>
  );
}
