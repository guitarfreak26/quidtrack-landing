"use client";

import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type LegalSection = {
  id: string;
  number: string;
  title: string;
  body: string;
};

type ParsedLegalMarkdown = {
  intro: string;
  sections: LegalSection[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseLegalMarkdown(markdown: string): ParsedLegalMarkdown {
  const numberedHeading = /^##\s+(\d+)\.\s+(.+)$/gm;
  const matches = [...markdown.matchAll(numberedHeading)];

  if (matches.length === 0) {
    return { intro: markdown, sections: [] };
  }

  const intro = markdown.slice(0, matches[0].index).trim();
  const sections = matches.map((match, index) => {
    const headingStart = match.index ?? 0;
    const bodyStart = headingStart + match[0].length;
    const nextStart = matches[index + 1]?.index ?? markdown.length;
    const number = match[1];
    const title = match[2].trim();

    return {
      id: `section-${number}-${slugify(title)}`,
      number,
      title: `${number}. ${title}`,
      body: markdown.slice(bodyStart, nextStart).trim(),
    };
  });

  return { intro, sections };
}

export default function LegalMarkdownAccordions({ markdown }: { markdown: string }) {
  const { intro, sections } = useMemo(() => parseLegalMarkdown(markdown), [markdown]);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash || !sections.some((section) => section.id === hash)) return;

      setOpenSections((current) => {
        const next = new Set(current);
        next.add(hash);
        return next;
      });
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [sections]);

  function toggleSection(id: string) {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        window.history.replaceState(null, "", `#${id}`);
      }
      return next;
    });
  }

  return (
    <>
      <div className="legal-markdown legal-intro">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{intro}</ReactMarkdown>
      </div>
      <div className="legal-accordion-list">
        {sections.map((section) => {
          const open = openSections.has(section.id);

          return (
            <article
              className={`faq-item legal-accordion-item${open ? " open" : ""}`}
              id={section.id}
              key={section.id}
            >
              <button
                aria-controls={`${section.id}-content`}
                aria-expanded={open}
                className="faq-q legal-accordion-q"
                onClick={() => toggleSection(section.id)}
                type="button"
              >
                <span>{section.title}</span>
                <span className="legal-chevron" aria-hidden="true">
                  ⌄
                </span>
              </button>
              <div className="faq-a legal-accordion-panel" id={`${section.id}-content`}>
                <div className="faq-a-inner legal-markdown legal-accordion-inner">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.body}</ReactMarkdown>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
