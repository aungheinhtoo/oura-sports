import "./global.css";

export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" data-theme="light">
            <body>
                <div className="navbar bg-base-300">
                    <a href={"/"} className="btn btn-ghost normal-case text-xl">
                        oura sports
                    </a>
                </div>
                {children}
            </body>
        </html>
    );
}
