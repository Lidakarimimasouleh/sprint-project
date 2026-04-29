import type { Metadata, Viewport } from "next";
import StudioLoader from "./StudioLoader";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <StudioLoader />;
}
