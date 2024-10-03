import Sidebar from "@/Components/AdminComponents/Sidebar";

export default function Layout({children}) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
            {children}
        </div>
      </div>
    </>
  );
}
