import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{tsx,mdx}",
    ],
    safelist: [
        {
            pattern: /bg-(rose|fuchsia|red|green|sky|blue|orange|sky|yellow|violet|purple|pink|gray|indigo|teal)-(50|100|200|300|400|500|600|700|800|900)/,
            variants: [ "hover", "focus", "active" ],
        },
    ],
    theme: {
        extend: {
            backgroundImage: {
                "skills-pattern": "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2000 1400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cmask id=%22b%22 x=%220%22 y=%220%22 width=%222000%22 height=%221400%22%3E%3Cpath fill=%22url(%23a)%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3C%2Fmask%3E%3Cpath fill=%22%23fff%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cg style=%22transform-origin:center center%22 stroke=%22%23dadadac4%22 stroke-width=%22.6%22 fill=%22none%22 mask=%22url(%23b)%22%3E%3Cpath d=%22M0 0h87v87H0zM87 0h87v87H87zM174 0h87v87h-87zM261 0h87v87h-87zM348 0h87v87h-87zM435 0h87v87h-87zM522 0h87v87h-87zM609 0h87v87h-87zM696 0h87v87h-87zM783 0h87v87h-87zM870 0h87v87h-87zM957 0h87v87h-87zM1044 0h87v87h-87zM1131 0h87v87h-87zM1218 0h87v87h-87zM1305 0h87v87h-87zM1392 0h87v87h-87zM1479 0h87v87h-87zM1566 0h87v87h-87zM1653 0h87v87h-87zM1740 0h87v87h-87zM1827 0h87v87h-87zM1914 0h87v87h-87zM0 87h87v87H0zM87 87h87v87H87zM174 87h87v87h-87zM261 87h87v87h-87zM348 87h87v87h-87zM435 87h87v87h-87zM522 87h87v87h-87zM609 87h87v87h-87zM696 87h87v87h-87zM783 87h87v87h-87zM870 87h87v87h-87zM957 87h87v87h-87zM1044 87h87v87h-87zM1131 87h87v87h-87zM1218 87h87v87h-87zM1305 87h87v87h-87zM1392 87h87v87h-87zM1479 87h87v87h-87zM1566 87h87v87h-87zM1653 87h87v87h-87zM1740 87h87v87h-87zM1827 87h87v87h-87zM1914 87h87v87h-87zM0 174h87v87H0zM87 174h87v87H87zM174 174h87v87h-87zM261 174h87v87h-87zM348 174h87v87h-87zM435 174h87v87h-87zM522 174h87v87h-87zM609 174h87v87h-87zM696 174h87v87h-87zM783 174h87v87h-87zM870 174h87v87h-87zM957 174h87v87h-87zM1044 174h87v87h-87zM1131 174h87v87h-87zM1218 174h87v87h-87zM1305 174h87v87h-87zM1392 174h87v87h-87zM1479 174h87v87h-87zM1566 174h87v87h-87zM1653 174h87v87h-87zM1740 174h87v87h-87zM1827 174h87v87h-87zM1914 174h87v87h-87zM0 261h87v87H0zM87 261h87v87H87zM174 261h87v87h-87zM261 261h87v87h-87zM348 261h87v87h-87zM435 261h87v87h-87zM522 261h87v87h-87zM609 261h87v87h-87zM696 261h87v87h-87zM783 261h87v87h-87zM870 261h87v87h-87zM957 261h87v87h-87zM1044 261h87v87h-87zM1131 261h87v87h-87zM1218 261h87v87h-87zM1305 261h87v87h-87zM1392 261h87v87h-87zM1479 261h87v87h-87zM1566 261h87v87h-87zM1653 261h87v87h-87zM1740 261h87v87h-87zM1827 261h87v87h-87zM1914 261h87v87h-87zM0 348h87v87H0zM87 348h87v87H87zM174 348h87v87h-87zM261 348h87v87h-87zM348 348h87v87h-87zM435 348h87v87h-87zM522 348h87v87h-87zM609 348h87v87h-87zM696 348h87v87h-87zM783 348h87v87h-87zM870 348h87v87h-87zM957 348h87v87h-87zM1044 348h87v87h-87zM1131 348h87v87h-87zM1218 348h87v87h-87zM1305 348h87v87h-87zM1392 348h87v87h-87zM1479 348h87v87h-87zM1566 348h87v87h-87zM1653 348h87v87h-87zM1740 348h87v87h-87zM1827 348h87v87h-87zM1914 348h87v87h-87zM0 435h87v87H0zM87 435h87v87H87zM174 435h87v87h-87zM261 435h87v87h-87zM348 435h87v87h-87zM435 435h87v87h-87zM522 435h87v87h-87zM609 435h87v87h-87zM696 435h87v87h-87zM783 435h87v87h-87zM870 435h87v87h-87zM957 435h87v87h-87zM1044 435h87v87h-87zM1131 435h87v87h-87zM1218 435h87v87h-87zM1305 435h87v87h-87zM1392 435h87v87h-87zM1479 435h87v87h-87zM1566 435h87v87h-87zM1653 435h87v87h-87zM1740 435h87v87h-87zM1827 435h87v87h-87zM1914 435h87v87h-87zM0 522h87v87H0zM87 522h87v87H87zM174 522h87v87h-87zM261 522h87v87h-87zM348 522h87v87h-87zM435 522h87v87h-87zM522 522h87v87h-87zM609 522h87v87h-87zM696 522h87v87h-87zM783 522h87v87h-87zM870 522h87v87h-87zM957 522h87v87h-87zM1044 522h87v87h-87zM1131 522h87v87h-87zM1218 522h87v87h-87zM1305 522h87v87h-87zM1392 522h87v87h-87zM1479 522h87v87h-87zM1566 522h87v87h-87zM1653 522h87v87h-87zM1740 522h87v87h-87zM1827 522h87v87h-87zM1914 522h87v87h-87zM0 609h87v87H0zM87 609h87v87H87zM174 609h87v87h-87zM261 609h87v87h-87zM348 609h87v87h-87zM435 609h87v87h-87zM522 609h87v87h-87zM609 609h87v87h-87zM696 609h87v87h-87zM783 609h87v87h-87zM870 609h87v87h-87zM957 609h87v87h-87zM1044 609h87v87h-87zM1131 609h87v87h-87zM1218 609h87v87h-87zM1305 609h87v87h-87zM1392 609h87v87h-87zM1479 609h87v87h-87zM1566 609h87v87h-87zM1653 609h87v87h-87zM1740 609h87v87h-87zM1827 609h87v87h-87zM1914 609h87v87h-87zM0 696h87v87H0zM87 696h87v87H87zM174 696h87v87h-87zM261 696h87v87h-87zM348 696h87v87h-87zM435 696h87v87h-87zM522 696h87v87h-87zM609 696h87v87h-87zM696 696h87v87h-87zM783 696h87v87h-87zM870 696h87v87h-87zM957 696h87v87h-87zM1044 696h87v87h-87zM1131 696h87v87h-87zM1218 696h87v87h-87zM1305 696h87v87h-87zM1392 696h87v87h-87zM1479 696h87v87h-87zM1566 696h87v87h-87zM1653 696h87v87h-87zM1740 696h87v87h-87zM1827 696h87v87h-87zM1914 696h87v87h-87zM0 783h87v87H0zM87 783h87v87H87zM174 783h87v87h-87zM261 783h87v87h-87zM348 783h87v87h-87zM435 783h87v87h-87zM522 783h87v87h-87zM609 783h87v87h-87zM696 783h87v87h-87zM783 783h87v87h-87zM870 783h87v87h-87zM957 783h87v87h-87zM1044 783h87v87h-87zM1131 783h87v87h-87zM1218 783h87v87h-87zM1305 783h87v87h-87zM1392 783h87v87h-87zM1479 783h87v87h-87zM1566 783h87v87h-87zM1653 783h87v87h-87zM1740 783h87v87h-87zM1827 783h87v87h-87zM1914 783h87v87h-87zM0 870h87v87H0zM87 870h87v87H87zM174 870h87v87h-87zM261 870h87v87h-87zM348 870h87v87h-87zM435 870h87v87h-87zM522 870h87v87h-87zM609 870h87v87h-87zM696 870h87v87h-87zM783 870h87v87h-87zM870 870h87v87h-87zM957 870h87v87h-87zM1044 870h87v87h-87zM1131 870h87v87h-87zM1218 870h87v87h-87zM1305 870h87v87h-87zM1392 870h87v87h-87zM1479 870h87v87h-87zM1566 870h87v87h-87zM1653 870h87v87h-87zM1740 870h87v87h-87zM1827 870h87v87h-87zM1914 870h87v87h-87zM0 957h87v87H0zM87 957h87v87H87zM174 957h87v87h-87zM261 957h87v87h-87zM348 957h87v87h-87zM435 957h87v87h-87zM522 957h87v87h-87zM609 957h87v87h-87zM696 957h87v87h-87zM783 957h87v87h-87zM870 957h87v87h-87zM957 957h87v87h-87zM1044 957h87v87h-87zM1131 957h87v87h-87zM1218 957h87v87h-87zM1305 957h87v87h-87zM1392 957h87v87h-87zM1479 957h87v87h-87zM1566 957h87v87h-87zM1653 957h87v87h-87zM1740 957h87v87h-87zM1827 957h87v87h-87zM1914 957h87v87h-87zM0 1044h87v87H0zM87 1044h87v87H87zM174 1044h87v87h-87zM261 1044h87v87h-87zM348 1044h87v87h-87zM435 1044h87v87h-87zM522 1044h87v87h-87zM609 1044h87v87h-87zM696 1044h87v87h-87zM783 1044h87v87h-87zM870 1044h87v87h-87zM957 1044h87v87h-87zM1044 1044h87v87h-87zM1131 1044h87v87h-87zM1218 1044h87v87h-87zM1305 1044h87v87h-87zM1392 1044h87v87h-87zM1479 1044h87v87h-87zM1566 1044h87v87h-87zM1653 1044h87v87h-87zM1740 1044h87v87h-87zM1827 1044h87v87h-87zM1914 1044h87v87h-87zM0 1131h87v87H0zM87 1131h87v87H87zM174 1131h87v87h-87zM261 1131h87v87h-87zM348 1131h87v87h-87zM435 1131h87v87h-87zM522 1131h87v87h-87zM609 1131h87v87h-87zM696 1131h87v87h-87zM783 1131h87v87h-87zM870 1131h87v87h-87zM957 1131h87v87h-87zM1044 1131h87v87h-87zM1131 1131h87v87h-87zM1218 1131h87v87h-87zM1305 1131h87v87h-87zM1392 1131h87v87h-87zM1479 1131h87v87h-87zM1566 1131h87v87h-87zM1653 1131h87v87h-87zM1740 1131h87v87h-87zM1827 1131h87v87h-87zM1914 1131h87v87h-87zM0 1218h87v87H0zM87 1218h87v87H87zM174 1218h87v87h-87zM261 1218h87v87h-87zM348 1218h87v87h-87zM435 1218h87v87h-87zM522 1218h87v87h-87zM609 1218h87v87h-87zM696 1218h87v87h-87zM783 1218h87v87h-87zM870 1218h87v87h-87zM957 1218h87v87h-87zM1044 1218h87v87h-87zM1131 1218h87v87h-87zM1218 1218h87v87h-87zM1305 1218h87v87h-87zM1392 1218h87v87h-87zM1479 1218h87v87h-87zM1566 1218h87v87h-87zM1653 1218h87v87h-87zM1740 1218h87v87h-87zM1827 1218h87v87h-87zM1914 1218h87v87h-87zM0 1305h87v87H0zM87 1305h87v87H87zM174 1305h87v87h-87zM261 1305h87v87h-87zM348 1305h87v87h-87zM435 1305h87v87h-87zM522 1305h87v87h-87zM609 1305h87v87h-87zM696 1305h87v87h-87zM783 1305h87v87h-87zM870 1305h87v87h-87zM957 1305h87v87h-87zM1044 1305h87v87h-87zM1131 1305h87v87h-87zM1218 1305h87v87h-87zM1305 1305h87v87h-87zM1392 1305h87v87h-87zM1479 1305h87v87h-87zM1566 1305h87v87h-87zM1653 1305h87v87h-87zM1740 1305h87v87h-87zM1827 1305h87v87h-87zM1914 1305h87v87h-87zM0 1392h87v87H0zM87 1392h87v87H87zM174 1392h87v87h-87zM261 1392h87v87h-87zM348 1392h87v87h-87zM435 1392h87v87h-87zM522 1392h87v87h-87zM609 1392h87v87h-87zM696 1392h87v87h-87zM783 1392h87v87h-87zM870 1392h87v87h-87zM957 1392h87v87h-87zM1044 1392h87v87h-87zM1131 1392h87v87h-87zM1218 1392h87v87h-87zM1305 1392h87v87h-87zM1392 1392h87v87h-87zM1479 1392h87v87h-87zM1566 1392h87v87h-87zM1653 1392h87v87h-87zM1740 1392h87v87h-87zM1827 1392h87v87h-87zM1914 1392h87v87h-87z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient id=%22a%22%3E%3Cstop offset=%220%22 stop-color=%22%23fff%22%2F%3E%3Cstop offset=%221%22 stop-color=%22%23fff%22 stop-opacity=%220%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
            },
            fontFamily: {
                "apple-color-emoji": "var(--font-apple-color-emoji)",
            },
        },
    },
    plugins: [],
}
export default config
