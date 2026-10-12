import { permanentRedirect } from "next/navigation";

export default async function LegacyReelsPage({ searchParams }) {
  const { category, index } = await searchParams;
  const destinations =
    category === "projects"
      ? { 0: "/work/gymrocks" }
      : { 0: "/work/coursemix", 1: "/work/membership-tool" };
  permanentRedirect(
    (Object.hasOwn(destinations, index ?? "0")
      ? destinations[index ?? "0"]
      : null) ?? (category === "projects" ? "/#work" : "/#background"),
  );
}
