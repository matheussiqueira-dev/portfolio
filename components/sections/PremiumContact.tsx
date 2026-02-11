"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["contact"];
};

const spring = { type: "spring", stiffness: 260, damping: 20 } as const;

const links = [
  {
    id: "email",
    href: "mailto:matheussiqueirahub@gmail.com",
    value: "matheussiqueirahub@gmail.com",
    icon: Mail,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/matheussiqueira-dev/",
    value: "/matheussiqueira-dev",
    icon: Linkedin,
  },
  {
    id: "github",
    href: "https://github.com/matheussiqueira-dev",
    value: "/matheussiqueira-dev",
    icon: Github,
  },
  {
    id: "whatsapp",
    href: "https://wa.me/5581999203683",
    value: "+55 81 99920-3683",
    icon: MessageCircle,
  },
] as const;

export default function PremiumContact({ content }: Props) {
  return (
    <section id="contact" className="px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={spring}
        >
          <Card className="p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  {content.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tighter text-transparent sm:text-4xl">
                  <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text">
                    {content.title}
                  </span>
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {content.description}
                </p>
                <p className="mt-5 text-sm text-zinc-300">{content.ctaTitle}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {links.map((item, index) => {
                  const Icon = item.icon;
                  const label = content.cards[item.id];

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      target={item.id === "email" ? undefined : "_blank"}
                      rel={item.id === "email" ? undefined : "noopener noreferrer"}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ ...spring, delay: index * 0.08 }}
                      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                          {label}
                        </span>
                        <Icon
                          size={16}
                          className="text-zinc-400 transition-colors group-hover:text-white"
                        />
                      </div>
                      <p className="mt-3 text-sm font-medium text-zinc-200">
                        {item.value}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
