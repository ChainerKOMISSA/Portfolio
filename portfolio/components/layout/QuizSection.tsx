"use client";

import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { TbBinaryTree } from "react-icons/tb";
import { MdDesktopWindows } from "react-icons/md";
import { MdOutlineShield } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";

const quizCategories = [
  {
    label: "Algorithms",
    count: 12,
    icon: <TbBinaryTree className="w-6 h-6 text-violet-400" />,
    iconBg: "bg-violet-500/20",
    href: "/blog/quiz/algorithms",
  },
  {
    label: "Frontend",
    count: 45,
    icon: <MdDesktopWindows className="w-6 h-6 text-cyan-400" />,
    iconBg: "bg-cyan-500/20",
    href: "/blog/quiz/frontend",
  },
  {
    label: "DevSecOps",
    count: 18,
    icon: <MdOutlineShield className="w-6 h-6 text-emerald-400" />,
    iconBg: "bg-emerald-500/20",
    href: "/blog/quiz/devsecops",
  },
  {
    label: "System Design",
    count: 32,
    icon: <SiHiveBlockchain className="w-6 h-6 text-rose-400" />,
    iconBg: "bg-rose-500/20",
    href: "/blog/quiz/system-design",
  },
];

const QuizSection = () => {
  return (
    <section className="relative w-full py-8 px-4 bg-black-100 text-white overflow-hidden rounded-5xl">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-black-100 via-black/10 to-white/50 blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-8">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-5xl font-bold leading-tight"
          >
            Testez vos{" "}
            <span className="text-transparent bg-clip-text bg-purple">
              connaissances
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-white/60 max-w-xl"
          >
            Quelques questions pour challenger ce que vous savez ou découvrir ce que vous ne saviez pas encore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex gap-4 flex-wrap"
          >
            <Link
              href="/blog/quiz"
              className="px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 font-medium transition"
            >
              Explorer les quiz
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — QUIZ CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 grid grid-cols-2 gap-4"
        >
          {quizCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <Link
                href={cat.href}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl
                  bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-500/40
                  hover:scale-105 transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.iconBg}`}>
                  {cat.icon}
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {cat.label}
                  </p>
                  <p className="text-xs text-white/40 tracking-widest uppercase mt-0.5">
                    {cat.count} quizzes
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default QuizSection;