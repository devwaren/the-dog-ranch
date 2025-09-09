// global.d.ts
declare module '*.js' {
    export const render: (url: string) => Promise<{
        head?: string;
        html?: string;
    }>;
    const value: any;
    export default value;
}

export type TempleHTMLFunction = {
    (url: string): Promise<{
        head?: string;
        html?: string;
    }>;
};

export type StringUndefined = string | undefined;
