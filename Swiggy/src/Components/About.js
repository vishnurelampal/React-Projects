import { Suspense, lazy } from "react";

export default function About() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}></Suspense>
      <h1>About Us</h1>
      <h1></h1>
      <h1></h1>
    </div>
  );
}
