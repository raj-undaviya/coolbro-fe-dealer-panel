import { Bell, Menu, Search, Settings } from "lucide-react";

export function AdminTopbar({ setOpen }) {
    return (
        <>
            <header className="sticky top-0 z-30"
                style={{
                    backgroundColor: "var(--background-color)",
                    borderBottom: "1px solid #eef2f7",
                }}
            >

                <div className="h-15 px-4 md:px-8 flex items-center justify-between gap-5">

                    {/* Left Side */}
                    <div className="flex items-center gap-4">

                        {/* Mobile Menu */}
                        <button
                            onClick={() => setOpen(true)}
                            className="lg:hidden shrink-0"
                            style={{ color: "var(--text-light-color)" }}
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">

                        {/* Search Box */}
                        <div className="hidden md:flex items-center gap-3 px-4 h-10 w-[320px] rounded-full"
                            style={{
                                backgroundColor: "var(--background-light-color)",
                                border: "1px solid var(--border-color)",
                            }}
                        >

                            <Search className="h-4 w-4 shrink-0"
                                style={{ color: "var(--text-light-color)" }}
                            />

                            <input
                                type="text"
                                placeholder="Search orders..."
                                className="bg-transparent outline-none text-sm w-full"
                                style={{ color: "var(--text-color)" }}
                            />
                        </div>

                        {/* Bell */}
                        <button className="h-11 w-11 rounded-full grid place-items-center transition-default hover:bg-slate-100"
                            style={{ color: "var(--text-light-color)" }}
                        >
                            <Bell className="h-5 w-5" />
                        </button>

                        {/* Settings */}
                        <button className="h-11 w-11 rounded-full grid place-items-center transition-default hover:bg-slate-100"
                            style={{ color: "var(--text-light-color)" }}
                        >
                            <Settings className="h-5 w-5" />
                        </button>

                        {/* User Profile */}
                        <button className="flex items-center justify-center rounded-full overflow-hidden border-2"
                            style={{ borderColor: "var(--border-color)" }}
                        >
                            <img
                                src=""
                                alt="profile"
                                className="w-11 h-11 object-cover"
                            />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}