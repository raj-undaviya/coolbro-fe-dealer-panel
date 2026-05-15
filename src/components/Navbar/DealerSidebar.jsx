import { LayoutDashboard, ShoppingCart, Wallet, Truck, LogOut, X, Headset } from "lucide-react";
import { NavLink } from "react-router-dom";

const nav = [
    { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/orders", label: "Orders", icon: ShoppingCart },
    { path: "/admin/earnings", label: "Earnings", icon: Wallet },
    { path: "/admin/distributors", label: "Distributors", icon: Truck },
];

export function AdminSidebar({ open, setOpen }) {
    return (
        <>
            {/* Mobile Overlay */}
            {open && (
                <div onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 min-h-screen w-64 flex flex-col transition-default lg:static
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
                style={{
                    backgroundColor: "var(--background-color)",
                    borderRight: "1px solid var(--border-color)",
                }}
            >

                {/* Logo Section */}
                <div className="flex items-center justify-between px-6 py-5"
                    style={{ borderBottom: "1px solid var(--border-color)" }}
                >
                    <div>
                        <h1 className="text-xl font-bold"
                            style={{ color: "var(--primary-color)" }}
                        >
                            CoolBro Dealers
                        </h1>

                        <h3 className="font-bold">Main Menu</h3>

                        <p className="text-xs mt-1"
                            style={{ color: "var(--text-light-color)" }}
                        >
                            Dealer Panel
                        </p>
                    </div>

                    {/* Mobile Close Button */}
                    <button onClick={() => setOpen(false)}
                        className="lg:hidden"
                    >
                        <X className="w-5 h-5"
                            style={{ color: "var(--text-color)" }}
                        />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-5 space-y-2">

                    {nav.map(({ path, label, icon: Icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium *:transition-default group
                                ${isActive
                                    ? ""
                                    : "hover:bg-(--background-light-color)"
                                }`
                            }
                            style={({ isActive }) => ({
                                backgroundColor: isActive
                                    ? "var(--primary-light-color)"
                                    : "transparent",

                                color: isActive
                                    ? "var(--primary-color)"
                                    : "var(--text-light-color)",

                                borderRight: isActive
                                    ? "3px solid var(--primary-color)"
                                    : "3px solid transparent",
                            })}
                        >
                            <Icon className="w-5 h-5" />

                            <span>{label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="p-4"
                    style={{ borderTop: "1px solid var(--border-color)" }}
                >

                    {/* Support */}
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-default hover:bg-(--background-light-color)"
                    >
                        <Headset className="w-5 h-5"
                            style={{ color: "var(--text-light-color)" }}
                        />

                        <span className="text-sm font-medium"
                            style={{ color: "var(--text-color)" }}
                        >
                            Support
                        </span>
                    </button>

                    {/* Logout */}
                    <button className="mt-2 w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-default hover:bg-red-50"
                    >
                        <LogOut className="w-5 h-5 text-red-500" />

                        <span className="text-sm font-medium text-red-500">
                            Logout
                        </span>
                    </button>
                </div>
            </aside>
        </>
    );
}