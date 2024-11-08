import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableUsers from "@/components/Tables/TableUsers";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const UsersPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Usuários" />

      <div className="flex flex-col gap-10">
        <TableUsers />
      </div>
    </DefaultLayout>
  );
};

export default UsersPage; 