import { redirect } from "next/navigation";

/** AI design studio paused — route visitors to human consultation instead. */
export default function DesignPage() {
  redirect("/contact?intent=design");
}
