import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="drawer drawer-mobile">
        <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <main className="w-full ">{children}</main>
          <label
            htmlFor="drawer-menu"
            className="btn btn-neutral hover:bg-primary drawer-button lg:hidden absolute left-6 top-6"
          ></label>
        </div>
      </div>
    </div>
  );
}
