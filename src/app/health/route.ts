export const dynamic =
  "force-dynamic";

export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "nobreach-web"
    },
    {
      status: 200,

      headers: {
        "Cache-Control":
          "no-store, max-age=0"
      }
    }
  );
}
