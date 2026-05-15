import { createElement } from "react";

type StaticMotionProps = Record<string, unknown> & {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  variants?: unknown;
  transition?: unknown;
};

const staticElement = (tag: string) => {
  return ({ initial, animate, whileInView, viewport, variants, transition, ...props }: StaticMotionProps) =>
    createElement(tag, props);
};

export const motion = {
  a: staticElement("a"),
  div: staticElement("div"),
  form: staticElement("form"),
  h1: staticElement("h1"),
  h2: staticElement("h2"),
  h3: staticElement("h3"),
  li: staticElement("li"),
  ol: staticElement("ol"),
  p: staticElement("p"),
  span: staticElement("span"),
  ul: staticElement("ul"),
};

export const fadeUp = {};
export const fadeIn = {};
export const staggerContainer = (..._args: unknown[]) => ({});
export const viewportOnce = {};
