import { ReactElement } from "react";
import { FormAbout } from "../../components/dashboard";
import { FormAboutList } from "../../components/dashboard/form-about-list";
import { Dasboard } from "../../layout/dashboard/dasboard";
import { NextPageWithLayout } from "../_app";

const Admin: NextPageWithLayout = () => {
  return (
    <div>
      <FormAbout />

      <FormAboutList />
    </div>
  );
};

Admin.getLayout = function getLayout(page: ReactElement) {
  return <Dasboard>{page}</Dasboard>;
};

export default Admin;
