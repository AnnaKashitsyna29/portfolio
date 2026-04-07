import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ProjectStubPage } from "../modules/home";
import { ScrepcaPage } from "../modules/screpca";
import { HomeLayout } from "../modules/home/ui/HomeLayout";
import { PolkaPage } from "../modules/polka/ui/PolkaPage";
import { BazarPage } from "../modules/bazar/ui/BazarPage";
import { BiocadPage } from "../modules/biocad/ui/BiocadPage";
import { GazpromPage } from "../modules/gazprom-neft/ui/GazpormPage";
import { ScrollToTop } from "@/common/ScrollToTop";

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects/skrepka" element={<ScrepcaPage />} />
          <Route path="/projects/polka" element={<PolkaPage />} />
          <Route path="/projects/bazar" element={<BazarPage />} />
          <Route path="/projects/biocad" element={<BiocadPage />} />
          <Route path="/projects/gazprom-neft" element={<GazpromPage />} />
          <Route path="/projects/:slug" element={<ProjectStubPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
