import { permanentRedirect } from "next/navigation";

// Preserve old shared URLs while retiring the video-feed navigation.
export default async function LegacyContentPage({ params }) {
  const { id } = await params;
  const destinations = {
    resume: "/resume.pdf",
    "connect-with-me": "/#contact",
    "brock-university-highlight": "/#background",
    "work-authorization": "/#contact",
  };
  permanentRedirect(Object.hasOwn(destinations, id) ? destinations[id] : "/#work");
}
