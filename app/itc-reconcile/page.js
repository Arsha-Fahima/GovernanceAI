// app/itc-reconcile/page.js   ← create this file at this path

import Navbar from "../components/navbar";
import GSTReconcilePage from "../components/GSTReconcile";

export default function Page() {
  return (
    <>
      <Navbar />
      <GSTReconcilePage />
    </>
  );
}