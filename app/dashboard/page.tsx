"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

function LoadingSpinner() {
  return (
      <div className="flex justify-center items-center h-full">
        <div className="w-6 h-6 border-2 border-neutral-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
  );
}

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
        <div className="bg-[#09090b] text-[#e2e2e2] font-sans min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
    );
  }

  if (status === "unauthenticated") {
    return (
        <div className="bg-[#09090b] text-[#e2e2e2] font-sans min-h-screen flex flex-col items-center justify-center p-4 antialiased">
          <p>Bu sayfayı görüntülemek için giriş yapmalısınız.</p>
        </div>
    );
  }

  return (
      <div className="bg-[#09090b] text-[#e2e2e2] font-sans min-h-screen flex flex-col items-center justify-center p-4 antialiased">
        <main className="w-full max-w-2xl space-y-8">

          <header className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Kontrol Paneli
            </h1>
          </header>

          <hr className="border-neutral-800" />

          <section className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-neutral-400">Hoş geldiniz,</p>
                <h2 className="text-xl font-semibold text-white">
                  {session?.user?.name || "Kullanıcı"}
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  {session?.user?.email}
                </p>
              </div>
            </div>
          </section>

          <article className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Panel İçeriği</h3>
            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <p className="text-sm text-neutral-400">
                Burası korumalı bir alandır. Sadece giriş yapmış kullanıcılar bu içeriği görebilir. Buraya uygulamanızın ana bileşenlerini veya verilerini ekleyebilirsiniz.
              </p>
            </div>
          </article>

          <footer className="text-center pt-4">
            <p className="text-xs text-neutral-500">
              Oturum başarıyla doğrulandı.
            </p>
          </footer>
        </main>
      </div>
  );
}