// app/itc-reconcile/page.js   ← create this file at this path



import Navbar from "../components/navbar";
import GSTReconcile from "../components/GSTReconcile";

export const metadata = {
  title: "ITC Reconciliation — GSTInsight",
};

export default function ITCReconcilePage() {
  return (
    <>
      <Navbar />
      <GSTReconcile />
    </>
  );
}
