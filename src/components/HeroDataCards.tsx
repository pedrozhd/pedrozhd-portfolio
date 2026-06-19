"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CardData {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
    change: string;
    positive: boolean;
    decimals: number;
    sparkline: number[];
    color: string;
    floatDelay: number;
    enterDelay: number;
    offsetX: number;
}

const cards: CardData[] = [
    {
        label: "MQLs Gerados",
        value: 1240,
        change: "↑ 23%",
        positive: true,
        decimals: 0,
        sparkline: [30, 42, 35, 58, 52, 70, 78, 65, 88, 100],
        color: "#2563eb",
        floatDelay: 0,
        enterDelay: 0.4,
        offsetX: 0,
    },
    {
        label: "ROAS Médio",
        value: 4.2,
        suffix: "x",
        change: "↑ 0.8x",
        positive: true,
        decimals: 1,
        sparkline: [2.1, 2.5, 2.8, 2.6, 3.1, 3.4, 3.8, 3.7, 4.0, 4.2],
        color: "#059669",
        floatDelay: 0.7,
        enterDelay: 0.6,
        offsetX: 28,
    },
    {
        label: "Receita vs. Meta",
        value: 18,
        prefix: "+",
        suffix: "%",
        change: "acima do target",
        positive: true,
        decimals: 0,
        sparkline: [5, 7, 9, 11, 8, 13, 14, 15, 17, 18],
        color: "#4f46e5",
        floatDelay: 1.3,
        enterDelay: 0.8,
        offsetX: 12,
    },
];

function AnimatedCounter({
    value,
    prefix = "",
    suffix = "",
    decimals,
}: {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals: number;
}) {
    const count = useMotionValue(0);

    const display = useTransform(count, (v) => {
        if (decimals > 0) {
            return `${prefix}${v.toFixed(decimals)}${suffix}`;
        }
        return `${prefix}${Math.round(v).toLocaleString("pt-BR")}${suffix}`;
    });

    useEffect(() => {
        const controls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
            delay: 1.0,
        });
        return controls.stop;
    }, [count, value]);

    return <motion.span>{display}</motion.span>;
}

function Sparkline({ data, color }: { data: number[]; color: string }) {
    const W = 120;
    const H = 36;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const pad = 4;

    const pts = data.map((v, i) => ({
        x: (i / (data.length - 1)) * W,
        y: H - pad - ((v - min) / range) * (H - pad * 2),
    }));

    const linePath = pts
        .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`)
        .join(" ");

    const areaPath = `${linePath} L ${W},${H} L 0,${H} Z`;
    const gradId = `grad-${color.replace("#", "")}`;
    const lastPt = pts[pts.length - 1];

    return (
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ overflow: "visible" }}>
            <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.18" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Area fill */}
            <motion.path
                d={areaPath}
                fill={`url(#${gradId})`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
            />

            {/* Line */}
            <motion.path
                d={linePath}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.6, ease: "easeOut", delay: 1.0 }}
            />

            {/* End dot */}
            <motion.circle
                cx={lastPt.x}
                cy={lastPt.y}
                r={3.5}
                fill={color}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.4, type: "spring", stiffness: 400, damping: 15 }}
            />
        </svg>
    );
}

export default function HeroDataCards() {
    return (
        <div className="hero-cards-col">
            {cards.map((card) => (
                <motion.div
                    key={card.label}
                    className="hero-kpi-card"
                    style={{ marginLeft: card.offsetX }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: card.enterDelay,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: card.floatDelay,
                        }}
                    >
                        <div className="kpi-header">
                            <span className="kpi-label">{card.label}</span>
                            <span className={`kpi-badge ${card.positive ? "kpi-positive" : "kpi-negative"}`}>
                                {card.change}
                            </span>
                        </div>

                        <div className="kpi-value">
                            <AnimatedCounter
                                value={card.value}
                                prefix={card.prefix}
                                suffix={card.suffix}
                                decimals={card.decimals}
                            />
                        </div>

                        <Sparkline data={card.sparkline} color={card.color} />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
