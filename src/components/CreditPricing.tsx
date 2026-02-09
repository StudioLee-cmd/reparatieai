"use client";
import React from 'react';
import { FiPhone, FiVideo, FiEdit3, FiMessageSquare, FiShare2, FiMail, FiImage, FiPieChart, FiCamera, FiFileText, FiPhoneMissed, FiInbox } from 'react-icons/fi';

const includedItems = [
    { title: "Voice AI (Software License)", subtitle: "Excl. belkosten", icon: <FiPhone size={24} /> },
    { title: "Website Chatbot", subtitle: "Onbeperkt inbegrepen", icon: <FiMessageSquare size={24} /> },
    { title: "Workflow AI (Automations)", subtitle: "Onbeperkt inbegrepen", icon: <FiShare2 size={24} /> },
    { title: "Review Manager", subtitle: "Onbeperkt inbegrepen", icon: <FiMessageSquare size={24} /> },
    { title: "Centrale Inbox", subtitle: "Onbeperkt inbegrepen", icon: <FiInbox size={24} /> },
    { title: "Email Inbox AI (Workflow)", subtitle: "Onbeperkt inbegrepen", icon: <FiMail size={24} /> },
    { title: "Factuur AI", subtitle: "Onbeperkt inbegrepen", icon: <FiFileText size={24} /> },
    { title: "Social Planner", subtitle: "Onbeperkt inbegrepen", icon: <FiShare2 size={24} /> },
    { title: "Gemiste Oproep SMS (Software)", subtitle: "Excl. SMS (WhatsApp optie +€20 p/m)", icon: <FiPhoneMissed size={24} /> },
    { title: "Image AI (Lite)", subtitle: "Onbeperkt inbegrepen", icon: <FiImage size={24} /> },
    { title: "Content AI (Basis)", subtitle: "Onbeperkt inbegrepen", icon: <FiEdit3 size={24} /> },
];

const paygItems = [
    { title: "SEO Blog AI (Idee)", cost: "1 Credit", icon: <FiEdit3 size={24} /> },
    { title: "SEO Blog AI (Artikel)", cost: "2 Credits", icon: <FiEdit3 size={24} /> },
    { title: "SEO Blog AI (Editor)", cost: "1 Credit (Binnenkort)", icon: <FiEdit3 size={24} /> },
    { title: "Image AI (2K)", cost: "1 Credit", icon: <FiImage size={24} /> },
    { title: "Image AI (4K)", cost: "2 Credits", icon: <FiImage size={24} /> },
    { title: "Video AI (10s)", cost: "5 Credits", icon: <FiVideo size={24} /> },
    { title: "Social Media AI (Idee)", cost: "1 Credit", icon: <FiShare2 size={24} /> },
    { title: "Social Media AI (Image)", cost: "1 Credit", icon: <FiShare2 size={24} /> },
    { title: "Social Media AI (Video)", cost: "5 Credits", icon: <FiShare2 size={24} /> },
    { title: "Sales Deck AI (5 slides)", cost: "4 Credits", icon: <FiPieChart size={24} /> },
    { title: "Sales Deck AI (10 slides)", cost: "8 Credits", icon: <FiPieChart size={24} /> },
    { title: "Telefoon & SMS Kosten", cost: "Pay-as-you-go", icon: <FiPhone size={24} /> },
];

