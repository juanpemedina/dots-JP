import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      // <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
