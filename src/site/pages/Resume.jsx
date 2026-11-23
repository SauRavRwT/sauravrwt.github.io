import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import resumePdf from "../../assets/docs/SAURAV_RAWAT.pdf";
import { greeting } from "../../portfolio";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  const box = useRef(null);
  const [width, setWidth] = useState(0);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([entry]) => {
      const pad = window.innerWidth < 640 ? 24 : 80;
      setWidth(Math.min(900, entry.contentRect.width - pad));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Résumé"
        parts={[{ text: "The one-page" }, { text: "version.", serif: true }]}
        lead="Everything on this site, condensed. Download it or read it right here."
      >
        <div className="resume-actions">
          <a
            className="btn btn-primary"
            href={resumePdf}
            download="Saurav_Rawat_Resume.pdf"
          >
            Download PDF <span className="arrow">↓</span>
          </a>
          <a
            className="btn"
            href={greeting.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Drive <span className="arrow">↗</span>
          </a>
        </div>
      </PageHero>

      <section className="wrap" style={{ marginTop: 40 }}>
        <Reveal>
          <div className="resume-paper" ref={box}>
            {error ? (
              <div className="resume-state">
                Couldn't load the preview.{" "}
                <a className="accent underline-link" href={resumePdf} download>
                  Download the PDF instead
                </a>
                .
              </div>
            ) : (
              <Document
                file={resumePdf}
                onLoadSuccess={({ numPages }) => setPages(numPages)}
                onLoadError={() => setError(true)}
                loading={
                  <div className="resume-state mono">Loading résumé…</div>
                }
              >
                {width > 0 && <Page pageNumber={page} width={width} />}
              </Document>
            )}
          </div>
          {pages > 1 && (
            <div className="resume-pager">
              <button
                className="btn btn-sm"
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
              >
                ← Prev
              </button>
              <span className="mono muted">
                {page} / {pages}
              </span>
              <button
                className="btn btn-sm"
                disabled={page === pages}
                onClick={() => setPage((p) => p + 1)}
              >
                Next →
              </button>
            </div>
          )}
        </Reveal>
      </section>
    </>
  );
}