const CreditPricing: React.FC = () => {
    return (
        <div id="credit-pricing" className="py-12 bg-gray-50 dark:bg-[var(--hero-background)] rounded-3xl border border-gray-200 dark:border-[var(--card-border)] mt-12 scroll-mt-20">
            <div className="text-center mb-10 px-5">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-[var(--foreground)]">Transparant over de verbruikskosten</h3>
                <p className="text-gray-600 dark:text-[var(--foreground-accent)] max-w-3xl mx-auto mb-4">
                    <strong>Let op:</strong> Het Unlimited Plan dekt de <u>software</u>. Externe kosten (zoals belminuten) en creatieve AI-generaties (zoals afbeeldingen) vallen hierbuiten.
                </p>

                {/* Credit Packs */}
                <div className="mt-8 max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200 dark:border-[var(--card-border)] bg-white dark:bg-[var(--card-background)] shadow-sm">
                    <div className="grid grid-cols-4 bg-gray-100 dark:bg-[var(--hero-background)] border-b border-gray-200 dark:border-[var(--card-border)] text-sm font-semibold p-4">
                        <div className="text-left text-gray-900 dark:text-[var(--foreground)]">Pakket</div>
                        <div className="text-center text-gray-900 dark:text-[var(--foreground)]">Credits</div>
                        <div className="text-center text-gray-900 dark:text-[var(--foreground)]">Per Credit</div>
                        <div className="text-right text-gray-900 dark:text-[var(--foreground)]">Prijs</div>
                    </div>
                    <div className="grid grid-cols-4 p-4 border-b border-gray-200 dark:border-[var(--card-border)] last:border-0 hover:bg-gray-50 dark:hover:bg-[var(--hero-background)] transition-colors items-center">
                        <div className="text-left font-medium text-gray-900 dark:text-[var(--foreground)]">Small Pack</div>
                        <div className="text-center text-gray-600 dark:text-[var(--foreground-accent)]">40</div>
                        <div className="text-center text-gray-600 dark:text-[var(--foreground-accent)] text-xs">€1.25</div>
                        <div className="text-right font-bold text-orange-500 dark:text-[var(--secondary)]">€50,-</div>
                    </div>
                    <div className="grid grid-cols-4 p-4 border-b border-gray-200 dark:border-[var(--card-border)] last:border-0 hover:bg-gray-50 dark:hover:bg-[var(--hero-background)] transition-colors items-center">
                        <div className="text-left font-medium text-gray-900 dark:text-[var(--foreground)]">Large Pack</div>
                        <div className="text-center text-gray-600 dark:text-[var(--foreground-accent)]">180</div>
                        <div className="text-center text-gray-600 dark:text-[var(--foreground-accent)] text-xs">€1.11</div>
                        <div className="text-right font-bold text-orange-500 dark:text-[var(--secondary)]">€200,-</div>
                    </div>
                    <div className="grid grid-cols-4 p-4 border-b border-gray-200 dark:border-[var(--card-border)] last:border-0 hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-colors items-center bg-amber-50 dark:bg-amber-900/30 border-t border-amber-300 dark:border-amber-500/30">
                        <div className="text-left font-medium text-amber-700 dark:text-amber-400">Agency Pack</div>
                        <div className="text-center text-gray-600 dark:text-[var(--foreground-accent)]">1000</div>
                        <div className="text-center text-amber-600 dark:text-amber-500/60 text-xs">€1.00</div>
                        <div className="text-right font-bold text-amber-600 dark:text-amber-500">€1000,-</div>
                    </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-[var(--foreground-accent)] text-center mt-4 max-w-2xl mx-auto">
                    💡 <strong>Belangrijk:</strong> Credits zijn 1 jaar geldig. Credits uit maandabonnementen vervallen per maand.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-5 max-w-6xl mx-auto">
                {/* Column 1: Included in Unlimited */}
                <div className="bg-white dark:bg-[var(--card-background)] p-6 rounded-2xl border border-green-300 dark:border-green-700/50 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                    <h4 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                        <span>✅</span> Inbegrepen in Unlimited Plan
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-[var(--foreground-accent)] mb-6">
                        Onbeperkte toegang tot de software-motor. Je betaalt hier <u>geen</u> credits voor.
                    </p>
                    <div className="space-y-3">
                        {includedItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700/40">
                                <div className="text-green-600 dark:text-green-400">{item.icon}</div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-[var(--foreground)] text-sm">{item.title}</div>
                                    <div className="text-xs text-green-600 dark:text-green-400">{item.subtitle}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Column 2: Not Included (Credits/PAYG) */}
                <div className="bg-white dark:bg-[var(--card-background)] p-6 rounded-2xl border border-orange-300 dark:border-[var(--secondary)]/50 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--secondary)]"></div>
                    <h4 className="text-xl font-bold text-[var(--secondary)] mb-4 flex items-center gap-2">
                        <span>💳</span> Niet Inbegrepen (Credits & PAYG)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-[var(--foreground-accent)] mb-6">
                        Kosten voor creatieve generatie (credits) en externe providers (telefonie/SMS).
                    </p>
                    <div className="space-y-3">
                        {paygItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/40 rounded-lg border border-orange-200 dark:border-orange-700/50">
                                <div className="text-[var(--secondary)]">{item.icon}</div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-[var(--foreground)] text-sm">{item.title}</div>
                                    <div className="text-xs text-[var(--secondary)] font-bold">{item.cost}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditPricing;

