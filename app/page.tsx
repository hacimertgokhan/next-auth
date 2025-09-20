"use client";

import {signIn} from "next-auth/react";

export default function Home() {
  return (
      <div className="bg-[#09090b] text-[#e2e2e2] font-sans min-h-screen flex flex-col items-center justify-center p-4 antialiased">
        <main className="w-full max-w-2xl space-y-8">

          {/* Makale Başlığı */}
          <header className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Proje Görevi: Modern Kimlik Doğrulama Sistemi
            </h1>
            <p className="mt-3 text-sm text-neutral-400">
              Auth0, Next.js Middleware ve JWT kullanarak güvenli, SOLID prensiplerine uygun ve ölçeklenebilir bir kimlik doğrulama sistemi geliştirme rehberi.
            </p>
          </header>

          {/* Butonlar */}
          <div className="flex items-center justify-center gap-4">
            <button
                onClick={() => signIn("auth0")}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl"
            >
              Giriş yap
            </button>
          </div>

          {/* Ayırıcı */}
          <hr className="border-neutral-800" />

          {/* Görev Listesi (Makale İçeriği) */}
          <article className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Görev Adımları</h2>

            <div className="space-y-4">
              <TaskItem
                  number="1"
                  title="GitHub Repository Kurulumu"
                  description="Proje için 'next-auth' adında public bir repo oluşturulacak. Tüm geliştirmeler, düzenli commit'lerle 'dev/v1.0.0' branch'i üzerinden ilerleyecektir."
              />
              <TaskItem
                  number="2"
                  title="Auth0 ve NextAuth Entegrasyonu"
                  description="Auth0, OAuth provider olarak yapılandırılacak ve NextAuth.js kullanılarak Next.js uygulamasına entegre edilecektir. Oturum yönetimi bu katmanda sağlanacaktır."
              />
              <TaskItem
                  number="3"
                  title="Middleware ile Sayfa Koruma"
                  description="JWT tabanlı oturum kontrolü ile yetkisiz kullanıcıların belirli sayfalara erişimini engelleyen bir Next.js Middleware sistemi geliştirilecektir."
              />
              <TaskItem
                  number="4"
                  title="Kod Kalitesi & SOLID Prensipleri"
                  description="Yazılan tüm kodlar, sürdürülebilir, okunabilir ve test edilebilir olması için SOLID prensiplerine uygun olarak tasarlanacaktır."
              />
              <TaskItem
                  number="5"
                  title="12-Factor App Uyumluluğu"
                  description="Uygulama yapılandırması, ortam değişkenleri için '.env' dosyaları aracılığıyla yönetilerek 12-Factor metodolojisine tam uyum sağlanacaktır."
              />
              <TaskItem
                  number="6"
                  title="Test & Validasyon"
                  description="Geliştirilen kimlik doğrulama akışlarının tamamı manuel olarak test edilecek ve sistemin beklendiği gibi çalıştığı doğrulanacaktır."
              />
            </div>
          </article>

          <footer className="text-center pt-4">
            <p className="text-xs text-neutral-500">
              Bu görev, modern frontend geliştirme pratiklerini pekiştirmek amacıyla tasarlanmıştır.
            </p>
          </footer>
        </main>
      </div>
  );
}

interface TaskItemProps {
  number: string;
  title: string;
  description: string;
}

function TaskItem({ number, title, description }: TaskItemProps) {
  return (
      <div>
        <h3 className="font-semibold text-base text-[#e2e2e2]">
          <span className="text-neutral-500 mr-2">{number}.</span>
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
  );
}