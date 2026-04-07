import { Outlet } from "react-router-dom";
import { Footer } from "../../../common/Footer";

export function HomeLayout() {
  return (
    <main className="text-xl overflow-x-hidden bg-page dark:bg-pageDark dark:text-white">
      <Outlet />
      <Footer />
    </main>
  );
}
