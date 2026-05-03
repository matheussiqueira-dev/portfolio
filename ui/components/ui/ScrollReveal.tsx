"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const seenElements = new WeakSet<HTMLElement>();
    let revealObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let frameId = 0;

    if (prefersReducedMotion()) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.2,
      }
    );

    const observeElement = (element: HTMLElement) => {
      if (seenElements.has(element) || element.classList.contains("is-visible")) {
        return;
      }

      seenElements.add(element);
      revealObserver?.observe(element);
    };

    const observeTree = (root: ParentNode = document) => {
      if (root instanceof HTMLElement && root.matches("[data-reveal]")) {
        observeElement(root);
      }

      root.querySelectorAll?.<HTMLElement>("[data-reveal]").forEach(observeElement);
    };

    frameId = window.requestAnimationFrame(() => observeTree());

    mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            observeTree(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      mutationObserver?.disconnect();
      revealObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
